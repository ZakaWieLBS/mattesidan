function readValue() {
  var p = parseInt(document.getElementById("p").value);
  var q = parseInt(document.getElementById("q").value);
  var svar = pq(p, q);
  document.getElementById("svar").innerHTML = svar;
}
function pq(p, q) {
  var del1 = p * -0.5;
  var del2 = Math.sqrt(Math.pow(p * 0.5, 2) - q);
  var svar1 = del1 + del2;
  var svar2 = del1 - del2;
  return svar1 + "," + svar2;
}
