export default function populationParser(population) {
  if (population < 1000) {
    return `${population} People`;
  }

  let number = population;
  let parsed = number.toString();
  parsed = parsed.split("");
  parsed = parsed.reverse();
  let result = [];

  for (let i = parsed.length - 1; i >= 0; i--) {
    result.push(parsed[i]);
    if (i === 9 || i === 6 || i === 3) {
      result.push(",");
    }
  }

  result = result.join("");

  if (population < 1000000) {
    return `${result} K`;
  }

  return `${result} M`;
}
