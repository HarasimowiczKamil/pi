/**
 * @link http://www.cs.ox.ac.uk/jeremy.gibbons/publications/spigot.pdf
 */
function * generateDigitsOfPi() {
  let q = 1n;
  let r = 180n;
  let t = 60n;
  let i = 2n;
  while (true) {
    let digit = ((i * 27n - 12n) * q + r * 5n) / (t * 5n);
    yield Number(digit);
    let u = i * 3n;
    u = (u + 1n) * 3n * (u + 2n);
    r = u * 10n * (q * (i * 5n - 2n) + r - t * digit);
    q *= 10n * i * (i++ * 2n - 1n);
    t *= u;
  }
}

export default function (precision) {
  const limit = new Date().getTime() + 3600 * 1000;
  let iter = generateDigitsOfPi();
  let dot = false;

  process.stdout.write(String(iter.next().value));
  process.stdout.write('.');
  while (precision--) {
    process.stdout.write(String(iter.next().value));
    if (limit < new Date().getTime()) {
      break;
    }
  }
  process.stdout.write('\n');
}
