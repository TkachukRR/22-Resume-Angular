import { getLocalDate } from "./helpers.js";

export function makeCompanyItemsMarkup(companies, pageLang) {
  return companies
    .map(
      (company) => `
    <li class="works__item company">
      <h4 class="company__title">${company[pageLang].company}</h4>
      <p class="company__period">
        ${getLocalDate(company[pageLang].period.start)} - 
        ${getLocalDate(company[pageLang].period.end)} | 
        <span class="company__position">${company[pageLang].position}</span>
      </p>
      <ul class="company__responsibilities">
        ${getResponsibilityItems(company[pageLang].responsibilities)}
      </ul>
    </li>
  `
    )
    .join("");
}

function getResponsibilityItems(responsibilities) {
  return responsibilities
    .map((responsibility) => `<li>${responsibility}</li>`)
    .join("");
}
