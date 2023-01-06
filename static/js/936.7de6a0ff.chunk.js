"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[936],{2139:function(e,t,n){n.d(t,{Z:function(){return h}});var r=n(885),a=n(2791),c=n(6157),i=n(2144),s=n(473),l=n(2591),o=n(5939);n(8507);var u=n(184),d=function(e){var t=(0,a.useContext)(o.Z),n=(0,a.useCallback)((function(){t.removeItem(e.id);e.id,e.title,e.imgurl,e.price,Number(1)}),[e,t.mail]),r=(0,a.useCallback)((function(){t.removeentireItem(e.id)}),[e,t.mail]),i=(0,a.useCallback)((function(){var n={id:e.id,title:e.title,imgurl:e.imgurl,price:e.price,quantity:Number(1)};t.addItem(n)}),[e,t.mail]);return(0,u.jsxs)("tr",{children:[(0,u.jsxs)("td",{children:[(0,u.jsx)("img",{src:e.imgurl,alt:"item",className:"cart_image"}),(0,u.jsx)("span",{className:"cart_item_title ",children:e.title})]}),(0,u.jsx)("td",{children:(0,u.jsxs)("h6",{className:"cartItemPrice",children:["$ ",e.price]})}),(0,u.jsxs)("td",{children:[(0,u.jsxs)("span",{className:"cart_quantity",children:[e.quantity," "]}),(0,u.jsx)("button",{className:"cart_inc_dec",onClick:n,children:"-"}),(0,u.jsx)("button",{className:"cart_inc_dec",onClick:i,children:"+"}),(0,u.jsx)(c.Z,{variant:"danger",className:"removebtn",onClick:r,children:"Remove"})]})]})},m=(n(4164),function(e){var t=(0,a.useContext)(o.Z),n=0;return t.items.forEach((function(e){n+=Number(e.price)*Number(e.quantity),console.log(n)})),(0,u.jsxs)(i.Z,{className:"cart_card",children:[(0,u.jsx)(s.Z,{className:"cart_close",onClick:function(t){e.oncartclose(!1)}}),(0,u.jsx)("h2",{className:"cart_heading",children:"Cart"}),(0,u.jsx)(i.Z.Body,{className:"card_body",children:(0,u.jsxs)(l.Z,{children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{children:"Item"}),(0,u.jsx)("th",{children:"Price"}),(0,u.jsx)("th",{children:"Quantity"})]})}),(0,u.jsx)("tbody",{children:t.items.map((function(e){return(0,u.jsx)(d,{id:e.id,imgurl:e.imgurl,title:e.title,price:e.price,quantity:e.quantity},e.id)}))})]})}),(0,u.jsx)("h5",{className:"carttotal",children:"Total"}),(0,u.jsxs)("h5",{className:"carttotalnumber",children:["$ ",n]}),(0,u.jsx)(c.Z,{className:"purchase_btn",children:"Purchase"})]})}),h=function(){var e=(0,a.useState)(!1),t=(0,r.Z)(e,2),n=t[0],i=t[1],s=(0,a.useContext)(o.Z),l=0;s.items.forEach((function(e){l+=e.quantity}));var d=(0,a.useCallback)((function(e){i(!0),console.log(s.items)}),[n]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.Z,{className:"cart",variant:"outline-primary",onClick:d,children:"Cart"}),(0,u.jsx)("span",{className:"cart_item_number",children:l}),n&&(0,u.jsx)(m,{oncartclose:i})]})}},8507:function(e,t,n){n(2791)},2985:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(4165),a=n(5861),c=n(2791),i=(n(4347),n(184)),s=function(){return(0,i.jsx)("div",{className:"headerheading",children:(0,i.jsx)("h1",{children:"The Generics"})})},l=(n(2139),n(6763)),o=n(5939),u=n(2388),d=function(){var e=(0,c.useContext)(o.Z);return(0,c.useEffect)((function(){if(e.isFirst){var t=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setIsFirst(),t.next=4,u.Z.get("https://ecommerce-application-95e56-default-rtdb.firebaseio.com/cart".concat(e.mail,".json"));case 4:n=t.sent,console.log(n),n.data&&e.addcruditems(n.data),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),alert("error");case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}else{var n=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.put("https://ecommerce-application-95e56-default-rtdb.firebaseio.com/cart".concat(e.mail,".json"),e.items);case 3:t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),alert("error");case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}();n()}}),[e.items]),(0,i.jsxs)("div",{children:[(0,i.jsx)(l.Z,{}),(0,i.jsx)(s,{})]})}},6763:function(e,t,n){var r=n(2791),a=(n(4347),n(5710)),c=n(7689),i=n(1087),s=n(2139),l=n(5939),o=n(184);t.Z=function(){var e=(0,r.useContext)(l.Z),t=(0,c.s0)(),n={color:"green"};return(0,o.jsx)("div",{children:(0,o.jsx)(a.Z,{bg:"dark",variant:"dark",className:"navbar",fixed:"top",children:(0,o.jsxs)("div",{className:"d-flex flex-row",children:[(0,o.jsx)(i.OL,{to:"/",activeStyle:n,className:"navbarheading ",children:"Home"}),(0,o.jsx)(i.OL,{to:"/store",activeStyle:n,className:"navbarstore",children:"Store"}),(0,o.jsx)(i.OL,{to:"/about",activeStyle:n,className:"navbarabout ",children:"About"}),(0,o.jsx)(i.OL,{to:"/contactus",activeStyle:n,className:"navbarcontact ",children:"ContactUs"}),!e.isLogin&&(0,o.jsx)("button",{onClick:function(){t("/login")},className:"navbarlogin",children:"Login"}),e.isLogin&&(0,o.jsx)("button",{onClick:function(){e.logout(),t("/")},className:"logoutbtn",children:"Logout"}),(0,o.jsx)(s.Z,{})]})})})}},5936:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(2791),a=n(4165),c=n(5861),i=n(885),s=n(6157),l=n(5939),o=n(1087),u=(n(8507),n(184)),d=function(e){var t=(0,r.useContext)(l.Z),n=(0,r.useCallback)((function(n){n.preventDefault();var r={id:e.id,title:e.title,imgurl:e.imgurl,price:e.price,quantity:Number(1)};t.addItem(r),console.log(t.mail)}),[e,t.mail]);return(0,u.jsxs)("div",{className:"itemcard ",children:[(0,u.jsx)("h4",{className:"itemtitle",children:e.title}),(0,u.jsx)(o.rU,{to:"/store/"+e.id,children:(0,u.jsx)("div",{className:"itemimg",children:(0,u.jsx)("img",{src:e.imgurl,className:" m-auto",alt:e.title})})}),(0,u.jsxs)("p",{className:"itemprice",children:["$",e.price," ",(0,u.jsx)(s.Z,{className:"add_to_cart",onClick:n,children:"Add to Cart"})]})]})},m=n(2388),h=function(){var e=(0,r.useState)([]),t=(0,i.Z)(e,2),n=t[0],s=t[1];return(0,r.useEffect)((function(){function e(){return(e=(0,c.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.Z.get("https://dummyjson.com/products/?limit=10");case 3:t=e.sent,console.log(t.data.products),s(t.data.products),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,u.jsxs)("div",{className:"itemdetails",children:[(0,u.jsx)("h1",{className:"itemheading",children:"MOBILE PHONES"}),(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"row row-cols-2 gx-4 gy-4 ",children:n.map((function(e){return(0,u.jsx)(d,{className:"col",id:e.id,title:e.title,price:e.price,imgurl:e.thumbnail},e.id)}))})})]})},x=n(2985),f=(n(6871),function(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(x.Z,{}),(0,u.jsx)(h,{})]})})},4347:function(){}}]);
//# sourceMappingURL=936.7de6a0ff.chunk.js.map