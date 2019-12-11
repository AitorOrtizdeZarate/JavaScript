class Cantante {
	datos(nombre, edad, cancion){
		this.nombre = nombre;
		this.edad = edad;
		this.cancion= cancion;
	};

	setNombre(nombre){
		this.nombre = nombre;
	}

	getNombre(){
		return this.nombre;
	}

	setEdad(edad){
		this.edad = edad;
	}

	getEdad(){
		return this.edad;
	}

	setCancion(cancion){
		this.cancion = cancion;
	}

	getCancion(){
		return this.cancion;
	}
};
export{ Cantante };