if (localStorage.lng){
	var translator = $('body').translate({
		lang: localStorage.getItem('lng'),
		t: dic
	});
}else{
	var translator = $('body').translate({
		lang: 'es',
		t: dic
	});
}

function cambiarIdioma(idioma){
	localStorage.setItem("lng", idioma)
	var translator = $('body').translate({
		lang: localStorage.getItem('lng'),
		t: dic
	});
}