import { info } from "./info.js";

import { svgIconMarkup } from "./scripts/helpers.js";
import { makeProjectsListMarkup } from "./scripts/projects.js";
import { makeEducationItemsMarkup } from "./scripts/educations.js";
import { makeCompanyItemsMarkup } from "./scripts/works.js";
import { makeLangButtonsMarkup } from "./scripts/languageButtons.js";
import { getBirthdayDate } from "./scripts/birthday.js";
import { makeContactsMarkup } from "./scripts/contacts.js";
import { makeSkillsListMarkup } from "./scripts/skills.js";
import { makeHobbiesMarkup } from "./scripts/hobbies.js";

const refs = {
  pageLang: document.documentElement.lang,
  name: document.querySelector(".introduce__name"),
  position: document.querySelector(".introduce__position"),
  intro: document.querySelector(".introduce__intro"),
  sub: document.querySelector(".introduce__subinfo"),
  // projectsTitle: document.querySelector(".projects__title"),
  // projects: document.querySelector(".projects__list"),
  educationTitle: document.querySelector(".educations__title"),
  education: document.querySelector(".educations__list"),
  worksTitle: document.querySelector(".works__title"),
  // langBtns: document.querySelector(".lang__buttons"),
  // birthdayTitle: document.querySelector(".birthday__title"),
  // birthday: document.querySelector(".birthday__date"),
  locationTitle: document.querySelector(".location__title"),
  location: document.querySelector(".location__place"),
  contactsTitle: document.querySelector(".contacts__title"),
  contacts: document.querySelector(".contacts__address"),
  techSkillTitle: document.querySelector(".tech__title"),
  techSkill: document.querySelector(".tech__skills"),
  langSkillTitle: document.querySelector(".lang__title"),
  langSkill: document.querySelector(".lang__skills"),
  softSkillTitle: document.querySelector(".soft__title"),
  softSkill: document.querySelector(".soft__skills"),
  hobbiesTitle: document.querySelector(".hobbies__title"),
  hobbies: document.querySelector(".hobbies__list"),
};

// Intro==========================================
refs.name.textContent = `${info.firstName[refs.pageLang]} ${
  info.lastName[refs.pageLang]
}`;
refs.position.textContent = `${info.lookingFor[refs.pageLang]}`;
refs.intro.textContent = `${info.intro[refs.pageLang]}`;
refs.sub.textContent = `${info.subInfo[refs.pageLang]}`;

// Projects==========================================
// refs.projectsTitle.innerHTML = `
// ${svgIconMarkup("projects")}
// ${info.projects.sectionTitle[refs.pageLang]}`;

// refs.projects.innerHTML = makeProjectsListMarkup(info.projects, refs.pageLang);

// Education==========================================

refs.educationTitle.innerHTML = `
  ${svgIconMarkup("education")}
  ${info.educations.sectionTitle[refs.pageLang]}`;

refs.education.innerHTML = makeEducationItemsMarkup(
  info.educations,
  refs.pageLang
);

// Works==========================================

refs.worksTitle.innerHTML = `
  ${svgIconMarkup("work")}
  ${info.works.sectionTitle[refs.pageLang]}`;

document.querySelector(".works__list").innerHTML = makeCompanyItemsMarkup(
  info.works.companies,
  refs.pageLang
);

// LangButtons==========================================

// refs.langBtns.innerHTML = makeLangButtonsMarkup(info);

// Birthday==========================================

// refs.birthdayTitle.innerHTML = `
//   ${svgIconMarkup("birth")}
//   ${info.dateOfBirth.sectionTitle[refs.pageLang]}
//   `;

// refs.birthday.innerHTML = `<li>${getBirthdayDate(
//   info.dateOfBirth.date,
//   refs.pageLang
// )}</li>`;

// Location==========================================

refs.locationTitle.innerHTML = `
${svgIconMarkup("location")}
${info.location.sectionTitle[refs.pageLang]}
`;

refs.location.innerHTML = `<li>${info.location[refs.pageLang]}</li>`;

// Contacts==========================================

refs.contactsTitle.innerHTML = `
${svgIconMarkup("contacts")}
${info.contacts.sectionTitle[refs.pageLang]}
`;

refs.contacts.innerHTML = makeContactsMarkup(info.contacts.contacts);

// Tech==========================================

refs.techSkillTitle.innerHTML = `
${svgIconMarkup("skill-tech")}
${info.skills.tech.sectionTitle[refs.pageLang]}
`;

refs.techSkill.innerHTML = makeSkillsListMarkup(
  "tech",
  info.skills,
  refs.pageLang
);

// Lang==========================================

refs.langSkillTitle.innerHTML = `
${svgIconMarkup("skill-lang")}
${info.skills.lang.sectionTitle[refs.pageLang]}`;

refs.langSkill.innerHTML = makeSkillsListMarkup(
  "lang",
  info.skills,
  refs.pageLang
);

// Soft==========================================

refs.softSkillTitle.innerHTML = `
${svgIconMarkup("skill-soft")}
${info.skills.soft.sectionTitle[refs.pageLang]}`;

refs.softSkill.innerHTML = makeSkillsListMarkup(
  "soft",
  info.skills,
  refs.pageLang
);

// Hobbies==========================================

refs.hobbiesTitle.innerHTML = `
  ${svgIconMarkup("hobbies")}
  ${info.hobbies.sectionTitle[refs.pageLang]}`;

refs.hobbies.innerHTML = makeHobbiesMarkup(info.hobbies, refs.pageLang);
// ==========================================
