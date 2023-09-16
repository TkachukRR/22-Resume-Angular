export function makeHobbiesMarkup(hobbies, pageLang) {
  return hobbies[pageLang]
    .map((skillName) => `<li class="hobbies__item">${skillName}</li>`)
    .join("");
}
