import { svgIconMarkup } from "./helpers.js";

export function makeContactsMarkup(contacts) {
  const contactsTypes = Object.keys(contacts);

  const markup = contactsTypes
    .map((contactType) => {
      if (
        contactType === "phone" &&
        typeof contacts[contactType] === "object"
      ) {
        const phonesMarkup = contacts[contactType]
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
          <a href="${"email:" + contacts[contactType]}">
            ${svgIconMarkup("email")}
            ${contacts[contactType]}
          </a>
        `;
      }

      if (contactType === "linkedIn") {
        return `
          <a href="${contacts[contactType]}">
            ${svgIconMarkup(contactType)}
            ${contacts[contactType].slice(12)}
          </a>
        `;
      }

      return `
          <a href="${contacts[contactType]}">
            ${svgIconMarkup(contactType)}
            ${contacts[contactType].slice(8)}
          </a>
        `;
    })
    .join("");

  return markup;
}
