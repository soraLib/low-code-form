import { BasicElement, BasicElementAttributes, ElementType } from '../element';

export interface PcElementAttributes extends BasicElementAttributes {

}

export interface IPcElement extends BasicElement {

}

export class PcElement implements IPcElement {
  type: ElementType;
  parent: PcElement | undefined;
  children?: PcElement[] | undefined;
  attrs: PcElementAttributes;

  constructor(config: IPcElement) {
    this.type = config.type;
    this.parent = config.parent;
    this.attrs = config.attrs;
    if (config.children) this.children = config.children;
  }
}