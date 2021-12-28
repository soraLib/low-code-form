var se=Object.defineProperty,ue=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var le=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var D=(e,t,n)=>t in e?se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,I=(e,t)=>{for(var n in t||(t={}))le.call(t,n)&&D(e,n,t[n]);if(T)for(var n of T(t))ce.call(t,n)&&D(e,n,t[n]);return e},$=(e,t)=>ue(e,ie(t));var g=(e,t,n)=>(D(e,typeof t!="symbol"?t+"":t,n),n);import{c as s,a as b,R as E,d as y,r as w,o as ae,G as de,b as P,e as M,f as me,F as he,w as X,S as fe,g as Y,E as pe,h as xe,u as ve,i as ge,j as we,k as be,p as R,l as ye,v as Ce,T as Se,m as z,n as K,q as U,s as ke,t as Be}from"./vendor.9c04b7df.js";const _e=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerpolicy&&(u.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?u.credentials="include":r.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(r){if(r.ep)return;r.ep=!0;const u=n(r);fetch(r.href,u)}};_e();class F{constructor(t){g(this,"parent");g(this,"children");g(this,"attrs");this.parent=t.parent,this.attrs=t.attrs,t.children&&(this.children=t.children)}}class Pe{constructor(t){g(this,"records",[]);g(this,"index",0);g(this,"max");g(this,"recording");var n,o;this.max=(n=t==null?void 0:t.max)!=null?n:20,this.recording=(o=t==null?void 0:t.recording)!=null?o:!0}}class Me{constructor(t){g(this,"type");g(this,"canvas");g(this,"record");g(this,"selected",[]);g(this,"graph");this.type="PcForm",this.record=new Pe,this.canvas=new F({parent:void 0,children:[],attrs:t.attrs})}setGraph(t){this.graph=t}}const Ee=[{title:"undo",icon:s("span",null,[b("undo")]),click:e=>{var t;return console.log("undo",(t=e.graph)==null?void 0:t.undo())}},{title:"redo",icon:s("span",null,[b("redo")]),click:e=>{var t;return console.log("redo",(t=e.graph)==null?void 0:t.redo())}}],Ae=[{title:"Button",icon:s("span",null,[b("Button")])},{title:"Container",icon:s("span",null,[b("container")])}];var k;(function(e){e[e.Canvas=0]="Canvas",e[e.Button=1]="Button",e[e.Container=2]="Container"})(k||(k={}));const Fe=()=>{var r;const e=new F({parent:void 0,children:[],attrs:{type:k.Canvas,id:"1",name:"mock pc form",width:800,height:600,offsetX:0,offsetY:0}}),t=new F({parent:e,attrs:{id:"2",type:k.Button,name:"mock button 1",width:80,height:40,offsetX:200,offsetY:100}}),n=new F({parent:e,attrs:{type:k.Button,id:"3",name:"mock button 2",width:80,height:40,offsetX:150,offsetY:200}}),o=new F({parent:e,attrs:{type:k.Container,id:"4",name:"mock container",width:400,height:200,offsetX:50,offsetY:300}});return(r=e.children)==null||r.push(t,n,o),e};function je(e){const t=Object.assign({id:e.attrs.id,x:e.attrs.offsetX,y:e.attrs.offsetY,width:e.attrs.width,height:e.attrs.height},{data:e.attrs});switch(e.attrs.type){case k.Button:return new E($(I({},t),{attrs:{rect:{fill:"#31D0C6",stroke:"#4B4A67",strokeWidth:1},text:{text:k[e.attrs.type],fill:"white"}}}));case k.Container:return new E($(I({},t),{attrs:{rect:{fill:"#31D0C6",stroke:"#4B4A67",strokeWidth:1}}}));default:throw new Error(`[Sa error]: unexpected element type ${e.attrs.type}.`)}}function Re(e){const t=e.cells,n=N(t[0]);let o=n.position.x,r=n.position.x+n.size.width,u=n.position.y,d=n.position.y+n.size.height;return t.forEach(c=>{const i=N(c);i.position.x<o&&(o=i.position.x),r<i.position.x+i.size.width&&(r=i.position.x+i.size.width),i.position.y<u&&(u=i.position.y),d<i.position.y+i.size.height&&(d=i.position.y+i.size.height)}),{x:o,y:u,width:r-o,height:d-u}}function N(e){return{position:e.getProp("position"),size:e.getProp("size")}}function L(e,t){if(!e)return;let n;if(t)return typeof t=="object"?n=t.toJSON().id:n=t,e.removeNode(n);const o=e.getSelectedCells();if(o.length)for(const r of o)L(e,r)}function Oe(e){if(!e)return;const t=e.getSelectedCells();e.copy(t,{deep:!0,useLocalStorage:!0})}function J(e){if(!e)return;const t=e.paste({useLocalStorage:!0});e.cleanSelection(),e.select(t)}function De(e){if(!e)return;const t=e.getSelectedCells();e.copy(t,{deep:!0,useLocalStorage:!0});for(const n of t)L(e,n)}var Ie=y({name:"SaPcFormRender",props:{drawer:{required:!0,type:Object}},setup(e){const t=w(null),n=w(null),o=w([]);ae(()=>{var u;if(t.value){const d=Fe();console.log("create graph",d);const c=new de({container:t.value,history:!0,width:d.attrs.width,scroller:{pannable:!0},height:d.attrs.height,snapline:!0,grid:{visible:!0,type:"doubleMesh",args:[{color:"#eee",thickness:1},{color:"#ddd",thickness:1,factor:4}]},selecting:{enabled:!0,multiple:!0,rubberband:!0,movable:!0,showEdgeSelectionBox:!0},resizing:!0,translating:{restrict(h){var p;const f=h.cell;if(f.isNode()){const B=f.getParent();if(B){const C=B.getBBox(),_=h.graph.selection;if((p=_==null?void 0:_.cells)==null?void 0:p.length){const S=Re(_),l=N(f);return{x:C.x+l.position.x-S.x,y:C.y+l.position.y-S.y,width:C.width-(S.width-l.size.width),height:C.height-(S.height-l.size.height)}}return C}}return{x:0,y:0,width:d.attrs.width,height:d.attrs.height}}},clipboard:{enabled:!0,useLocalStorage:!0}});e.drawer.setGraph(c);const i=(u=d.children)==null?void 0:u.map(h=>je(h));i&&c.addNodes(i),c.on("blank:mousedown",()=>{c.cleanSelection(),n.value.hide()}),c.on("blank:contextmenu",({e:h})=>{c.cleanSelection(),n.value.show(h.originalEvent)}),c.on("cell:mousedown",({cell:h})=>{h.toFront(),n.value.hide()}),c.on("cell:contextmenu",({cell:h,e:f})=>{c.cleanSelection(),c.select(h),n.value.show(f.originalEvent)}),c.on("selection:changed",({selected:h})=>{o.value=h})}});const r=P(()=>o.value.length?s(he,null,[s(M("v-contextmenu-item"),{onClick:()=>Oe(e.drawer.graph)},{default:()=>[b("copy")]}),s(M("v-contextmenu-item"),{onClick:()=>De(e.drawer.graph)},{default:()=>[b("cut")]}),s(M("v-contextmenu-item"),{onClick:()=>J(e.drawer.graph)},{default:()=>[b("paste")]}),s(M("v-contextmenu-item"),{type:"danger",icon:s(me,null,null),onClick:()=>L(e.drawer.graph)},{default:()=>[b("delete")]})]):s(M("v-contextmenu-item"),{onClick:()=>J(e.drawer.graph)},{default:()=>[b("paste")]}));return{workspace:t,contextmenu:n,selectedCells:o,graphContextmenu:r}},render(){return s("div",null,[s("div",{ref:"workspace"},null),s(M("v-contextmenu"),{ref:"contextmenu"},{default:()=>[this.graphContextmenu]})])}});const $e=()=>({drawer:new Me({attrs:{type:k.Canvas,id:"1",name:"Pc Form Demo",width:800,height:600,offsetX:0,offsetY:0}}),header:Ee,side:Ae,workspace:Ie}),Ne={PcForm:()=>$e()};var Le=y({name:"SaFormLayoutHeader",props:{options:{required:!0,type:Array},drawer:{required:!0,type:Object}},render(){return s("div",{class:"sa-form-header flex justify-start p-1"},[this.options.map(e=>s("span",{class:"header-tool",onClick:t=>e.click(this.drawer,t),title:e.title,style:{width:e.width?`${e.width}px`:"30px",height:"30px"}},[e.icon]))])}}),We=y({name:"CoFormLayoutSidebar",props:{options:{required:!0,type:Array},drawer:{required:!0,type:Object}},setup(e){const t=w(null),n=P(()=>e.drawer.graph);let o;return X(()=>n.value,()=>{var r;if(console.log("GRAPH CHANGE"),n.value&&!o){console.log(n.value,t.value),o=new fe({title:"Components",target:n.value,scaled:!1,animation:!0,search(c,i){const h=c.attrs.text.text;return new RegExp(i,"i").test(h)},placeholder:"Search by shape name",notFoundText:"Not Found",collapsable:!0,stencilGraphWidth:208,stencilGraphHeight:180,groups:[{name:"group1",title:"Group(Collapsable)"},{name:"group2",title:"Group",collapsable:!1}],getDragNode(c){var i;switch(console.log(c),(i=c.attrs)==null?void 0:i.text.text){case"Button":return new E({width:80,height:40,attrs:{rect:{fill:"#31D0C6",stroke:"#4B4A67",strokeWidth:1},text:{text:"Button",fill:"white"}}});case"Container":return new E({width:200,height:100,attrs:{rect:{fill:"#31D0C6",stroke:"#4B4A67",strokeWidth:1},text:{text:"Container",fill:"white"}}});default:console.error("[Sa error]: unexpected drag node",c)}return c}});const u=new E({width:80,height:40,attrs:{rect:{fill:"#31D0C6",stroke:"#4B4A67",strokeWidth:1},text:{text:"Button",fill:"white"}}}),d=new E({width:80,height:40,attrs:{rect:{fill:"#31D0C6",stroke:"#4B4A67",strokeWidth:1},text:{text:"Container",fill:"white"}}});(r=t.value)==null||r.appendChild(o.container),o.load([u],"group1"),o.load([d],"group2")}}),{graph:n,refStencil:t,stencil:o}},render(){return s("div",{class:"sa-form-side flex flex-col justify-start p-1 relative w-52"},[s("div",{ref:"refStencil"},null)])}}),Ge=y({props:{type:{required:!0,type:String},id:{required:!0,type:String}},setup(e,t){const n=Y(Ne[e.type]()),o=n.workspace;return()=>s("section",{class:"flex flex-col"},[s("h1",{class:"font-bold text-lg py-4"},[b("Sa Form")]),s("header",null,[s(pe,null,{default:()=>[s(Le,{options:n.header,drawer:n.drawer,class:"bg-slate-500"},null)]})]),s("main",{class:"mt-1 flex flex-grow"},[s("aside",null,[s(We,{options:n.side,drawer:n.drawer,class:"bg-slate-500 h-full"},null)]),s("main",{class:"flex-grow justify-center bg-slate-500 mx-1 overflow-auto"},[s(o,{drawer:n.drawer},null)]),s("aside",{class:"w-48 bg-slate-500"},[b("properties controller")])])])}});const Ve={class:"w-3/5 mx-auto h-full"},qe=y({setup(e){return(t,n)=>(ge(),xe("div",Ve,[s(ve(Ge),{id:"1",type:"PcForm",class:"h-1/2"})]))}});const Q=(e,t)=>{var u;const n=t.arg||t.value;if(!n){console.error("\u53C2\u6570\u6709\u8BEF");return}const o=t.value,r=we(n)?n.value:(u=t.instance)==null?void 0:u.$refs[n];if(!r){console.error(`\u6CA1\u6709\u627E\u5230 ${n} \u5BF9\u5E94\u7684\u5B9E\u4F8B`);return}if(typeof r.addReference!="function"){console.error(`${n} \u5BF9\u5E94\u7684\u5B9E\u4F8B\u4E0D\u662F VContextmenu`);return}e.$contextmenuKey=n,r.addReference(e,o)},Z=(e,t)=>{var r;const n=e.$contextmenuKey;if(!n)return;const o=(r=t.instance)==null?void 0:r.$refs[n];o==null||o.removeReference(e)},He=(e,t)=>{Z(e,t),Q(e,t)},Te={mounted:Q,updated:He,beforeUnmount:Z},a={contextmenu:"v-contextmenu",contextmenuIcon:"v-contextmenu-icon",contextmenuInner:"v-contextmenu-inner",contextmenuDivider:"v-contextmenu-divider",contextmenuItem:"v-contextmenu-item",contextmenuItemHover:"v-contextmenu-item--hover",contextmenuItemDisabled:"v-contextmenu-item--disabled",contextmenuItemDanger:"v-contextmenu-item--danger",contextmenuGroup:"v-contextmenu-group",contextmenuGroupTitle:"v-contextmenu-group__title",contextmenuGroupMenus:"v-contextmenu-group__menus",contextmenuSubmenu:"v-contextmenu-submenu",contextmenuSubmenuTitle:"v-contextmenu-submenu__title",contextmenuSubmenuMenus:"v-contextmenu-submenu__menus",contextmenuSubmenuMenusTop:"v-contextmenu-submenu__menus--top",contextmenuSubmenuMenusRight:"v-contextmenu-submenu__menus--right",contextmenuSubmenuMenusBottom:"v-contextmenu-submenu__menus--bottom",contextmenuSubmenuMenusLeft:"v-contextmenu-submenu__menus--left",contextmenuSubmenuArrow:"v-contextmenu-submenu__arrow"};function Xe(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!z(e)}const Ye={trigger:["contextmenu"]},ee=y({name:"VContextmenu",props:{modelValue:{type:Boolean,default:!1},autoAjustPlacement:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},teleport:{type:[String,Object],default:()=>"body"}},emits:["show","hide","update:modelValue"],setup(e,{emit:t}){const n=w(null),o=w(e.modelValue||!1),r=l=>{o.value=l,t("update:modelValue",l)},u=w({top:0,left:0}),d=P(()=>({top:`${u.value.top}px`,left:`${u.value.left}px`})),c=w(null),i=(l,x)=>{var G,V;const m=l instanceof Event?x:l,j=(m==null?void 0:m.autoAjustPlacement)||e.autoAjustPlacement,v={top:(m==null?void 0:m.top)||0,left:(m==null?void 0:m.left)||0};l instanceof Event&&(l.preventDefault(),v.top=(G=m==null?void 0:m.top)!=null?G:l.pageY,v.left=(V=m==null?void 0:m.left)!=null?V:l.pageX),r(!0),K(()=>{if(j){const O=n.value;if(!O)return;const q=O.clientWidth,H=O.clientHeight;if(H+v.top>=window.innerHeight+window.scrollY){const A=v.top-H;A>window.scrollY&&(v.top=A)}if(q+v.left>=window.innerWidth+window.scrollX){const A=v.left-q;A>window.scrollX&&(v.left=A)}}u.value=v,t("show")})},h=()=>{c.value=null,r(!1),t("hide")},f=Y(new Map),p=w(),B=P(()=>p.value&&f.get(p.value)),C=(l,x)=>{const m=(()=>(x==null?void 0:x.trigger)?Array.isArray(x.trigger)?x.trigger:[x.trigger]:Ye.trigger)(),j=v=>{e.disabled||(p.value=l,i(v,{}))};m.forEach(v=>{l.addEventListener(v,j)}),f.set(l,{triggers:m,handler:j})},_=l=>{const x=f.get(l);!x||(x.triggers.forEach(m=>{l.removeEventListener(m,x.handler)}),f.delete(l))},S=l=>{if(!l.target||!n.value||!p.value)return;n.value.contains(l.target)||B.value&&B.value.triggers.includes("click")&&p.value.contains(l.target)||r(!1)};return X(o,l=>{l?document.addEventListener("click",S):document.removeEventListener("click",S)}),be(()=>{document.removeEventListener("click",S)}),R("visible",o),R("autoAjustPlacement",e.autoAjustPlacement),R("show",i),R("hide",h),{visible:o,style:d,currentReferenceOptions:B,currentOptions:c,contextmenuRef:n,addReference:C,removeReference:_,toggle:r,show:i,hide:h}},methods:{renderContent(){var e,t;return ye(s("div",{class:a.contextmenu,ref:"contextmenuRef",style:this.style},[s("ul",{class:a.contextmenuInner},[(t=(e=this.$slots).default)==null?void 0:t.call(e,{triggerOptions:"currentReferenceOptions",options:"currentOptions"})])]),[[Ce,"visible"]])}},render(){let e;return this.visible?this.teleport?s(Se,{to:this.teleport},Xe(e=this.renderContent())?e:{default:()=>[e]}):this.renderContent():null}});function ze(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!z(e)}const te=y({name:"VContextmenuItem",props:{disabled:{type:Boolean,default:!1},hideOnClick:{type:Boolean,default:!0},icon:{required:!1,type:Object},type:{requred:!1,type:String}},emits:["click","mouseenter","mouseleave"],setup(e,{emit:t}){const n=U("hide"),o=w(!1);return{classes:P(()=>({[a.contextmenuItem]:!0,[a.contextmenuItemDisabled]:e.disabled,[a.contextmenuItemHover]:o.value,[a.contextmenuItemDanger]:e.type==="danger"})),handleClick:i=>{e.disabled||(t("click",i),e.hideOnClick&&(n==null||n()))},handleMouseenter:i=>{e.disabled||(o.value=!0,t("mouseenter",i))},handleMouseleave:i=>{e.disabled||(o.value=!1,t("mouseleave",i))}}},render(){var t,n;const e=this.icon;return s("li",{class:this.classes,onClick:this.handleClick,onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave},[e?s(M("el-icon"),{class:"mr-1 leading-0"},ze(e)?e:{default:()=>[e]}):s("span",{style:{width:"18px"}},null),(n=(t=this.$slots).default)==null?void 0:n.call(t)])}}),ne=y({name:"VContextmenuDivider",render(){return s("li",{class:a.contextmenuDivider},null)}}),Ke=y({name:"VContextmenuIcon",props:{name:{type:String,required:!0}},render(){return s("i",{class:[a.contextmenuIcon,`${a.contextmenuIcon}-${this.name}`]},null)}}),oe=y({name:"VContextmenuSubmenu",props:{title:{type:String,required:!0},disabled:{type:Boolean,default:!1}},emits:["mouseenter","mouseleave"],setup(e,{emit:t}){const n=w(null),o=U("autoAjustPlacement"),r=w(["top","right"]),u=w(!1),d=f=>{e.disabled||(u.value=!0,t("mouseenter",f),K(()=>{const p=[];if(o){const{target:B}=f,C=B.getBoundingClientRect();if(!n.value)return;const _=n.value.clientWidth,S=n.value.clientHeight;C.right+_>=window.innerWidth?p.push("left"):p.push("right"),C.bottom+S>=window.innerHeight?p.push("bottom"):p.push("top")}r.value=p}))},c=f=>{e.disabled||(u.value=!1,t("mouseleave",f))},i=P(()=>({[a.contextmenuItem]:!0,[a.contextmenuSubmenuTitle]:!0,[a.contextmenuItemHover]:u.value,[a.contextmenuItemDisabled]:e.disabled})),h=P(()=>({[a.contextmenu]:!0,[a.contextmenuSubmenuMenus]:!0,[a.contextmenuSubmenuMenusTop]:r.value.includes("top"),[a.contextmenuSubmenuMenusRight]:r.value.includes("right"),[a.contextmenuSubmenuMenusBottom]:r.value.includes("bottom"),[a.contextmenuSubmenuMenusLeft]:r.value.includes("left")}));return{hover:u,submenuRef:n,titleClasses:i,menusClasses:h,handleMouseenter:d,handleMouseleave:c}},render(){var e,t,n,o;return s("li",{class:a.contextmenuSubmenu,onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave},[s("div",{class:this.titleClasses},[((t=(e=this.$slots).title)==null?void 0:t.call(e))||this.title,s("span",{class:a.contextmenuSubmenuArrow},[s(Ke,{name:"right-arrow"},null)])]),this.hover?s("div",{ref:"submenuRef",class:this.menusClasses},[s("ul",{class:a.contextmenuInner},[(o=(n=this.$slots).default)==null?void 0:o.call(n)])]):null])}}),re=y({name:"VContextmenuGroup",props:{title:{type:String,default:void 0},maxWidth:{type:[Number,String],default:void 0}},setup(e){return{style:P(()=>{if(!!e.maxWidth)return{"max-width":typeof e.maxWidth=="number"?`${e.maxWidth}px`:e.maxWidth,"overflow-x":"auto"}})}},methods:{renderTitle(){var t,n;const e=((n=(t=this.$slots).title)==null?void 0:n.call(t))||this.title;return e?s("div",{class:a.contextmenuGroupTitle},[e]):null}},render(){var e,t;return s("li",{class:a.contextmenuGroup},[this.renderTitle(),s("ul",{style:this.style,class:a.contextmenuGroupMenus},[(t=(e=this.$slots).default)==null?void 0:t.call(e)])])}}),Ue=e=>{e.directive("contextmenu",Te),e.component(ee.name,ee),e.component(te.name,te),e.component(ne.name,ne),e.component(oe.name,oe),e.component(re.name,re)},Je={install:Ue},W=ke(qe);W.use(Je);W.use(Be);W.mount("#app");