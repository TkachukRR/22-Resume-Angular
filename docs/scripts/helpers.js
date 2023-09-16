export function getLocalDate(stringDate) {
  const date = new Date(stringDate);
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };

  if (date.toLocaleString(undefined, options) === "Invalid Date") {
    return "now";
  }

  return date.toLocaleString(undefined, options);
}

export function svgIconMarkup(id) {
  return `
    <svg class="icon icon-${id}">
      <use xlink:href="#icon-${id}"></use>
    </svg>
  `;
}
