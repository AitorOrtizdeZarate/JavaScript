<!DOCTYPE html>
<html>
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="jquery.translate.js"></script>
	<script type="text/javascript" src="js/js.js"></script>
	<link rel="stylesheet" type="text/css" href="css/css.css">
	<title>Stranger Things</title>

</head>
<body>
	<header>
		<img src="imagenes/ingles.jpg" onclick="cambiarIngles()" class="idiomas">
		<img src="imagenes/ikurriña.png" onclick="cambiarEuskera()" class="idiomas">
		<img src="imagenes/españa.png" onclick="cambiarEspañol()" class="idiomas">
		
		<a href="index.php"><h1>Stranger Things</h1></a>
	</header>
	<div id="todo">
	<nav>
		<ul>
		  <li>
		    <a href="Temporada1.php" class="trn" data-trn-key="nav1">
		      Temporada 1
		    </a>
		  </li>
		  <li>
		    <a href="temporada2.php" class="trn" data-trn-key="nav2">
		      Temporada 2
		    </a>
		    </li>
		  <li>
		    <a href="Temporada3.php" class="trn" data-trn-key="nav3">
		      Temporada 3
		    </a>
		    
		  </li>
		  <li>
		  	<a href="reparto.php" class="trn" data-trn-key="nav4">
		  		Reparto
		  	</a>
		  </li>
		</ul>
	</nav>
	<section>
		
		<p> 2016 &nbsp;|&nbsp; 16+ &nbsp;|&nbsp; <label class="trn" data-trn-key="section1">3 Temporadas</label>&nbsp;|&nbsp; <label class="trn" data-trn-key="section2">Terror para TV</label><br><br>
			
		<label class="trn" data-trn-key="section3">A raíz de la desaparición de un niño, un pueblo desvela un misterio relacionado con experimentos secretos, fuerzas sobrenaturales aterradoras y una niña muy extraña.</label><br><br>

		<span style="color: #7C7C7C"><b class="trn" data-trn-key="section4">Protagonizada por:</b></span> Winona Ryder, David Harbour, Finn Wolfhard<br><br>
		<span style="color: #7C7C7C"><b class="trn" data-trn-key="section5">Creada por:</b></span> Los hermanos Duffer<br><br>
		</p>
	</section>
	<aside>
		<img src="imagenes/merch.jpg" id="merch">
		<a id="pop" href="https://www.zavvi.es/merch-figures/figura-funko-pop-eleven-stranger-things-temporada-3/12026692.html?utm_source=kelkoo&utm_medium=cpc&utm_campaign=kelkoo&affil=thgppc&switchcurrency=EUR&shippingcountry=ES&from=kelkooes" target="blank"><b>12,99€</b><br>Figura Funko Pop! - Eleven - <br>Stranger Things (Temporada 3)</a>

	</aside>



	
	<footer>
		<h2>Stranger Things - Andoni Bartolome, Xabier Jacob y Aitor Ortiz de Zarate <?php echo(strftime("%d/%m/%Y %H:%M")); ?>
			<a href="https://twitter.com/Stranger_Things?ref_src=twsrc%5Etfw"class="twitter-follow-button"data-show-count="false">Follow</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></h2>
	</footer>
	</div>

</body>
</html>
