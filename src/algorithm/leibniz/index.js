import bigDecimal from 'js-big-decimal';

export default function (precision, attempts) {
  attempts = attempts ? attempts : BigInt(precision) * 1000000n;
  const limit = new Date().getTime() + 3600 * 1000;
  let pi = new bigDecimal(1);
  for (var i = 0n; i < attempts; ++i) {
    const sign = i === 0n || i % 2n === 0n ? -1 : 1;
    const nextDecimal = new bigDecimal(1)
      .divide(
        new bigDecimal(3)
          .add(new bigDecimal(i * 2n)),
        precision * 2
      );
    if (sign === -1) {
      pi = pi.subtract(nextDecimal);
    } else {
      pi = pi.add(nextDecimal);
    }

    if (limit < new Date().getTime()) {
      break;
    }
  }

  console.log(pi.multiply(new bigDecimal(4)).round(precision).getValue());
};
