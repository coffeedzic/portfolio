import quizyImage from '../../assets/images/portfolio/quizy.jpg'
import phonebookImage from '../../assets/images/portfolio/phonebook.jpg'
import moviedbImage from '../../assets/images/portfolio/moviedb.jpg'
import fm387webImage from '../../assets/images/portfolio/fm387web.jpg'
import fm387logoImage from '../../assets/images/portfolio/fm387logo.jpg'
import fm387Logo from '../../assets/images/portfolio/fm387.png'
import cvImage from '../../assets/images/portfolio/cvcreator.jpg'
import triviaImage from '../../assets/images/portfolio/trivia.jpg'
import kralupiImage from '../../assets/images/portfolio/kralupi.jpg'
import kralupiLogo from '../../assets/images/portfolio/kralupi.png'


const portfolio = [
  {
    link: 'https://fm387.com',
    text: false,
    logo: fm387Logo,
    image: fm387webImage,
    title: 'Website',
    desc: 'Online presentation of Bosnian Football Manager Community.',
    class: 'blue'
  },
  {
    link: 'https://github.com/coffeedzic/phonebook',
    text: 'Phonebook',
    logo: false,
    image: phonebookImage,
    title: 'Web application',
    desc: 'Phonebook created with ReactJS & PHP with many possibilities.',
    class: 'green'
  },
  {
    link: 'https://github.com/coffeedzic/moviedb',
    text: 'Movie DB',
    logo: false,
    image: moviedbImage,
    title: 'Web application',
    desc: 'Movie DB application created with ReactJS & Redux as entry project for bloola GmbH.',
    class: 'purple'
  },
  {
    link: 'https://fm387.com',
    text: false,
    logo: fm387Logo,
    image: fm387logoImage,
    title: 'Logo',
    desc: 'Built for needs of Bosnian Football Manager Community, created with Adobe Illustrator.',
    class: 'red'
  },
  {
    link: 'https://github.com/coffeedzic/cvreator',
    text: 'CV Creator',
    logo: false,
    image: cvImage,
    title: 'Web application',
    desc: 'Easy generate your resume. Created with ReactJS & Redux.',
    class: 'dark-blue'
  },
  {
    link: 'https://github.com/coffeedzic/trivia',
    text: 'Trivia Quiz',
    logo: false,
    image: triviaImage,
    title: 'Web application',
    desc: 'Fight with the time and answer all questions. Created with ReactJS & PHP.',
    class: 'blue'
  },
  {
    link: 'https://quizy.lab387.com',
    text: 'Quizy',
    logo: false,
    image: quizyImage,
    title: 'Web application',
    desc: 'Created with PHP during internship at Lab387',
    class: 'purple'
  },
  {
    link: 'https://www.facebook.com/NK-KRALUPI-291538934205559',
    text: false,
    logo: kralupiLogo,
    image: kralupiImage,
    title: 'NK Kralupi',
    desc: 'Logo for my local football club created with Adobe Illustrator',
    class: 'red'
  }
]

export default portfolio