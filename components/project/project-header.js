import Link from 'next/link'

export default function ProjectHeader(props) {
  const {
    title, tools, year, description, linkText, link,
  } = props

  return (

    <div className="container flex justify-between flex-col sm:flex-row">
      <div>
        <h2 className="text-4xl mb-2">
          {title}
        </h2>
        <p className="max-w-lg text-sm leading-6">
          {description}
          {' '}
          <Link href={link}>{linkText}</Link>
        </p>
      </div>
      <h3 className="text-xs my-4 sm:my-0 text-center sm:text-start">
        {tools}
        {' '}
        |
        {' '}
        {year}
      </h3>
    </div>
  )
}
