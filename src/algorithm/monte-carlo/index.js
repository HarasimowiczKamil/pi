import bigDecimal from 'js-big-decimal';

/**
 * Losowa dokładność
 */
export default function (precision, attempts) {
  const limit = new Date().getTime() + 3600 * 1000;
  let x,y,i;
  let k = 0n;
  attempts = attempts ? attempts : BigInt(precision) * 10000000n;
  for (i = 0n; i < attempts; ++i) {
    x = Math.random();
    y = Math.random();
    if (x*x + y*y <= 1) k++;
    if (limit < new Date().getTime()) {
      break;
    }
  }
  const pi = new bigDecimal(4)
    .multiply(new bigDecimal(k))
    .divide(new bigDecimal(i));

  console.log(pi.round(precision).getValue());
}
