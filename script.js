const opcionesBtn = document.getElementById("opcionesBtn");
const opcionesCont = document.getElementById("opcionesCont");

// Agrega un evento de clic al item "Opciones" para el dropdown
opcionesBtn.addEventListener("click", function() {
  if (opcionesCont.style.display === "block") {
    opcionesCont.style.display = "none"; 
  } else {
    opcionesCont.style.display = "block"; 
  }
});