/* eslint-disable import/no-unresolved */
import ProjectHeader from '@components/project/project-header'
import website from '@public/project-images/kennysexton.com.png'
import bracket from '@public/project-images/bracket.png'
import splashdown from '@public/project-images/splashdown.png'
import contourLine from '@public/project-images/contourlineprinter.png'
import invisibleI from '@public/project-images/invisible-i.png'
import mammoth from '@public/project-images/mammoth.png'

const projects = [
  {
    title: 'kennysexton.com',
    tools: 'Next.js, Tailwind',
    year: '2022',
    description: 'A project I started in 2017 to teach myself web development. It uses custom domain redirection to a static GitHub page. I redesign this site every few years as I get more familiar with web development',
    linkText: '(view project)',
    link: 'https://github.com/kennysexton/kennysexton.github.io',
    source: { ...website },
  },
  {
    title: 'Bracket Maker',
    tools: 'Express, MongoDB, Heroku',
    year: '2020',
    description: 'A tool for making sport playoff brackets. Here users can submit a bracket, view other submissions, as well as view their position on the leaderboard. Submission and result data is pulled from a custom API running on Heroku. ',
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
    link: 'https://kennysexton.com/splashdown/',
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
        <ProjectHeader key={item.title} {...item} />
      ))}
    </div>
  )
}
