#!/usr/bin/env node
import commandLineUsage from 'command-line-usage';
import commandLineArgs from 'command-line-args';
import algorithm from './src/algorithm/index.js';
import camelize from './src/camelize.js';

const sections = [
  {
    header: 'Aplikacji obliczająca wartość π',
    content: 'Generates something {italic very} important.',
  },
  {
    header: 'Opcje',
    optionList: [
      { name: 'algorithm', alias: 'a', type: String, description: 'Algorytm: {underline gibbons}|leibniz|monte-carlo|gauss-legendre|special' },
      { name: 'cycles', alias: 'c', type: BigInt, description: 'Ilość cykli, wartość domyślna zależna od algorytmu (dotyczy: leibniz|monte-carlo|gauss-legendre)' },
      { name: 'precision', type: Number, description: 'Precyzja wyniku', defaultOption: true },
      { name: 'help', alias: 'h', type: Boolean, description: 'Wyświetla tę pomoc' },
    ]
  },
  {
    header: 'Przykład użycia',
    content: 'node index.js 1000\n\nnode index.js 15 -a special',
  }
];

// import bigDecimal from 'js-big-decimal';
const options = commandLineArgs(sections[1].optionList);

if (options.help || !options.precision) {
  console.log(commandLineUsage(sections));
  process.exit();
}

const selectedAlgorithm = algorithm[camelize(options.algorithm) || 'gibbons'];

selectedAlgorithm(Number(options.precision), options.cycles ? options.cycles : 0n);



