import hamburguerMenu from "./js/hamburguer_menu.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburguerMenu('.panel-btn','.panel','.panel__menu');
})