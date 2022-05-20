export default function populationParser(population) {
  console.log(population);
  if (population < 1000) {
    return `${population} M`;
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
  return `${result} M`;
}
