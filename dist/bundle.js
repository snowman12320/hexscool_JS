(()=>{var e={745:()=>{del_done.addEventListener("click",(e=>{e.preventDefault(),base_data.filter((e=>"checked"===e.checked)).length>0?(async()=>{const{value:e}=await Swal.fire({title:"Input delete validation",input:"text",inputPlaceholder:"Input delete",showCancelButton:!0,inputValidator:e=>new Promise((t=>{"delete"===e?t():t("You need to input delete :)")}))});e&&(base_data=base_data.filter((e=>""===e.checked)),filterList(),Swal.fire("Your all done has been deleted."))})():Swal.fire({title:"The done was empty.",icon:"info"})}))}},t={};function n(l){var a=t[l];if(void 0!==a)return a.exports;var c=t[l]={exports:{}};return e[l](c,c.exports,n),c.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(745);const e=document.querySelector("#input_txt"),t=document.querySelector("#add_btn");let l=[];function a(){let t={content:e.value,id:(new Date).getTime(),checked:""};""!=t.content.trim()?(l.unshift(t),localStorage.setItem("content",l),e.value="",r()):Swal.fire({title:" Please fill in it ! ",icon:"warning",confirmButtonColor:"#1d4289"})}t.addEventListener("click",a),e.addEventListener("keyup",(e=>{"Enter"===e.key&&a()}));const c=document.querySelector("#inner_list");c.addEventListener("click",(e=>{let t=parseInt(e.target.closest("li").dataset.id);if(e.target.classList.contains("delete")){e.preventDefault();let n=e.target.closest("li").querySelector("span").textContent;Swal.fire({title:" Are you sure ",text:` Confirm delete "${n}" ? `,icon:"warning",showCancelButton:!0,confirmButtonColor:"#1d4289",cancelButtonColor:"#c9082a",confirmButtonText:"Yes, delete it!"}).then((e=>{e.isConfirmed&&(l=l.filter((e=>e.id!==t)),Swal.fire("Deleted!","Your item has been deleted.","success"),r())}))}else l.forEach((e=>{e.id===t&&(""===e.checked?e.checked="checked":e.checked="")}));r()}));let i="all";function r(){let e=[];e="all"===i?l:"work"===i?l.filter((e=>""===e.checked)):l.filter((e=>"checked"===e.checked)),document.querySelector("#work_num").textContent=l.filter((e=>""===e.checked)).length,function(e){let t="";e.forEach((e=>{t+=`<li data-id="${e.id}">\n          <label class="checkbox" for="">\n            <input type="checkbox" ${e.checked}/>\n            <span>${e.content}</span>\n          </label>\n          <a href="#" class="delete" id="btn_del"></a>\n     </li>`})),c.innerHTML=t}(e)}tab_list.addEventListener("click",(function(e){i=e.target.dataset.tab,document.querySelectorAll("#tab_list li").forEach((e=>{e.dataset.tab===i?e.classList.add("active"):e.classList.remove("active")})),r()}))})()})();