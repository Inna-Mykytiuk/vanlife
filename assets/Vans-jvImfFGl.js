import{r as n,j as e}from"./index-DKU1zBHY.js";function r(){const[a,t]=n.useState([]);n.useEffect(()=>{fetch("/api/vans").then(s=>s.json()).then(s=>t(s.vans))},[]);const i=a.map(s=>e.jsxs("div",{className:"van-tile",children:[e.jsx("img",{alt:s.name,src:s.imageUrl}),e.jsxs("div",{className:"van-info",children:[e.jsx("h3",{children:s.name}),e.jsxs("p",{children:["$",s.price,e.jsx("span",{children:"/day"})]})]}),e.jsx("i",{className:`van-type ${s.type} selected`,children:s.type})]},s.id));return e.jsxs("div",{className:"van-list-container",children:[e.jsx("h1",{children:"Explore our van options"}),e.jsx("div",{className:"van-list",children:i})]})}export{r as default};