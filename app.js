// Creacion de variables 
var baseDeDatos = {
	usuario: "Raul",
	password: "hola"
};
console.log("Arrancando Server de node");

// Decraracion de variables 
var express = require("express");
var parcero = require("body-parser");
var web = express();
web.use(parcero.urlencoded());
var servidor;

servidor = web.listen(8686, function (){
	console.log("Servidor arrancado");
});
web.get("/", function (req, res){
	res.sendfile("Formulario.html");
});
// Codigo de negacion 
web.post("/entrar", function (req, res){
	if(req.body.usuario == baseDeDatos.usuario && req.body.clave == baseDeDatos.password){
		res.sendfile("index.html");
	}else{
		res.sendfile("mal.html");
	}
});