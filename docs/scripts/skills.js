export function makeSkillsListMarkup(skill, skills, pageLang) {
  return skills[skill][pageLang]
    .map((skillName) => {
      if (skill === "lang") {
        // `<li class="${skill}__item">${skillName.language} - ${skillName.skill}
        //   <div class="progress-bar green stripes">
        //     <span style="width: ${skillName.level}%"></span>
        //   </div>
        // </li>`
        return `
          <li class="${skill}__item">${skillName.language} - ${skillName.skill}</li>
        `;
      }

      if (skill === "tech") {
        // `<li class="${skill}__item">
        // ${skillName.name}
        //   <div class="progress-bar green stripes">
        //     <span style="width: ${skillName.level}%"></span>
        //   </div>
        // </li>`

        return `
          <li class="${skill}__item">${skillName.name}</li>
        `;
      }

      return `
        <li class="${skill}__item">${skillName}</li>
      `;
    })
    .join("");
}
