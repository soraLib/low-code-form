var be=Object.defineProperty,ye=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var V=(e,t,n)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,X=(e,t)=>{for(var n in t||(t={}))Se.call(t,n)&&V(e,n,t[n]);if(ee)for(var n of ee(t))ke.call(t,n)&&V(e,n,t[n]);return e},Y=(e,t)=>ye(e,Ce(t));var w=(e,t,n)=>(V(e,typeof t!="symbol"?t+"":t,n),n);import{f as G,a as q,c as R,p as Ne,s as W,b as s,d as k,R as F,e as C,r as S,g as te,o as Ie,G as Pe,h as Ae,i as I,j as A,k as Ee,F as Be,w as ne,S as _e,E as Me,l as je,m as oe,n as De,q as Re,u as Fe,t as Oe,v as $e,x as Le,y as O,z as Ve,A as Xe,T as Ye,B as re,C as se,D as ie,H as Ge,I as qe}from"./vendor.059e3312.js";const We=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const m of i.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}};We();var $;(function(e){e[e.Add=0]="Add",e[e.Delete=1]="Delete",e[e.Move=2]="Move",e[e.Attr=3]="Attr"})($||($={}));class B{constructor(t){w(this,"parent");w(this,"children");w(this,"attrs");this.parent=t.parent,this.attrs=t.attrs,t.children&&(this.children=t.children)}}class ae{constructor(t){w(this,"type");w(this,"time");w(this,"data");this.time=t.time,this.type=t.type,this.data=t.data}}class ze{constructor(t){w(this,"records",[]);w(this,"index",-1);w(this,"max");w(this,"recording");var n,o;this.max=(n=t==null?void 0:t.max)!=null?n:20,this.recording=(o=t==null?void 0:t.recording)!=null?o:!0}getPrevRecord(){if(!(this.index<0))return this.records[this.index]}getNextRecord(){if(!(this.index>=this.records.length-1))return this.records[this.index+1]}}function z(e){const t=j(e[0]);let n=t.position.x,o=t.position.x+t.size.width,r=t.position.y,i=t.position.y+t.size.height;return e.forEach(m=>{const l=j(m);l.position.x<n&&(n=l.position.x),o<l.position.x+l.size.width&&(o=l.position.x+l.size.width),l.position.y<r&&(r=l.position.y),i<l.position.y+l.size.height&&(i=l.position.y+l.size.height)}),{x:n,y:r,width:o-n,height:i-r}}function j(e){return{position:e.getProp("position"),size:e.getProp("size")}}function He(e){const t=o(e),n=Number(t);return n?(n+1).toString():"1";function o(r){var h;const i=r.attrs.id;let m="";if((h=r.children)==null?void 0:h.length)for(const g of r.children){const a=o(g),u=Number(m),v=Number(a);u&&v&&(m=Math.max(u,v).toString()),v&&(m=a)}const l=Number(m),d=Number(i);return l&&d?Math.max(l,d).toString():l?m:i}}function Ke(e,t){return new t({attrs:e.data,parent:void 0,children:[]})}function H(e,t){const n=Array.isArray(e)?e:[e],o=t.getSelectedCells().filter(r=>!n.includes(r.data.id));for(const r of n)t.isSelected(r)||t.select(r);for(const r of o)t.unselect(r)}class Te{constructor(t){w(this,"type");w(this,"canvas");w(this,"history");w(this,"selected",[]);w(this,"graph");this.type="PcForm",this.history=new ze,this.canvas=new B({parent:void 0,children:[],attrs:t.attrs})}setCanvas(t){this.canvas=t,this.selected=[t]}setGraph(t){this.graph=t}addChild(t,n){var r;const o=(r=typeof n=="string"?G(this.canvas.children,i=>i.attrs.id===n):n)!=null?r:this.canvas;return o.children&&o.children.push(t),o}setSelected(t){if(!!this.graph){if(!arguments.length||Array.isArray(t)&&!t.length)return this.selected=[this.canvas],this.canvas;if(!!this.canvas.children){if(typeof t=="string"){const n=G(this.canvas.children,o=>o.attrs.id===t);return n&&(this.selected=[n],H(t,this.graph)),n}if(Array.isArray(t)){const n=[];for(const o of t)if(typeof o=="string"){const r=G(this.canvas.children,i=>i.attrs.id===o);r&&n.push(r)}else n.push(o);return H(n.map(o=>o.attrs.id),this.graph),this.selected=n,n}if(typeof t=="object")return this.selected=[t],H(t.attrs.id,this.graph),t}}}updateElemData(t,n){const o=typeof t=="string"?q(this.canvas,i=>i.attrs.id===t):t;if(!o)return;const r=new ae({type:$.Attr,time:new Date,data:[{id:o.attrs.id,prev:R(Ne(o.attrs,Object.keys(n))),next:R(n)}]});return this.addRecord(r),W(o.attrs,n),o}addRecord(t){console.log("[Sa info]: New record has been added.",t),this.history.index&&this.history.records.length>this.history.index+1&&this.history.records.splice(this.history.index+1),this.history.records.push(t),this.history.index+=1}undo(){const t=this.history.getPrevRecord();if(!t){console.warn("[Sa warn]: None previous record in history.");return}for(const n of t.data){const o=q(this.canvas,r=>r.attrs.id===n.id);o&&(W(o.attrs,n.prev),le(this.graph.getCellById(n.id),n.prev))}this.setSelected(t.data.map(n=>n.id)),this.history.index-=1}redo(){const t=this.history.getNextRecord();if(!t){console.warn("[Sa warn]: None next record in history.");return}for(const n of t.data){const o=q(this.canvas,r=>r.attrs.id===n.id);o&&(W(o.attrs,n.next),le(this.graph.getCellById(n.id),n.next))}this.setSelected(t.data.map(n=>n.id)),this.history.index+=1}}function le(e,t){var o,r,i,m;const n=j(e);e.setProp({position:{x:(o=t.offsetX)!=null?o:n.position.x,y:(r=t.offsetY)!=null?r:n.position.y},size:{width:(i=t.width)!=null?i:n.size.width,height:(m=t.height)!=null?m:n.size.height}})}const Ue=[{title:"undo",icon:s("span",null,[k("undo")]),click:e=>e.undo()},{title:"redo",icon:s("span",null,[k("redo")]),click:e=>e.redo()}],Je=[{title:"Button",icon:s("span",null,[k("Button")])},{title:"Container",icon:s("span",null,[k("container")])}];var b;(function(e){e[e.Canvas=0]="Canvas",e[e.Button=1]="Button",e[e.Container=2]="Container"})(b||(b={}));const Qe=()=>{var r;const e=new B({parent:void 0,children:[],attrs:{type:b.Canvas,id:"1",name:"mock pc form",width:800,height:600,offsetX:0,offsetY:0}}),t=new B({parent:e,attrs:{id:"2",type:b.Button,name:"mock button 1",width:80,height:40,offsetX:200,offsetY:100}}),n=new B({parent:e,attrs:{type:b.Button,id:"3",name:"mock button 2",width:80,height:40,offsetX:150,offsetY:200}}),o=new B({parent:e,attrs:{type:b.Container,id:"4",name:"mock container",width:400,height:200,offsetX:50,offsetY:300}});return(r=e.children)==null||r.push(t,n,o),e};function K(e){const t=Object.assign({id:e.attrs.id,x:e.attrs.offsetX,y:e.attrs.offsetY,width:e.attrs.width,height:e.attrs.height},{data:e.attrs});switch(e.attrs.type){case b.Button:return new F(Y(X({},t),{attrs:{rect:{fill:"#31D0C6",stroke:"#4B4A67",strokeWidth:1},text:{text:b[e.attrs.type],fill:"white"}}}));case b.Container:return new F(Y(X({},t),{attrs:{rect:{fill:"#31D0C6",stroke:"#4B4A67",strokeWidth:1}}}));default:throw new Error(`[Sa error]: unexpected element type ${e.attrs.type}.`)}}function ue(e,t){if(!e)return;let n;if(t)return typeof t=="object"?n=t.toJSON().id:n=t,e.removeNode(n);const o=e.getSelectedCells();if(o.length)for(const r of o)ue(e,r)}function Ze(e){if(!e)return;const t=e.getSelectedCells();e.copy(t,{deep:!0,useLocalStorage:!0})}function ce(e,t,n){if(!n||n.isClipboardEmpty())return;if(t&&t.data.type!==b.Container)return console.error(`[Sa error]: can not paste elements in ${b[t.data.type]}.`);const o=n.paste({useLocalStorage:!0,offset:0}),r=z(o),i=r.x-e.offsetX,m=r.y-e.offsetY;for(const l of o){const d=l.getProp("position");l.setProp("position",{x:d.x-i,y:d.y-m}),l.toFront(),t&&(l.setParent(t),t.addChild(l))}n.cleanSelection(),n.select(o)}function et(e){if(!e)return;const t=e.getSelectedCells();e.cut(t,{deep:!0,useLocalStorage:!0})}function de(e){return Reflect.has(e,"key")}var tt=C({name:"SaPcFormRender",props:{drawer:{required:!0,type:Object}},setup(e){const t=S(null),n=S(null),o=S([]),r=te(),i=te();Ie(()=>{var l;if(t.value){const d=Qe();console.log("create graph",d);const h=new Pe({container:t.value,width:d.attrs.width,height:d.attrs.height,snapline:!0,grid:{visible:!0,type:"doubleMesh",args:[{color:"#eee",thickness:1},{color:"#ddd",thickness:1,factor:4}]},selecting:{enabled:!0,multiple:!0,rubberband:!0,movable:!0,showEdgeSelectionBox:!0},resizing:!0,translating:{restrict(a){var E;const u=a.cell,v=a.graph.selection;if(u.isNode()){const P=u.getParent();if(P){const c=P.getBBox();if((E=v==null?void 0:v.cells)==null?void 0:E.length){const x=z(v.cells),f=j(u);return{x:c.x+f.position.x-x.x,y:c.y+f.position.y-x.y,width:c.width-(x.width-f.size.width),height:c.height-(x.height-f.size.height)}}return c}if(v==null?void 0:v.length){const c=z(v.cells),x=j(u);return{x:x.position.x-c.x,y:x.position.y-c.y,width:d.attrs.width-(c.width-x.size.width),height:d.attrs.height-(c.height-x.size.height)}}}return{x:0,y:0,width:d.attrs.width,height:d.attrs.height}}},clipboard:{enabled:!0,useLocalStorage:!0}});Ae(e.drawer).setGraph(h).setCanvas(d);const g=(l=d.children)==null?void 0:l.map(a=>K(a));g&&h.addNodes(g),h.enableHistory(),h.on("blank:mousedown",()=>{h.cleanSelection(),n.value.hide()}),h.on("blank:contextmenu",({e:a})=>{h.cleanSelection(),i.value=void 0,r.value=a,n.value.show(a.originalEvent)}),h.on("cell:mousedown",({cell:a})=>{a.toFront({deep:!0}),n.value.hide()}),h.on("cell:contextmenu",({cell:a,e:u})=>{h.isSelected(a)||(h.cleanSelection(),h.select(a)),i.value=a,r.value=u,n.value.show(u.originalEvent)}),h.on("selection:changed",({selected:a})=>{o.value=a,e.drawer.setSelected(a.map(u=>u.data.id)),a.length>1?h.disableSnapline():h.enableSnapline()}),h.on("node:added",({cell:a})=>{console.log("added",a);const u=Ke(a,B);e.drawer.addChild(u)}),h.on("node:moved",({cell:a})=>{const{x:u,y:v}=a.position();e.drawer.updateElemData(a.data.id,{offsetX:u,offsetY:v})}),h.history.on("undo",({cmds:a})=>{for(const u of a)u.data.id&&u.event==="cell:change:data"&&de(u.data)&&e.drawer.updateElemData(u.data.id,u.data.prev.data);console.log("on undo",a)}),h.history.on("redo",({cmds:a})=>{for(const u of a)u.data.id&&u.event==="cell:change:data"&&de(u.data)&&e.drawer.updateElemData(u.data.id,u.data.next.data);console.log("on redo",a)})}});const m=I(()=>o.value.length?s(Be,null,[s(A("v-contextmenu-item"),{onClick:()=>Ze(e.drawer.graph)},{default:()=>[k("copy")]}),s(A("v-contextmenu-item"),{onClick:()=>et(e.drawer.graph)},{default:()=>[k("cut")]}),s(A("v-contextmenu-item"),{onClick:()=>ce(r.value,i.value,e.drawer.graph)},{default:()=>[k("paste")]}),s(A("v-contextmenu-item"),{type:"danger",icon:s(Ee,null,null),onClick:()=>ue(e.drawer.graph)},{default:()=>[k("delete")]})]):s(A("v-contextmenu-item"),{onClick:()=>ce(r.value,void 0,e.drawer.graph)},{default:()=>[k("paste")]}));return{workspace:t,contextmenu:n,selectedCells:o,graphContextmenu:m}},render(){return s("div",null,[s("div",{ref:"workspace"},null),s(A("v-contextmenu"),{ref:"contextmenu"},{default:()=>[this.graphContextmenu]})])}}),N;(function(e){e.Input="input",e.Number="number",e.Select="select",e.Dialog="dialog",e.Color="color",e.Cascader="cascader"})(N||(N={}));const _={"widget-id":{label:"id",attr:"id",component:N.Input,disabled:!0},"widget-name":{label:"name",attr:"name",component:N.Input},"widget-width":{label:"width",attr:"width",component:N.Number},"widget-height":{label:"height",attr:"height",component:N.Number},"widget-offsetX":{label:"x",attr:"offsetX",component:N.Number},"widget-offsetY":{label:"y",attr:"offsetY",component:N.Number}},nt={basic:[_["widget-id"],_["widget-name"],_["widget-width"],_["widget-height"],_["widget-offsetX"],_["widget-offsetY"]]};function ot(e,t,n){const o=n.selected[0];if(!o)return;const r=new ae({time:new Date,type:$.Attr,data:[{id:o.attrs.id,prev:{[e]:R(o.attrs[e])},next:{[e]:R(t)}}]});n.updateElemAttr(o,e,t),n.addRecord(r)}const rt=()=>({drawer:new Te({attrs:{type:b.Canvas,id:"1",name:"Pc Form Demo",width:800,height:600,offsetX:0,offsetY:0}}),header:Ue,side:Je,workspace:tt,controller:{plugins:nt,valueChange:ot}}),st={PcForm:()=>rt()};var it=C({name:"SaFormLayoutHeader",props:{options:{required:!0,type:Array},drawer:{required:!0,type:Object}},render(){return s("div",{class:"sa-form-header flex justify-start p-1"},[this.options.map(e=>s("span",{class:"header-tool",onClick:t=>e.click(this.drawer,t),title:e.title,style:{width:e.width?`${e.width}px`:"30px",height:"30px"}},[e.icon]))])}}),at=C({name:"CoFormLayoutSidebar",props:{options:{required:!0,type:Array},drawer:{required:!0,type:Object}},setup(e){const t=S(null),n=I(()=>e.drawer.graph);let o;return ne(()=>n.value,()=>{var r;if(console.log("GRAPH CHANGE"),n.value&&!o){console.log(n.value,t.value),o=new _e({title:"Components",target:n.value,scaled:!1,animation:!0,search(l,d){const h=l.attrs.text.text;return new RegExp(d,"i").test(h)},placeholder:"Search by shape name",notFoundText:"Not Found",collapsable:!0,stencilGraphWidth:208,stencilGraphHeight:180,groups:[{name:"group1",title:"Group(Collapsable)"},{name:"group2",title:"Group",collapsable:!1}],getDragNode(l){var g;const d=He(e.drawer.canvas),h=e.drawer.canvas;switch((g=l.attrs)==null?void 0:g.text.text){case"Button":return K({attrs:{id:d,name:"Button",width:80,height:40,type:b.Button,offsetX:0,offsetY:0},parent:h});case"Container":return K({attrs:{id:d,name:"Container",width:200,height:100,type:b.Container,offsetX:0,offsetY:0},parent:h});default:console.error("[Sa error]: unexpected drag node",l)}return l}});const i=new F({width:80,height:40,attrs:{rect:{fill:"#31D0C6",stroke:"#4B4A67",strokeWidth:1},text:{text:"Button",fill:"white"}}}),m=new F({width:80,height:40,attrs:{rect:{fill:"#31D0C6",stroke:"#4B4A67",strokeWidth:1},text:{text:"Container",fill:"white"}}});(r=t.value)==null||r.appendChild(o.container),o.load([i],"group1"),o.load([m],"group2")}}),{graph:n,refStencil:t,stencil:o}},render(){return s("div",{class:"sa-form-side flex flex-col justify-start p-1 relative w-52"},[s("div",{ref:"refStencil"},null)])}});function he(e,t,n,o){o(e.attr,t,n)}function lt(e,t,n){var i,m;const o=t.selected[0];let r;if(o&&ut(e.attr,o)&&(r=o==null?void 0:o.attrs[e.attr]),r===void 0)return s("span",null,null);switch(e.component){case N.Input:return s(je,{modelValue:r,onInput:l=>he(e,l,t,n.valueChange),disabled:(i=e.disabled)!=null?i:!1},null);case N.Number:return s(Me,{controls:!1,modelValue:r,onInput:l=>he(e,l,t,n.valueChange),disabled:(m=e.disabled)!=null?m:!1},null);default:return console.error(`[Sa error]: unexpected plugin type ${e.component}.`),s("span",null,[e.label])}}function ut(e,t){return Reflect.has(t.attrs,e)}var ct=C({name:"ControllerItem",props:{plugin:{required:!0,type:Object},drawer:{required:!0,type:Object},controller:{required:!0,type:Object}},setup(e){const t=I(()=>lt(e.plugin,e.drawer,e.controller));return()=>s("div",null,[t.value])}});var dt=C({name:"SaFormLayoutController",props:{drawer:{required:!0,type:Object},controller:{required:!0,type:Object}},setup(e){return()=>{var t;return s("div",{class:"controller-container"},[(t=e.controller.plugins.basic)==null?void 0:t.map(n=>s("div",{class:"controller-item"},[s("div",{class:"controller-item-label"},[n.label]),s("div",{class:"controller-item-plugin"},[s(ct,{plugin:n,drawer:e.drawer,controller:e.controller},null)])]))])}}}),ht=C({props:{type:{required:!0,type:String},id:{required:!0,type:String}},setup(e,t){const n=oe(st[e.type]()),o=n.workspace;return()=>s("section",{class:"flex flex-col"},[s("h1",{class:"font-bold text-lg py-4"},[k("Sa Form")]),s("header",null,[s(De,null,{default:()=>[s(it,{options:n.header,drawer:n.drawer,class:"bg-slate-500"},null)]})]),s("main",{class:"mt-1 flex flex-grow"},[s("aside",null,[s(at,{options:n.side,drawer:n.drawer,class:"bg-slate-500 h-full"},null)]),s("main",{class:"flex-grow justify-center bg-slate-500 mx-1 overflow-auto"},[s(o,{drawer:n.drawer},null)]),s("aside",{class:"w-52 bg-slate-500"},[s(dt,{drawer:n.drawer,controller:n.controller},null)])])])}});const mt={class:"w-3/5 mx-auto h-full"},ft=C({setup(e){return(t,n)=>(Oe(),Re("div",mt,[s(Fe(ht),{id:"1",type:"PcForm",class:"h-1/2"})]))}});const me=(e,t)=>{var i;const n=t.arg||t.value;if(!n){console.error("\u53C2\u6570\u6709\u8BEF");return}const o=t.value,r=$e(n)?n.value:(i=t.instance)==null?void 0:i.$refs[n];if(!r){console.error(`\u6CA1\u6709\u627E\u5230 ${n} \u5BF9\u5E94\u7684\u5B9E\u4F8B`);return}if(typeof r.addReference!="function"){console.error(`${n} \u5BF9\u5E94\u7684\u5B9E\u4F8B\u4E0D\u662F VContextmenu`);return}e.$contextmenuKey=n,r.addReference(e,o)},fe=(e,t)=>{var r;const n=e.$contextmenuKey;if(!n)return;const o=(r=t.instance)==null?void 0:r.$refs[n];o==null||o.removeReference(e)},pt=(e,t)=>{fe(e,t),me(e,t)},xt={mounted:me,updated:pt,beforeUnmount:fe},p={contextmenu:"v-contextmenu",contextmenuIcon:"v-contextmenu-icon",contextmenuInner:"v-contextmenu-inner",contextmenuDivider:"v-contextmenu-divider",contextmenuItem:"v-contextmenu-item",contextmenuItemHover:"v-contextmenu-item--hover",contextmenuItemDisabled:"v-contextmenu-item--disabled",contextmenuItemDanger:"v-contextmenu-item--danger",contextmenuGroup:"v-contextmenu-group",contextmenuGroupTitle:"v-contextmenu-group__title",contextmenuGroupMenus:"v-contextmenu-group__menus",contextmenuSubmenu:"v-contextmenu-submenu",contextmenuSubmenuTitle:"v-contextmenu-submenu__title",contextmenuSubmenuMenus:"v-contextmenu-submenu__menus",contextmenuSubmenuMenusTop:"v-contextmenu-submenu__menus--top",contextmenuSubmenuMenusRight:"v-contextmenu-submenu__menus--right",contextmenuSubmenuMenusBottom:"v-contextmenu-submenu__menus--bottom",contextmenuSubmenuMenusLeft:"v-contextmenu-submenu__menus--left",contextmenuSubmenuArrow:"v-contextmenu-submenu__arrow"};function vt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!re(e)}const gt={trigger:["contextmenu"]},pe=C({name:"VContextmenu",props:{modelValue:{type:Boolean,default:!1},autoAjustPlacement:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},teleport:{type:[String,Object],default:()=>"body"}},emits:["show","hide","update:modelValue"],setup(e,{emit:t}){const n=S(null),o=S(e.modelValue||!1),r=c=>{o.value=c,t("update:modelValue",c)},i=S({top:0,left:0}),m=I(()=>({top:`${i.value.top}px`,left:`${i.value.left}px`})),l=S(null),d=(c,x)=>{var U,J;const f=c instanceof Event?x:c,D=(f==null?void 0:f.autoAjustPlacement)||e.autoAjustPlacement,y={top:(f==null?void 0:f.top)||0,left:(f==null?void 0:f.left)||0};c instanceof Event&&(c.preventDefault(),y.top=(U=f==null?void 0:f.top)!=null?U:c.pageY,y.left=(J=f==null?void 0:f.left)!=null?J:c.pageX),r(!0),se(()=>{if(D){const L=n.value;if(!L)return;const Q=L.clientWidth,Z=L.clientHeight;if(Z+y.top>=window.innerHeight+window.scrollY){const M=y.top-Z;M>window.scrollY&&(y.top=M)}if(Q+y.left>=window.innerWidth+window.scrollX){const M=y.left-Q;M>window.scrollX&&(y.left=M)}}i.value=y,t("show")})},h=()=>{l.value=null,r(!1),t("hide")},g=oe(new Map),a=S(),u=I(()=>a.value&&g.get(a.value)),v=(c,x)=>{const f=(()=>(x==null?void 0:x.trigger)?Array.isArray(x.trigger)?x.trigger:[x.trigger]:gt.trigger)(),D=y=>{e.disabled||(a.value=c,d(y,{}))};f.forEach(y=>{c.addEventListener(y,D)}),g.set(c,{triggers:f,handler:D})},E=c=>{const x=g.get(c);!x||(x.triggers.forEach(f=>{c.removeEventListener(f,x.handler)}),g.delete(c))},P=c=>{if(!c.target||!n.value||!a.value)return;n.value.contains(c.target)||u.value&&u.value.triggers.includes("click")&&a.value.contains(c.target)||r(!1)};return ne(o,c=>{c?document.addEventListener("click",P):document.removeEventListener("click",P)}),Le(()=>{document.removeEventListener("click",P)}),O("visible",o),O("autoAjustPlacement",e.autoAjustPlacement),O("show",d),O("hide",h),{visible:o,style:m,currentReferenceOptions:u,currentOptions:l,contextmenuRef:n,addReference:v,removeReference:E,toggle:r,show:d,hide:h}},methods:{renderContent(){var e,t;return Ve(s("div",{class:p.contextmenu,ref:"contextmenuRef",style:this.style},[s("ul",{class:p.contextmenuInner},[(t=(e=this.$slots).default)==null?void 0:t.call(e,{triggerOptions:"currentReferenceOptions",options:"currentOptions"})])]),[[Xe,"visible"]])}},render(){let e;return this.visible?this.teleport?s(Ye,{to:this.teleport},vt(e=this.renderContent())?e:{default:()=>[e]}):this.renderContent():null}});function wt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!re(e)}const xe=C({name:"VContextmenuItem",props:{disabled:{type:Boolean,default:!1},hideOnClick:{type:Boolean,default:!0},icon:{required:!1,type:Object},type:{requred:!1,type:String}},emits:["click","mouseenter","mouseleave"],setup(e,{emit:t}){const n=ie("hide"),o=S(!1);return{classes:I(()=>({[p.contextmenuItem]:!0,[p.contextmenuItemDisabled]:e.disabled,[p.contextmenuItemHover]:o.value,[p.contextmenuItemDanger]:e.type==="danger"})),handleClick:d=>{e.disabled||(t("click",d),e.hideOnClick&&(n==null||n()))},handleMouseenter:d=>{e.disabled||(o.value=!0,t("mouseenter",d))},handleMouseleave:d=>{e.disabled||(o.value=!1,t("mouseleave",d))}}},render(){var t,n;const e=this.icon;return s("li",{class:this.classes,onClick:this.handleClick,onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave},[e?s(A("el-icon"),{class:"mr-1 leading-0"},wt(e)?e:{default:()=>[e]}):s("span",{style:{width:"18px"}},null),(n=(t=this.$slots).default)==null?void 0:n.call(t)])}}),ve=C({name:"VContextmenuDivider",render(){return s("li",{class:p.contextmenuDivider},null)}}),bt=C({name:"VContextmenuIcon",props:{name:{type:String,required:!0}},render(){return s("i",{class:[p.contextmenuIcon,`${p.contextmenuIcon}-${this.name}`]},null)}}),ge=C({name:"VContextmenuSubmenu",props:{title:{type:String,required:!0},disabled:{type:Boolean,default:!1}},emits:["mouseenter","mouseleave"],setup(e,{emit:t}){const n=S(null),o=ie("autoAjustPlacement"),r=S(["top","right"]),i=S(!1),m=g=>{e.disabled||(i.value=!0,t("mouseenter",g),se(()=>{const a=[];if(o){const{target:u}=g,v=u.getBoundingClientRect();if(!n.value)return;const E=n.value.clientWidth,P=n.value.clientHeight;v.right+E>=window.innerWidth?a.push("left"):a.push("right"),v.bottom+P>=window.innerHeight?a.push("bottom"):a.push("top")}r.value=a}))},l=g=>{e.disabled||(i.value=!1,t("mouseleave",g))},d=I(()=>({[p.contextmenuItem]:!0,[p.contextmenuSubmenuTitle]:!0,[p.contextmenuItemHover]:i.value,[p.contextmenuItemDisabled]:e.disabled})),h=I(()=>({[p.contextmenu]:!0,[p.contextmenuSubmenuMenus]:!0,[p.contextmenuSubmenuMenusTop]:r.value.includes("top"),[p.contextmenuSubmenuMenusRight]:r.value.includes("right"),[p.contextmenuSubmenuMenusBottom]:r.value.includes("bottom"),[p.contextmenuSubmenuMenusLeft]:r.value.includes("left")}));return{hover:i,submenuRef:n,titleClasses:d,menusClasses:h,handleMouseenter:m,handleMouseleave:l}},render(){var e,t,n,o;return s("li",{class:p.contextmenuSubmenu,onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave},[s("div",{class:this.titleClasses},[((t=(e=this.$slots).title)==null?void 0:t.call(e))||this.title,s("span",{class:p.contextmenuSubmenuArrow},[s(bt,{name:"right-arrow"},null)])]),this.hover?s("div",{ref:"submenuRef",class:this.menusClasses},[s("ul",{class:p.contextmenuInner},[(o=(n=this.$slots).default)==null?void 0:o.call(n)])]):null])}}),we=C({name:"VContextmenuGroup",props:{title:{type:String,default:void 0},maxWidth:{type:[Number,String],default:void 0}},setup(e){return{style:I(()=>{if(!!e.maxWidth)return{"max-width":typeof e.maxWidth=="number"?`${e.maxWidth}px`:e.maxWidth,"overflow-x":"auto"}})}},methods:{renderTitle(){var t,n;const e=((n=(t=this.$slots).title)==null?void 0:n.call(t))||this.title;return e?s("div",{class:p.contextmenuGroupTitle},[e]):null}},render(){var e,t;return s("li",{class:p.contextmenuGroup},[this.renderTitle(),s("ul",{style:this.style,class:p.contextmenuGroupMenus},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])])}}),yt=e=>{e.directive("contextmenu",xt),e.component(pe.name,pe),e.component(xe.name,xe),e.component(ve.name,ve),e.component(ge.name,ge),e.component(we.name,we)},Ct={install:yt},T=Ge(ft);T.use(Ct);T.use(qe);T.mount("#app");
