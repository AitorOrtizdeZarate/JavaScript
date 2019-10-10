var translator = $('body').translate({lang: "es", t: dict});

		var dict = {
			"nav1": {
				es: "Temporada 1",
				eus: "1. Denboraldia",
				en: "First Season"
			},
			"nav2":{
				es: "Temporada 2",
				eus: "2. Denboraldia",
				en: "Second Season"
			},
			"nav3":{
				es: "Temporada 3",
				eus: "3. Denboraldia",
				en: "Third Season"
			},
			"nav4":{
				es: "Reparto",
				eus: "Aktoreak",
				en: "Cast"
			},
			"section1":{
				es: "3 Temporadas",
				eus: "Hiru Denboraldi",
				en: "Three Seasons"
			},
			"section2":{
				es: "Terror para TV",
				eus: "Telebistarako Beldurra",
				en: "Terror for TV"
			},
			"section3":{
				es: "A raíz de la desaparición de un niño, un pueblo desvela un misterio relacionado con experimentos secretos, fuerzas sobrenaturales aterradoras y una niña muy extraña.",
				eus: "Mutil bat desagertu ondoren, herri batek esperimentu sekretuekin, naturaz gaindiko indar beldurgarriak eta oso neska bitxiarekin lotutako misterioa erakusten du.",
				en: "Following the disappearance of a boy, a town reveals a mystery related to secret experiments, terrifying supernatural forces and a very strange girl."
			},
			"section4":{
				es: "Protagonizada por:",
				eus: "Protagonistak:",
				en: "Starring"
			},
			"section5":{
				es: "Creada por:",
				eus: "Sortuta:",
				en: "Created by:"
			},
		}

			function cambiarIngles(){
			var translator = $('body').translate({lang: "en", t: dict});
			
			}
			function cambiarEuskera(){
				var translator = $('body').translate({lang: "eus", t: dict});
				
			}
			function cambiarEspañol(){
				var translator = $('body').translate({lang: "es", t: dict});
				
			}