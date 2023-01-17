'use strict';(function(){async function r(){try{return await (await fetch("https://raw.githubusercontent.com/JhonAponte/Ecommerce_Card/json/categorias.json")).json()}catch(a){alert(a)}}async function t(){try{return await (await fetch("https://raw.githubusercontent.com/JhonAponte/Ecommerce_Card/json/productos.json")).json()}catch(a){alert(a)}}function q(){var a="";for(let f in c){e=new u(c[f].photo,c[f].clothes,c[f].description,c[f].stars,c[f].price,c[f].discount);var b=e.photo,g=e.clothes,h=e.clothes,
k=e.description,d=e.stars,m="";for(var l=1;l<=d;l++)m+="<i class='bi bi-star-fill'></i>";if(5>d)for(l=1;l<=5-d;l++)m+="<i class='bi bi-star-fill grey'></i>";a+=`
        <div class="container">
            <img src= "${b}" alt="${g}" class="card-img">
            <h1 class="name">${h}</h1>
            <p class="description">${k}</p>
            <div class="star">${m}</div>
            <br>
            <h5>${e.price} &emsp;<strike>${e.discount}</strike></h5>
            <br>
            <button class="btn">Comprar</button>
        </div>`}v.innerHTML=a}class u{constructor(a,b,g,h,k,d){this.photo=a;this.clothes=b;this.description=g;this.stars=h;this.price=k;this.discount=d}}var v=document.getElementById("contenedor"),n,c,p,e,w=document.getElementById("imagen");document.getElementById("botones").addEventListener("click",()=>{var a=document.querySelectorAll("#Formulario input");let b={},g=document.querySelector("#imagen").selectedIndex,h=document.querySelector("#imagen").options,k=document.querySelector("#imagen").name;
b[k]=h[g].text;for(let d of a)b[d.name]=d.value;b.clothes=n[g-1];c.push(b);q();a=document.querySelectorAll("#Formulario input");for(let d of a)d.value="";w.selectedIndex=0});document.addEventListener("DOMContentLoaded",async function(){try{var a=await Promise.all([r(),t()]);p=a[0];c=a[1];for(let b in p)n=p[b];for(a=0;8>a;a++)c[a].clothes=n[a];q()}catch(b){alert(b)}})})()
