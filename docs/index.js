import { info } from "./info.js";

import { makeProjectsListMarkup } from "./scripts/projects.js";

const refs = {
  pageLang: document.querySelector("html").getAttribute("lang"),
  name: document.querySelector(".introduce__name"),
  position: document.querySelector(".introduce__position"),
  intro: document.querySelector(".introduce__intro"),
  sub: document.querySelector(".introduce__subinfo"),
  projectsTitle: document.querySelector(".projects__title"),
  projects: document.querySelector(".projects__list"),
  educationTitle: document.querySelector(".educations__title"),
  education: document.querySelector(".educations__list"),
};

// Intro==========================================

refs.name.textContent = `${info.firstName[refs.pageLang]} ${
  info.lastName[refs.pageLang]
}`;
refs.position.textContent = `${info.lookingFor[refs.pageLang]}`;
refs.intro.textContent = `${info.intro[refs.pageLang]}`;
refs.sub.textContent = `${info.subInfo[refs.pageLang]}`;

// Projects==========================================
refs.projectsTitle.innerHTML = `
${svgIconMarkup("projects")} 
${info.projects.sectionTitle[refs.pageLang]}`;

refs.projects.innerHTML = makeProjectsListMarkup(info.projects, refs.pageLang);

// Education==========================================

refs.educationTitle.innerHTML = `
  ${svgIconMarkup("education")}
  ${info.educations.sectionTitle[refs.pageLang]}`;

function makeEducationItemsMarkup() {
  let institutionItemsMarkup = "";

  info.educations.institutions.map((institution) => {
    const dateStart = new Date(institution[refs.pageLang].period.start);
    const dateEnd = new Date(institution[refs.pageLang].period.end);
    const options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };

    institutionItemsMarkup += `
    <li class="educations__item institution">
      <h4 class="institution__title">${
        institution[refs.pageLang].institution
      }</h4>
      <p class="institution__period">
        ${dateStart.toLocaleString(undefined, options).toString()} - ${
      dateEnd.toLocaleString(undefined, options) === "Invalid Date"
        ? "now"
        : dateEnd.toLocaleString(undefined, options).toString()
    } | 
        <span class="institution__rank">${
          institution[refs.pageLang].rank
        }</span>
      </p>
      <p class="institution__direction">${
        institution[refs.pageLang].direction
      }</p>
      <ul class="institution__obtention">
        ${institution[refs.pageLang].obtention
          ?.map((skill) => {
            return `<li>${skill}</li>`;
          })
          .join("")}
      </ul>
    </li>
  `;
    return institutionItemsMarkup;
  });

  return institutionItemsMarkup;
}

refs.education.innerHTML = makeEducationItemsMarkup();

// ==========================================

document.querySelector(".works__title").innerHTML = `
  ${svgIconMarkup("work")}
  ${info.works.sectionTitle[refs.pageLang]}`;

function makeCompanyItemsMarkup() {
  let companyItemsMarkup = "";

  info.works.companies.map((company) => {
    let responsibilities = company[refs.pageLang].responsibilities
      .map((responsibility) => {
        return `
      <li>${responsibility}</li>
      `;
      })
      .join("");

    const dateStart = new Date(company[refs.pageLang].period.start);
    const dateEnd = new Date(company[refs.pageLang].period.end);
    const options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };

    companyItemsMarkup += `
    <li class="works__item company">
      <h4 class="company__title">${company[refs.pageLang].company}</h4>
      <p class="company__period">
    ${dateStart.toLocaleString(undefined, options).toString()} - ${
      dateEnd.toLocaleString(undefined, options) === "Invalid Date"
        ? "now"
        : dateEnd.toLocaleString(undefined, options).toString()
    }
    | 
        <span class="company__position">${
          company[refs.pageLang].position
        }</span>
      </p>
      <ul class="company__responsibilities">${responsibilities}</ul>
    </li>
  `;
    return companyItemsMarkup;
  });
  return companyItemsMarkup;
}

document.querySelector(".works__list").innerHTML = makeCompanyItemsMarkup();
// ==========================================

function makeLangButtonsMarkup() {
  const languages = Object.keys(info.firstName);

  const languageButtonsMarkup = languages
    .map((lang) => {
      if (lang === "en") {
        return `
        <li class="language__item btn">
          <a class="language__link" href="index.html">${lang}</a> 
        </li>`;
      }
      return `
        <li class="language__item btn">
          <a class="language__link" href="index_${lang}.html">${lang}</a> 
        </li>
    `;
    })
    .join("");
  return languageButtonsMarkup;
}

