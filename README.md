Program obliczający wartość liczby π
====================================

## Przygotowanie środowiska

1. Instalacja [node](https://nodejs.org/en/)
2. Opcjonalnie [yarn](https://yarnpkg.com/getting-started/install)
3. Instalacja zależności:
* Instalowanie zależności za pomocą _npm_:
```bash
npm install
```
* Instalowanie zależności za pomocą _yarn_
```bash
$ yarn install
```

## Przykładowe uruchomienie

```bash
$ node index.js # pokazuje stronę pomocy
$ node index.js 1000 # wylicza pi z dokładnością do 1000 znaku po przecinku
$ node index.js 15 -a special # wylicza pi do 15 miejsca po przecinku korzystając ze specjalnego algorytmu
```
