import{r as l,j as e}from"./index-VqsogIX3.js";/* empty css               *//* empty css                      *//* empty css                  *//* empty css                     */import{c as h}from"./index-xZhxVpoZ.js";import{d as p,C as O,e as q}from"./Collapse-SNsrfYDQ.js";function v(t,s){return Array.isArray(t)?t.includes(s):t===s}const y=l.createContext({});y.displayName="AccordionContext";const x=y,w=l.forwardRef(({as:t="div",bsPrefix:s,className:i,children:n,eventKey:o,...c},a)=>{const{activeEventKey:d}=l.useContext(x);return s=p(s,"accordion-collapse"),e.jsx(O,{ref:a,in:v(d,o),...c,className:h(i,s),children:e.jsx(t,{children:l.Children.only(n)})})});w.displayName="AccordionCollapse";const b=w,N=l.createContext({eventKey:""});N.displayName="AccordionItemContext";const j=N,_=l.forwardRef(({as:t="div",bsPrefix:s,className:i,onEnter:n,onEntering:o,onEntered:c,onExit:a,onExiting:d,onExited:m,...g},u)=>{s=p(s,"accordion-body");const{eventKey:f}=l.useContext(j);return e.jsx(b,{eventKey:f,onEnter:n,onEntering:o,onEntered:c,onExit:a,onExiting:d,onExited:m,children:e.jsx(t,{ref:u,...g,className:h(i,s)})})});_.displayName="AccordionBody";const I=_;function E(t,s){const{activeEventKey:i,onSelect:n,alwaysOpen:o}=l.useContext(x);return c=>{let a=t===i?null:t;o&&(Array.isArray(i)?i.includes(t)?a=i.filter(d=>d!==t):a=[...i,t]:a=[t]),n==null||n(a,c),s==null||s(c)}}const A=l.forwardRef(({as:t="button",bsPrefix:s,className:i,onClick:n,...o},c)=>{s=p(s,"accordion-button");const{eventKey:a}=l.useContext(j),d=E(a,n),{activeEventKey:m}=l.useContext(x);return t==="button"&&(o.type="button"),e.jsx(t,{ref:c,onClick:d,...o,"aria-expanded":Array.isArray(m)?m.includes(a):a===m,className:h(i,s,!v(m,a)&&"collapsed")})});A.displayName="AccordionButton";const C=A,k=l.forwardRef(({as:t="h2",bsPrefix:s,className:i,children:n,onClick:o,...c},a)=>(s=p(s,"accordion-header"),e.jsx(t,{ref:a,...c,className:h(i,s),children:e.jsx(C,{onClick:o,children:n})})));k.displayName="AccordionHeader";const M=k,S=l.forwardRef(({as:t="div",bsPrefix:s,className:i,eventKey:n,...o},c)=>{s=p(s,"accordion-item");const a=l.useMemo(()=>({eventKey:n}),[n]);return e.jsx(j.Provider,{value:a,children:e.jsx(t,{ref:c,...o,className:h(i,s)})})});S.displayName="AccordionItem";const K=S,B=l.forwardRef((t,s)=>{const{as:i="div",activeKey:n,bsPrefix:o,className:c,onSelect:a,flush:d,alwaysOpen:m,...g}=q(t,{activeKey:"onSelect"}),u=p(o,"accordion"),f=l.useMemo(()=>({activeEventKey:n,onSelect:a,alwaysOpen:m}),[n,a,m]);return e.jsx(x.Provider,{value:f,children:e.jsx(i,{ref:s,...g,className:h(c,u,d&&`${u}-flush`)})})});B.displayName="Accordion";const r=Object.assign(B,{Button:C,Collapse:b,Item:K,Header:M,Body:I}),R=[{title:"Brand safety",desc:"Your brand's safety is our top priority for building healthy relationship",class:"fa-solid fa-lock",newBg:"rgb(244 244 244)"},{title:"Our Priority",desc:"Our main goal is user retention & engagement for all the campaigns we run to get more ROI",class:"fa-regular fa-user",newBg:"rgb(244 244 244)"},{title:"Anti-Fraud ",desc:"Our in-house anti-fraud technology works in background to fight fraud.",class:"fa-solid fa-shield-halved",newBg:"rgb(244 244 244)"},{title:"Auto Optimization",desc:"Our in-house auto optimization tool taking care of CVR and EVR.",class:"fa-solid fa-chart-line",newBg:"rgb(244 244 244)"}],P=()=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"main-bg",children:[e.jsxs("div",{class:"titlebar-inner2 d-flex flex-column ",children:[e.jsxs("div",{className:"d-flex flex-row position-relative",children:[e.jsx("div",{className:"col-3 position-absolute",children:e.jsx("img",{width:369,height:135,src:"https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/shape-Path.svg",alt:"shape"})}),e.jsx("div",{className:"col-3",children:e.jsx("img",{width:57,height:54,src:"https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/shape-Path-141907.svg",alt:"shape"})}),e.jsx("div",{className:"col-3",children:e.jsx("img",{width:49,height:14,src:"https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/shape-Path-141908.svg",alt:"shape"})}),e.jsx("div",{className:"col-3",children:e.jsx("img",{width:21,height:68,src:"https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/shape-Path-141909.svg",alt:"shape"})})]}),e.jsx("div",{class:"container titlebar-container",children:e.jsx("div",{class:"row titlebar-container justify-center",children:e.jsxs("div",{class:"col titlebar-col col-xl-6 col-lg-8 col-12 text-center",children:[e.jsx("h1",{children:"About Us"}),e.jsx("p",{class:"leading-20 text-gray-400",children:"SKMADS provides targeted and transparent advertising solutions to help businesses grow"})]})})})]}),e.jsxs("section",{className:"elementor-section bg-light elementor-top-section py-5 elementor-element elementor-element-df71ffa elementor-section-content-middle elementor-section-boxed elementor-section-height-default snipcss-fKgND","data-id":"df71ffa","data-element_type":"section","data-settings":'{"background_background":"classic"}',children:[e.jsxs("div",{className:"elementor-container col-lg-10 col-11 elementor-column-gap-default ",children:[e.jsx("div",{className:"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ef807eb","data-id":"ef807eb","data-element_type":"column",children:e.jsxs("div",{className:"elementor-widget-wrap elementor-element-populated",children:[e.jsx("div",{className:"elementor-element elementor-element-99e6870 elementor-widget elementor-widget-hub_fancy_heading","data-id":"99e6870","data-element_type":"widget","data-widget_type":"hub_fancy_heading.default",children:e.jsx("div",{className:"elementor-widget-container",children:e.jsx("div",{id:"ld-fancy-heading-634ee22577365",className:"ld-fancy-heading pos-rel",children:e.jsx("h2",{className:"ld-fh-element d-inline-block pos-rel text-dark  lqd-highlight-grow-left h2 text-start",style:{fontSize:"40px"},children:"Inspiration, innovation, and opportunities."})})})}),e.jsx("div",{className:"elementor-element elementor-element-7b26c1a elementor-widget elementor-widget-hub_fancy_heading","data-id":"7b26c1a","data-element_type":"widget","data-widget_type":"hub_fancy_heading.default",children:e.jsx("div",{className:"elementor-widget-container",children:e.jsx("div",{id:"ld-fancy-heading-634ee22578cd4",className:"ld-fancy-heading pos-rel",children:e.jsx("p",{className:"ld-fh-element d-inline-block pos-rel  lqd-highlight-classic lqd-highlight-grow-left p text-start",children:"SKMADS drives advertising success through dynamic strategies and creative brilliance instantly."})})})}),e.jsx("div",{className:"elementor-element elementor-element-624da75 elementor-widget elementor-widget-ld_accordion","data-id":"624da75","data-element_type":"widget","data-widget_type":"ld_accordion.default",children:e.jsxs(r,{flush:!0,children:[e.jsxs(r.Item,{eventKey:"item1",children:[e.jsx(r.Header,{children:"WHO WE ARE"}),e.jsx(r.Body,{className:"text-start",children:"SKMADS is a leading advertising company that specializes in providing in-app and web advertising services through our powerful dashboards. Our team of skilled professionals is committed to delivering exceptional results, and we pride ourselves on offering innovative and tailored solutions to meet our clients' unique needs.​ With years of experience in the industry, SKMADS has established itself as a trusted partner for businesses looking to enhance their online presence and reach their target audience. Our in-house team of experts possesses extensive knowledge in creating and managing effective advertising campaigns that drive results. At SKMADS, we believe in the power of collaboration, and we work closely with our clients to understand their goals and objectives, ensuring that every campaign is designed to deliver maximum impact. Our focus on quality and attention to detail has earned us a reputation for excellence in the industry, and we are committed to maintaining that reputation through every project we undertake."})]}),e.jsxs(r.Item,{eventKey:"item2",children:[e.jsx(r.Header,{children:"IMPACT"}),e.jsx(r.Body,{className:"text-start",children:"SKMADS leads the way in advertising, specializing in in-app and web services through our robust dashboards. With a team of skilled professionals dedicated to delivering exceptional results, we pride ourselves on offering innovative solutions tailored to each client's unique needs, ensuring advertising excellence every step of the way."})]}),e.jsxs(r.Item,{eventKey:"item3",children:[e.jsx(r.Header,{children:"CREATIVITY"}),e.jsx(r.Body,{className:"text-start",children:"At SKMADS, we're dedicated to empowering advertising success. Our expertise lies in providing in-app and web advertising services through dynamic dashboards. With a committed team of professionals, we offer tailored solutions that drive exceptional results, ensuring our clients achieve advertising excellence with every campaign."})]})]})})]})}),e.jsx("div",{className:"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e6731a7","data-id":"e6731a7","data-element_type":"column",children:e.jsx("div",{className:"elementor-widget-wrap elementor-element-populated",children:e.jsx("div",{"data-parallax":"true","data-parallax-options":'{"ease":["linear"],"start":"top bottom","end":"bottom+=0px top"}',"data-parallax-from":'{"y":"60px"}',"data-parallax-to":'{"y":"-75px"}',className:"elementor-element elementor-element-5b8d58d elementor-widget elementor-widget-ld_fancy_image style-U9ktw","data-id":"5b8d58d","data-element_type":"widget","data-widget_type":"ld_fancy_image.default",id:"style-U9ktw",children:e.jsx("div",{className:"elementor-widget-container",children:e.jsx("div",{className:"lqd-imggrp-single d-block pos-rel","data-shadow-style":4,children:e.jsx("div",{className:"lqd-imggrp-img-container d-inline-flex pos-rel align-items-center justify-content-center",children:e.jsx("figure",{className:"w-100 pos-rel loaded",children:e.jsx("img",{width:592,height:674,src:"https://companyhub.liquid-themes.com/elementor/wp-content/uploads/2019/12/img-1@2x.jpg",className:"attachment-full size-full ld-lazyload entered loaded",alt:"",itemProp:"image","data-src":"https://companyhub.liquid-themes.com/elementor/wp-content/uploads/2019/12/img-1@2x.jpg","data-srcset":"https://companyhub.liquid-themes.com/elementor/wp-content/uploads/2019/12/img-1@2x.jpg 592w, https://companyhub.liquid-themes.com/elementor/wp-content/uploads/2019/12/img-1@2x-264x300.jpg 264w","data-sizes":"(max-width: 592px) 100vw, 592px","data-aspect":"0.87833827893175","data-ll-status":"loaded"})})})})})})})})]}),e.jsxs("div",{className:"d-flex justify-content-center align-items-center flex-column mt-5",children:[e.jsxs("div",{className:"col-lg-10 col-11 d-flex flex-column my-5",children:[e.jsx("div",{class:"col titlebar-col col-xl-12 col-lg-12 col-12 text-start",children:e.jsx("h3",{className:"team-header",children:"Why We're Better"})}),e.jsxs("ul",{class:"process",children:[e.jsxs("li",{class:"process__item",children:[e.jsx("span",{class:"process__number",children:"1"}),e.jsx("span",{class:"process__title",children:"Initial Consultation "}),e.jsx("span",{class:"process__subtitle",children:"The team conducts an initial consultation with the client to understand their business objectives and advertising needs"})]}),e.jsxs("li",{class:"process__item",children:[e.jsx("span",{class:"process__number",children:"2"}),e.jsx("span",{class:"process__title",children:"Proposal Development"}),e.jsx("span",{class:"process__subtitle",children:"SKMADS develops a detailed proposal outlining the advertising solutions that best fit the client's needs."})]}),e.jsxs("li",{class:"process__item",children:[e.jsx("span",{class:"process__number",children:"3"}),e.jsx("span",{class:"process__title",children:"Review / Approval"}),e.jsx("span",{class:"process__subtitle",children:"The proposal is reviewed and discussed with the client to ensure that it meets their expectations"})]}),e.jsxs("li",{class:"process__item",children:[e.jsx("span",{class:"process__number",children:"4"}),e.jsx("span",{class:"process__title",children:"Implement / Monitor"}),e.jsx("span",{class:"process__subtitle",children:"Once the proposal is approved, we implement the advertising campaign and monitor closely."})]})]})]}),e.jsxs("div",{className:"col-lg-10 col-11 d-flex flex-column my-5",children:[e.jsx("div",{class:"col titlebar-col col-xl-12 col-lg-12 col-12 text-start",children:e.jsx("h3",{className:"team-header",children:"The Process"})}),e.jsx("div",{className:"d-flex flex-row justify-content-center mt-3",children:e.jsx("div",{className:"col-12 d-flex flex-row gap-4  process-con",children:R.map((t,s)=>e.jsx("div",{className:"w-90",children:e.jsxs("div",{className:"py-4  h-100 rounded-1 d-flex flex-column align-items-center services-home-con ab-con shadow-sm",style:{backgroundColor:"transparent"},children:[e.jsx("div",{className:"ld-fancy-heading position-relative snipcss0-12-80-81",children:e.jsx("h4",{className:"ld-fh-element position-relative text-20 mb-0/25em snipcss0-13-81-82"})}),e.jsx("div",{className:"my-4",children:e.jsx("i",{className:`${t.class}`,style:{color:"#003c71",fontSize:"60px"}})}),e.jsx("div",{className:"ld-fancy-heading position-relative snipcss0-12-80-83",children:e.jsx("p",{className:"ld-fh-element position-relative fs-4 mb-1em snipcss0-13-83-84 fw-bold",style:{color:"#003c71"},children:t.title.toUpperCase()})}),e.jsx("div",{className:"w-230 lqd-imggrp-single block position-relative snipcss0-12-80-85",children:e.jsx("p",{className:"mb-5 px-4 process__subtitle ",children:t.desc})}),e.jsx("div",{className:"divider w-full snipcss0-12-80-89",children:e.jsx("span",{className:"w-full my-25 border-top border-black-20 snipcss0-13-89-90"})})]})},s))})})]}),e.jsxs("div",{className:" main-bg",children:[" ",e.jsx("div",{class:"d-flex flex-column align-items-center pt-5 my-5",children:e.jsx("div",{class:"container titlebar-container",children:e.jsxs("div",{class:"titlebar-container d-flex flex-column justify-content-center align-items-center",children:[e.jsx("div",{class:"col titlebar-col col-xl-6 col-lg-8 col-12 text-center",children:e.jsx("h3",{className:"team-header",children:"Meet the Team"})}),e.jsxs("div",{className:"d-flex col-lg-10 abt-main gap-4 mt-4",children:[e.jsxs("div",{className:"col-lg-6 z-1 d-flex flex-column",children:[e.jsx("img",{src:"images/ceo.webp",className:"img-fluid rounded-2 abt-image"}),e.jsx("h2",{className:"split-inner19 mt-3",children:"Sanjay Kumar Meena"}),e.jsx("p",{className:" fw-bold text-dark text-center",style:{fontSize:"14px"},children:"FOUNDER & CEO"})]}),e.jsxs("div",{className:"col-lg-6 d-flex flex-column justify-content-center ",children:[e.jsx("img",{src:"images/cmo.png",className:"img-fluid rounded-2 abt-image"}),e.jsx("h2",{className:"split-inner19 mt-3",children:"Chandrabhan Meena"}),e.jsx("p",{className:" fw-bold text-dark text-center",style:{fontSize:"14px"},children:"Chief Marketing Officer"})]})]})]})})})]})]})]})]})});export{P as default};
