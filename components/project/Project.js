import Link from 'next/link'
import Image from 'next/image'

export default function Project(props) {
    const {
        title, tools, year, description, linkText, link, source, iframe,
    } = props

    return (

        <Link href={link} rel="noopener noreferrer" target="_blank">
            <div className={`mb-20 z-10 shadow-lg hover:shadow-xl rounded-lg  overflow-hidden  ${link ? 'cursor-pointer' : 'cursor-auto'}`}>
                <div className="flex flex-col sm:flex-row">
                    <div className="w-100 sm:w-1/3">
                        <Image src={source} alt={`${title} screenshot`} className="m-auto w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col p-8 w-100 sm:w-2/3">
                        <h2 className="text-4xl mb-1">
                            {title}
                        </h2>
                        <h3 className="text-xs mb-4 text-gray-700">
                            {tools}
                        </h3>
                        <p className="max-w-lg text-sm leading-6">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
