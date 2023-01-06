/*! For license information please see 735.af72787d.chunk.js.LICENSE.txt */
(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[735],{3275:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});n(2791);var r=n(184),a=function(){return(0,r.jsxs)("div",{className:"footerIcons",children:[(0,r.jsx)("a",{href:"https://www.youtube.com/",children:(0,r.jsx)("i",{className:"fa-brands fa-youtube  "})}),(0,r.jsx)("i",{className:"fa-brands fa-facebook"}),(0,r.jsx)("i",{className:"fa-brands fa-twitter"})]})},i=function(){return(0,r.jsxs)("div",{className:"footer",children:[(0,r.jsx)("h1",{className:"footerheading",children:"The Generics"}),(0,r.jsx)(a,{})]})}},6056:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(2791),a=(n(4347),n(5710)),i=n(7689),s=n(1087),c=n(885),o=n(6157),l=n(2144),u=n(473),d=n(2591),f=n(5939),m=n(184),h=function(e){var t=(0,r.useContext)(f.Z),n=(0,r.useCallback)((function(){t.removeItem(e.id);e.id,e.title,e.imgurl,e.price,Number(1)}),[e,t.mail]),a=(0,r.useCallback)((function(){t.removeentireItem(e.id)}),[e,t.mail]),i=(0,r.useCallback)((function(){var n={id:e.id,title:e.title,imgurl:e.imgurl,price:e.price,quantity:Number(1)};t.addItem(n)}),[e,t.mail]);return(0,m.jsxs)("tr",{children:[(0,m.jsxs)("td",{children:[(0,m.jsx)("img",{src:e.imgurl,alt:"item",className:"cart_image"}),(0,m.jsx)("span",{className:"cart_item_title ",children:e.title})]}),(0,m.jsx)("td",{children:(0,m.jsxs)("h6",{className:"cartItemPrice",children:["$ ",e.price]})}),(0,m.jsxs)("td",{children:[(0,m.jsxs)("span",{className:"cart_quantity",children:[e.quantity," "]}),(0,m.jsx)("button",{className:"cart_inc_dec",onClick:n,children:"-"}),(0,m.jsx)("button",{className:"cart_inc_dec",onClick:i,children:"+"}),(0,m.jsx)(o.Z,{variant:"danger",className:"removebtn",onClick:a,children:"Remove"})]})]})},x=function(e){var t=(0,r.useContext)(f.Z),n=0;return t.items.forEach((function(e){n+=Number(e.price)*Number(e.quantity),console.log(n)})),(0,m.jsxs)(l.Z,{className:"cart_card",children:[(0,m.jsx)(u.Z,{className:"cart_close",onClick:function(t){e.oncartclose(!1)}}),(0,m.jsx)("h2",{className:"cart_heading",children:"Cart"}),(0,m.jsx)(l.Z.Body,{className:"card_body",children:(0,m.jsxs)(d.Z,{children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"Item"}),(0,m.jsx)("th",{children:"Price"}),(0,m.jsx)("th",{children:"Quantity"})]})}),(0,m.jsx)("tbody",{children:t.items.map((function(e){return(0,m.jsx)(h,{id:e.id,imgurl:e.imgurl,title:e.title,price:e.price,quantity:e.quantity},e.id)}))})]})}),(0,m.jsx)("h5",{className:"carttotal",children:"Total"}),(0,m.jsxs)("h5",{className:"carttotalnumber",children:["$ ",n]}),(0,m.jsx)(o.Z,{className:"purchase_btn",children:"Purchase"})]})},p=(n(4164),function(){var e=(0,r.useState)(!1),t=(0,c.Z)(e,2),n=t[0],a=t[1],i=(0,r.useContext)(f.Z),s=0;i.items.forEach((function(e){s+=e.quantity}));var l=(0,r.useCallback)((function(e){a(!0),console.log(i.items)}),[n]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.Z,{className:"cart",variant:"outline-primary",onClick:l,children:"Cart"}),(0,m.jsx)("span",{className:"cart_item_number",children:s}),n&&(0,m.jsx)(x,{oncartclose:a})]})}),v=function(){var e=(0,r.useContext)(f.Z),t=(0,i.s0)(),n={color:"green"};return(0,m.jsx)("div",{children:(0,m.jsx)(a.Z,{bg:"dark",variant:"dark",className:"navbar",fixed:"top",children:(0,m.jsxs)("div",{className:"d-flex flex-row",children:[(0,m.jsx)(s.OL,{to:"/",activeStyle:n,className:"navbarheading ",children:"Home"}),(0,m.jsx)(s.OL,{to:"/store",activeStyle:n,className:"navbarstore",children:"Store"}),(0,m.jsx)(s.OL,{to:"/about",activeStyle:n,className:"navbarabout ",children:"About"}),(0,m.jsx)(s.OL,{to:"/contactus",activeStyle:n,className:"navbarcontact ",children:"ContactUs"}),!e.isLogin&&(0,m.jsx)("button",{onClick:function(){t("/login")},className:"navbarlogin",children:"Login"}),e.isLogin&&(0,m.jsx)("button",{onClick:function(){e.logout(),t("/")},className:"logoutbtn",children:"Logout"}),(0,m.jsx)(p,{})]})})})}},2335:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});n(2791);var r=[{date:"DEC 8",city:"Delhi",place:"Tajmahal",id:1},{date:"DEC 7",city:"Delhi",place:"Redfort",id:2},{date:"DEC 6",city:"Delhi",place:"Redfort",id:3},{date:"DEC 3",city:"Delhi",place:"Redfort",id:4}],a=n(6157),i=n(184),s=function(e){return(0,i.jsxs)("div",{className:"d-flex flex-row tourdetails",children:[(0,i.jsx)("h5",{className:" toursdate",children:e.date}),(0,i.jsx)("div",{className:" tourscity",children:e.city}),(0,i.jsx)("div",{className:" toursplace",children:e.place}),(0,i.jsx)(a.Z,{className:"buytickets",children:"BUY TICKETS"})]})},c=function(){return(0,i.jsxs)("div",{className:"tours",children:[(0,i.jsx)("h3",{className:"toursheader",children:"Tours"}),r.map((function(e){return(0,i.jsx)(s,{date:e.date,city:e.city,place:e.place},e.id)}))]})},o=n(6056),l=function(){return(0,i.jsxs)("div",{className:"homeheading",children:[(0,i.jsx)("h1",{children:"The Generics"}),(0,i.jsx)("button",{className:"play",children:"\u25ba"})]})},u=n(3275),d=function(){return(0,i.jsxs)("div",{className:"d-flex flex-column",children:[(0,i.jsx)(o.Z,{}),(0,i.jsx)(l,{}),(0,i.jsx)(c,{}),(0,i.jsx)(u.Z,{})]})}},1694:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var s=a.apply(null,n);s&&e.push(s)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},888:function(e,t,n){"use strict";var r=n(9047);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,i,s){if(s!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},6157:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(1413),a=n(885),i=n(5987),s=n(1694),c=n.n(s),o=n(2791),l=n(184),u=["as","disabled"];function d(e){var t=e.tagName,n=e.disabled,r=e.href,a=e.target,i=e.rel,s=e.role,c=e.onClick,o=e.tabIndex,l=void 0===o?0:o,u=e.type;t||(t=null!=r||null!=a||null!=i?"a":"button");var d={tagName:t};if("button"===t)return[{type:u||"button",disabled:n},d];var f=function(e){(n||"a"===t&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),n?e.stopPropagation():null==c||c(e)};return"a"===t&&(r||(r="#"),n&&(r=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:n?void 0:l,href:r,target:"a"===t?a:void 0,"aria-disabled":n||void 0,rel:"a"===t?i:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},d]}var f=o.forwardRef((function(e,t){var n=e.as,r=e.disabled,i=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,u),s=d(Object.assign({tagName:n,disabled:r},i)),c=(0,a.Z)(s,2),o=c[0],f=c[1].tagName;return(0,l.jsx)(f,Object.assign({},i,o,{ref:t}))}));f.displayName="Button";var m=n(162),h=["as","bsPrefix","variant","size","active","className"],x=o.forwardRef((function(e,t){var n=e.as,s=e.bsPrefix,o=e.variant,u=e.size,f=e.active,x=e.className,p=(0,i.Z)(e,h),v=(0,m.vE)(s,"btn"),b=d((0,r.Z)({tagName:n},p)),j=(0,a.Z)(b,2),y=j[0],N=j[1].tagName;return(0,l.jsx)(N,(0,r.Z)((0,r.Z)((0,r.Z)({},y),p),{},{ref:t,className:c()(x,v,f&&"active",o&&"".concat(v,"-").concat(o),u&&"".concat(v,"-").concat(u),p.href&&p.disabled&&"disabled")}))}));x.displayName="Button",x.defaultProps={variant:"primary",active:!1,disabled:!1};var p=x},162:function(e,t,n){"use strict";n.d(t,{pi:function(){return c},vE:function(){return s},zG:function(){return o}});var r=n(2791),a=(n(184),["xxl","xl","lg","md","sm","xs"]),i=r.createContext({prefixes:{},breakpoints:a,minBreakpoint:"xs"});i.Consumer,i.Provider;function s(e,t){var n=(0,r.useContext)(i).prefixes;return e||n[t]||t}function c(){return(0,r.useContext)(i).breakpoints}function o(){return(0,r.useContext)(i).minBreakpoint}},6543:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(1413),a=n(5987),i=n(1694),s=n.n(i),c=/-(.)/g;var o=n(2791),l=n(162),u=n(184),d=["className","bsPrefix","as"],f=function(e){return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.displayName,i=void 0===n?f(e):n,c=t.Component,m=t.defaultProps,h=o.forwardRef((function(t,n){var i=t.className,o=t.bsPrefix,f=t.as,m=void 0===f?c||"div":f,h=(0,a.Z)(t,d),x=(0,l.vE)(o,e);return(0,u.jsx)(m,(0,r.Z)({ref:n,className:s()(i,x)},h))}));return h.defaultProps=m,h.displayName=i,h}},4347:function(){},5987:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(3366);function a(e,t){if(null==e)return{};var n,a,i=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},3366:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=735.af72787d.chunk.js.map