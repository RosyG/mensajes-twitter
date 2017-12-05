var texTweet = document.getElementById("message");// NOTE: <textarea maxlength="50" especifica a 50 como long máxima de caracteres>
var publicBottom= document.getElementById("public-bottom");
var containerComents= document.getElementById("comments");
var contador=document.getElementById("contador");
var trueFunction= document.createTextNode("")


//--Evento que se ejecuta cuando un click se realiza en el textarea
publicBottom.addEventListener("click",commentAdd); /*Puedo ejecutar mi función antes porque la función tiene nombre y no esta guardada en una variable*/
//--Contador de carácteres, se ejecuta en cuanto una tecla se termina de oprimir.
texTweet.addEventListener("keyup",account);

//****Declaración de funciones****

function commentAdd(e) {
  e.preventDefault();//Se previene que exista un corte de flujo causado por el comportamiendo del bottom submit
//--Creando las variables que tendran el contenido nuevo que el user introduzca
  var textNew=document.createElement("label");//<label>, proporciona una mejora de usabilidad para usuarios de mouse, porque si el usuario hace clic en el texto dentro del elemento <label>, alterna el control.
  var blockComplet=document.createElement("div");//Es necesario crear este div dentro del section para que el próximo comentario se situé debajo del comentario anterios y NO a la derecha
  var time=document.createElement("p");
//--Anañiendo el contenido a las variables
  textNew.textContent = texTweet.value;//texto del tweet
  var date=new Date();//Date contiene fecha y hora
  time.innerText= "Hora: " + date.getHours()+ ":" + date.getMinutes();//hora:minutes
//--Añadiendo los contenidos a los nodos elementos
  blockComplet.appendChild(textNew);//tweet dentro del div
  blockComplet.appendChild(time);//hora:minutos dentro del div
//--Añadiendo el div a section que está definida en HTML
  //containerComents.appendChild(blockComplet);//div dentro de la section id="comments"
  containerComents.appendChild(blockComplet);//div dentro de la section id="comments"

  //console.log(container.lastChild.innerHTML);
//--Borrando el texto de la barra para que se introduzca un nuevo tweet
  texTweet.value="";//Limpiando el contenedor para que el user vuelva a escribir su comentario nuevo

}//FIN de función commentAdd

function account(e) {
  e.preventDefault();
//--Creando contenedores
  var contentP= document.getElementById("contador");
  var contentSpan= document.getElementById("span-contentSpan");
  var textSpan=document.createElement("span");
//--Manipulando el número de carácteres
  var char=this.value.length;//Del evento me interesa el contenido: this.value y para saber cuantos caracteres contiene el evento es con .length
  var limit=140;//límite de caracteres
  var res=limit-char;//resta del tipo number entre el límite de carácteres y los carácteres que ya introdujo el user
  res= res.toString();//Convirtiendo a string
  //--Añadiendo el conteo de los carácteres que son mostrados al usuario
  textSpan.append(res);
  var lastSpan=contentSpan.lastChild;//Ultimo span
  var previous=lastSpan.previousSibling;//Antes del ultimo
  lastSpan.remove(previous);//Eliminando al hermano anterior
  contentSpan.appendChild(textSpan);//Se agrega solo al último span
  contentP.append(contentSpan);//Se agrega en p el div con el único span.

//--Condicional para permitir enviar o bloquear el envio a caracteres que superen los 140
  var maxChar=contentSpan.innerText;
  //console.log(maxChar);
  if (maxChar <=0) {
    console.log("No puedes enviar, ingresa un carácter o sobrepasaste el número de carácteres");
    publicBottom.disabled = true;//El boton para publicar tweet es deshabilitado
    contentSpan.style.color="red";//números negativos con rojo
  } if (maxChar>0) {
    publicBottom.disabled = false;//El boton para publicar tweet es habilitado
  }
  if (maxChar>10 && maxChar<=20) {//140-120=20 Restan 20 porque ya se escribieron 120 carácteres
    console.log("mayor a 120 carácteres");
    contentSpan.style.color ="#2fe014";//Cambio de color a rojo en el # de caracteres para advertir que se esta cerca del límite de carácteres

  } if (maxChar<=10 && maxChar>0) {//140-130=10, si se supera los 130 carácteres
    console.log("Ya se han escrito 130 o más carácteres");
    contentSpan.style.color="#e0e014";//Color azul en contador de carácteres para indicar que aun no se aproxima el límite de carácteres a usar
  } if (maxChar>20) {
    contentSpan.style.color="#1B95E0";
  } if (maxChar>=140) {
    publicBottom.disabled = true;//El boton para publicar tweet es deshabilitado
  }



}//FIN  de función account
