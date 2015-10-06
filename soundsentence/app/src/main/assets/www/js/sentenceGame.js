
var oraciones_sintactica = new Palabras();
var oraciones_semantica = new Palabras();
var oraciones_tematica = new Palabras();
var actual = null;

const SINTACTICA = 1;
const SEMANTICA = 2;
const TEMATICA = 3;
const CAMBIAR_PANTALLA = true;

var my_media;
var sonido_activado = true; 
var timeout_change = 5000;

function crear_nivel(conf_nivel){
	var subniveles = [];
	for (var i = 0; i < conf_nivel.length; i++){
		var configuration = conf_nivel[i][0];
		var sonido = configuration.sound;
		var correcta = configuration.correct;
		var texto = configuration.text;
		var sonidoCorrecto = configuration.wordSound;
		var opciones = [];
		for (var j = 1; j < conf_nivel[i].length;j++){
			var conf = conf_nivel[i][j];
			var op = new OpcionJuego(conf.image, j == correcta);
			opciones.push(op);
		}
		var nivel = new Nivel(texto,sonido, sonidoCorrecto, opciones, conf_nivel.length, configuration.type);
		subniveles.push(nivel);
	}
	return subniveles;
}

function cargar(palabras, niveles){
	var cantidad_niveles = niveles.length;
	
	for (var i = 0; i < cantidad_niveles; i++){
		var nivel = crear_nivel(niveles[i]);
		palabras.agregarNivel(nivel);
	}	
}


function createSentences(){
	//Al iniciar el juego se cargan los niveles para los distintos modos
	cargar(oraciones_sintactica, niveles_oraciones_sintactica);
	cargar(oraciones_semantica, niveles_oraciones_semantica);
	cargar(oraciones_tematica, niveles_oraciones_tematica);
	puntaje = 0;
}


function iniciarJuego(tipo,  nivel){
	//seteamos el juego actual dependiendo del tipo, y jugamos el nivel indicado.
	$( "#progressbar" ).progressbar({value: 0});
	$('#imagenes_juego_0').empty();
	$('#imagenes_juego_1').empty();
	document.getElementById("botonSiguiente").style.visibility = "hidden";
	$.mobile.changePage('#juego');
	sonido_activado = true;
	switch(tipo){
	case SINTACTICA:
		actual = oraciones_sintactica;
		break;
	case SEMANTICA:
		actual = oraciones_semantica;
		break;
	case TEMATICA:
		actual = oraciones_tematica;
		break;
	}
	actual.jugar_nivel(nivel-1);
}

function shuffle(vector){ 
    for(var j, x, i = vector.length; i; j = Math.floor(Math.random() * i), x = vector[--i], vector[i] = vector[j], vector[j] = x);
    return vector;
};

var totalCorrectas = 0;
var totalIncorrectas = 0;
function llamarCambio(){
	$('#imagenes_juego_0').empty();
	$('#imagenes_juego_1').empty();
	document.getElementById("botonSiguiente").style.visibility = "hidden";
	var cambio = actual.cambiarSubnivel();
	if (cambio == FIN_NIVEL){
		var puntaje = actual.getPuntaje();
		for(var property in puntaje){
			if(puntaje.hasOwnProperty(property)){
				var correctas = puntaje[property].correctas;
				var incorrectas = puntaje[property].incorrectas;
				var totales = puntaje[property].totales;
				var porcentajeCorrectas = 0;
				var porcentajeIncorrectas = 0;
				if(totales > 0 ){
					porcentajeCorrectas = parseFloat((correctas * 100 / totales).toPrecision(2));
					porcentajeIncorrectas = parseFloat((incorrectas * 100 / totales).toPrecision(2));
				}
				$('#' + property + 'Correctas').html("<img src='images/check1.png' alt='check'/> <span class='right'>" + correctas + "/" + totales + " (" + porcentajeCorrectas + "%)</span>");
				$('#' + property + 'Incorrectas').html("<img src='images/check2.png' alt='check'/> <span class='wrong'>" + incorrectas + "/" + totales + " (" + porcentajeIncorrectas + "%)</span>");
			}
		}
		$.mobile.changePage('#select_category');
	}
}

function ejecutarAudio(audio){
	ejecutarAudio(audio, !CAMBIAR_PANTALLA);
}

function permitirCambio(texto, sonidoCorrecto){
	var modal = "<div class='modal'><div class='content-modal'><div class='modal-option-result'><img src='images/check.png' alt='resultado correcto' /><div class='result'><p>Respuesta correcta</p><span>" + texto + "</span></div></div></div></div>";
	$("#modalcorrect").append(modal);

	ejecutarAudio(sonidoCorrecto);
	setTimeout(function(){
	    llamarCambio();
	    $("#modalcorrect").empty();
    }, timeout_change);
}

function ejecutarAudio(audio, cambio){
	if (!sonido_activado) return;
	sonido_activado = false;
	try{
		my_media = new Media(audio, function(){
		    sonido_activado = true;
		});
		my_media.play();
	}catch(e){
		//No estoy en un dispositivo:
		alert('No estoy en un dispositivo. Quiero ejecutar ' + audio);
	}
}

function escucharConsigna(){
	ejecutarAudio(SONIDO_CONSIGNA);
}
