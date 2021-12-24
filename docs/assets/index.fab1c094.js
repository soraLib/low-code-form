var F=Object.defineProperty,O=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var v=(t,e,r)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,b=(t,e)=>{for(var r in e||(e={}))z.call(e,r)&&v(t,r,e[r]);if(B)for(var r of B(e))N.call(e,r)&&v(t,r,e[r]);return t},k=(t,e)=>O(t,_(e));var l=(t,e,r)=>(v(t,typeof e!="symbol"?e+"":e,r),r);import{c as i,a as f,R as C,d as w,r as P,o as A,G,b as R,w as X,S as Y,e as j,E as q,f as L,u as W,g as D,h as H}from"./vendor.1612cd68.js";const E=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};E();var d;(function(t){t[t.Canvas=0]="Canvas",t[t.Button=1]="Button",t[t.Container=2]="Container"})(d||(d={}));class m{constructor(e){l(this,"parent");l(this,"children");l(this,"attrs");this.parent=e.parent,this.attrs=e.attrs,e.children&&(this.children=e.children)}}class M{constructor(e){l(this,"records",[]);l(this,"index",0);l(this,"max");l(this,"recording");var r,s;this.max=(r=e==null?void 0:e.max)!=null?r:20,this.recording=(s=e==null?void 0:e.recording)!=null?s:!0}}class ${constructor(e){l(this,"type");l(this,"canvas");l(this,"record");l(this,"selected",[]);l(this,"graph");this.type="PcForm",this.record=new M,this.canvas=new m({type:d.Canvas,parent:void 0,children:[],attrs:e.attrs})}setGraph(e){this.graph=e}}const I=[{title:"undo",icon:i("span",null,[f("undo")]),click:t=>{var e;return console.log("undo",(e=t.graph)==null?void 0:e.undo())}},{title:"redo",icon:i("span",null,[f("redo")]),click:t=>{var e;return console.log("redo",(e=t.graph)==null?void 0:e.redo())}}],V=[{title:"Button",icon:i("span",null,[f("Button")])},{title:"Container",icon:i("span",null,[f("container")])}],K=()=>{var o;const t=new m({parent:void 0,children:[],attrs:{type:d.Canvas,id:"1",name:"mock pc form",width:800,height:600,offsetX:0,offsetY:0}}),e=new m({parent:t,attrs:{id:"2",type:d.Button,name:"mock button 1",width:80,height:40,offsetX:200,offsetY:100}}),r=new m({parent:t,attrs:{type:d.Button,id:"3",name:"mock button 2",width:80,height:40,offsetX:150,offsetY:200}}),s=new m({parent:t,attrs:{type:d.Container,id:"4",name:"mock container",width:400,height:200,offsetX:50,offsetY:300}});return(o=t.children)==null||o.push(e,r,s),t};function U(t){const e=Object.assign({id:t.attrs.id,x:t.attrs.offsetX,y:t.attrs.offsetY,width:t.attrs.width,height:t.attrs.height},{data:t.attrs});switch(t.attrs.type){case d.Button:return new C(k(b({},e),{attrs:{rect:{fill:"#31D0C6",stroke:"#4B4A67",strokeWidth:1},text:{text:d[t.attrs.type],fill:"white"}}}));case d.Container:return new C(k(b({},e),{attrs:{rect:{fill:"#31D0C6",stroke:"#4B4A67",strokeWidth:1}}}));default:throw new Error(`[Sa error]: unexpected element type ${t.attrs.type}.`)}}function J(t){const e=t.cells,r=S(e[0]);let s=r.position.x,o=r.position.x+r.size.width,n=r.position.y,c=r.position.y+r.size.height;return e.forEach(u=>{const a=S(u);a.position.x<s&&(s=a.position.x),o<a.position.x+a.size.width&&(o=a.position.x+a.size.width),a.position.y<n&&(n=a.position.y),c<a.position.y+a.size.height&&(c=a.position.y+a.size.height)}),{x:s,y:n,width:o-s,height:c-n}}function S(t){return{position:t.getProp("position"),size:t.getProp("size")}}var Q=w({name:"SaPcFormRender",props:{drawer:{required:!0,type:Object}},setup(t){const e=P(null);return A(()=>{var r;if(e.value){const s=K(),o=new G({container:e.value,autoResize:!0,history:!0,width:s.attrs.width,height:s.attrs.height,snapline:!0,grid:{visible:!0,type:"doubleMesh",args:[{color:"#eee",thickness:1},{color:"#ddd",thickness:1,factor:4}]},selecting:{enabled:!0,multiple:!0,rubberband:!0,movable:!0,showEdgeSelectionBox:!0},rotating:{enabled:!0,grid:15},resizing:!0,translating:{restrict(c){var a;const u=c.cell;if(u.isNode()){const g=u.getParent();if(g){const p=g.getBBox(),h=c.graph.selection;if((a=h==null?void 0:h.cells)==null?void 0:a.length){const y=J(h),x=S(u);return{x:p.x+x.position.x-y.x,y:p.y+x.position.y-y.y,width:p.width-(y.width-x.size.width),height:p.height-(y.height-x.size.height)}}return p}}return{x:0,y:0,width:s.attrs.width,height:s.attrs.height}}},embedding:{enabled:!0,frontOnly:!1,findParent({node:c,view:u}){const a=c.getBBox();return this.getNodes().filter(g=>{const p=g.getData();if(p&&p.type===d.Container){const h=g.getBBox();return u.cell.toFront({deep:!0}),a.isIntersectWithRect(h)}return!1})}}});t.drawer.setGraph(o);const n=(r=s.children)==null?void 0:r.map(c=>U(c));n&&o.addNodes(n)}}),{workspace:e}},render(){return i("div",{ref:"workspace"},null)}});const Z=()=>({drawer:new $({attrs:{id:"1",name:"Pc Form Demo",width:800,height:600,offsetX:0,offsetY:0}}),header:I,side:V,workspace:Q}),T={PcForm:()=>Z()};var ee=w({name:"SaFormLayoutHeader",props:{options:{required:!0,type:Array},drawer:{required:!0,type:Object}},render(){return i("div",{class:"sa-form-header flex justify-start p-1"},[this.options.map(t=>i("span",{class:"header-tool",onClick:e=>t.click(this.drawer,e),title:t.title,style:{width:t.width?`${t.width}px`:"30px",height:"30px"}},[t.icon]))])}});var te=w({name:"CoFormLayoutSidebar",props:{options:{required:!0,type:Array},drawer:{required:!0,type:Object}},setup(t){const e=P(null),r=R(()=>t.drawer.graph);let s;return X(()=>r.value,()=>{var o;if(console.log("GRAPH CHANGE"),r.value&&!s){console.log(r.value,e.value),s=new Y({title:"Components",target:r.value,search(c,u){return c.shape.indexOf(u)!==-1},placeholder:"Search by shape name",notFoundText:"Not Found",collapsable:!0,stencilGraphWidth:208,stencilGraphHeight:180,groups:[{name:"group1",title:"Group(Collapsable)"},{name:"group2",title:"Group",collapsable:!1}]});const n=new C({width:80,height:40,attrs:{rect:{fill:"#31D0C6",stroke:"#4B4A67",strokeWidth:1},text:{text:"Button",fill:"white"}}});(o=e.value)==null||o.appendChild(s.container),s.load([n],"group1")}}),{graph:r,refStencil:e,stencil:s}},render(){return i("div",{class:"sa-form-side flex flex-col justify-start p-1 relative w-52"},[i("div",{ref:"refStencil"},null)])}}),re=w({props:{type:{required:!0,type:String},id:{required:!0,type:String}},setup(t,e){const r=j(T[t.type]()),s=r.workspace;return()=>i("section",{class:"flex flex-col"},[i("h1",{class:"font-bold text-lg py-4"},[f("Sa Form")]),i("header",null,[i(q,null,{default:()=>[i(ee,{options:r.header,drawer:r.drawer,class:"bg-slate-500"},null)]})]),i("main",{class:"mt-1 flex flex-grow"},[i("aside",null,[i(te,{options:r.side,drawer:r.drawer,class:"bg-slate-500 h-full"},null)]),i("main",{class:"flex-grow justify-center bg-slate-500 mx-1 overflow-auto"},[i(s,{drawer:r.drawer},null)]),i("aside",{class:"w-48 bg-slate-500"},[f("properties controller")])])])}});const oe={class:"w-3/5 mx-auto h-full"},se=w({setup(t){return(e,r)=>(D(),L("div",oe,[i(W(re),{id:"1",type:"PcForm",class:"h-1/2"})]))}});H(se).mount("#app");
