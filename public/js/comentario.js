function changeTwitter () {
  const comentario = document.getElementById("jg-comentario").attachShadow;
  const btn = comentario;
  console.log(comentario);
  comentario.onclick = function () {getElementsByClassName("comentario-btn comentario-btn-twitter")[0].innerHTML = "𝕏";}

}

window.onload = changeTwitter();