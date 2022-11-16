import ProjectHeader from '../components/project/project-header'

const imagePath = '/project-images'

const projects = [
  {
    title: 'Bracket Maker',
    tools: 'Express, MongoDB, Heroku',
    year: '2020',
    description: 'A tool for making sport playoff brackets. Here users can submit a bracket, view other submissions, as well as view their position on the leaderboard. Submission and result data is pulled from a custom API running on Heroku. ',
    linkText: '(view project)',
    link: 'https://github.com/kennysexton/Sport-Bracket-Maker',
    image: `${imagePath}/bracket.png`,
  },
  {
    title: 'Splashdown',
    tools: 'React, JSX, CSS',
    year: '2020',
    description: 'A Create React App project for generating a random city homepage. Each visit to the page selects a random city. A photo from that city is fetched via the unsplash API, as well as the current weather information from Open Weather API. Each time the page is loaded the process repeats.',
    linkText: '(view project)',
    link: 'https://kennysexton.com/splashdown/',
    image: `${imagePath}/splashdown.png`,
  },
  {
    title: 'Contour Line Printer',
    tools: 'Python, JSP, JS, Google Cloud',
    year: '2019',
    description: 'A Raspberry Pi Robot car that can print out photos uploaded to a webapp. Uploaded images are converted to a contour line drawing allowing the robot to print your image at any size. ',
    linkText: '(view project)',
    link: 'https://github.com/contourlineprinter/capstone',
  },
  {
    title: 'Invisible I',
    tools: 'HTML, CSS, SQL, PHP, JS, jQuery ',
    year: '2018',
    description: 'Team project to create a web tool for viewing metadata associated with images. ',
    linkText: '(view project)',
    link: 'https://github.com/kennysexton/Invisible-I',
  },
]

export default function Projects() {
  return (
    <div className="container">
      {projects.map((item) => (
        <ProjectHeader key={item.title} {...item} />
      ))}
    </div>

  )
}
