import ProjectHeader from '../components/project/project-header'

const projects = [
  {
    title: 'Bracket Maker',
    tools: 'Express, MongoDB, Heroku',
    year: '2020',
    description: 'A tool for making sport playoff brackets. Here users can submit a bracket, view other submissions, as well as view their position on the leaderboard. Submission and result data is pulled from a custom API running on Heroku. ',
    linkText: '(view project)',
    link: 'https://github.com/kennysexton/Sport-Bracket-Maker',
  },
]

export default function Projects() {
  return (
    projects.map((item) => (
      <ProjectHeader {...item} />
    ))

  )
}
