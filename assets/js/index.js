
//agrega un oyente al momento de cargar completamente el DOM
document.addEventListener("DOMContentLoaded", function () {
    //declaracion de variables
    let botones = document.querySelectorAll(".calification-button");
    let submitButton = document.querySelector(".buttonSubmit button");
    let botonActivo = null;
    let numero = null;
  

    //se ejecuta al dar clic en el boton 
    function capturarValor(event) {
      numero = event.target.innerText;
      
        
      //si hay un boton activo se restablece los estilos anteriores
      if (botonActivo) {
        botonActivo.classList.remove("active");
        botonActivo.style.backgroundColor = "hsl(218, 6%, 35%)"; // Cambia el color original aquí
        botonActivo.style.color = "white"; // Cambia el color del texto si es necesario
      }
  
      //al momento de dar clic el boton cambia su estado a activo y cambia sus estilos
      event.target.classList.add("active");
      event.target.style.backgroundColor = "hsl(25, 97%, 53%)"; // Cambia el color aquí
      event.target.style.color = "white"; // Cambia el color del texto si es necesario
  
      botonActivo = event.target;
    }
    
    //agregamos un oyente a cada boton para ejecutar la funcion capturarValor
    botones.forEach(function (boton) {
      boton.addEventListener("click", capturarValor);
      //aplica el oyecte cuando el mause ingresa en el campo del button
      boton.addEventListener("mouseenter", function () {
        if (!boton.classList.contains("active")) {
          boton.style.backgroundColor = "rgb(107, 115, 115)";
        }
      });
      //aplica el oyecte cuando el mause se retira del button
      boton.addEventListener("mouseleave", function () {
        if (!boton.classList.contains("active")) {
          boton.style.backgroundColor = "hsl(218, 6%, 35%)";
        }
      });
    });
    
    //aqui se agrega un pyente al boton submit para eliminar los activos 
    submitButton.addEventListener("click", function () {
        let cardprincipal = document.querySelector('.card');
        let cardNotifi = document.querySelector('.notification');
        cardprincipal.style.display = "none";
        cardNotifi.style.display = "block";

      botones.forEach(function (boton) {
        boton.classList.remove("active");
        boton.style.backgroundColor = "hsl(218, 6%, 35%)"; // Cambia el color original aquí
        boton.style.color = "white"; // Cambia el color del texto si es necesario
        
      });
      console.log('FINAL')
        console.log("Número clickeado:", numero);
        let campoCalification = document.getElementById('calificationNumber');
        //para concatenar variables ${} se deben utilizar con las tildes inclinadas ``
        campoCalification.innerText = `Your selected ${numero} of the 5`;
      

      //aqui indicamos que no hay botones activos
      botonActivo = null;
      //aqui indicamos que no hay numeros seleccionados
      numero = null;
    });
  });
  