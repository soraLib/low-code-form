import { findNode, findTreeNode, setObjectValues } from 'sugar-sajs'
import { cloneDeep, pick } from 'lodash-es'
import {
  BasicRecordType,
  isCDRecordDataList,
  isURecordDataList,
} from '../record'
import { getNextId } from '../utils/element'
import { PcElement } from './element'
import { PcRecord, PcRecordStore } from './record'

import { PcClipBoard } from './clipboard'
import { Events } from './events'
import type {
  BasicGraph,
  GraphType,
  Grid,
  Layout,
  MousePosition,
  Snapline,
} from '../graph'
import type { BasicRecordStore, CDRecord } from '../record'

export type IdUpdateData = { id: string; data: Partial<PcElement['attrs']> }
export type ElUpdateData = {
  element: PcElement
  data: Partial<PcElement['attrs']>
}

function isIdUpdateData(
  data: IdUpdateData | ElUpdateData
): data is IdUpdateData {
  return Reflect.has(data, 'id')
}

export interface SelectionBox {
  x: number
  y: number
  width: number
  height: number
}

export type Stick = 'tl' | 'tm' | 'tr' | 'mr' | 'br' | 'bm' | 'bl' | 'ml'

/** pc graph */
export class PcGraph extends Events implements BasicGraph {
  type: GraphType
  layout: Layout = {
    component: true,
    layer: true,
    property: true,
  }
  canvas: PcElement
  history: BasicRecordStore
  clipboard: PcClipBoard
  selected: PcElement[] = []

