import bigDecimal from 'js-big-decimal';

export default function (precision, attempts) {
  attempts = attempts ? attempts : BigInt(precision) * 1000000n;
  const limit = new Date().getTime() + 3600 * 1000;
  let pi = new bigDecimal(4);
  let minus = true;
  for (let i = 2n; i < attempts * 2n + 2n; i+=2n) {
    const nextDecimal = new bigDecimal(4)
      .divide(
        new bigDecimal(i + 1n)
      );
    if (minus) {
      pi = pi.subtract(nextDecimal);
    } else {
      pi = pi.add(nextDecimal);
    }
    minus = !minus;

    if (limit < new Date().getTime()) {
      break;
    }
  }

  console.log(pi.round(precision).getValue());
};
