function sum(a, b) {
  return a + b;
}
function pq(p, q) {
  var del1 = p * -0.5;
  var del2 = Math.sqrt(Math.pow(p * 0.5, 2) - q);
  var svar1 = del1 + del2;
  var svar2 = del1 - del2;
  return svar1 + "," + svar2;
}
module.exports = { sum, pq };
