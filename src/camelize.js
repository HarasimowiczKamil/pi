export default (str) => str
  ? str
    .toLowerCase()
    .replace(
      /[^a-zA-Z0-9]+(.)/g,
      (m, chr) => chr.toUpperCase()
    )
  : str;
