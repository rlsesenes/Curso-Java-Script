{

    "nombre": "Ramon Lozano", 
    "Edad": 51, 
    "nacionalidad": "mexicana"

}

var json = '{"nombre": "Ramon Lozano", "Edad": 51, "nacionalidad": "mexicana"}';
var obj= JSON.parse(json);console.log(obj.nombre); obj.nombre="pedro";
console.log(obj.nombre);
var json= '{"nombre":"Manuel","Edad":43, "nacionalidad":"mexicana","hobbies":["ajedrez", "videojuegos","comics"]}';

var obj = JSON.parse(json);
console.log(obj.hobbies[0]);
obj.hobbies[0] = "pelicula"; 
console.log(obj.hobbies[0]);
