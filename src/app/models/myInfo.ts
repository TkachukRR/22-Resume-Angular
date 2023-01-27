export interface MyInfo {
  firstName: {
    en: string;
    pl: string;
    ua: string;
  };

  lastName: {
    en: string;
    pl: string;
    ua: string;
  };

  dateOfBirh: string;

  location: {
    en: string;
    pl: string;
    ua: string;
  };

  intro: {
    en: string;
    pl: string;
    ua: string;
  };

  subInfo: {
    en: string;
    pl: string;
    ua: string;
  };

  contacts: {
    phone: Array<string>;
    email: string;
    telegram: string;
    linkedIn: string;
    gitHub: string;
  };

  educations: {
    sectionTitle: {
      en: string;
      pl: string;
      ua: string;
    };
    institutions: Array<Object>;
  };

  works: {
    sectionTitle: {
      en: string;
      pl: string;
      ua: string;
    };
    companies: Array<Object>;
  };
}
