/* eslint-disable import/no-unresolved */
import ProjectDisplay from '@components/project/ProjectDisplay'
import website from '@public/project-images/kennysexton.com_next.png'
import bikestreets from '@public/project-images/bikestreets.png'
import bracket from '@public/project-images/bracket.png'
import splashdown from '@public/project-images/splashdown.png'
import contourLine from '@public/project-images/contourlineprinter.png'
import invisibleI from '@public/project-images/invisible-i.png'
import mammoth from '@public/project-images/mammoth.png'

const projects = [
  {
    title: 'kennysexton.com',
    tools: 'Next.js, React, Tailwind',
    year: '2023',
    description: 'A project I started in 2017 to teach myself web development. Rebuilt from the ground up most recently in 2023. Built as a way to learn the Next.js framework to greatly minimize the overhead of maintaining this site',
    linkText: '(more info)',
    link: 'https://github.com/kennysexton/kennysexton.com',
    source: { ...website },
  },
  {
    title: 'Bike Streets',
    tools: 'Jetpack Compose, Mapbox SDK, Open Street Map',
    year: '2023',
    description: 'Individual contributor for the Android app of Bike Streets - A community sourced map of beginner-friendly bike routes across the city of Denver. Upgraded the existing app to use the latest version of the Mapbox SDK, and added routing functionality using a custom hosted version of the Open Street Map and routing algorithm to help riders get to their destination while staying on bike friendly streets.',
    linkText: '(view project)',
    link: 'https://github.com/bikestreets/bike-streets-android',
    source: { ...bikestreets },
  },
  {
    title: 'Bracket Maker',
    tools: 'Express, MongoDB, Heroku',
    year: '2020',
    description: 'A tool for making sport playoff brackets. Here users can submit a bracket, view other submissions, as well as view their position on the leaderboard. Submission and result data is pulled from a custom API hosted on Heroku. ',
    linkText: '(view project)',
    link: 'https://github.com/kennysexton/Sport-Bracket-Maker',
    source: { ...bracket },
  },
  {
    title: 'Splashdown',
    tools: 'React, JSX, CSS',
    year: '2020',
    description: 'A Create React App project for generating a random city homepage. Each visit to the page selects a random city. A photo from that city is fetched via the unsplash API, as well as the current weather information from Open Weather API. Each time the page is loaded the process repeats.',
    linkText: '(view project)',
    link: 'https://kennysexton.github.io/splashdown/',
    source: { ...splashdown },
  },
  {
    title: 'Contour Line Printer',
    tools: 'Python, JSP, JS, Google Cloud',
    year: '2019',
    description: 'A Raspberry Pi Robot car that can print out photos uploaded to a webapp. Uploaded images are converted to a contour line drawing allowing the robot to print your image at any size. ',
    linkText: '(view project)',
    link: 'https://github.com/contourlineprinter/capstone',
    source: { ...contourLine },
  },
  {
    title: 'Invisible I',
    tools: 'HTML, CSS, SQL, PHP, JS, jQuery ',
    year: '2018',
    description: 'Team project to create a web tool for viewing metadata associated with images. ',
    linkText: '(view project)',
    link: 'https://github.com/kennysexton/Invisible-I',
    source: { ...invisibleI },
  },
  {
    title: 'Mammoth Coffee',
    tools: 'HTML, CSS ',
    year: '2018',
    description: 'Mammoth Coffee is a design re-work for a Philadelphia coffee shop.',
    linkText: '(view project)',
    link: 'https://kennysexton.com/MammothCoffee/index.html',
    source: { ...mammoth },
  },
]

export default function Coding() {
  return (
    <div className="container">
      {projects.map((item) => (
        <ProjectDisplay key={item.title} {...item} />
      ))}
    </div>
  )
}
