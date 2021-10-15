import {resultadoBuscaCep, dadosDoCep,} from './module.js';
const btnBuscarCep = document.querySelector('#btnBuscarCep');
const inputCep = document.querySelector('#inputCep');
btnBuscarCep.addEventListener('click',()=>{
    dadosDoCep(inputCep.value);
});