import Link from 'next/link'
import Image from 'next/image'

export default function ProjectDisplay(props) {
  const {
    title, tools, year, description, linkText, link, source, iframe,
  } = props

  return (

    <div className="flex flex-col mb-8">
      <div className="flex justify-between flex-col sm:flex-row">
        <div>
          <h2 className="text-4xl mb-2">
            {title}
          </h2>
          <p className="max-w-lg text-sm leading-6">
            {description}
            {' '}
            <Link className="text-sky-600 whitespace-nowrap" href={link}>{linkText}</Link>
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
      {source && (
        <div className="flex justify-center w-full">
          {iframe ? <iframe src={source} width="100%" height="480" allowFullScreen title={title} />
            : <Image src={source} alt={`${title} screenshot`} />}
        </div>
      )}
    </div>
  )
}
