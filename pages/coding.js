/* eslint-disable import/no-unresolved */
import ProjectDisplay from '@components/project/ProjectDisplay'
import Project from '@components/project/Project'
import website from '@public/project-images/kennysexton.com.png'
import bikestreets from '@public/project-images/bikestreets.png'
import bracket from '@public/project-images/bracket.png'
import splashdown from '@public/project-images/splashdown.png'
import contourLine from '@public/project-images/contourlineprinter.png'
import invisibleI from '@public/project-images/invisible-i.png'
import mammoth from '@public/project-images/mammoth.png'
import personalHeatmap from '@public/project-images/personalHeatmap.png'

const projects = [
  {
    title: 'Personal Heatmap',
    tools: 'React, Mapbox WebGL, Express',
    description: 'Web app for generating a personal heatmap using wearable activity data. Uses a custom express server that can run bulk conversions of all activity files into different heatmap layers.',
    link: 'https://github.com/kennysexton/personal-heatmap?tab=readme-ov-file#generate-a-personal-heatmap',
    source: { ...personalHeatmap },
  },
  {
    title: 'kennysexton.com',
    tools: 'Next.js, React, Tailwind',
    description: 'A project I started in 2017 to teach myself web development. Recently re-built using the Next.js framework for out of the box routing and lazy image handling.',
    link: 'https://github.com/kennysexton/kennysexton.com?tab=readme-ov-file#kennysextoncom',
    source: { ...website },
  },
  {
    title: 'Bike Streets',
    tools: 'Jetpack Compose, Mapbox SDK, Open Street Map',
    description: 'Individual contributor for the Android app of Bike Streets - A community sourced map of beginner-friendly bike routes across the city of Denver. Upgraded the existing app to use the latest version of the Mapbox SDK, and added routing functionality using a custom hosted version of the Open Street Map and routing algorithm to help riders get to their destination while staying on bike friendly streets.',
    link: 'https://github.com/bikestreets/bike-streets-android',
    source: { ...bikestreets },
  },
  {
    title: 'Splashdown',
    tools: 'React, JSX, CSS',
    description: 'A React project for generating a random city homepage. Each visit to the page selects a random city. A photo from that city is fetched via the unsplash API, as well as the current weather information from Open Weather API. Each time the page is loaded the process repeats.',
    link: 'https://kennysexton.github.io/splashdown/',
    source: { ...splashdown },
  },
  {
    title: 'Bracket Maker',
    tools: 'Express, MongoDB, Heroku',
    description: 'A tool for making sport playoff brackets. Here users can submit a bracket, view other submissions, as well as view their position on the leaderboard. Submission and result data is pulled from a custom API hosted on Heroku.',
    link: 'https://github.com/kennysexton/Sport-Bracket-Maker',
    source: { ...bracket },
  },
  {
    title: 'Invisible I',
    tools: 'HTML, CSS, SQL, PHP, JS, jQuery',
    description: 'Team project to create a web tool for viewing metadata associated with images.',
    link: 'https://github.com/kennysexton/Invisible-I',
    source: { ...invisibleI },
  },
  {
    title: 'Mammoth Coffee',
    tools: 'HTML, CSS',
    description: 'Mammoth Coffee is a design re-work for a Philadelphia coffee shop.',
    link: 'https://kennysexton.github.io/MammothCoffee/index.html',
    source: { ...mammoth },
  },
  {
    title: 'Contour Line Printer',
    tools: 'Python, JSP, JS, Google Cloud',
    description: 'A Raspberry Pi Robot car that can print out photos uploaded to a webapp. Uploaded images are converted to a contour line drawing allowing the robot to print your image at any size.',
    link: 'https://github.com/contourlineprinter/capstone',
    source: { ...contourLine },
  },
]

export default function Coding() {
  return (
    <div className="container">
      {projects.map((item) => (
        <Project key={item.title} {...item} />
      ))}
    </div>
  )
}
