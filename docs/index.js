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
document.querySelector(".projects__title").innerHTML = `
  ${svgIconMarkup("projects")}
  ${info.projects.sectionTitle[pageLang]}`;

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

    let tasks = "";
    if (project.generalTasks) {
      tasks = project.generalTasks[pageLang]
        .map((task) => {
          return `
      <li>${task}</li>
      `;
        })
        .join("");
      console.log(tasks);
    }

    projectItemsMarkup += `
    <li class="projects__item project">
      <h4 class="project__title">${project.title}</h4>
      <div class="project__description">${
        project.description ? project.description[pageLang] : ""
      }</div>
      <div class="project__wrapper">

        <ul class="project__tasks">${tasks}</ul>
        <div class="project__screenshot">
          <img  src="${
            "./imgs/" + project.title.toLocaleLowerCase() + ".jpg"
          }" alt="Page ${project.title} screenshot">
        </div>
        
      </div>
      <div class="project__technology"> 
        <span class="project__tech">Stack:</span>
        <ul class="project__stack">${stack}</ul>  
      </div>
      <div class="project__buttons">
        <a class="project__link btn" href="${project.link}">${svgIconMarkup(
      "www"
    )}</a>
        <a class="project__link btn" href="${project.urlGit}">${svgIconMarkup(
      "git"
    )}</a>
      </div>
    </li>
  `;
    return projectItemsMarkup;
  });

  return projectItemsMarkup;
}

document.querySelector(".projects__list").innerHTML = makeProjectItemsMarkup();

// ==========================================

document.querySelector(".educations__title").innerHTML = `
  ${svgIconMarkup("education")}
  ${info.educations.sectionTitle[pageLang]}`;

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
        ${dateStart.toLocaleString(undefined, options).toString()} - ${
      dateEnd.toLocaleString(undefined, options) === "Invalid Date"
        ? "now"
        : dateEnd.toLocaleString(undefined, options).toString()
    } | 
        <span class="institution__rank">${institution[pageLang].rank}</span>
      </p>
      <p class="institution__direction">${institution[pageLang].direction}</p>
      <ul class="institution__obtention">
        ${institution[pageLang].obtention
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

document.querySelector(".educations__list").innerHTML =
  makeEducationItemsMarkup();

// ==========================================

document.querySelector(".works__title").innerHTML = `
  ${svgIconMarkup("work")}
  ${info.works.sectionTitle[pageLang]}`;

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
      <h4 class="company__title">${company[pageLang].company}</h4>
      <p class="company__period">
    ${dateStart.toLocaleString(undefined, options).toString()} - ${
      dateEnd.toLocaleString(undefined, options) === "Invalid Date"
        ? "now"
        : dateEnd.toLocaleString(undefined, options).toString()
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
  ${info.dateOfBirth.sectionTitle[pageLang]}
  `;

document.querySelector(
  ".birthday__date"
).innerHTML = `<li>${birthday.toLocaleDateString(undefined, options)}</li>`;

// ==========================================
document.querySelector(".location__title").innerHTML = `
${svgIconMarkup("location")}
${info.location.sectionTitle[pageLang]}
`;

document.querySelector(
  ".location__place"
).innerHTML = `<li>${info.location[pageLang]}</li>`;

// ==========================================

document.querySelector(".contacts__title").innerHTML = `
${svgIconMarkup("contacts")}
${info.contacts.sectionTitle[pageLang]}
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
${info.skills.tech.sectionTitle[pageLang]}
`;

document.querySelector(".tech__skills").innerHTML =
  makeSkillsListMarkup("tech");

// ==========================================

document.querySelector(".lang__title").innerHTML = `
${svgIconMarkup("skill-lang")}
${info.skills.lang.sectionTitle[pageLang]}`;

document.querySelector(".lang__skills").innerHTML =
  makeSkillsListMarkup("lang");

// ==========================================

document.querySelector(".soft__title").innerHTML = `
${svgIconMarkup("skill-soft")}
${info.skills.soft.sectionTitle[pageLang]}`;

document.querySelector(".soft__skills").innerHTML =
  makeSkillsListMarkup("soft");

// ==========================================

function makeSkillsListMarkup(skill) {
  const skillsItemsMarkup = info.skills[skill][pageLang]
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
  ${info.hobbies.sectionTitle[pageLang]}`;

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

function svgIconMarkup(id) {
  return `
    <svg class="icon icon-${id}">
      <use xlink:href="#icon-${id}"></use>
    </svg>
  `;
}
