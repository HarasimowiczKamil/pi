/**
 * Ograniczenie floatem :/
 */
export default function (precision, attempts) {
  attempts = Math.min(attempts ? Number(attempts) : precision, 1000);
  let an = 1.0, bn = 1.0 / Math.sqrt(2), tn = 0.25, pn = 1.0, a_pom;
  while (attempts--) {
    a_pom = an;
    an = (an + bn) / 2;
    bn = Math.sqrt(a_pom * bn);
    tn = tn - pn * (a_pom - an) ** 2;
    pn *= 2;
  }
  const pi = (an + bn) ** 2 / (4.0 * tn);
  console.log(pi.toFixed(precision));
}
