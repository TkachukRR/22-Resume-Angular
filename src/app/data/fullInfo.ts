import { MyInfo } from '../models/myInfo';

export const fullInfo: MyInfo = Object.freeze({
  firstName: {
    en: 'Roman',
    pl: 'Roman',
    ua: 'Роман',
  },

  lastName: {
    en: 'Tkachuk',
    pl: 'Tkaczuk',
    ua: 'Ткачук',
  },

  lookingFor: {
    en: 'Junior Frontend Developer',
    pl: 'Junior Frontend Developer',
    ua: 'Junior Frontend розробник',
  },

  dateOfBirh: {
    sectionTitle: {
      en: 'Date of birth:',
      pl: 'Data urodzenia:',
      ua: 'Дата народження:',
    },
    date: '1987-08-27T00:00:00',
  },

  location: {
    sectionTitle: {
      en: 'Location:',
      pl: 'Lokalizacja:',
      ua: 'Локація:',
    },
    en: 'Warsaw',
    pl: 'Warszawa',
    ua: 'Варшава',
  },

  intro: {
    en: 'I am highly motivated to get new knowledge and put it to use in real projects. I am good team player and prefer to build strong communication via members of a group. Also, I am well-organized and responsible. I am constantly engaged in self-development in programming and improvement of English language skills.',
    pl: 'Jestem bardzo zmotywowany do zdobywania nowych umiejętności i wykorzystywania ich przy pracy nad projektami. Dobrze odnajduję się w pracy zespołowej i lubię budować silne relacje w grupie współpracowników. Jestem osobą dobrze zorganizowaną i odpowiedzialną. Stale zajmuję się samorozwojem w zakresie programowania i doskonaleniem znajomości języka angielskiego.',
    ua: 'Маю велику мотивацію отримувати нові знання та застосовувати їх на реальних проектах. Я хороший командний гравець та віддаю перевагу налагодженню комунікацій всередині команди. Крім того, маю організаційні навички та відповідально ставлюся до виконання задач. Постійно займаюся саморозвитком у програмуванні та вдосконаленням знань англійської мови.',
  },

  subInfo: {
    en: 'I am considering work in all cities and I am ready to move.',
    pl: 'Rozważam pracę we wszystkich miastach i jestem gotowy do przeprowadzki.',
    ua: 'Розглядаю роботу в усіх містах і готовий до переїзду.',
  },

  contacts: {
    sectionTitle: {
      en: 'Contacts:',
      pl: 'Kontakt:',
      ua: 'Контакти:',
    },
    phone: ['+380979501906', '+48662276720'],
    email: 'tkachukrr@gmail.com',
    telegram: 'https://t.me/TkachukRR',
    linkedIn: 'https://www.linkedin.com/in/TkachukRR',
    gitHub: 'https://github.com/TkachukRR',
  },

  projects: {
    sectionTitle: {
      en: 'Projects:',
      pl: 'Projektowanie:',
      ua: 'Проекти:',
    },
    list: [
      {
        title: 'Beer Finder API',
        link: 'https://tkachukrr.github.io/25-JS-API-Beer-Finder/',
        urlGit: 'https://github.com/TkachukRR/25-JS-API-Beer-Finder/',
        stack: ['JavaScript', 'HTML5', 'SCSS', 'BEM', 'Jira', 'Trello'],
      },
      // {
      //   title: 'To Do List',
      //   link: 'https://tkachukrr.github.io/24-JS-ToDolist/',
      //   urlGit: 'https://github.com/TkachukRR/24-JS-ToDolist/',
      //   stack: ['JavaScript', 'HTML5', 'CSS3', 'Jira', 'Trello'],
      // },
      {
        title: 'Resume',
        link: 'https://tkachukrr.github.io/22-Resume-Angular/',
        urlGit: 'https://github.com/TkachukRR/22-Resume-Angular/',
        stack: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'Tailwindcss'],
      },
      // {
      //   title: 'Angular APP',
      //   link: 'https://tkachukrr.github.io/23-angular-training-app/',
      //   urlGit: 'https://github.com/TkachukRR/23-angular-training-app/',
      //   stack: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'SCSS'],
      // },
      {
        title: 'Calculator',
        link: 'https://tkachukrr.github.io/Calculator-JS/',
        urlGit: 'https://github.com/TkachukRR/Calculator-JS',
        stack: ['JavaScript', 'CSS3', 'HTML5'],
      },
      {
        title: 'Exchange',
        link: 'https://tkachukrr.github.io/18-exchange/',
        urlGit: 'https://github.com/TkachukRR/18-exchange',
        stack: ['JavaScript', 'CSS3', 'HTML5'],
      },
      {
        title: 'Hogwarts',
        link: 'https://tkachukrr.github.io/19-hogwarts/',
        urlGit: 'https://github.com/TkachukRR/19-hogwarts',
        stack: ['JavaScript', 'CSS3', 'HTML5'],
      },
      {
        title: 'Web-Studio',
        link: 'https://tkachukrr.github.io/09-web-studio/',
        urlGit: 'https://github.com/TkachukRR/09-web-studio',
        stack: ['HTML5', 'CSS3', 'JavaScript'],
      },
      {
        title: 'GooDreamShop',
        link: 'https://tkachukrr.github.io/14-GooDreamShop/',
        urlGit: 'https://github.com/TkachukRR/14-GooDreamShop/',
        stack: ['HTML5', 'CSS3', 'JavaScript'],
      },
      {
        title: 'Christmas Trees',
        link: 'https://tkachukrr.github.io/06-christmas-trees/',
        urlGit: 'https://github.com/TkachukRR/06-christmas-trees/',
        stack: ['HTML5', 'CSS3', 'JavaScript'],
      },
      // {
      //   title: 'Resume v1',
      //   link: 'https://tkachukrr.github.io/00-Resume/',
      //   urlGit: 'https://github.com/TkachukRR/00-Resume/',
      //   stack: ['HTML', 'CSS', 'JavaScript'],
      // },
    ],
  },

  educations: {
    sectionTitle: {
      en: 'Education:',
      pl: 'Edukacja:',
      ua: 'Освіта:',
    },
    institutions: [
      {
        en: {
          institution: '"Andersen" -  Software Development Company',
          rank: 'Trainee',
          direction: 'Angular Framework intensive',
          period: {
            start: '2023-01-21T00:00:00',
            end: '',
          },
        },
        pl: {
          institution: '"Andersen" - Firma programistyczna',
          rank: 'Stażysta',
          direction: 'Intensywny Angular Framework',
          period: {
            start: '2023-01-21T00:00:00',
            end: '',
          },
        },
        ua: {
          institution:
            '"Andersen" - Компанія з розробки програмного забезпечення',
          rank: 'Стажер',
          direction: 'Angular Framework - інтенсив',
          period: {
            start: '2023-01-21T00:00:00',
            end: '',
          },
        },
      },
      {
        en: {
          institution: '"Andersen" -  Software Development Company',
          rank: 'Trainee',
          direction: 'JS Core intensive',
          period: {
            start: '2022-11-10T00:00:00',
            end: '2023-01-20T00:00:00',
          },
        },
        pl: {
          institution: '"Andersen" - Firma programistyczna',
          rank: 'Stażysta',
          direction: 'Intensywny JS Core',
          period: {
            start: '2022-11-10T00:00:00',
            end: '2023-01-20T00:00:00',
          },
        },
        ua: {
          institution:
            '"Andersen" - Компанія з розробки програмного забезпечення',
          rank: 'Стажер',
          direction: 'JS Core-інтенсив',
          period: {
            start: '2022-11-10T00:00:00',
            end: '2023-01-20T00:00:00',
          },
        },
      },
      {
        en: {
          institution: '"GoIT" -  innovative IT courses',
          rank: 'Developer',
          direction: 'Fullstack JavaScript developer',
          period: {
            start: '2021-11-01T00:00:00',
            end: '2022-09-31T00:00:00',
          },
        },
        pl: {
          institution: '"GoIT" - innowacyjne kursy IT',
          rank: 'Developer',
          direction: 'Fullstack JavaScript developer',
          period: {
            start: '2021-11-01T00:00:00',
            end: '2022-09-31T00:00:00',
          },
        },
        ua: {
          institution: '"GoIT" - платформа IT-курсів',
          rank: 'Розробник',
          direction: 'Fullstack JavaScript developer',
          period: {
            start: '2021-11-01T00:00:00',
            end: '2022-09-31T00:00:00',
          },
        },
      },
      {
        en: {
          institution: "National Aerospace University М.E. Zhukovsky 'KHАІ'",
          rank: 'Specialist',
          direction:
            'Technologies and means of telecommunications, qualified as a specialist in electronics and telecommunications',
          period: {
            start: '2004-09-01T00:00:00',
            end: '2009-06-31T00:00:00',
          },
        },
        pl: {
          institution: 'Aero-Kosmiczny Uniwersytet Narodowy w Charkowie „HАІ”',
          rank: 'Specialist',
          direction:
            'Technologie i środki telekomunikacyjne - posiadam kwalifikacje specjalisty w dziedzinie elektroniki i telekomunikacji.',
          period: {
            start: '2004-09-01T00:00:00',
            end: '2009-06-31T00:00:00',
          },
        },
        ua: {
          institution:
            'Національний Аерокосмічний Університет М.Є. Жуковського "ХАІ"',
          rank: 'Спеціаліст',
          direction:
            'Технології та засоби телекомунікацій, здобув кваліфікацію інженера в галузі електроніки та телекомунікацій.',
          period: {
            start: '2004-09-01T00:00:00',
            end: '2009-06-31T00:00:00',
          },
        },
      },
    ],
  },

  works: {
    sectionTitle: {
      en: 'Work experience:',
      pl: 'Doświadczenie zawodowe:',
      ua: 'Досвід роботи:',
    },
    companies: [
      {
        en: {
          company: 'Smart Garden',
          position: 'CEO',
          location: 'Kharkiv',
          period: {
            start: '2009-08-01T00:00:00',
            end: '2021-11-01T00:00:00',
          },
          responsibilities: [
            'Installation of automatic irrigation systems, repair and maintenance of systems',
            'Creation of a plan of the site, creation of construction drawings',
            'Creating a 3-d model of the site, development of projects in CAD KOMPAS 3D',
            'Meetings and negotiations with customers, purchase of equipment, delivery of objects',
          ],
        },
        pl: {
          company: 'Smart Garden',
          position: 'CEO',
          location: 'Charków',
          period: {
            start: '2009-08-01T00:00:00',
            end: '2021-11-01T00:00:00',
          },
          responsibilities: [
            'Montaż automatycznych systemów nawadniających, naprawa i konserwacja systemów',
            'Tworzenie planu sytuacyjnego, tworzenie dokumentacji technicznej',
            'Opracowywanie projektów w CAD KOMPAS 3D, instalacja modelu 3D w Realtime Landscaping Architect',
            'Spotkania i negocjacje z klientami, zakup sprzętu, dostawa zaopatrzenia',
          ],
        },
        ua: {
          company: 'Smart Garden',
          position: 'Директор',
          location: 'Харків',
          period: {
            start: '2009-08-01T00:00:00',
            end: '2021-11-01T00:00:00',
          },
          responsibilities: [
            'Монтаж систем автоматичного поливу, ремонт та обслуговування систем',
            'Створення плану ділянки, створення технічної документації',
            'Розробка проектів у CAD KOMPAS 3D, монтаж 3D-прогулянки у Realtime Landscaping Architect',
            "Зустрічі та переговори з замовниками, придбання обладнання, здача об'єктів",
          ],
        },
      },
      {
        en: {
          company: 'LLC “Еcodis”',
          position: 'Engineer',
          location: 'Kharkiv',
          period: {
            start: '2006-08-01T00:00:00',
            end: '2009-09-01T00:00:00',
          },
          responsibilities: [
            'Installation of automatic irrigation systems, repair and maintenance of systems',
            'Creation of a plan of the site, creation of construction drawings',
          ],
        },
        pl: {
          company: 'LLC “Еcodis”',
          position: 'Inżynier',
          location: 'Charków',
          period: {
            start: '2006-08-01T00:00:00',
            end: '2009-09-01T00:00:00',
          },
          responsibilities: [
            'Montaż automatycznych systemów nawadniających, naprawa i konserwacja systemów',
            'Tworzenie planu sytuacyjnego, tworzenie dokumentacji technicznej',
          ],
        },
        ua: {
          company: 'ТОВ “Екодіс”',
          position: 'Інженер',
          location: 'Харків',
          period: {
            start: '2006-08-01T00:00:00',
            end: '2009-09-01T00:00:00',
          },
          responsibilities: [
            'Монтаж систем автоматичного поливу, ремонт та обслуговування систем',
            'Створення плану ділянки, створення технічної документації',
          ],
        },
      },
    ],
  },

  skills: {
    tech: {
      sectionTitle: {
        en: 'Tech Skills:',
        pl: 'Umiejętności techniczne:',
        ua: 'Технічні навички:',
      },
      en: [
        'HTML5',
        'CSS3/SASS/BEM',
        'JavaScript',
        'TypeScript',
        'Angular',
        'Node.JS',
        'ReactJS',
        'OOP/SOLID',
        'Figma',
        'GIT/GitHub',
        'Adobe Photoshop',
        'Responsive/adaptive web design',
        'Jira',
        'Trello',
        'CAD KOMPAS 3D',
        'Realtime landscaping Architect',
      ],
      pl: [
        'HTML5',
        'CSS3/SASS/BEM',
        'JavaScript',
        'TypeScript',
        'Angular',
        'Node.JS',
        'ReactJS',
        'OOP/SOLID',
        'Figma',
        'GIT/GitHub',
        'Adobe Photoshop',
        'Responsive/adaptive web design',
        'Jira',
        'Trello',
        'CAD KOMPAS 3D',
        'Realtime landscaping Architect',
      ],
      ua: [
        'HTML5',
        'CSS3/SASS/BEM',
        'JavaScript',
        'TypeScript',
        'Angular',
        'Node.JS',
        'ReactJS',
        'OOP/SOLID',
        'Figma',
        'GIT/GitHub',
        'Adobe Photoshop',
        'Responsive/adaptive web design',
        'Jira',
        'Trello',
        'CAD KOMPAS 3D',
        'Realtime landscaping Architect',
      ],
    },

    languages: {
      sectionTitle: {
        en: 'Language Skills:',
        pl: 'Znajomość języków:',
        ua: 'Знання мов:',
      },
      en: [
        {
          language: 'Ukrainian',
          skill: 'expert',
        },
        {
          language: 'English',
          skill: 'intermediate',
        },
        {
          language: 'Polish',
          skill: 'pre-Intermediate',
        },
        {
          language: 'Russian',
          skill: 'expert',
        },
      ],
      pl: [
        {
          language: 'Ukraiński',
          skill: 'ekspert',
        },
        {
          language: 'Angielski',
          skill: 'zaawansowany',
        },
        {
          language: 'Polski',
          skill: 'początkujący',
        },
        {
          language: 'Rosyjski',
          skill: 'ekspert',
        },
      ],
      ua: [
        {
          language: 'Українська',
          skill: 'експерт',
        },
        {
          language: 'Англійська',
          skill: 'середній',
        },
        {
          language: 'Польська',
          skill: 'нижче середнього',
        },
        {
          language: 'Російська',
          skill: 'експерт',
        },
      ],
    },

    soft: {
      sectionTitle: {
        en: 'Soft Skills:',
        pl: 'Umiejętności dodatkowe:',
        ua: 'Особисті якості:',
      },
      en: [
        'Efficient communicator, good at collaboration',
        'Time-management',
        'Creativity',
        'Problem solving',
        'Stress tolerance',
      ],
      pl: [
        'Komunikatywność',
        'Umiejętność pracy w grupie',
        'Kreatywność',
        'Umiejętność rozwiązywania problemów',
        'Dobra organizacja pracy',
      ],
      ua: [
        'Комунікабельність',
        'Тайм-менеджмент',
        'Креативність',
        'Вирішення проблемних задач',
        'Стресостійкість',
      ],
    },
  },

  hobbies: {
    sectionTitle: {
      en: 'Hobbies:',
      pl: 'Zainteresowania:',
      ua: 'Хобі:',
    },
    en: ['Guitar', 'Volleyball', 'Automation system', 'Walks and traveling'],
    pl: [
      'Gra na gitarze',
      'Siatkówka',
      'Systemy automatyki',
      'Spacery i podróże',
    ],
    ua: [
      'Гітара',
      'Волейбол',
      'Автоматизація систем',
      'Прогулянки та подорожі',
    ],
  },
});