document.querySelector(".lang__buttons").innerHTML = makeLangButtonsMarkup();

// ==========================================
const birthday = new Date(info.dateOfBirth.date);
const options = {
  day: "numeric",
  month: "numeric",
  year: "numeric",
};

document.querySelector(".birthday__title").innerHTML = `
  ${svgIconMarkup("birth")}
  ${info.dateOfBirth.sectionTitle[refs.pageLang]}
  `;

document.querySelector(
  ".birthday__date"
).innerHTML = `<li>${birthday.toLocaleDateString(undefined, options)}</li>`;

// ==========================================
document.querySelector(".location__title").innerHTML = `
${svgIconMarkup("location")}
${info.location.sectionTitle[refs.pageLang]}
`;

document.querySelector(".location__place").innerHTML = `<li>${
  info.location[refs.pageLang]
}</li>`;

// ==========================================

document.querySelector(".contacts__title").innerHTML = `
${svgIconMarkup("contacts")}
${info.contacts.sectionTitle[refs.pageLang]}
`;

function makeContactsMarkup() {
  const contactsTypes = Object.keys(info.contacts.contacts);

  const markup = contactsTypes
    .map((contactType) => {
      if (
        contactType === "phone" &&
        typeof info.contacts.contacts[contactType] === "object"
      ) {
        const phonesMarkup = info.contacts.contacts[contactType]
          .map((phone) => {
            return `
              <a href="${"tel:" + phone}">
                ${svgIconMarkup("phone")}
                ${phone}
              </a>
            `;
          })
          .join("");

        return phonesMarkup;
      }

      if (contactType === "email") {
        return `
          <a href="${"email:" + info.contacts.contacts[contactType]}">
            ${svgIconMarkup("email")}
            ${info.contacts.contacts[contactType]}
          </a>
        `;
      }

      return `
          <a href="${info.contacts.contacts[contactType]}">
            ${svgIconMarkup(contactType)}
            ${info.contacts.contacts[contactType]}
          </a>
        `;
    })
    .join("");

  return markup;
}

document.querySelector(".contacts__address").innerHTML = makeContactsMarkup();

// ==========================================

document.querySelector(".tech__title").innerHTML = `
${svgIconMarkup("skill-tech")}
${info.skills.tech.sectionTitle[refs.pageLang]}
`;

document.querySelector(".tech__skills").innerHTML =
  makeSkillsListMarkup("tech");

// ==========================================

document.querySelector(".lang__title").innerHTML = `
${svgIconMarkup("skill-lang")}
${info.skills.lang.sectionTitle[refs.pageLang]}`;

document.querySelector(".lang__skills").innerHTML =
  makeSkillsListMarkup("lang");

// ==========================================

document.querySelector(".soft__title").innerHTML = `
${svgIconMarkup("skill-soft")}
${info.skills.soft.sectionTitle[refs.pageLang]}`;

document.querySelector(".soft__skills").innerHTML =
  makeSkillsListMarkup("soft");

// ==========================================

function makeSkillsListMarkup(skill) {
  const skillsItemsMarkup = info.skills[skill][refs.pageLang]
    .map((skillName) => {
      if (skill === "lang") {
        return `
          <li class="${skill}__item">${skillName.language} - ${skillName.skill}
          <div class="progress-bar green stripes">
            <span style="width: ${skillName.level}%"></span>
          </div>
          </li>
        `;
      }

      if (skill === "tech") {
        return `
          <li class="${skill}__item">
          ${skillName.name}
          <div class="progress-bar green stripes">
            <span style="width: ${skillName.level}%"></span>
          </div>
          </li>
        `;
      }

      return `
        <li class="${skill}__item">${skillName}</li>
      `;
    })
    .join("");

  return skillsItemsMarkup;
}

// ==========================================

document.querySelector(".hobbies__title").innerHTML = `
  ${svgIconMarkup("hobbies")}
  ${info.hobbies.sectionTitle[refs.pageLang]}`;

document.querySelector(".hobbies__list").innerHTML = makeHobbiesMarkup("soft");

function makeHobbiesMarkup() {
  const skillsItemsMarkup = info.hobbies[refs.pageLang]
    .map((skillName) => {
      return `
        <li class="hobbies__item">${skillName}</li>
      `;
    })
    .join("");

  return skillsItemsMarkup;
}

// ==========================================

function svgIconMarkup(id) {
  return `
    <svg class="icon icon-${id}">
      <use xlink:href="#icon-${id}"></use>
    </svg>
  `;
}
