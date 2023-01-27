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

  dateOfBirh: '1987-08-27T00:00:00',

  location: {
    en: 'Warsaw, before the war - Kharkiv',
    pl: 'Warszawa, przed wojną – Charków',
    ua: 'Варшава, до війни - Харків',
  },

  intro: {
    en: 'Looking for Junior Frontend developer position. I am highly motivated to get new knowledge and put it to use in real projects. I am good team player and prefer to build strong communication via members of a group. Also, I am well-organized and responsible. I am constantly engaged in self-development in programming and improvement of English language skills.',
    pl: 'Szukam pracy na stanowisku Junior Frontend Developer. Jestem bardzo zmotywowany do zdobywania nowych umiejętności i wykorzystywania ich przy pracy nad projektami. Dobrze odnajduję się w pracy zespołowej i lubię budować silne relacje w grupie współpracowników. Jestem osobą dobrze zorganizowaną i odpowiedzialną. Stale zajmuję się samorozwojem w zakresie programowania i doskonaleniem znajomości języka angielskiego.',
    ua: 'Шукаю посаду Junior Frontend розробника. Маю велику мотивацію отримувати нові знання та застосовувати їх на реальних проектах. Я хороший командний гравець та віддаю перевагу налагодженню комунікацій всередині команди. Крім того, маю організаційні навички та відповідально ставлюся до виконання задач. Постійно займаюся саморозвитком у програмуванні та вдосконаленням знань англійської мови.',
  },

  subInfo: {
    en: 'I am considering work in all cities and I am ready to move.',
    pl: 'Rozważam pracę we wszystkich miastach i jestem gotowy do przeprowadzki.',
    ua: 'Розглядаю роботу в усіх містах і готовий до переїзду.',
  },

  contacts: {
    phone: ['+380979501906', '+48662276720'],
    email: 'tkachukrr@gmail.com',
    telegram: 'https://t.me/TkachukRR',
    linkedIn: 'https://www.linkedin.com/in/roman-tkachuk-2a4337234',
    gitHub: 'https://github.com/TkachukRR',
  },

  projects: [
    {
      title: 'hogwarts',
      link: 'https://tkachukrr.github.io/19-hogwarts/',
      urlGit: 'https://github.com/TkachukRR/19-hogwarts',
      stack: ['JavaScript', 'CSS', 'HTML'],
    },
    {
      title: 'Web-studio',
      link: 'https://tkachukrr.github.io/09-web-studio/',
      urlGit: 'https://github.com/TkachukRR/09-web-studio',
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'GooDreamShop',
      link: 'https://tkachukrr.github.io/14-GooDreamShop/',
      urlGit: 'https://github.com/TkachukRR/14-GooDreamShop/',
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Christmas trees',
      link: 'https://tkachukrr.github.io/06-christmas-trees/',
      urlGit: 'https://github.com/TkachukRR/06-christmas-trees/',
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Resume',
      link: 'https://tkachukrr.github.io/00-Resume/',
      urlGit: 'https://github.com/TkachukRR/00-Resume/',
      stack: ['React', 'JavaScript', 'CSS', 'HTML'],
    },
  ],

  education: [
    {
      institution: "National Aerospace University М.E. Zhukovsky 'KHАІ'",
      rank: 'Specialist',
      period: {
        start: '2004-09-01T00:00:00',
        end: '2009-06-31T00:00:00',
      },
    },
  ],
});
