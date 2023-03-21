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

  lookingFor: {
    en: string;
    pl: string;
    ua: string;
  };

  dateOfBirth: {
    sectionTitle: {
      en: string;
      pl: string;
      ua: string;
    };
    date: string;
  };

  location: {
    sectionTitle: {
      en: string;
      pl: string;
      ua: string;
    };
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
    sectionTitle: {
      en: string;
      pl: string;
      ua: string;
    };
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

  skills: {
    tech: {
      sectionTitle: {
        en: string;
        pl: string;
        ua: string;
      };
      en: Array<string>;
      pl: Array<string>;
      ua: Array<string>;
    };

    languages: {
      sectionTitle: {
        en: string;
        pl: string;
        ua: string;
      };
      en: Array<Object>;
      pl: Array<Object>;
      ua: Array<Object>;
    };

    soft: {
      sectionTitle: {
        en: string;
        pl: string;
        ua: string;
      };
      en: Array<string>;
      pl: Array<string>;
      ua: Array<string>;
    };
  };

  hobbies: {
    sectionTitle: {
      en: string;
      pl: string;
      ua: string;
    };
    en: Array<string>;
    pl: Array<string>;
    ua: Array<string>;
  };
}
