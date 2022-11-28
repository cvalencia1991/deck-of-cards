function recogeDatos(evento) {
  evento.preventDefault();

  var nombre = document.querySelector("#nombre").value;
  var fecha = document.querySelector("#fecha").value;
  var edad = 2019 - fecha;
  var mensajeEdad;
  var bienvenida = document.querySelector("#bienvenida");

  // EJERCICIO: declara las variables necesarias (puedes necesitar
  // más de una) para componer el mensaje de bienvenida


  // EJERCICIO: crea un condicional que dé un mensaje u otro en
  // función de la edad
  if(edad>30){
    mensajeEdad = ' Viejo';
  }else if(edad<30){
    mensajeEdad = ' Jovencito';
  }else{
    mensajeEdad= ' Excelente edad'
  }

  // BONUS: si quieres, puedes comprobar si alguno de los campos
  // está vacío y modificar el mensaje de bienvenida para pedir
  // Que se rellene

  // EJERCICIO: Realiza la composició del mensaje final y cárgalo
  // en la variable que hayas preparado
  mensaje = 'Hola, mi nombre es ' + nombre +  ' y tengo ' + edad + mensajeEdad; 
  // EJERCICIO: Añade el mensaje final como contenido HTML del
  // nodo que hemos cargado en la variable bienvenida
  bienvenida.textContent = mensaje
}

var miForm = document.querySelector("#formulario");

miForm.addEventListener("submit", recogeDatos);
