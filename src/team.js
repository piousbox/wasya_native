
const zach = require('./images/team/zach_500x500.jpg')
const steve = require('./images/team/steve_500x500.jpg')
const oleg = require('./images/team/oleg_500x500.jpg')
const bondar = require('./images/team/bondar_500x500.jpg')
const victor = require('./images/team/victor_500x500.jpg')
const kim = require('./images/team/kim_500x500.jpg')
const brad = require('./images/team/brad_500x500.jpg')
const bugra = require('./images/team/bugra_500x500.jpg')
const d = require('./images/team/default_500x500.jpg')
const kay = require('./images/team/kay_500x500.jpg')

export default team = {
  zach: {
    image: zach,
    name: 'Zach Mulholland',
    title: 'CEO',
    description: [],
  },
  steve: {
    image: steve,
    name: 'Stephen Kim',
    title: 'CFO',    // Legal Advisor
    description: [], // 'Stephen is the legal advisor to the team.' ],
    links: [],       // { icon: 'fa-globe', title: 'Website', link: 'https://skim.law' }, ],
  },
  oleg: { image: oleg,
          name: 'Oleg Pudeyev',
          title: 'CTO', // 'Principal Software Developer',
          description: [],
          desciption_trash: [
            "Full stack engineer and tech lead with 12 years of Web development experience with a focus on Ruby on Rails applications. Experienced in hands-on development, design and architecture, technical leadership, mentoring, project management and planning.",
            "His objective is to write code that is beautiful, maintainable and delights customers when it is deployed."
          ],
          links: [],
          links_trash: [
            { icon: 'fa-file-pdf-o', title: 'Resume',   link: 'http://olegp.com/resume/oleg-pudeyev-resume.pdf' },
            { icon: 'fa-github',     title: 'Github',   link: 'https://github.com/p' },
            { icon: 'fa-linkedin',   title: 'LinkedIn', link: 'https://www.linkedin.com/in/olegpudeyev/' },
          ],
  },
  bondar: {
    image: bondar,
    name: 'Julia Bondar',
    title: 'CMO', // Cultural Advisor',
    description: [],
    links: [],
    links_trash: [
      { icon: 'fa-file-pdf-o', title: 'Resume', link: 'https://s3.amazonaws.com/ish-archive/2017/hunter/20171231_bondar_resume.pdf' },
    ],
  },

  // principals and engineers
  victor: { image: victor,
            name: 'Victor Pudeyev',
            title: 'Principal Software Developer',
            description: [
              "A full-stack engineer focusing on Ruby on Rails, Javascript, devops, and web application development for startups and agile teams."
            ],
            description_trash: [
              "Victor Piousbox, the great russian bear rider, owner of wooden rubles, conqueror of rivers and dataflows, fearless thinker and tinker, has been with Operaevent since the beginning. He has been honestly producing the technical foundation on which the platform relies for a while now. Before then, he has rotated many software engineering roles in a variety of companies in the Bay Area and elsewhere. In his spare time, he likes to run around in the forest shooting guns in the manner of a sport exercise, ride his motorcycle into the sunset, and read technical documentation to better his skill in technology bending.",
            ],
            links: [
              { icon: 'fa-file-pdf-o', title: 'Resume',   link: 'https://s3.amazonaws.com/ish-archive/2018/hunter/201806-VictorPudeyev-Resume.pdf' },
              { icon: 'fa-github',     title: 'Github',   link: 'https://github.com/piousbox' },
              // { icon: 'fa-linkedin',   title: 'LinkedIn', link: 'https://www.linkedin.com/in/victor-pudeyev-ba9008107/' },
            ],
  },

  kim: { image: kim,
         name: 'Kim Sinton',
         title: 'Principal Software Developer',
         description: [
           "Kim is a front-end engineer with a vast professional experience. He finds innovative strategic solutions to the growing pains of the team and contributes invaluably to our overall vision."
         ],
         links: [
           { icon: 'fa-linkedin', title: 'LinkedIn', link: 'https://www.linkedin.com/in/kim-sinton-3a8848/', },
         ],
  },
  brad: { image: brad,
          name: 'Bradford Prothman-Roberts',
          title: 'Business Developer', // economic advisor
          description: [],
          description_trash: [
            'Brad is a University of South Carolina graduate. He participates in studies of product feasibility, as well as import/export to Latin America.' ],
          links: [
            { icon: 'fa-linkedin', title: 'LinkedIn', link: 'https://www.linkedin.com/in/broadfjord/' },
          ],
  },
  jonathan: {
    image: d,
    name: 'Jonathan Castellano',
    title: 'Business Developer', // public relations specialist
    description: [],
  },
  bugra: {
    image: bugra,
    name: 'Bugra Akturk',
    title: 'Software Developer',
    description: [ 'A dedicated and results-driven Business Development Executive and E-Commerce Consultant with a highly successful background in the achievement of profitable business development through the creation and execution of outstanding e-commerce, travel, fin-tech projects and strategies.',
                   // 'Experienced in working with leading domestic and international brands in the airline and travel industries with the primary focus on exceeding expectations for internet sales and business objectives. Also applied a Square App business model to Turkey fin-tech market successfully.',
                   // 'Possesses excellent interpersonal communication and leadership skills and the ability to develop and maintain mutually beneficial internal and external relationships. Enjoys being part of, as well as managing, motivating and training, a successful and productive team, and thrives in highly pressurized and challenging working environments.'
    ],
    links: [
      { icon: 'fa-file-pdf-o', title: 'Resume', link: 'https://s3.amazonaws.com/ish-archive/2018/hunter/20180406_bugra.pdf' }
    ]
  },
  theresa: {
    image: d,
    name: 'Theresa Campbel',
    title: 'Graphic Designer',
    description: [],
  },
  bibas: {
    image: d,
    name: 'Bibaswan Bhawal',
    title: 'Software Developer',
    description: [],
  },
  kay: {
    image: kay,
    name: 'Kay Brown',
    title: 'Graphic Designer',
    description: [],
  },
}

