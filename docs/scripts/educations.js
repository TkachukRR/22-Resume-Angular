import { getLocalDate } from "./helpers.js";

export function makeEducationItemsMarkup(educations, pageLang) {
  return educations.institutions
    .map(
      (institution) => `
    <li class="educations__item institution">
      <h4 class="institution__title">${institution[pageLang].institution}</h4>
      <p class="institution__period">
        ${getLocalDate(institution[pageLang].period.start)} - 
        ${getLocalDate(institution[pageLang].period.end)} | 
        <span class="institution__rank">${institution[pageLang].rank}</span>
      </p>
      <p class="institution__direction">${institution[pageLang].direction}</p>
      <ul class="institution__obtention">
        ${institution[pageLang].obtention
          ?.map((skill) => `<li>${skill}</li>`)
          .join("")}
      </ul>
    </li>
  `
    )
    .join("");
}
