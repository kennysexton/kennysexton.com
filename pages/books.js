/* eslint-disable import/no-unresolved */
import ProjectHeader from '@components/project/project-header'

const books = [
  {
    title: 'Ride',
    tools: 'Lightroom, Photoshop, Indesign ',
    year: '2019',
    description: 'Photos from a 1,000 Mile solo bike trip starting in Seattle, WA and ending in Missoula, MT. Shown below is just a preview, the full book can be viewed on ',
    linkText: 'Issuu (view full book)',
    link: 'https://issuu.com/kennysexton4/docs/bikebook',
    source: 'https://cdn.flipsnack.com/widget/v2/widget.html?hash=fuj8438jd',
    iframe: true,
  },
  {
    title: 'Iceland',
    tools: 'Lightroom, Photoshop, Indesign',
    year: '2019',
    description: 'Photos from a trip to Iceland. ',
    linkText: '(view book)',
    link: 'https://issuu.com/kennysexton4/docs/iceland',
    source: 'https://cdn.flipsnack.com/widget/v2/widget.html?hash=fh5sz02lc',
    iframe: true,
  },
]

export default function Books() {
  return (
    <div className="container">
      {books.map((item) => (
        <ProjectHeader key={item.title} {...item} />
      ))}
    </div>
  )
}
