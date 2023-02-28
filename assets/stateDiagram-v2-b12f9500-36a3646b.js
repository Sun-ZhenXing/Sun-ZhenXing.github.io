import{R as H,B as _,$ as J,x as P,r as Y,a as Q,T as U,w as Z}from"./styles-060eafc5-ee3a6c7f.js";import{A as tt}from"./index-7f531408-b0866da3.js";import{M as n,$ as S,X as D,h as et,c as st,K as R}from"./mermaid.esm.min-a63aca2c.js";import{h as rt}from"./index-88b1ee15-0d41800a.js";import"./isPlainObject-0b348591-32ffebaa.js";import"./array-2ff2c7a6-ffeda358.js";import"./constant-2fe7eae5-45b4460e.js";import"./app-2ca4567f.js";import"./framework-2c376ace.js";import"./edges-69864166-8ab88366.js";import"./svgDraw-1c03c25e-8532ef8c.js";const w="rect",k="rectWithTitle",at="start",it="end",ot="divider",dt="roundedWithTitle",nt="note",lt="noteGroup",h="statediagram",ct="state",pt=`${h}-${ct}`,W="transition",bt="note",gt="note-edge",ht=`${W} ${gt}`,ut=`${h}-${bt}`,yt="cluster",$t=`${h}-${yt}`,ft="cluster-alt",mt=`${h}-${ft}`,G="parent",I="note",xt="state",v="----",wt=`${v}${I}`,L=`${v}${G}`,K="fill:none",O="fill: #333",j="c",q="text",X="normal";let T={},p=0;const Tt=function(t){const a=Object.keys(t);for(const e of a)t[e]},St=function(t,a){n.trace("Extracting classes"),a.db.clear();try{return a.parser.parse(t),a.db.extract(a.db.getRootDocV2()),a.db.getClasses()}catch(e){return e}};function At(t){return t==null?"":t.classes?t.classes.join(" "):""}function B(t="",a=0,e="",i=v){const o=e!==null&&e.length>0?`${i}${e}`:"";return`${xt}-${t}${o}-${a}`}const x=(t,a,e,i,o,d)=>{const s=e.id,u=At(i[s]);if(s!=="root"){let g=w;e.start===!0&&(g=at),e.start===!1&&(g=it),e.type!==P&&(g=e.type),T[s]||(T[s]={id:s,shape:g,description:R.sanitizeText(s,S()),classes:`${u} ${pt}`});const r=T[s];e.description&&(Array.isArray(r.description)?(r.shape=k,r.description.push(e.description)):r.description.length>0?(r.shape=k,r.description===s?r.description=[e.description]:r.description=[r.description,e.description]):(r.shape=w,r.description=e.description),r.description=R.sanitizeTextOrArray(r.description,S())),r.description.length===1&&r.shape===k&&(r.shape=w),!r.type&&e.doc&&(n.info("Setting cluster for ",s,E(e)),r.type="group",r.dir=E(e),r.shape=e.type===Y?ot:dt,r.classes=r.classes+" "+$t+" "+(d?mt:""));const y={labelStyle:"",shape:r.shape,labelText:r.description,classes:r.classes,style:"",id:s,dir:r.dir,domId:B(s,p),type:r.type,padding:15};if(e.note){const l={labelStyle:"",shape:nt,labelText:e.note.text,classes:ut,style:"",id:s+wt+"-"+p,domId:B(s,p,I),type:r.type,padding:15},c={labelStyle:"",shape:lt,labelText:e.note.text,classes:r.classes,style:"",id:s+L,domId:B(s,p,G),type:"group",padding:0};p++;const $=s+L;t.setNode($,c),t.setNode(l.id,l),t.setNode(s,y),t.setParent(s,$),t.setParent(l.id,$);let b=s,f=l.id;e.note.position==="left of"&&(b=l.id,f=s),t.setEdge(b,f,{arrowhead:"none",arrowType:"",style:K,labelStyle:"",classes:ht,arrowheadStyle:O,labelpos:j,labelType:q,thickness:X})}else t.setNode(s,y)}a&&a.id!=="root"&&(n.trace("Setting node ",s," to be child of its parent ",a.id),t.setParent(s,a.id)),e.doc&&(n.trace("Adding nodes children "),Dt(t,e,e.doc,i,o,!d))},Dt=(t,a,e,i,o,d)=>{n.trace("items",e),e.forEach(s=>{switch(s.stmt){case U:x(t,a,s,i,o,d);break;case P:x(t,a,s,i,o,d);break;case Q:{x(t,a,s.state1,i,o,d),x(t,a,s.state2,i,o,d);const u={id:"edge"+p,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:K,labelStyle:"",label:R.sanitizeText(s.description,S()),arrowheadStyle:O,labelpos:j,labelType:q,thickness:X,classes:W};t.setEdge(s.state1.id,s.state2.id,u,p),p++}break}})},E=(t,a=Z)=>{let e=a;if(t.doc)for(let i=0;i<t.doc.length;i++){const o=t.doc[i];o.stmt==="dir"&&(e=o.value)}return e},kt=function(t,a,e,i){n.info("Drawing state diagram (v2)",a),T={},i.db.getDirection();const{securityLevel:o,state:d}=S(),s=d.nodeSpacing||50,u=d.rankSpacing||50;n.info(i.db.getRootDocV2()),i.db.extract(i.db.getRootDocV2()),n.info(i.db.getRootDocV2());const g=i.db.getStates(),r=new tt({multigraph:!0,compound:!0}).setGraph({rankdir:E(i.db.getRootDocV2()),nodesep:s,ranksep:u,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});x(r,void 0,i.db.getRootDocV2(),g,i.db,!0);let y;o==="sandbox"&&(y=D("#i"+a));const l=o==="sandbox"?D(y.nodes()[0].contentDocument.body):D("body"),c=l.select(`[id="${a}"]`),$=l.select("#"+a+" g");rt($,r,["barb"],h,a);const b=8;et.insertTitle(c,"statediagramTitleText",d.titleTopMargin,i.db.getDiagramTitle());const f=c.node().getBBox(),M=f.width+b*2,V=f.height+b*2;c.attr("class",h);const C=c.node().getBBox();st(c,V,M,d.useMaxWidth);const N=`${C.x-b} ${C.y-b} ${M} ${V}`;n.debug(`viewBox ${N}`),c.attr("viewBox",N);const F=document.querySelectorAll('[id="'+a+'"] .edgeLabel .label');for(const A of F){const z=A.getBBox(),m=document.createElementNS("http://www.w3.org/2000/svg",w);m.setAttribute("rx",0),m.setAttribute("ry",0),m.setAttribute("width",z.width),m.setAttribute("height",z.height),A.insertBefore(m,A.firstChild)}},Bt={setConf:Tt,getClasses:St,draw:kt},Wt={parser:H,db:_,renderer:Bt,styles:J,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,_.clear()}};export{Wt as diagram};
