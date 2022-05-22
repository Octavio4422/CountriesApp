export default function areaParser(area) {
  if (area < 1000) {
    return `${area} KM²`;
  }

  let number = area;
  let parsed = number.toString();
  parsed = parsed.split("");
  parsed = parsed.reverse();
  let result = [];

  for (let i = parsed.length - 1; i >= 0; i--) {
    result.push(parsed[i]);
    if (i === 6 || i === 3) {
      result.push(",");
    }
  }

  result = result.join("");
  return `${result} KM²`;
}
