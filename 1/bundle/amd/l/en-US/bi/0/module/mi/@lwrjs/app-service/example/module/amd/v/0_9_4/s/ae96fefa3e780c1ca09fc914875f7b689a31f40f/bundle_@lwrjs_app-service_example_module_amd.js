LWR.define("lwr/metrics/v/0_9_4",["exports"],function(e){"use strict";const O="lwr.bootstrap.",N=`${O}end`,l=`${O}error`,r=`${l}.count`,E=`${O}duration`,R="lwr.loader.",c=`${R}module.define`,s=`${c}.count`,n=`${R}module.fetch`,t=`${n}.count`,A=`${n}.duration`,u=`${R}module.error`,a=`${u}.count`,_=`${R}mappings.fetch`,P=`${_}.count`,T=`${_}.duration`,o=`${R}mappings.error`,d=`${o}.count`,i="lwr.router.",U=`${i}navigate`,D=`${U}.count`,f=`${U}.duration`,C=`${i}view`,m=`${C}.duration`,I=`${i}error`,M=`${I}.count`;e.BOOTSTRAP_DURATION=E,e.BOOTSTRAP_END=N,e.BOOTSTRAP_ERROR=l,e.BOOTSTRAP_ERROR_COUNT=r,e.BOOTSTRAP_PREFIX=O,e.LOADER_PREFIX=R,e.MAPPINGS_ERROR=o,e.MAPPINGS_ERROR_COUNT=d,e.MAPPINGS_FETCH=_,e.MAPPINGS_FETCH_COUNT=P,e.MAPPINGS_FETCH_DURATION=T,e.MODULE_DEFINE=c,e.MODULE_DEFINE_COUNT=s,e.MODULE_ERROR=u,e.MODULE_ERROR_COUNT=a,e.MODULE_FETCH=n,e.MODULE_FETCH_COUNT=t,e.MODULE_FETCH_DURATION=A,e.ROUTER_ERROR=I,e.ROUTER_ERROR_COUNT=M,e.ROUTER_NAV=U,e.ROUTER_NAV_COUNT=D,e.ROUTER_NAV_DURATION=f,e.ROUTER_PREFIX=i,e.ROUTER_VIEW=C,e.ROUTER_VIEW_DURATION=m,Object.defineProperty(e,"__esModule",{value:!0})}),LWR.define("lwr/init/v/0_9_4",["exports","lwr/metrics/v/0_9_4","lwr/profiler/v/0_9_4","lwc/v/2_38_1"],function(e,O,N,l){"use strict";function r(n,t){return l.createElement(n,{is:t})}function E(n){return n.replace(/\/v\/[a-zA-Z0-9-_.]+$/,"").replace("/","-").replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const R=/-([a-z])/g;function c(n){return n.replace(R,t=>t[1].toUpperCase())}function s(n){if(typeof customElements!="undefined"&&typeof document!="undefined"){const t=document.querySelector("[lwr-root]");n.forEach(([A,u])=>{const a=E(A);let _=document.body.querySelector(a);_?document.querySelectorAll(a).forEach(T=>{const o=r(a,u);for(const{name:d,value:i}of T.attributes){o.setAttribute(d,i);const U=c(d);U in o&&(o[U]=i)}for(;T.childNodes.length>0;)o.appendChild(T.childNodes[0]);T.parentElement.replaceChild(o,T)}):(_=r(a,u),t?t.appendChild(_):document.body.appendChild(_))})}N.logOperationStart({id:O.BOOTSTRAP_END})}e.getPropFromAttrName=c,e.init=s,e.toKebabCase=E,Object.defineProperty(e,"__esModule",{value:!0})}),LWR.define("@lwrjs/app-service/example/module/amd/v/0_9_4",["lwr/loader/v/0_9_4","lwr/init/v/0_9_4"],function(e,O){"use strict";const N=globalThis.LWR,{rootComponents:l,ssrProps:r}=N;Promise.all(l.map(async E=>{const R=O.toKebabCase(E);return e.load(E,"@lwrjs/app-service/example/module/amd/v/0_9_4").then(({default:c})=>{O.init([[R,c]],r)})})),globalThis.LWR=Object.freeze({define:globalThis.LWR.define})});
