import fs from "node:fs";
import vm from "node:vm";
import assert from "node:assert/strict";
const html=fs.readFileSync(new URL("./index.html",import.meta.url),"utf8");
const code=html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(code,"inline script found");
new vm.Script(code);
const mem={},hooks={},loc={pathname:"/cliente"},app={innerHTML:""};
const doc={
 getElementById(k){return k==="app"?app:k==="headCart"?{style:{},focus(){}}:k==="headerQuantity"?{textContent:""}:k==="toast"?{textContent:"",classList:{add(){},remove(){}}}:k==="cartClose"?{focus(){}}:k==="priceInput"?{value:"17.50",focus(){}}:k==="status"?{value:"Orçado"}:null},
 querySelectorAll(){return ["cliente","atendimento","gestao"].map(v=>({dataset:{view:v},classList:{toggle(){}}}))},
 addEventListener(k,fn){hooks[k]=fn}
};
const fakeStore={getItem(k){return mem[k]||null},setItem(k,v){mem[k]=v}};
const env={document:doc,localStorage:fakeStore,location:loc,history:{pushState(a,b,p){loc.pathname=p}},window:{addEventListener(k,fn){hooks[k]=fn}},navigator:{clipboard:{writeText(){return Promise.resolve()}}},setTimeout(){},scrollTo(){},prompt(){throw new Error("native prompt forbidden")},confirm(){throw new Error("native confirm forbidden")},console,Date,Number,Object,String,Math,JSON};
vm.runInNewContext(code,env);
const click=dataset=>hooks.click({preventDefault(){},target:{closest(){return{dataset,matches(){return false}}}}});
const saved=key=>JSON.parse(mem["demo77-kumayama-v1-"+key]);
assert.match(app.innerHTML,/A lista da escola/);
assert.match(app.innerHTML,/merch-photo/);
click({add:"caderno"});assert.equal(saved("cart").caderno,1);
click({action:"open-cart"});assert.match(app.innerHTML,/cart-panel is-open/);
click({add:"caderno"});assert.equal(saved("cart").caderno,2);
hooks.keydown({key:"Escape"});assert.doesNotMatch(app.innerHTML,/cart-panel is-open/);
click({action:"send"});assert.equal(loc.pathname,"/atendimento");assert.equal(saved("quotes").length,3);
click({action:"status"});assert.ok(saved("quotes").some(x=>x.created==="Criado nesta demonstração"&&x.status==="Orçado"));
loc.pathname="/gestao";hooks.popstate();assert.match(app.innerHTML,/Mix do catálogo/);
click({price:"caderno"});assert.match(app.innerHTML,/role="dialog"/);
click({action:"save-price"});assert.equal(saved("products").find(x=>x.id==="caderno").price,17.5);
click({toggle:"caderno"});assert.equal(saved("products").find(x=>x.id==="caderno").on,false);
click({action:"reset"});assert.match(app.innerHTML,/Restaurar a simulação/);
click({action:"confirm-reset"});assert.equal(saved("quotes").length,0);
console.log("Kumayama smoke: 13 assertions passed");
