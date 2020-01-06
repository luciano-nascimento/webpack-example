//$ é o nome do import feito
import $ from 'jquery';
// import './css/style.css';
import './css/teste.scss'

import CameraGallery from './images/spitfire.png';

import Botao from './components/botao/index.js';


$(function(){
    
    //teste com componentes
    let botao = new Botao();
    botao.setTitle('Testador');
    botao.setClick(function(){
        alert("CLICOU");
    });
    $('.area').html( botao.render() );
    
    // //alert("Estou functionando");
    // $('#botao').on('click', function(){
    //     $('h1').html('Olá mundo alterado !!!');
    //     $(this).addClass('botao-um');

    //     $('#imagem').attr('src', CameraGallery);
    // });
});