  nextId: string
  isDragging = false
  mousePosition = {
    startX: 0,
    startY: 0,
    x: 0,
    y: 0,
  }
  isResizing = false
  resizeStick: Stick | '' = ''
  isSelecting = false
  selectionBox = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  }
  grid: Grid = {
    type: 'double-mesh',
    size: 15,
    enabled: true,
    visible: true,
  }
  snapline: Snapline = {
    radius: 15,
    enabled: true,
  }

  constructor(config: Partial<PcElement> & { attrs: Record<string, any> }) {
    super()

    this.type = 'PcForm'
    this.history = new PcRecordStore()
    this.clipboard = new PcClipBoard()
    this.nextId = '1'
    this.canvas = new PcElement({
      parent: undefined,
      children: [],
      attrs: config.attrs,
    })
    this.addRecord(
      new PcRecord({
        type: BasicRecordType.Init,
        time: new Date(),
        data: [],
      })
    )
  }

  setLayout(layout: Partial<Layout>) {
    setObjectValues(this.layout, layout)
  }
  setGrid(grid: Partial<Grid>) {
    setObjectValues(this.grid, grid)
  }
  setSnap(snap: Partial<Snapline>) {
    setObjectValues(this.snapline, snap)
  }

  setCanvas(canvas: PcElement) {
    this.canvas = canvas
    this.selected = [canvas]

    this.nextId = getNextId(canvas)
  }

  setDragging(isDragging: boolean) {
    this.isDragging = isDragging
  }

  setMouse(pos: Partial<MousePosition> = { x: 0, y: 0, startX: 0, startY: 0 }) {
    setObjectValues(this.mousePosition, pos)
  }

  setResizing(isResizing: boolean) {
    this.isResizing = isResizing
  }

  setResizeStick(stick: Stick | '' = '') {
    this.resizeStick = stick
  }

  setSelecting(isSelecting: boolean) {
    this.isSelecting = isSelecting
  }

  setSelectionBox(
    box: Partial<SelectionBox> = { x: 0, y: 0, width: 0, height: 0 }
  ) {
    setObjectValues(this.selectionBox, box)
  }

  getNextId() {
    const nextId = this.nextId
    this.nextId = String(Number(nextId) + 1)

    return nextId
  }

  /** add child and return its parent */
  addChild(child: PcElement, parent?: PcElement): PcElement
  addChild(child: PcElement, parent?: string): PcElement
  addChild(child: PcElement, arg?: string | PcElement): PcElement {
    const parent =
      (typeof arg === 'string'
        ? findTreeNode(this.canvas.children!, (node) => node.attrs.id === arg)
        : arg) ?? this.canvas

    addGraphNode(this, child)

    // TODO:
    const validIntegerRegex = /^-?\d+$/
    if (child.attrs.id && validIntegerRegex.test(child.attrs.id)) {
      if (+this.nextId < +child.attrs.id) {
        this.nextId = `${+child.attrs.id + 1}`
      }
    }

    // skip add record when it's undo or redo
    const record = new PcRecord({
      type: BasicRecordType.Add,
      time: new Date(),
      data: [
        {
          name: child.attrs.name,
          next: {
            ...cloneDeep(child),
          },
        },
      ],
    })

    this.addRecord(record)
    this.setSelected(child)

    return parent
  }

  /** add children and return their parent */
  addChildren(children: PcElement[], parent?: PcElement): PcElement
  addChildren(children: PcElement[], parent?: string): PcElement
  addChildren(children: PcElement[], arg?: string | PcElement): PcElement {
    const parent =
      (typeof arg === 'string'
        ? findTreeNode(this.canvas.children!, (node) => node.attrs.id === arg)
        : arg) ?? this.canvas

    for (const child of children) {
      addGraphNode(this, child)
    }

    // skip add record when it's undo or redo
    const record = new PcRecord({
      type: BasicRecordType.Add,
      time: new Date(),
      data: children.map((child) => ({
        name: child.attrs.name,
        next: {
          ...cloneDeep(child),
        },
      })),
    })

    this.addRecord(record)
    this.setSelected(children)

    return parent
  }

  /** remove child and return its parent */
  removeChild(id: string): PcElement
  removeChild(child: PcElement): PcElement
  removeChild(arg: string | PcElement): PcElement | undefined {
    const child = removeGraphNode(
      this,
      typeof arg === 'string' ? arg : arg.attrs.id
    )
    if (!child) return

    // skip add record when it's undo or redo
    const record = new PcRecord({
      type: BasicRecordType.Delete,
      time: new Date(),
      data: [
        {
          name: child.attrs.name,
          prev: cloneDeep(extractGraphNodePureAttr(child)),
        },
      ],
    })
    this.addRecord(record)
    this.setSelected()

    return child.parent
  }

  scrollIntoView(
    element: PcElement | undefined,
    options: ScrollIntoViewOptions = {
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    }
  ) {
    if (!element || element === this.canvas) return
    element.el?.scrollIntoView(options)
  }

  setSelected(): PcElement | undefined
  setSelected(id: string): PcElement | undefined
  setSelected(ids: string[]): PcElement[]
  setSelected(element: PcElement): PcElement
  setSelected(elements: PcElement[]): PcElement[]
  setSelected(arg?: string | string[] | PcElement | PcElement[]) {
    if (!arguments.length || (Array.isArray(arg) && !arg.length)) {
      this.selected = [this.canvas]

      return this.canvas
    }

    if (!this.canvas.children) return

    if (Array.isArray(arg)) {
      const selected = arg.reduce<PcElement[]>((acc, cur) => {
        if (typeof cur === 'string') {
          const node = findNode(this.canvas, (node) => node.attrs.id === cur)
          if (node) return [...acc, node]
          return acc
        } else {
          return [...acc, cur]
        }
      }, [])
      if (!selected.length) return (this.selected = [this.canvas])

      this.selected = selected

      return selected
    }

    if (typeof arg === 'string') {
      const node = findNode(this.canvas, (node) => node.attrs.id === arg)

      if (node) {
        this.selected = [node]
      }

      return node
    }

    if (typeof arg === 'object') {
      this.selected = [arg]

      return arg
    }
  }

  updateElemData(
    id: string,
    data: Partial<PcElement['attrs']>,
    needRecord?: boolean
  ): PcElement | undefined
  updateElemData(
    element: PcElement,
    data: Partial<PcElement['attrs']>,
    needRecord?: boolean
  ): PcElement | undefined
  updateElemData(
    arg: string | PcElement,
    data: Partial<PcElement['attrs']>,
    needRecord = true
  ) {
    if (!arg) return

    const element =
      typeof arg === 'string'
        ? findNode(this.canvas, (node) => node.attrs.id === arg)
        : arg

    if (!element) return undefined

    if (needRecord) {
      const record = new PcRecord({
        type: BasicRecordType.Attr,
        time: new Date(),
        data: [
          {
            id: element.attrs.id,
            name: element.attrs.name,
            prev: cloneDeep(pick(element.attrs, Object.keys(data))),
            next: cloneDeep(data),
          },
        ],
      })

      this.addRecord(record)
    }

    setObjectValues(element.attrs, data)

    return element
  }

  updateElemsData(
    data: IdUpdateData[],
    needRecord?: boolean
  ): PcElement[] | undefined
  updateElemsData(
    data: ElUpdateData[],
    needRecord?: boolean
  ): PcElement[] | undefined
  updateElemsData(arg: IdUpdateData[] | ElUpdateData[], needRecord = true) {
    const batch = arg.map((data) => ({
      el: isIdUpdateData(data)
        ? findNode(this.canvas, (node) => node.attrs.id === data.id)!
        : data.element,
      data: data.data,
    }))

    if (needRecord) {
      const record = new PcRecord({
        type: BasicRecordType.Attr,
        time: new Date(),
        data: batch.map((u) => ({
          id: u.el.attrs.id,
          name: u.el.attrs.name,
          prev: cloneDeep(pick(u.el.attrs, Object.keys(u.data))),
          next: cloneDeep(u.data),
        })),
      })

      this.addRecord(record)
    }

    for (const update of batch) {
      this.updateElemData(update.el, update.data, false)
    }

    return batch.map((u) => u.el)
  }

  /** add history record */
  addRecord(record: PcRecord) {
    console.log('[Sa info]: New record has been added.', record)

    if (
      this.history.index &&
      this.history.records.length > this.history.index + 1
    ) {
      this.history.records.splice(this.history.index + 1)
    }

    this.history.records.push(record)
    this.history.index += 1
  }
  undo() {
    const prevRecord = this.history.getPrevRecord()

    if (!prevRecord || prevRecord.type === BasicRecordType.Init) {
      console.warn('[Sa warn]: None previous record in history.')

      return
    }

    if (isURecordDataList(prevRecord.data)) {
      for (const data of prevRecord.data) {
        const element = findNode(
          this.canvas,
          (node) => node.attrs.id === data.id
        )

        if (element) {
          setObjectValues(element.attrs, data.prev)
        }
      }

      this.setSelected(prevRecord.data.map((data) => data.id))
    } else {
      for (const data of prevRecord.data) {
        if (prevRecord.type === BasicRecordType.Add) {
          // DELETE
          removeGraphNode(this, data.next?.attrs?.id)
        } else if (prevRecord.type === BasicRecordType.Delete) {
          // ADD
          addGraphNode(this, data.prev)
        }
      }

      if (prevRecord.type === BasicRecordType.Add) {
        this.setSelected(prevRecord.data.map((data) => data.next!.attrs.id))
      } else {
        this.setSelected(prevRecord.data.map((data) => data.prev!.attrs.id))
      }
    }

    this.history.index -= 1
  }

  redo() {
    const nextRecord = this.history.getNextRecord()

    if (!nextRecord) {
      console.warn('[Sa warn]: None next record in history.')

      return
    }

    console.log('redo', nextRecord)

    if (isURecordDataList(nextRecord.data)) {
      for (const data of nextRecord.data) {
        const element = findNode(
          this.canvas,
          (node) => node.attrs.id === data.id
        )

        if (element) {
          setObjectValues(element.attrs, data.next)
        }
      }

      this.setSelected(nextRecord.data.map((data) => data.id))
    } else if (isCDRecordDataList(nextRecord.data)) {
      for (const data of nextRecord.data) {
        if (nextRecord.type === BasicRecordType.Add) {
          // ADD
          addGraphNode(this, data.next)
        } else if (nextRecord.type === BasicRecordType.Delete) {
          console.log('is cd delete', data)
          // DELETE
          removeGraphNode(this, data.prev?.attrs?.id)
        }
      }

      if (nextRecord.type === BasicRecordType.Add) {
        this.setSelected(nextRecord.data.map((data) => data.next!.attrs.id))
      } else {
        this.setSelected(nextRecord.data.map((data) => data.prev!.attrs.id))
      }
    }

    this.history.index += 1
  }

  historyTo(to: number): void
  historyTo(to: PcRecord): void
  historyTo(to: number | PcRecord) {
    if (typeof to !== 'number') to = this.history.records.indexOf(to)

    const index = this.history.index
    if (to === index || to > this.history.records.length || to < 0) return

    const distance = Math.abs(to - index)
    const action = to < index ? this.undo : this.redo
    for (let i = 0; i < distance; i++) {
      action.call(this)
    }
  }
}

// TODO: extract in deep
const extractGraphNodePureAttr = (element: PcElement) => {
  return pick(element, 'parent', 'children', 'attrs')
}

/** add canvas node */
const addGraphNode = (graph: PcGraph, element?: CDRecord) => {
  if (!graph.canvas.children || !element) return

  const pid = element.parent?.attrs.id
  if (!pid) return

  const parent = findNode(graph.canvas, (node) => node.attrs.id === pid)

  if (parent) {
    const pcElement = new PcElement(element)
    parent.children?.push(new PcElement(element))
    pcElement.parent = parent
  }
}
/** remove canvas node */
const removeGraphNode = (
  graph: PcGraph,
  id?: string
): PcElement | undefined => {
  if (!graph.canvas.children || !id) return

  const element = findNode(graph.canvas, (node) => node.attrs.id === id)
  if (!element) return

  const pid = element.parent?.attrs.id
  if (!pid) return

  const parent = findNode(graph.canvas, (node) => node.attrs.id === pid)
  if (parent?.children) {
    parent.children.splice(parent.children.indexOf(element), 1)

    return element
  }
}
