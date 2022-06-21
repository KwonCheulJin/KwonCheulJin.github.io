(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{5206:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main",function(){return r(8051)}])},5529:function(n,e,r){"use strict";var t=r(5893),i=r(9008),a=r.n(i),o=function(n){var e=n.title,r=n.keyword,i=n.description;return(0,t.jsxs)(a(),{children:[(0,t.jsx)("title",{children:e}),(0,t.jsx)("meta",{name:"description",content:i}),(0,t.jsx)("meta",{name:"keywords",content:r}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})};o.defaultProps={title:"Charles's Blog",keyword:"Charles",description:"Charles's Practice Blog"},e.Z=o},8051:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return hn}});var t=r(5893),i=r(5675),a=r.n(i),o=r(1664),c=r.n(o),s=r(7782);function l(){var n,e,r=(n=["\n  margin-top: 2.5rem;\n  display: flex;\n  gap: 1.2rem;\n  justify-content: center;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return l=function(){return r},r}var d=s.Z.div(l());var m=function(){return(0,t.jsx)(d,{className:"cta",children:(0,t.jsx)(c(),{href:"#contact",children:(0,t.jsx)("a",{className:"btn btn-primary",children:"Let's Talk"})})})},h=r(3750),p=r(9583),u=r(6893);function x(){var n,e,r=(n=["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.8rem;\n  position: absolute;\n  left: 0;\n  bottom: 3rem;\n\n  &::after {\n    content: '';\n    width: 2px;\n    height: 2rem;\n    background: var(--color-primary);\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return x=function(){return r},r}var f=s.Z.div(x());var j=function(){return(0,t.jsxs)(f,{className:"header__socials",children:[(0,t.jsx)(c(),{href:"https://linkedin.com",children:(0,t.jsx)("a",{target:"_blank",children:(0,t.jsx)(h.NQh,{})})}),(0,t.jsx)(c(),{href:"https://github.com",children:(0,t.jsx)("a",{target:"_blank",children:(0,t.jsx)(p.hJX,{})})}),(0,t.jsx)(c(),{href:"https://dribbble.com",children:(0,t.jsx)("a",{target:"_blank",children:(0,t.jsx)(u.Fl_,{})})})]})};function g(){var n,e,r=(n=["\n  height: 100vh;\n  padding-top: 7rem;\n  overflow: hidden;\n\n  .header__container {\n    text-align: center;\n    height: 100%;\n    position: relative;\n  }\n  .me {\n    background: linear-gradient(var(--color-primary), transparent);\n    width: 25%;\n    height: 80%;\n    border-radius: 15rem 15rem 0 0;\n    position: absolute;\n    left: 37%;\n    margin-top: 4rem;\n    overflow: hidden;\n    padding: 5rem 1.5rem 1.5rem 1.5rem;\n    & .image {\n      width: 100%;\n      height: 100%;\n      position: relative !important;\n      object-fit: cover; // Optional\n    }\n  }\n\n  .scroll__down {\n    position: absolute;\n    right: -2.3rem;\n    bottom: 5rem;\n    transform: rotate(90deg);\n    font-weight: 300;\n    font-size: 0.9rem;\n  }\n\n  /* ===== MEDIA QUERIES(MEDIUM DEVICES) ===== */\n\n  @media screen and (max-width: 1024px) {\n    height: 68vh;\n\n    .me {\n      width: 45%;\n      height: 65%;\n      left: 28%;\n    }\n  }\n\n  /* ===== MEDIA QUERIES(SMALL DEVICES) ===== */\n\n  @media screen and (max-width: 600px) {\n    height: 100vh;\n\n    .header__socials,\n    .scroll__down {\n      display: none;\n    }\n\n    .me {\n      width: 75%;\n      height: 65%;\n      left: 13%;\n    }\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return g=function(){return r},r}var v=s.Z.header(g());var b=function(){return(0,t.jsx)(v,{children:(0,t.jsxs)("div",{className:"container header__container",children:[(0,t.jsx)("h5",{children:"Hello I'm"}),(0,t.jsx)("h1",{children:"Charles Kwon"}),(0,t.jsx)("h5",{className:"text-light",children:"FrontEnd Developer"}),(0,t.jsx)(m,{}),(0,t.jsx)(j,{}),(0,t.jsx)("div",{className:"me",children:(0,t.jsx)(a(),{alt:"me",src:"/me.png",layout:"fill",className:"image"})}),(0,t.jsx)(c(),{href:"#contact",children:(0,t.jsx)("a",{className:"scroll__down",children:"Scroll Down"})})]})})},_=r(8193),y=r(7516),w=r(9352),E=r(7294);function k(){var n,e,r=(n=["\n  background: rgba(0, 0, 0, 0.3);\n  width: max-content;\n  display: block;\n  padding: 0.7rem 1.7rem;\n  z-index: 2;\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 2rem;\n  display: flex;\n  gap: 0.8rem;\n  border-radius: 3rem;\n  backdrop-filter: blur(15px);\n\n  a {\n    background: transparent;\n    padding: 0.9rem;\n    border-radius: 50%;\n    display: flex;\n    color: var(--color-light);\n    font-size: 1.1rem;\n\n    &:hover {\n      background: rgba(0, 0, 0, 0.3);\n    }\n\n    &.active {\n      background: var(--color-primary);\n      color: var(--color-bg-top);\n    }\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return k=function(){return r},r}var N=s.Z.nav(k());var I=function(){var n=(0,E.useState)("#"),e=n[0],r=n[1];return(0,t.jsxs)(N,{children:[(0,t.jsx)(c(),{href:"#",children:(0,t.jsx)("a",{onClick:function(){return r("#")},className:"#"===e?"active":"",children:(0,t.jsx)(_.iqr,{})})}),(0,t.jsx)(c(),{href:"#about",children:(0,t.jsx)("a",{onClick:function(){return r("#about")},className:"#about"===e?"active":"",children:(0,t.jsx)(_.nf1,{})})}),(0,t.jsx)(c(),{href:"#experience",children:(0,t.jsx)("a",{onClick:function(){return r("#experience")},className:"#experience"===e?"active":"",children:(0,t.jsx)(y.lOc,{})})}),(0,t.jsx)(c(),{href:"#services",children:(0,t.jsx)("a",{onClick:function(){return r("#services")},className:"#services"===e?"active":"",children:(0,t.jsx)(w.IlI,{})})}),(0,t.jsx)(c(),{href:"#contact",children:(0,t.jsx)("a",{onClick:function(){return r("#contact")},className:"#contact"===e?"active":"",children:(0,t.jsx)(y.kK8,{})})})]})},S=r(4578);function A(){var n,e,r=(n=["\n  .about__container {\n    display: grid;\n    grid-template-columns: 35% 50%;\n    gap: 15%;\n  }\n\n  .about__me {\n    width: 100%;\n    aspect-ratio: 1/1;\n    border-radius: 2rem;\n    background: linear-gradient(45deg, transparent, var(--color-primary), transparent);\n    display: grid;\n    place-items: center;\n\n    &-image {\n      width: 100%;\n      height: 100%;\n      border-radius: 2rem;\n      overflow: hidden;\n      transform: rotate(10deg);\n      transition: var(--transition);\n      &:hover {\n        transform: rotate(0);\n      }\n      & .image {\n        width: 100%;\n        height: 100%;\n        position: relative !important;\n        object-fit: cover; // Optional\n      }\n    }\n  }\n\n  .about__cards {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 1.5rem;\n  }\n\n  .about__card {\n    background: var(--color-bg-variant);\n    border: 1px solid transparent;\n    border-radius: 1rem;\n    padding: 2rem;\n    text-align: center;\n    & h5 {\n      font-size: 0.95rem;\n      color: var(--color-white);\n    }\n    & small {\n      font-size: 0.7rem;\n      color: var(--color-light);\n    }\n    &:hover {\n      background: transparent;\n      border-color: var(--color-primary-variant);\n    }\n    cursor: default;\n  }\n\n  .about__icon {\n    color: var(--color-primary);\n    font-size: 1.4rem;\n    margin-bottom: 1rem;\n  }\n\n  .about__content p {\n    margin: 2rem 0 2.6rem;\n    color: var(--color-light);\n  }\n\n  /* ===== MEDIA QUERIES(MEDIUM DEVICES) ===== */\n\n  @media screen and (max-width: 1024px) {\n    .about__container {\n      grid-template-columns: 1fr;\n      gap: 0;\n    }\n\n    .about__me {\n      width: 50%;\n      margin: 2rem auto 5rem;\n    }\n\n    .about__content {\n      text-align: center;\n      & p {\n        margin: 1rem 0 1.5rem;\n        color: var(--color-light);\n      }\n    }\n  }\n\n  /* ===== MEDIA QUERIES(SMALL DEVICES) ===== */\n\n  @media screen and (max-width: 600px) {\n    .about__me {\n      width: 65%;\n      margin: 0 auto 3rem;\n    }\n\n    .about__cards {\n      margin: 1rem 1rem;\n      grid-template-columns: 1fr 1fr;\n    }\n\n    .about__content {\n      text-align: center;\n      & p {\n        margin: 1rem 1rem;\n      }\n    }\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return A=function(){return r},r}var O=s.Z.section(A()),M=[{key:"1",icon:(0,t.jsx)(p.MtH,{className:"about__icon"}),title:"Experience",text:"1+ Years Working"},{key:"2",icon:(0,t.jsx)(p.vxf,{className:"about__icon"}),title:"Workplace",text:"Opstech"},{key:"3",icon:(0,t.jsx)(S.keN,{className:"about__icon"}),title:"projects",text:"3+ Completed"}];var D=function(){return(0,t.jsxs)(O,{id:"about",children:[(0,t.jsx)("h5",{children:"Get To Know"}),(0,t.jsx)("h2",{children:"About Me"}),(0,t.jsxs)("div",{className:"container about__container",children:[(0,t.jsx)("div",{className:"about__me",children:(0,t.jsx)("div",{className:"about__me-image",children:(0,t.jsx)(a(),{alt:"me",src:"/me2.jpg",layout:"fill",className:"image"})})}),(0,t.jsxs)("div",{className:"about__content",children:[(0,t.jsx)("div",{className:"about__cards",children:M.map((function(n){return(0,t.jsxs)("article",{className:"about__card",children:[n.icon,(0,t.jsx)("h5",{children:n.title}),(0,t.jsx)("small",{children:n.text})]},n.key)}))}),(0,t.jsx)("p",{children:"\uc800\uc5d0\uac8c \uad81\uae08\ud55c\uac8c \uc788\uc73c\uc2dc\uba74 \uc5f0\ub77d\uc8fc\uc138\uc694!"}),(0,t.jsx)(c(),{href:"#contact",children:(0,t.jsx)("a",{className:"btn btn-primary",children:"Let's Talk"})})]})]})]})};function C(){var n,e,r=(n=["\n  .experience__container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n    & > div {\n      background: var(--color-bg-variant);\n      padding: 2.4rem 5rem;\n      border-radius: 2rem;\n      border: 1px solid transparent;\n      transition: var(--transition);\n      & h3 {\n        text-align: center;\n        margin-bottom: 2rem;\n        color: var(--color-primary);\n      }\n      &:hover {\n        background: transparent;\n        border-color: var(--color-primary-variant);\n        cursor: default;\n      }\n    }\n  }\n\n  .experience__content {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    row-gap: 2rem;\n  }\n\n  .experience__details {\n    display: flex;\n    gap: 1rem;\n    &-icon {\n      margin-top: 6px;\n      color: var(--color-primary);\n    }\n  }\n\n  /* ===== MEDIA QUERIES(MEDIUM DEVICES) ===== */\n\n  @media screen and (max-width: 1024px) {\n    .experience__container {\n      grid-template-columns: 1fr;\n      & > div {\n        width: 80%;\n        padding: 2rem;\n        margin: 0 auto;\n      }\n    }\n\n    .experience__content {\n      padding: 1rem;\n    }\n\n    .experience__details {\n      justify-content: center;\n    }\n  }\n\n  /* ===== MEDIA QUERIES(SMALL DEVICES) ===== */\n\n  @media screen and (max-width: 600px) {\n    .experience__container {\n      gap: 1rem;\n      & > div {\n        width: 100%;\n        padding: 2rem 1rem;\n      }\n    }\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return C=function(){return r},r}var z=s.Z.section(C()),L=[{key:"1",skill:"HTML",text:"Experienced"},{key:"2",skill:"CSS",text:"Intermediate"},{key:"3",skill:"JavaScript",text:"Experienced"},{key:"4",skill:"Bootstrap",text:"Experienced"},{key:"5",skill:"React",text:"Experienced"}],U=[{key:"1",skill:"Node JS",text:"Experienced"},{key:"2",skill:"Java",text:"Experienced"},{key:"3",skill:"GraphQL",text:"Basic"},{key:"4",skill:"MariaDB",text:"Basic"},{key:"5",skill:"PostgreSQL",text:"Basic"}];var P=function(){return(0,t.jsxs)(z,{id:"experience",children:[(0,t.jsx)("h5",{children:"What Skills I Have"}),(0,t.jsx)("h2",{children:"My Experience"}),(0,t.jsxs)("div",{className:"container experience__container",children:[(0,t.jsxs)("div",{className:"experience__frontend",children:[(0,t.jsx)("h3",{children:"Frontend Development"}),(0,t.jsx)("div",{className:"experience__content",children:L.map((function(n){return(0,t.jsxs)("article",{className:"experience__details",children:[(0,t.jsx)(h.LHN,{className:"experience__details-icon"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{children:n.skill}),(0,t.jsx)("small",{className:"text-light",children:n.text})]})]},n.key)}))})]}),(0,t.jsxs)("div",{className:"experience__backend",children:[(0,t.jsx)("h3",{children:"Backend Development"}),(0,t.jsx)("div",{className:"experience__content",children:U.map((function(n){return(0,t.jsxs)("article",{className:"experience__details",children:[(0,t.jsx)(h.LHN,{className:"experience__details-icon"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{children:n.skill}),(0,t.jsx)("small",{className:"text-light",children:n.text})]})]},n.key)}))})]})]})]})};function R(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function Q(n){return function(n){if(Array.isArray(n))return R(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"===typeof n)return R(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return R(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(){var n,e,r=(n=["\n  .services__container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 3rem;\n  }\n\n  .service {\n    background: var(--color-bg-variant);\n    border-radius: 0 0 2rem 2rem;\n    border: 1px solid var(--color-primary);\n    height: fit-content;\n    transition: var(--transition);\n    &__head {\n      background: var(--color-primary);\n      padding: 2rem;\n      border-radius: 0 0 2rem 2rem;\n      box-shadow: 0 2rem 1rem rgba(0, 0, 0, 0.1);\n      & h3 {\n        color: var(--color-bg-top);\n        font-size: 1rem;\n        text-align: center;\n      }\n    }\n    &__list {\n      padding: 2rem;\n      & li {\n        display: flex;\n        justify-content: center;\n        gap: 1rem;\n        margin-bottom: 0.8rem;\n      }\n      & p {\n        width: 250px;\n        font-size: 1rem;\n      }\n      &-icon {\n        color: var(--color-primary);\n        margin-top: 4px;\n      }\n    }\n    &:hover {\n      background: transparent;\n      border-color: var(--color-primaty--variant);\n      cursor: default;\n    }\n  }\n\n  /* ===== MEDIA QUERIES(MEDIUM DEVICES) ===== */\n\n  @media screen and (max-width: 1024px) {\n    .services__container {\n      grid-template-columns: 1fr 1fr;\n      gap: 2rem;\n    }\n\n    .service {\n      height: auto;\n    }\n  }\n\n  /* ===== MEDIA QUERIES(SMALL DEVICES) ===== */\n\n  @media screen and (max-width: 600px) {\n    .services__container {\n      grid-template-columns: 1fr;\n      gap: 1.5rem;\n    }\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return V=function(){return r},r}var T=s.Z.section(V());var Z=function(){return(0,t.jsxs)(T,{id:"services",children:[(0,t.jsx)("h5",{children:"What I Offer"}),(0,t.jsx)("h2",{children:"Services"}),(0,t.jsxs)("div",{className:"container services__container",children:[(0,t.jsxs)("article",{className:"service",children:[(0,t.jsx)("div",{className:"service__head",children:(0,t.jsx)("h3",{children:"UI/UX Design"})}),(0,t.jsx)("ul",{className:"service__list",children:Q(Array(7)).map((function(n,e){return(0,t.jsxs)("li",{children:[(0,t.jsx)(y.hXj,{className:"service__list-icon"}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur elit."})]},e)}))})]}),(0,t.jsxs)("article",{className:"service",children:[(0,t.jsx)("div",{className:"service__head",children:(0,t.jsx)("h3",{children:"Web Development"})}),(0,t.jsx)("ul",{className:"service__list",children:Q(Array(8)).map((function(n,e){return(0,t.jsxs)("li",{children:[(0,t.jsx)(y.hXj,{className:"service__list-icon"}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur elit."})]},e)}))})]}),(0,t.jsxs)("article",{className:"service",children:[(0,t.jsx)("div",{className:"service__head",children:(0,t.jsx)("h3",{children:"Content Creation"})}),(0,t.jsx)("ul",{className:"service__list",children:Q(Array(7)).map((function(n,e){return(0,t.jsxs)("li",{children:[(0,t.jsx)(y.hXj,{className:"service__list-icon"}),(0,t.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur elit."})]},e)}))})]})]})]})};function B(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function X(n){return function(n){if(Array.isArray(n))return B(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"===typeof n)return B(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return B(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(){var n,e,r=(n=["\n  .portfolio__container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 2.5rem;\n  }\n\n  .portfolio__item {\n    background: var(--color-bg-variant);\n    padding: 1.3rem;\n    border-radius: 2rem;\n    border: 1px solid transparent;\n    transition: var(--transition);\n    & h3 {\n      text-align: center;\n      margin: 1.2rem 0 2rem;\n    }\n    &-cta {\n      display: flex;\n      justify-content: center;\n      gap: 1rem;\n      margin-bottom: 1rem;\n    }\n    &-image {\n      width: 100%;\n      height: 300px;\n      position: relative;\n      & .image {\n        width: 100%;\n        height: 100%;\n        border-radius: 1.5rem;\n        position: relative !important;\n        object-fit: cover; // Optional\n      }\n    }\n    &:hover {\n      border-color: var(--color-primary-variant);\n      background: transparent;\n    }\n  }\n\n  /* ===== MEDIA QUERIES(MEDIUM DEVICES) ===== */\n\n  @media screen and (max-width: 1024px) {\n    .portfolio__container {\n      grid-template-columns: 1fr 1fr;\n      gap: 1.2rem;\n    }\n\n    .portfolio__item {\n      &-image {\n        width: 100%;\n        height: 250px;\n      }\n    }\n  }\n\n  /* ===== MEDIA QUERIES(SMALL DEVICES) ===== */\n\n  @media screen and (max-width: 600px) {\n    .portfolio__container {\n      grid-template-columns: 1fr;\n      gap: 1.2rem;\n    }\n\n    .portfolio__item {\n      &-image {\n        width: 100%;\n        height: 250px;\n      }\n    }\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return J=function(){return r},r}var q=s.Z.section(J());var F=function(){return(0,t.jsxs)(q,{id:"portfolio",children:[(0,t.jsx)("h5",{children:"My Recent Work"}),(0,t.jsx)("h2",{children:"Portfolio"}),(0,t.jsx)("div",{className:"container portfolio__container",children:X(Array(6)).map((function(n,e){return(0,t.jsxs)("article",{className:"portfolio__item",children:[(0,t.jsx)("div",{className:"portfolio__item-image",children:(0,t.jsx)(a(),{alt:"portfolio".concat(e+1),src:"/portfolio".concat(e+1,".jpg"),layout:"fill",className:"image"})}),(0,t.jsx)("h3",{children:"This is a portfolio item title"}),(0,t.jsxs)("div",{className:"portfolio__item-cta",children:[(0,t.jsx)(c(),{href:"https://github.com",children:(0,t.jsx)("a",{target:"_blank",className:"btn",children:"Github"})}),(0,t.jsx)(c(),{href:"https://dribbble.com/Alien_pixels",children:(0,t.jsx)("a",{target:"_blank",className:"btn btn-primary",children:"Live Demo"})})]})]},e)}))})]})},H=r(8352),W=r(1911);r(1082),r(6797);function G(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}function K(n){return function(n){if(Array.isArray(n))return G(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"===typeof n)return G(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return G(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(){var n,e,r=(n=["\n  .container {\n    &.testimonials__container {\n      width: 40%;\n      padding-bottom: 4rem;\n    }\n  }\n\n  .testimonial {\n    background: var(--color-bg-variant);\n    text-align: center;\n    padding: 2rem;\n    border-radius: 2rem;\n    user-select: none;\n  }\n\n  .client__avatar {\n    width: 4rem;\n    aspect-ratio: 1/1;\n    overflow: hidden;\n    border-radius: 50%;\n    margin: 0 auto 1rem;\n    border: 0.4rem solid var(--color-primary-variant);\n    position: relative;\n    & .image {\n      width: 100%;\n      height: 100%;\n      border-radius: 1.5rem;\n      position: relative !important;\n      object-fit: cover; // Optional\n    }\n  }\n\n  .client__review {\n    color: var(--color-light);\n    font-weight: 300;\n    display: block;\n    width: 80%;\n    margin: 0.8rem auto 0;\n  }\n\n  .swiper-pagination-bullet.swiper-pagination-bullet-active {\n    background: var(--color-primary);\n  }\n\n  /* ===== MEDIA QUERIES(MEDIUM DEVICES) ===== */\n\n  @media screen and (max-width: 1024px) {\n    .container {\n      &.testimonials__container {\n        width: 60%;\n      }\n    }\n  }\n\n  /* ===== MEDIA QUERIES(SMALL DEVICES) ===== */\n\n  @media screen and (max-width: 600px) {\n    .container {\n      &.testimonials__container {\n        width: var(--container-width-sm);\n      }\n    }\n\n    .client__review {\n      width: var(--container-width-sm);\n    }\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return Y=function(){return r},r}var $=s.Z.section(Y());var nn=function(){return(0,t.jsxs)($,{id:"testmonials",children:[(0,t.jsx)("h5",{children:"Review from clients"}),(0,t.jsx)("h2",{children:"Testimonials"}),(0,t.jsx)(H.tq,{className:"container testimonials__container",spaceBetween:40,slidesPerView:1,pagination:!0,modules:[W.tl],loop:!0,children:K(Array(4)).map((function(n,e){return(0,t.jsxs)(H.o5,{className:"testimonial",children:[(0,t.jsx)("div",{className:"client__avatar",children:(0,t.jsx)(a(),{alt:"avatar".concat(e+1),src:"/avatar".concat(e+1,".jpg"),layout:"fill",className:"image"})}),(0,t.jsx)("h5",{className:"client__name",children:"Ernest Achieer"}),(0,t.jsx)("small",{className:"client__review",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nihil adipisci aliquid harum dolore minus soluta tenetur laudantium labore molestias, doloribus iste officia, laboriosam, dignissimos tempora eveniet animi blanditiis ipsum!"})]},e)}))})]})},en=r(5434),rn=r(9101);function tn(){var n,e,r=(n=["\n  .container.contact__container {\n    width: 58%;\n    display: grid;\n    grid-template-columns: 30% 58%;\n    gap: 12%;\n  }\n\n  .contact__options {\n    display: flex;\n    flex-direction: column;\n    gap: 1.2rem;\n  }\n\n  .contact__option {\n    background: var(--color-bg-variant);\n    padding: 1.2rem;\n    border-radius: 1.2rem;\n    text-align: center;\n    border: 1px solid transparent;\n    transition: var(--transition);\n    &:hover {\n      background: transparent;\n      border-color: var(--color-primary-variant);\n    }\n    &-icon {\n      font-size: 1.5rem;\n      margin-bottom: 0.5rem;\n    }\n\n    & a {\n      margin-top: 0.7rem;\n      display: inline-block;\n      font-size: 0.8rem;\n    }\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    gap: 1.2rem;\n  }\n\n  input,\n  textarea {\n    font-family: 'Poppins', sans-serif;\n    width: 100%;\n    padding: 1.5rem;\n    border-radius: 0.5rem;\n    background: transparent;\n    border: 2px solid var(--color-primary-variant);\n    resize: none;\n    color: var(--color-white);\n  }\n\n  /* ===== MEDIA QUERIES(MEDIUM DEVICES) ===== */\n\n  @media screen and (max-width: 1024px) {\n    .container.contact__container {\n      grid-template-columns: 1fr;\n      gap: 2rem;\n    }\n  }\n\n  /* ===== MEDIA QUERIES(SMALL DEVICES) ===== */\n\n  @media screen and (max-width: 600px) {\n    .container.contact__container {\n      width: var(--container-width-sm);\n    }\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return tn=function(){return r},r}var an=s.Z.section(tn());var on=function(){var n=(0,E.useRef)(null);return(0,t.jsxs)(an,{id:"contact",children:[(0,t.jsx)("h5",{children:"Get In Touch"}),(0,t.jsx)("h2",{children:"Contact Me"}),(0,t.jsxs)("div",{className:"container contact__container",children:[(0,t.jsxs)("div",{className:"contact__options",children:[(0,t.jsxs)("article",{className:"contact__option",children:[(0,t.jsx)(en.F8X,{className:"contact__option-icon"}),(0,t.jsx)("h4",{children:"Email"}),(0,t.jsx)("h5",{children:"chkftm12@gmail.com"}),(0,t.jsx)(c(),{href:"mailto:chkftm12@gmail.com",children:(0,t.jsx)("a",{target:"_blank",children:"Send a message"})})]}),(0,t.jsxs)("article",{className:"contact__option",children:[(0,t.jsx)(_.idJ,{className:"contact__option-icon"}),(0,t.jsx)("h4",{children:"Github"}),(0,t.jsx)("h5",{children:"https://github.com/KwonCheulJin"}),(0,t.jsx)(c(),{href:"https://github.com/KwonCheulJin",children:(0,t.jsx)("a",{target:"_blank",children:"Let's go visiting"})})]})]}),(0,t.jsxs)("form",{ref:n,onSubmit:function(e){e.preventDefault(),e.target.reset(),rn.ZP.sendForm("service_69ma8kf","template_qn7ojfk",n.current,"Uk4XfqYlWSS1hIEOb").then((function(n){console.log(n.text)}),(function(n){console.log(n.text)}))},children:[(0,t.jsx)("input",{type:"text",name:"name",placeholder:"Your Full Name",required:!0,autoComplete:"off"}),(0,t.jsx)("input",{type:"email",name:"email",placeholder:"Your Email",required:!0,autoComplete:"off"}),(0,t.jsx)("textarea",{name:"message",rows:7,placeholder:"Your Message"}),(0,t.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Send Message"})]})]})]})},cn=r(1649);function sn(){var n,e,r=(n=["\n  background: var(--color-primary);\n  padding: 3rem 0;\n  text-align: center;\n  font-size: 0.9rem;\n  margin-top: 7rem;\n\n  a {\n    color: var(--color-bg-top);\n    &:hover {\n      color: var(--color-white);\n    }\n  }\n\n  .footer__logo {\n    font-size: 2rem;\n    font-weight: 500;\n    margin-bottom: 2rem;\n    display: inline-block;\n  }\n\n  .permalinks {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 2rem;\n    margin: 0 auto 3rem;\n  }\n\n  .footer__socails {\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n    margin-bottom: 4rem;\n\n    & a {\n      background: var(--color-bg-top);\n      color: var(--color-white);\n      padding: 0.8rem;\n      border-radius: 0.7rem;\n      display: flex;\n      border: 1px solid transparent;\n\n      &:hover {\n        background: transparent;\n        color: var(--color-bg-top);\n        border-color: var(--color-bg-top);\n      }\n    }\n  }\n\n  .footer__copyright {\n    margin-bottom: 4rem;\n    color: var(--color-bg-top);\n  }\n\n  /* ===== MEDIA QUERIES(SMALL DEVICES) ===== */\n\n  @media screen and (max-width: 600px) {\n    .permalinks {\n      flex-direction: column;\n      gap: 1.5rem;\n    }\n\n    .footer__socails {\n      margin-bottom: 2.6rem;\n    }\n  }\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return sn=function(){return r},r}var ln=s.Z.footer(sn());var dn=function(){return(0,t.jsxs)(ln,{children:[(0,t.jsx)(c(),{href:"#",children:(0,t.jsx)("a",{className:"footer__logo",children:"Charles"})}),(0,t.jsxs)("ul",{className:"permalinks",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#",children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#about",children:"About"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#experience",children:"Experience"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#services",children:"Services"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#testimonials",children:"Testimonials"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#contact",children:"Contact"})})]}),(0,t.jsxs)("div",{className:"footer__socails",children:[(0,t.jsx)(c(),{href:"https://facebook.com",children:(0,t.jsx)("a",{children:(0,t.jsx)(p.tBk,{})})}),(0,t.jsx)(c(),{href:"https://instagram.com",children:(0,t.jsx)("a",{children:(0,t.jsx)(u.JID,{})})}),(0,t.jsx)(c(),{href:"https://twitter.com",children:(0,t.jsx)("a",{children:(0,t.jsx)(cn.JUd,{})})})]}),(0,t.jsx)("div",{className:"footer__copyright",children:(0,t.jsx)("small",{children:"\xa9 EGATOR Tutorials. All rights reserved"})})]})},mn=r(5529);var hn=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(mn.Z,{title:"Charles's Practice"}),(0,t.jsx)(b,{}),(0,t.jsx)(I,{}),(0,t.jsx)(D,{}),(0,t.jsx)(P,{}),(0,t.jsx)(Z,{}),(0,t.jsx)(F,{}),(0,t.jsx)(nn,{}),(0,t.jsx)(on,{}),(0,t.jsx)(dn,{})]})}}},function(n){n.O(0,[876,937,228,866,445,13,874,617,782,996,961,774,888,179],(function(){return e=5206,n(n.s=e);var e}));var e=n.O();_N_E=e}]);