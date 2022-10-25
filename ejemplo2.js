console.log ("Esto es un mensaje en log");
// error
console.error ("Esto es un error");
//Añadir informacion 
console.info("Añadir información a la consola");
// warning 
console. warn ("envía un aviso");

const gente= [

{nombre: "Diego", edad: 50}, 
{nombre: "Alex", edad: 23}, 
{nombre: "Anahi", edad: 33},
]; 

console.table(gente);
gente.forEach((persona,index)=> {
    console.groupCollapsed(`${persona.nombre}`);
    console.log (persona.edad);
    console.log("hola");
    console.groupEnd (`${persona.nombre}`);




});