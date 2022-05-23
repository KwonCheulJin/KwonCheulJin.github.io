(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[350],{1659:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/about/About",function(){return r(9001)}])},9001:function(n,e,r){"use strict";r.r(e);var t=r(5893),a=r(7782),o=r(5675),i=r.n(o),c=r(1664),s=r.n(c),l=r(9583),m=r(4578);function d(){var n,e,r=(n=["\n  padding-top: 3rem;\n  .about__container {\n    display: grid;\n    grid-template-columns: 35% 50%;\n    gap: 15%;\n  }\n\n  .about__me {\n    width: 100%;\n    aspect-ratio: 1/1;\n    border-radius: 2rem;\n    background: linear-gradient(45deg, transparent, var(--color-primary), transparent);\n    display: grid;\n    place-items: center;\n\n    &-image {\n      width: 100%;\n      height: 100%;\n      border-radius: 2rem;\n      overflow: hidden;\n      transform: rotate(10deg);\n      transition: var(--transition);\n      &:hover {\n        transform: rotate(0);\n      }\n      & .image {\n        width: 100%;\n        height: 100%;\n        position: relative !important;\n        object-fit: cover; // Optional\n      }\n    }\n  }\n\n  .about__cards {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1.5rem;\n  }\n\n  .about__card {\n    background: var(--color-bg-variant);\n    border: 1px solid transparent;\n    border-radius: 1rem;\n    padding: 2rem;\n    text-align: center;\n    & h5 {\n      font-size: 0.95rem;\n      color: var(--color-white);\n    }\n    & small {\n      font-size: 0.7rem;\n      color: var(--color-light);\n    }\n    &:hover {\n      background: transparent;\n      border-color: var(--color-primary-variant);\n    }\n    cursor: default;\n  }\n\n  .about__icon {\n    color: var(--color-primary);\n    font-size: 1.4rem;\n    margin-bottom: 1rem;\n  }\n\n  .about__content p {\n    margin: 2rem 0 2.6rem;\n    color: var(--color-light);\n  }\n\n  /* ===== MEDIA QUERIES(MEDIUM DEVICES) ===== */\n\n  @media screen and (max-width: 1024px) {\n    .about__container {\n      grid-template-columns: 1fr;\n      gap: 0;\n    }\n\n    .about__me {\n      width: 50%;\n      margin: 2rem auto 5rem;\n    }\n\n    .about__content p {\n      margin: 1rem 0 1.5rem;\n      color: var(--color-light);\n    }\n  }\n\n  /* ===== MEDIA QUERIES(SMALL DEVICES) ===== */\n\n  @media screen and (max-width: 600px) {\n    .about__me {\n      width: 65%;\n      margin: 0 auto 3rem;\n    }\n\n    .about__cards {\n      margin: 1rem 1rem;\n      grid-template-columns: 1fr 1fr;\n    }\n\n    .about__content {\n      text-align: center;\n      & p {\n        margin: 1rem 1rem;\n      }\n    }\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return d=function(){return r},r}var u=a.Z.section(d());e.default=function(){return(0,t.jsxs)(u,{id:"about",children:[(0,t.jsx)("h5",{children:"Get To Know"}),(0,t.jsx)("h2",{children:"About Me"}),(0,t.jsxs)("div",{className:"container about__container",children:[(0,t.jsx)("div",{className:"about__me",children:(0,t.jsx)("div",{className:"about__me-image",children:(0,t.jsx)(i(),{alt:"me",src:"/me2.jpg",layout:"fill",className:"image"})})}),(0,t.jsxs)("div",{className:"about__content",children:[(0,t.jsxs)("div",{className:"about__cards",children:[(0,t.jsxs)("article",{className:"about__card",children:[(0,t.jsx)(l.MtH,{className:"about__icon"}),(0,t.jsx)("h5",{children:"Experience"}),(0,t.jsx)("small",{children:"1+ Years Working"})]}),(0,t.jsxs)("article",{className:"about__card",children:[(0,t.jsx)(l.vxf,{className:"about__icon"}),(0,t.jsx)("h5",{children:"Workplace"}),(0,t.jsx)("small",{children:"Opstech"})]}),(0,t.jsxs)("article",{className:"about__card",children:[(0,t.jsx)(m.keN,{className:"about__icon"}),(0,t.jsx)("h5",{children:"projects"}),(0,t.jsx)("small",{children:"3+ Completed"})]})]}),(0,t.jsx)("p",{children:"\uc800\uc5d0\uac8c \uad81\uae08\ud55c\uac8c \uc788\uc73c\uc2dc\uba74 \uc5f0\ub77d\uc8fc\uc138\uc694!"}),(0,t.jsx)(s(),{href:"#contact",children:(0,t.jsx)("a",{className:"btn btn-primary",children:"Let's Talk"})})]})]})]})}},5177:function(n,e,r){"use strict";r.d(e,{w_:function(){return l}});var t=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=t.createContext&&t.createContext(a),i=function(){return i=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},i.apply(this,arguments)},c=function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]])}return r};function s(n){return n&&n.map((function(n,e){return t.createElement(n.tag,i({key:e},n.attr),s(n.child))}))}function l(n){return function(e){return t.createElement(m,i({attr:i({},n.attr)},e),s(n.child))}}function m(n){var e=function(e){var r,a=n.attr,o=n.size,s=n.title,l=c(n,["attr","size","title"]),m=o||e.size||"1em";return e.className&&(r=e.className),n.className&&(r=(r?r+" ":"")+n.className),t.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,l,{className:r,style:i(i({color:n.color||e.color},e.style),n.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),s&&t.createElement("title",null,s),n.children)};return void 0!==o?t.createElement(o.Consumer,null,(function(n){return e(n)})):e(a)}}},function(n){n.O(0,[445,876,782,664,675,774,888,179],(function(){return e=1659,n(n.s=e);var e}));var e=n.O();_N_E=e}]);