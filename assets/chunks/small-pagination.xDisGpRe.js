import{p as $,r as l,q as r,o as d,c as P,y as t,a as n,_ as v,t as E,M as h,v as y,W as m}from"./framework.BfK9qma0.js";const J=$({__name:"auto-hide-pagination",setup(c){const s=l(!1);return(o,g)=>{const _=r("el-switch"),b=r("el-pagination");return d(),P("div",null,[t(_,{modelValue:s.value,"onUpdate:modelValue":g[0]||(g[0]=z=>s.value=z)},null,8,["modelValue"]),n("hr",{class:"my-4"}),t(b,{"hide-on-single-page":s.value,total:5,layout:"prev, pager, next"},null,8,["hide-on-single-page"])])}}}),B={};function N(c,s){const o=r("el-pagination");return d(),E(o,{background:"",layout:"prev, pager, next",total:1e3})}const O=v(B,[["render",N]]),W={};function j(c,s){const o=r("el-pagination");return d(),P(h,null,[n("div",{class:"example-pagination-block"},[n("div",{class:"example-demonstration"},"When you have few pages"),t(o,{layout:"prev, pager, next",total:50})]),n("div",{class:"example-pagination-block"},[n("div",{class:"example-demonstration"},"When you have more than 7 pages"),t(o,{layout:"prev, pager, next",total:1e3})])],64)}const D=v(W,[["render",j],["__scopeId","data-v-78be8653"]]),I=$({__name:"more-elements",setup(c){const s=l(5),o=l(5),g=l(5),_=l(4),b=l(100),z=l(100),S=l(100),i=l("default"),u=l(!1),p=l(!1),f=k=>{console.log(`${k} items per page`)},x=k=>{console.log(`current page: ${k}`)};return(k,e)=>{const V=r("el-radio-button"),w=r("el-radio-group"),U=r("el-switch"),C=r("el-pagination");return d(),P(h,null,[n("div",{class:"flex items-center mb-4"},[t(w,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=a=>i.value=a),class:"mr-4"},{default:y(()=>[t(V,{value:"default"},{default:y(()=>[m("default")]),_:1}),t(V,{value:"large"},{default:y(()=>[m("large")]),_:1}),t(V,{value:"small"},{default:y(()=>[m("small")]),_:1})]),_:1},8,["modelValue"]),n("div",null,[m(" background: "),t(U,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=a=>u.value=a),class:"ml-2"},null,8,["modelValue"])]),n("div",{class:"ml-4"},[m(" disabled: "),t(U,{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=a=>p.value=a),class:"ml-2"},null,8,["modelValue"])])]),n("hr",{class:"my-4"}),n("div",{class:"demo-pagination-block"},[n("div",{class:"demonstration"},"Total item count"),t(C,{"current-page":s.value,"onUpdate:currentPage":e[3]||(e[3]=a=>s.value=a),"page-size":100,size:i.value,disabled:p.value,background:u.value,layout:"total, prev, pager, next",total:1e3,onSizeChange:f,onCurrentChange:x},null,8,["current-page","size","disabled","background"])]),n("div",{class:"demo-pagination-block"},[n("div",{class:"demonstration"},"Change page size"),t(C,{"current-page":o.value,"onUpdate:currentPage":e[4]||(e[4]=a=>o.value=a),"page-size":b.value,"onUpdate:pageSize":e[5]||(e[5]=a=>b.value=a),"page-sizes":[100,200,300,400],size:i.value,disabled:p.value,background:u.value,layout:"sizes, prev, pager, next",total:1e3,onSizeChange:f,onCurrentChange:x},null,8,["current-page","page-size","size","disabled","background"])]),n("div",{class:"demo-pagination-block"},[n("div",{class:"demonstration"},"Jump to"),t(C,{"current-page":g.value,"onUpdate:currentPage":e[6]||(e[6]=a=>g.value=a),"page-size":z.value,"onUpdate:pageSize":e[7]||(e[7]=a=>z.value=a),size:i.value,disabled:p.value,background:u.value,layout:"prev, pager, next, jumper",total:1e3,onSizeChange:f,onCurrentChange:x},null,8,["current-page","page-size","size","disabled","background"])]),n("div",{class:"demo-pagination-block"},[n("div",{class:"demonstration"},"All combined"),t(C,{"current-page":_.value,"onUpdate:currentPage":e[8]||(e[8]=a=>_.value=a),"page-size":S.value,"onUpdate:pageSize":e[9]||(e[9]=a=>S.value=a),"page-sizes":[100,200,300,400],size:i.value,disabled:p.value,background:u.value,layout:"total, sizes, prev, pager, next, jumper",total:400,onSizeChange:f,onCurrentChange:x},null,8,["current-page","page-size","size","disabled","background"])])],64)}}}),G=v(I,[["__scopeId","data-v-f14f0d8a"]]),M={};function T(c,s){const o=r("el-pagination");return d(),E(o,{"page-size":20,"pager-count":11,layout:"prev, pager, next",total:1e3})}const H=v(M,[["render",T]]),q={};function A(c,s){const o=r("el-pagination");return d(),P(h,null,[t(o,{size:"small",layout:"prev, pager, next",total:50}),t(o,{size:"small",background:"",layout:"prev, pager, next",total:50,class:"mt-4"})],64)}const K=v(q,[["render",A]]);export{D as E,J as _,H as a,O as b,K as c,G as d};
