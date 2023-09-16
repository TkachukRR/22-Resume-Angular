export function makeSkillsListMarkup(skill, skills, pageLang) {
  return skills[skill][pageLang]
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
}
