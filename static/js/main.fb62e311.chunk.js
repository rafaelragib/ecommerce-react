(this["webpackJsonpecommerce-react"]=this["webpackJsonpecommerce-react"]||[]).push([[0],{105:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(21),i=n.n(r),o=(n(66),n(16)),s=n.n(o),l=n(20),d=n(35),u=n(121),j=n(122),b=n(123),p=n(124),m=n(125),h=n(126),x=n(19),f=n(119),O=n(10),g=Object(f.a)((function(t){return{appBar:Object(x.a)({boxShadow:"none",borderBottom:"1px solid rgba(0, 0, 0, 0.12)"},t.breakpoints.up("sm"),{width:"calc(100% - ".concat(0,"px)"),marginLeft:0}),title:{flexGrow:1,alignItems:"center",display:"flex",textDecoration:"none"},image:{marginRight:"10px"},grow:{flexGrow:1},search:Object(x.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(O.b)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(O.b)(t.palette.common.white,.25)},marginRight:t.spacing(2),marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:t.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(x.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),"px)"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("md"),{width:"20ch"})}})),v=n.p+"static/media/apple-touch-icon.f7168e7d.png",y=n(8),C=n(26),w=n(2),k=function(t){var e=t.totalItems,n=g(),a=Object(y.f)();return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(u.a,{position:"fixed",className:n.AppBar,color:"inherit",children:Object(w.jsxs)(j.a,{children:[Object(w.jsxs)(b.a,{component:C.b,to:"/ecommerce-react/",varient:"h6",className:n.title,color:"inherit",children:[Object(w.jsx)("img",{src:v,alt:"FarmHouse",height:"25px",className:n.image}),"FarmHouse"]}),Object(w.jsx)("div",{className:n.grow}),"/ecommerce-react/"===a.pathname&&Object(w.jsx)("div",{className:n.button,children:Object(w.jsx)(p.a,{component:C.b,to:"/cart","aria-label":"Show cart items",color:"inherit",children:Object(w.jsx)(m.a,{badgeContent:e,color:"secondary",children:Object(w.jsx)(h.a,{})})})})]})})})},N=n(132),_=n(127),B=n(128),F=n(129),R=n(130),S=n(131),I=Object(f.a)((function(){return{root:{maxWidth:"100%"},media:{height:0,paddingTop:"56.25%"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}}));var T=function(t){var e=t.product,n=t.onAddToCart,a=I();return Object(w.jsxs)(_.a,{className:a.root,children:[Object(w.jsx)(B.a,{className:a.media,image:e.media.source,title:e.name}),Object(w.jsxs)(F.a,{children:[Object(w.jsxs)("div",{className:a.cardContent,children:[Object(w.jsx)(b.a,{variant:"h5",gutterBottom:!0,children:e.name}),Object(w.jsx)(b.a,{variant:"h5",children:e.price.formatted_with_symbol})]}),Object(w.jsx)(b.a,{dangerouslySetInnerHTML:{__html:e.description},variant:"body2",color:"textSecondary"}),Object(w.jsx)(R.a,{disableSpacing:!0,className:a.cardAction,children:Object(w.jsx)(p.a,{"aria-label":"shopping cart",onClick:function(){return n(e.id,1)},children:Object(w.jsx)(S.a,{})})})]})]})},A=Object(f.a)((function(t){return{toolbar:t.mixins.toolbar,content:{flexGrow:1,backgroundColor:t.palette.background.default,padding:t.spacing(3)},root:{flexGrow:1}}})),L=function(t){var e=t.products,n=t.onAddToCart,a=A();return Object(w.jsxs)("main",{className:a.content,children:[Object(w.jsx)("div",{className:a.toolbar}),Object(w.jsx)(N.a,{container:!0,justify:"center",spacing:4,children:e.map((function(t){return Object(w.jsx)(N.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(w.jsx)(T,{product:t,onAddToCart:n})},t.id)}))})]})},E=n(133),D=n(134),q=Object(f.a)((function(){return{media:{height:260},cardContent:{display:"flex",justifyContent:"space-between"},cartActions:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),z=function(t){var e=t.item,n=t.handleUpdateCartQty,a=t.handleRemoveFromCart,c=q();return Object(w.jsxs)(_.a,{children:[Object(w.jsx)(B.a,{image:e.media.source,alt:e.name,className:c.media}),Object(w.jsxs)(F.a,{className:c.CardContent,children:[Object(w.jsx)(b.a,{variant:"h4",children:e.name}),Object(w.jsx)(b.a,{variant:"h5",children:e.line_total.formatted_with_symbol})]}),Object(w.jsxs)(R.a,{className:c.CardActions,children:[Object(w.jsxs)("div",{className:c.buttons,children:[Object(w.jsx)(E.a,{type:"button",size:"small",onClick:function(){return n(e.id,e.quantity-1)},children:"-"}),Object(w.jsx)(b.a,{children:e.quantity}),Object(w.jsx)(E.a,{type:"button",size:"small",onClick:function(){return n(e.id,e.quantity+1)},children:"+"})]}),Object(w.jsx)(E.a,{variant:"contained",type:"button",color:"secondary",onClick:function(){return a(e.id)},children:"Remove"})]})]})},G=Object(f.a)((function(t){var e;return{toolbar:t.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(e={minWidth:"150px"},Object(x.a)(e,t.breakpoints.down("xs"),{marginBottom:"5px"}),Object(x.a)(e,t.breakpoints.up("xs"),{marginRight:"20px"}),e),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),Q=function(t){var e=t.cart,n=t.handleUpdateCartQty,a=t.handleRemoveFromCart,c=t.handleEmptyCart,r=G(),i=function(){return Object(w.jsx)(b.a,{variant:"subtitle1",children:"You have an empty Cart"})},o=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(N.a,{container:!0,spacing:3,children:e.line_items.map((function(t){return Object(w.jsx)(N.a,{item:!0,xs:12,sm:4,children:Object(w.jsx)(z,{item:t,handleUpdateCartQty:n,handleRemoveFromCart:a})},t.id)}))}),Object(w.jsxs)("div",{className:r.cardDetails,children:[Object(w.jsxs)(b.a,{varient:"h4",children:["Subtotal:",e.subtotal.formatted_with_symbol]}),Object(w.jsxs)("div",{children:[Object(w.jsx)(E.a,{className:r.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:c,children:"Empty Cart"}),Object(w.jsx)(E.a,{className:r.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Checkout"})]})]})]})};return e.line_items?Object(w.jsxs)(D.a,{children:[Object(w.jsx)("div",{className:r.toolbar}),Object(w.jsx)(b.a,{className:r.title,variant:"h3",gutterBottom:!0,children:"Shopping Cart"}),e.line_items.length?Object(w.jsx)(o,{}):Object(w.jsx)(i,{})]}):"Loading..."},U=n(51),H=new(n.n(U).a)("pk_test_2449893442860caa4fc819cc767bcb176ee33a711ef68",!0),W=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)([]),i=Object(d.a)(r,2),o=i[0],u=i[1],j=function(){var t=Object(l.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.products.list();case 2:e=t.sent,n=e.data,c(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(l.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.cart.retrieve();case 2:e=t.sent,u(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(l.a)(s.a.mark((function t(e,n){var a,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.cart.add(e,n);case 2:a=t.sent,c=a.cart,u(c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),m=function(){var t=Object(l.a)(s.a.mark((function t(e,n){var a,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.cart.update(e,{quantity:n});case 2:a=t.sent,c=a.cart,u(c);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=Object(l.a)(s.a.mark((function t(e){var n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.cart.remove(e);case 2:n=t.sent,a=n.cart,u(a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(l.a)(s.a.mark((function t(){var e,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H.cart.empty();case 2:e=t.sent,n=e.cart,u(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){j(),b()}),[]),console.log(o),Object(w.jsx)("div",{children:Object(w.jsxs)(C.a,{children:[Object(w.jsx)(k,{totalItems:o.total_items}),Object(w.jsxs)(y.c,{children:[Object(w.jsx)(y.a,{exact:!0,path:"/ecommerce-react/",children:Object(w.jsx)(L,{products:n,onAddToCart:p})}),Object(w.jsx)(y.a,{exact:!0,path:"/ecommerce-react/cart",children:Object(w.jsx)(Q,{cart:o,handleUpdateCartQty:m,handleRemoveFromCart:h,handleEmptyCart:x})})]})]})})},J=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,136)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(W,{})}),document.getElementById("root")),J()},66:function(t,e,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.fb62e311.chunk.js.map