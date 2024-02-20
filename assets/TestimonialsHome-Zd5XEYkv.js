import{r as D,j as e}from"./index-cpPfsWk_.js";import{S as X}from"./slick-theme-jeRxxugQ.js";/* empty css                     */import"./index-sD3jJIsj.js";var K={};function F(a){if(!a||typeof window>"u")return;const s=document.createElement("style");return s.setAttribute("type","text/css"),s.innerHTML=a,document.head.appendChild(s),a}Object.defineProperty(K,"__esModule",{value:!0});var t=D;function O(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var l=O(t);F(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);const V=t.forwardRef(function({style:s={},className:y="",autoFill:c=!1,play:m=!0,pauseOnHover:b=!1,pauseOnClick:j=!1,direction:n="left",speed:p=50,delay:M=0,loop:w=0,gradient:W=!1,gradientColor:R="white",gradientWidth:f=200,onFinish:A,onCycleComplete:$,onMount:E,children:g},I){const[q,Z]=t.useState(0),[x,B]=t.useState(0),[v,T]=t.useState(1),[N,L]=t.useState(!1),P=t.useRef(null),r=I||P,h=t.useRef(null),u=t.useCallback(()=>{if(h.current&&r.current){const i=r.current.getBoundingClientRect(),k=h.current.getBoundingClientRect();let d=i.width,o=k.width;(n==="up"||n==="down")&&(d=i.height,o=k.height),T(c&&d&&o&&o<d?Math.ceil(d/o):1),Z(d),B(o)}},[c,r,n]);t.useEffect(()=>{if(N&&(u(),h.current&&r.current)){const i=new ResizeObserver(()=>u());return i.observe(r.current),i.observe(h.current),()=>{i&&i.disconnect()}}},[u,r,N]),t.useEffect(()=>{u()},[u,g]),t.useEffect(()=>{L(!0)},[]),t.useEffect(()=>{typeof E=="function"&&E()},[]);const z=t.useMemo(()=>c?x*v/p:x<q?q/p:x/p,[c,q,x,v,p]),H=t.useMemo(()=>Object.assign(Object.assign({},s),{"--pause-on-hover":!m||b?"paused":"running","--pause-on-click":!m||b&&!j||j?"paused":"running","--width":n==="up"||n==="down"?"100vh":"100%","--transform":n==="up"?"rotate(-90deg)":n==="down"?"rotate(90deg)":"none"}),[s,m,b,j,n]),J=t.useMemo(()=>({"--gradient-color":R,"--gradient-width":typeof f=="number"?`${f}px`:f}),[R,f]),C=t.useMemo(()=>({"--play":m?"running":"paused","--direction":n==="left"?"normal":"reverse","--duration":`${z}s`,"--delay":`${M}s`,"--iteration-count":w?`${w}`:"infinite","--min-width":c?"auto":"100%"}),[m,n,z,M,w,c]),S=t.useMemo(()=>({"--transform":n==="up"?"rotate(90deg)":n==="down"?"rotate(-90deg)":"none"}),[n]),_=t.useCallback(i=>[...Array(Number.isFinite(i)&&i>=0?i:0)].map((k,d)=>l.default.createElement(t.Fragment,{key:d},t.Children.map(g,o=>l.default.createElement("div",{style:S,className:"rfm-child"},o)))),[S,g]);return N?l.default.createElement("div",{ref:r,style:H,className:"rfm-marquee-container "+y},W&&l.default.createElement("div",{style:J,className:"rfm-overlay"}),l.default.createElement("div",{className:"rfm-marquee",style:C,onAnimationIteration:$,onAnimationEnd:A},l.default.createElement("div",{className:"rfm-initial-child-container",ref:h},t.Children.map(g,i=>l.default.createElement("div",{style:S,className:"rfm-child"},i))),_(v-1)),l.default.createElement("div",{className:"rfm-marquee",style:C},_(v))):null});var G=K.default=V;const Q=[{title:"Rey Johnson",desc:"Working with SKMADS has been a game changer for our business. Their targeted advertising solutions have helped us reach the right audiences and achieve better results",class:"bg-orange-100"},{title:"Dean Smith",desc:"SKMADS's team is knowledgeable, responsive, and transparent. Their data analysis services have provided us with valuable insights to optimize our advertising strategies and drive growth",class:"bg-lol"},{title:"Kristen Josheph",desc:"SKMADS advertising solutions have helped us improve our brand visibility and reach new audiences. Their in-app advertising dashboard is user-friendly and provides detailed metrics to track ad performance.",class:"bg-orange-100"}],U=[{img:"t-1.webp"},{img:"t-2.webp"},{img:"t-3.webp"},{img:"t-4.webp"},{img:"t-5.webp"},{img:"t-6.webp"}],ne=()=>{D.useRef(null);const a={dots:!0,infinite:!0,speed:500,slidesToShow:2,slidesToScroll:1,style:{display:"flex",justifyContent:"center",gap:"20px"},responsive:[{breakpoint:1025,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"pb-5 d-flex flex-column justify-content-center",style:{backgroundColor:"#fff"},children:[e.jsxs("div",{className:"d-flex flex-column align-align-items-center px-5 snipcss-VioC9",children:[e.jsxs("div",{className:"ld-fancy-heading relative mask-text",children:[e.jsx("p",{className:"ld-fh-element relative lqd-split-lines text-18 mb-1/5em text-slate-400 split-text-applied","data-split-text":"true","data-split-options":'{"type": "lines"}'}),e.jsx("div",{className:"split-unit lqd-lines lqd-unit-animation-done style-5KMqK",id:"style-5KMqK",children:e.jsx("span",{className:"split-inner  fs-6 fw-bold text-decoration-underline",style:{color:"#c3c3c3"}})}),e.jsx("p",{})]}),e.jsx("div",{className:"ld-fancy-heading relative mask-text",children:e.jsx("h2",{className:"mb-0 ld-fh-element relative lqd-split-lines split-text-applied","data-split-text":"true","data-split-options":'{"type": "lines"}',children:e.jsx("div",{className:"split-unit lqd-lines lqd-unit-animation-done style-ZMBIF",id:"style-ZMBIF",children:e.jsx("span",{className:"split-inner5",style:{},children:"Testimonials"})})})}),e.jsx("div",{className:"ld-fancy-heading relative mask-text",children:e.jsx("h2",{className:"ld-fh-element relative lqd-highlight-classic lqd-highlight-grow-left lqd-split-lines h2 mb-0/75em split-text-applied","data-split-text":"true","data-split-options":'{"type": "lines"}',children:e.jsx("div",{className:"split-unit lqd-lines lqd-unit-animation-done style-LDaWZ",id:"style-LDaWZ",children:e.jsxs("span",{className:"split-inner5 ",children:[e.jsx("span",{className:"lqd-adv-txt-item1",children:"People have"}),e.jsx("span",{className:"relative z-3 lqd-adv-txt-item",children:e.jsx("span",{className:"relative d-inline-flex rounded-circle vertical-top -mr-30 ms-3",children:e.jsx("img",{className:"lqd-adv-txt-fig w-55 border-5 border-white rounded-circle",decoding:"async",width:58,height:58,src:"https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/Shape-avatar-2.jpg",alt:"testimonials avatar",style:{opacity:".8",filter:"hue-rotate(665deg)"}})})}),e.jsx("span",{className:"relative z-2 lqd-adv-txt-item",children:e.jsx("span",{className:"relative d-inline-flex rounded-circle vertical-top -mr-35",children:e.jsx("img",{className:"lqd-adv-txt-fig w-55 border-5 border-white rounded-circle",decoding:"async",width:58,height:58,src:"https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/Shape-avatar-2.jpg",alt:"testimonials avatar",style:{opacity:".8",filter:"hue-rotate(665deg)"}})})}),e.jsx("span",{className:"relative z-1 lqd-adv-txt-item",children:e.jsx("span",{className:"relative d-inline-flex rounded-circle vertical-top",children:e.jsx("img",{className:"lqd-adv-txt-fig w-55 border-5 border-white rounded-circle",decoding:"async",width:58,height:58,src:"https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/Shape-avatar-2.jpg",alt:"testimonials avatar",style:{opacity:".8",filter:"hue-rotate(665deg)"}})})}),e.jsx("span",{className:"lqd-adv-txt-item1",children:" been talking."})]})})})})]}),e.jsx("div",{className:"d-flex justify-content-center align-items-center mb-5",children:e.jsx("div",{className:"mt-1 col-lg-10 col-11",children:e.jsx(X,{ref:s=>{},...a,children:Q.map(s=>e.jsxs("div",{className:`${s.class} w-90 lqd-testi  lqd-testi-style-1 d-flex flex-column rounded-3 mb-3 py-4 px-4 module-content`,children:[e.jsx("div",{className:" d-flex  justify-content-between mb-1",children:e.jsxs("div",{className:"lqd-testi-details d-flex align-items-center py-2 px-4",children:[e.jsx("figure",{className:"lqd-testi-avatar rounded-circle overflow-hidden mr-1/5em me-3",children:e.jsx("img",{decoding:"async",className:"rounded-full",src:"images/bq.jpeg",alt:"ritamjahed"})}),e.jsxs("div",{className:"pl-1/5",children:[e.jsx("h3",{className:"text-orange-600 text-18",children:s.title}),e.jsx("h4",{className:"font-weight-light text-orange-600 text-16"})]})]})})," ",e.jsx("div",{className:"lqd-testi-quote text-orange-600",children:e.jsx("blockquote",{children:e.jsx("p",{className:"text-18",children:s.desc})})})]}))})})}),e.jsxs("div",{className:"d-flex flex-column mt-2",children:[e.jsxs("div",{children:[e.jsx("h3",{class:"ld-fh-element  lqd-highlight-classic lqd-highlight-grow-bottom lqd-highlight-reset-onhover lqd-split-lines mb-1 mt-1 split-text-applied is-in-view","data-inview":"true","data-transition-delay":"true","data-delay-options":'{"elements": ".lqd-highlight-inner", "delayType": "transition"}',"data-split-text":"true","data-split-options":'{"type": "lines"}',children:e.jsx("div",{class:"split-unit lqd-lines lqd-unit-animation-done mb-5 style-jwcoH",id:"style-jwcoH",children:e.jsxs("span",{class:"split-inner5 mt-2 text-dark",children:["Tracking",e.jsxs("mark",{class:"lqd-highlight",children:[e.jsxs("span",{class:"lqd-highlight-txt",style:{zIndex:"1"},children:[" ","Partners"]}),e.jsx("span",{class:"bottom-0 left-0 lqd-highlight-inner bg-purple-100 style-9pqpl",id:"style-9pqpl"})]})]})})}),e.jsx("span",{className:"split-inner snipcss-WxzCR fs-2 fw-bold mt-5 text-dark"})]}),e.jsx("div",{className:"pb-5 kilk",children:e.jsx(G,{speed:50,loop:0,autoFill:!0,style:{height:50},children:e.jsx("div",{className:"d-flex  ",style:{gap:"250px"},children:U.map((s,y)=>e.jsx("img",{src:`images/${s.img}`,width:190,className:"ok"},y))})})})]})]})})};export{ne as default};
