import { info } from "./info.js";
const pageLang = document.querySelector("html").getAttribute("lang");

// ==========================================

document.querySelector(
  ".introduce__name"
).textContent = `${info.firstName[pageLang]} ${info.lastName[pageLang]}`;

document.querySelector(
  ".introduce__position"
).textContent = `${info.lookingFor[pageLang]}`;

document.querySelector(
  ".introduce__intro"
).textContent = `${info.intro[pageLang]}`;

document.querySelector(
  ".introduce__subinfo"
).textContent = `${info.subInfo[pageLang]}`;

// ==========================================
document.querySelector(
  ".projects__title"
).textContent = `${info.projects.sectionTitle[pageLang]}`;

function makeProjectItemsMarkup() {
  let projectItemsMarkup = "";

  info.projects.list.map((project) => {
    const stack = project.stack
      .map((technology) => {
        return `
      <li>${technology}</li>
      `;
      })
      .join(",&nbsp;");

    projectItemsMarkup += `
    <li class="projects__item project">
      <h4 class="project__title">${project.title}</h4>
      <div class="project__technology"> 
        <span class="project__tech">Stack:</span>
        <ul class="project__stack">${stack}</ul>  
      </div>
      <div class="project__buttons">
        <a class="project__link btn" href="${project.link}">web</a>
        <a class="project__link btn" href="${project.urlGit}">git</a>
      </div>
    </li>
  `;
    return projectItemsMarkup;
  });

  return projectItemsMarkup;
}

document.querySelector(".projects__list").innerHTML = makeProjectItemsMarkup();

// ==========================================

document.querySelector(
  ".educations__title"
).textContent = `${info.educations.sectionTitle[pageLang]}`;

function makeEducationItemsMarkup() {
  let institutionItemsMarkup = "";

  info.educations.institutions.map((institution) => {
    const dateStart = new Date(institution[pageLang].period.start);
    const dateEnd = new Date(institution[pageLang].period.end);
    const options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };

    institutionItemsMarkup += `
    <li class="educations__item institution">
      <h4 class="institution__title">${institution[pageLang].institution}</h4>
      <p class="institution__period">
        ${dateStart.toLocaleDateString(undefined, options)} - ${
      dateEnd.toLocaleDateString(undefined, options) === "Invalid Date"
        ? "now"
        : dateEnd.toLocaleDateString(undefined, options)
    } | 
        <span class="institution__rank">${institution[pageLang].rank}</span>
      </p>
      <p class="institution__direction">${institution[pageLang].direction}</p>
    </li>
  `;
    return institutionItemsMarkup;
  });

  return institutionItemsMarkup;
}

document.querySelector(".educations__list").innerHTML =
  makeEducationItemsMarkup();

// ==========================================

document.querySelector(
  ".works__title"
).textContent = `${info.works.sectionTitle[pageLang]}`;

function makeCompanyItemsMarkup() {
  let companyItemsMarkup = "";

  info.works.companies.map((company) => {
    let responsibilities = company[pageLang].responsibilities
      .map((responsibility) => {
        return `
      <li>${responsibility}</li>
      `;
      })
      .join("");

    const dateStart = new Date(company[pageLang].period.start);
    const dateEnd = new Date(company[pageLang].period.end);
    const options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };

    companyItemsMarkup += `
    <li class="works__item company">
      <h4 class="company_title">${company[pageLang].company}</h4>
      <p class="company__period">
    ${dateStart.toLocaleDateString(undefined, options)} - ${
      dateEnd.toLocaleDateString(undefined, options) === "Invalid Date"
        ? "now"
        : dateEnd.toLocaleDateString(undefined, options)
    }
    | 
        <span class="company__position">${company[pageLang].position}</span>
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
          <a href="index.html">${lang}</a> 
        </li>`;
      }
      return `
        <li class="language__item btn">
          <a href="index_${lang}.html">${lang}</a> 
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

document.querySelector(
  ".birthday__title"
).textContent = `${info.dateOfBirth.sectionTitle[pageLang]}`;

document.querySelector(
  ".birthday__date"
).textContent = `${birthday.toLocaleDateString(undefined, options)}`;

// ==========================================
document.querySelector(
  ".location__title"
).textContent = `${info.location.sectionTitle[pageLang]}`;

document.querySelector(
  ".location__place"
).textContent = `${info.location[pageLang]}`;

// ==========================================

document.querySelector(
  ".contacts__title"
).textContent = `${info.contacts.sectionTitle[pageLang]}`;

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
                ${phone}
              </a>
            `;
          })
          .join("");

        return phonesMarkup;
      }

      if (typeof info.contacts.contacts[contactType] !== "object") {
        return `
      <a href="${
        contactType === "email"
          ? "email:" + info.contacts.contacts[contactType]
          : info.contacts.contacts[contactType]
      }">
        ${info.contacts.contacts[contactType]}
      </a>
    `;
      }
    })
    .join("");

  return markup;
}

document.querySelector(".contacts__address").innerHTML = makeContactsMarkup();

// ==========================================

document.querySelector(
  ".tech__title"
).textContent = `${info.skills.tech.sectionTitle[pageLang]}`;

document.querySelector(".tech__skills").innerHTML =
  makeSkillsListMarkup("tech");

// ==========================================

document.querySelector(
  ".lang__title"
).textContent = `${info.skills.lang.sectionTitle[pageLang]}`;

document.querySelector(".lang__skills").innerHTML =
  makeSkillsListMarkup("lang");

// ==========================================

document.querySelector(
  ".soft__title"
).textContent = `${info.skills.soft.sectionTitle[pageLang]}`;

document.querySelector(".soft__skills").innerHTML =
  makeSkillsListMarkup("soft");

// ==========================================

function makeSkillsListMarkup(skill) {
  const skillsItemsMarkup = info.skills[skill][pageLang]
    .map((skillName) => {
      if (skill === "lang") {
        return `
          <li class="${skill}__item">${skillName.language} - ${skillName.skill}</li>
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

document.querySelector(
  ".hobbies__title"
).textContent = `${info.hobbies.sectionTitle[pageLang]}`;

document.querySelector(".hobbies__list").innerHTML = makeHobbiesMarkup("soft");

function makeHobbiesMarkup() {
  const skillsItemsMarkup = info.hobbies[pageLang]
    .map((skillName) => {
      return `
        <li class="hobbies__item">${skillName}</li>
      `;
    })
    .join("");

  return skillsItemsMarkup;
}

// ==========================================
