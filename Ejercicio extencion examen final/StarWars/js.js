$(document).ready(function (){
	//getJquery
	$('#getQuery').click(function(){		
		let numero = document.getElementById('numero').value;
		let tipos = document.getElementById('tipos');
		let tipo = tipos.options[tipos.selectedIndex].value;
		//llamada AJAX
		$.get("https://swapi.co/api/" + tipo + "/" + numero + "/", function(data, status) {		
		if(status == "success"){			
			if (tipo === "people") {
				$('#tipo').text('GetJquery - Personas');								
				$('#pPe').append('<p>'+ data.name +'</p>');
			}else if (tipo === "planets"){
				$('#tipo').text('GetJquery - Planetas');				
				$('#pPe').append('<p>'+ data.name +'</p>');
			}else if (tipo === "starships"){
				$('#tipo').text('GetJquery - Naves');								
				$('#pPe').append('<p>'+ data.name +'</p>');
			}
		}
	});
	});
	//postJquery
	$('#postQuery').click(function(){
		let numero = document.getElementById('numero').value;
		let title = document.getElementById('titulo').value;
		$.post("https://my-json-server.typicode.com/typicode/demo/posts", {
			id: numero,
			title: title
		}, 
			function (data, status){
				if (status == "success"){
					$('#tipo').text('Post Jquery');
					$('#pPost').append('<p>'+ data.id + ' - ' + data.title +'</p>');
				}
			});
	});
});

//getJS
	let getJS = () => {
		let numero = document.getElementById('numero').value;
		let tipos = document.getElementById('tipos');
		let tipo = tipos.options[tipos.selectedIndex].value;

		let request = new XMLHttpRequest();
		request.open('GET', 'https://swapi.co/api/' + tipo + '/' + numero + '/', true);
		request.onload = function (){
			//JSON
			let data = JSON.parse(this.response);

			if (request.status >= 200 && request.status < 400) {
				if (tipo === "people") {
					$('#tipo').text('Get JS - Personas');
					$('#pPe').append('<p>'+ data.name +'</p>');
				}else if(tipo === "planets"){
					$('#tipo').text('Get JS - Planetas');
					$('#pPe').append('<p>'+ data.name +'</p>')
				}else if (tipo === "starships"){
					$('#tipo').text('Get JS - Naves');
					$('#pPe').append('<p>'+ data.name +'</p>')
				}
			}
		};
		request.send();
	};


	//postJS

	let postJS = () =>{
		let numero = document.getElementById('numero').value;
		let title = document.getElementById('titulo').value;

		let request = new XMLHttpRequest();
		request.open('POST','https://my-json-server.typicode.com/typicode/demo/posts', true);
		request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		request.send("id=" + numero + "&title=" + title);
		request.onreadystatechange = function (){
			if (this.readyState == 4 && this.status == 201){
			let post = JSON.parse(this.responseText);
			$('#tipo').text('Post JS');
			$('#pPost').append('<p>'+ post.id +' - '+ post.title+'</p>')
				
			}
		}
	};