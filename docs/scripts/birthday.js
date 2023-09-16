export function getBirthdayDate(dateOfBirth, pageLang) {
  const birthday = new Date(dateOfBirth);
  const options = {
    day: "numeric",
    month: "numeric",
  };
  let birth = birthday.toLocaleDateString("ua", options);
  switch (pageLang) {
    case "en":
      birth = birth.replace(".08", " August");
      break;
    case "pl":
      birth = birth.replace(".08", " Sierpień");
      break;
    case "ua":
      birth = birth.replace(".08", " Серпня");
      break;
  }

  return birth;
}
