(function(t,d){typeof exports=="object"&&typeof module<"u"?module.exports=d(require("vue"),require("mitt")):typeof define=="function"&&define.amd?define(["vue","mitt"],d):(t=typeof globalThis<"u"?globalThis:t||self,t["be-vue3-notification"]=d(t.Vue,t.mitt))})(this,function(t,d){"use strict";const k=(e=>e&&typeof e=="object"&&"default"in e?e:{default:e})(d).default(),h={class:"box-ico"},B={key:0},y=[t.createElementVNode("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"})],-1)],E={key:1},b=[t.createElementVNode("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})],-1)],w={key:2},x=[t.createElementVNode("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)],N={key:3},g=[t.createElementVNode("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"})],-1)],T={key:4},V=[t.createElementVNode("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"})],-1)],O={__name:"BeNofiticationIcon",props:{type:String,ico:String},setup(e){const i=e;return(o,s)=>(t.openBlock(),t.createElementBlock("div",h,[t.unref(i).type==="danger"?(t.openBlock(),t.createElementBlock("span",B,y)):t.unref(i).type==="warning"?(t.openBlock(),t.createElementBlock("span",E,b)):t.unref(i).type==="success"?(t.openBlock(),t.createElementBlock("span",w,x)):t.unref(i).type==="love"?(t.openBlock(),t.createElementBlock("span",N,g)):(t.openBlock(),t.createElementBlock("span",T,V))]))}},C={class:"BenotifyInput"},$=t.createElementVNode("label",null,"Reply",-1),I={class:"benotify-input-box"},F={class:"be-notify-button--Send"},M=[t.createElementVNode("span",{class:"ico"},[t.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[t.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"})])],-1)],R={key:1,class:"spinner-button spinner-loading"},L={__name:"BeNotificationInput",emits:["emitCallbackText","OnInputFocus"],setup(e,{emit:i}){const o=t.ref(""),s=t.ref(!1);function a(){o.value!==""&&(i("emitCallbackText",o),s.value=!0)}return(c,l)=>(t.openBlock(),t.createElementBlock("div",C,[$,t.createElementVNode("div",I,[t.createElementVNode("div",null,[t.withDirectives(t.createElementVNode("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=m=>o.value=m),onFocus:l[1]||(l[1]=m=>i("OnInputFocus",{focus:"in",text:o.value})),onBlur:l[2]||(l[2]=m=>i("OnInputFocus",{focus:"out",text:o.value}))},null,544),[[t.vModelText,o.value]])]),t.createElementVNode("div",F,[s.value?(t.openBlock(),t.createElementBlock("span",R)):(t.openBlock(),t.createElementBlock("button",{key:0,type:"button",onClick:a},M))])])]))}},S={key:1,class:"thumbnail"},j=["src"],z={class:"text-box"},A={key:0},D={class:"button-box"},H={__name:"BeNotificationItem",props:{notification:Object},emits:["remove"],setup(e,{emit:i}){const o=e;function s(a){a.focus==="in"?(o.notification.InputFocusOn=!0,o.notification.selfRemove("clear")):a.text!==""?o.notification.InputFocusOn=!1:(o.notification.InputFocusOn=!1,o.notification.selfRemove("start",2e3))}return o.notification.selfRemove(),(a,c)=>(t.openBlock(),t.createElementBlock(t.Fragment,null,[e.notification.thumb?(t.openBlock(),t.createElementBlock("div",S,[t.createElementVNode("img",{src:e.notification.thumb,alt:""},null,8,j)])):(t.openBlock(),t.createBlock(O,{key:0,type:e.notification.type},null,8,["type"])),t.createElementVNode("div",z,[t.createElementVNode("h2",null,t.toDisplayString(e.notification.title),1),t.createElementVNode("p",null,[e.notification.label?(t.openBlock(),t.createElementBlock("strong",A,t.toDisplayString(e.notification.label)+":",1)):t.createCommentVNode("",!0),t.createTextVNode(" "+t.toDisplayString(e.notification.message),1)]),e.notification.reply?(t.openBlock(),t.createBlock(L,{key:0,onOnInputFocus:s,onEmitCallbackText:c[0]||(c[0]=l=>{e.notification.emitCallbackText(l,e.notification)})})):t.createCommentVNode("",!0)]),t.createElementVNode("div",D,[t.createElementVNode("button",{type:"button",onClick:c[1]||(c[1]=l=>i("remove",e.notification.id))},"x")])],64))}},G=["id"],P={__name:"BeTransitionGroup",props:{position:String,notifications:Array},emits:["remove"],setup(e,{emit:i}){function o(s){i("remove",s)}return(s,a)=>(t.openBlock(),t.createBlock(t.TransitionGroup,{tag:"ul",name:"benotify",class:t.normalizeClass(["Vue-Benotify_conteiner",["Position--"+e.position]])},{default:t.withCtx(()=>[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.notifications,(c,l)=>(t.openBlock(),t.createElementBlock("li",{class:t.normalizeClass(["benotify",["benotify--"+c.type,"animation--"+c.animation,c.reply?"input-type":"",c.InputFocusOn?"InputFocusOn":""]]),style:{bottom:"0"},id:"be-benotify-"+c.id,key:c.id},[t.createVNode(H,{onRemove:o,notification:c},null,8,["notification"])],10,G))),128))]),_:1},8,["class"]))}},p={TOP_LEFT:"top-left",TOP_CENTER:"top-center",TOP_RIGHT:"top-right",BOTTOM_LEFT:"bottom-left",BOTTOM_CENTER:"bottom-center",BOTTOM_RIGHT:"bottom-right"},_={BOUNCE:"bounce",SLIDE:"slide",FADE:"fade",undefined:"bounce"},U={__name:"BeNotification",setup(e){let i=0;const o=t.ref([]),s=t.inject("benotifySetup"),a={type:"info",animation:_.BOUNCE,position:p.BOTTOM_RIGHT,duration:3e3};t.onMounted(()=>{s.position&&(a.position=s.position),s.animation&&(a.animation=s.animation),s.duration&&(a.duration=s.duration),k.on("notify",l)});function c(){return i++}function l(r){const n=new Object({...a,...r});n.id=c(),n.animation=_[r.animation]||n.animation,n.position=p[r.position]||n.position,n.reply&&(n.duration=r.duration||9e3,n.emitCallbackText=J),console.log(n.duration),n.selfRemove=m,o.value.push(n)}function m(r,n){const f=n||this.duration;r==="clear"?clearTimeout(this.timeout):this.timeout=setTimeout(()=>u(this.id),f)}function u(r){o.value.splice(o.value.findIndex(n=>n.id===r),1)}function J(r,n){n.callback(r),setTimeout(()=>u(n.id),500)}return(r,n)=>(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(p),f=>(t.openBlock(),t.createBlock(P,{position:f,notifications:o.value.filter(K=>K.position===f),onRemove:u},null,8,["position","notifications"]))),256))}},q=e=>{k.emit("notify",e)},ot="",nt="",it="",st="",ct="";return{install:(e,i)=>{const o=i||{};e.provide("benotifySetup",o),e.component("be-notifications",U),e.provide("notify",q)}}});