export function makeLangButtonsMarkup(info) {
  const languages = Object.keys(info.firstName);

  return languages
    .map((lang) => {
      const htmlLang = lang === "en" ? "" : `_${lang}`;

      return `
      <li class="language__item btn">
        <a class="language__link" href="index${htmlLang}.html">${lang}</a> 
      </li>
    `;
    })
    .join("");
}
