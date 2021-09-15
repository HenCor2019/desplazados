import { smallImages } from '../../../../constants/FooterMessages'

export default function CardMessage({ content }) {
  const { title, description, author, isCauseGallery = false } = content

  const style =
    isCauseGallery && smallImages.includes(content.index) ? 'mr-8' : 'mr-0'

  return (
    <div
      className={`${style} lightbox-card-message flex flex-col justify-between rounded-md bg-gray-50 shadow-lg text-gray-700 w-3/5 lg:w-2/5 lg:translate-x-1/2 md:h-1/3 self-end mb-6 py-2 pl-2 pr-5 absolute bottom-0 lg:right-0 transform translate-y-2/3 md:translate-y-1/3 lg:translate-y-0 md:pb-3`}
    >
      <h1 className="text-base font-medium whitespace-nowrap pb-2">{title}</h1>
      <h2 className="text-sm font-light pb-2">{description}</h2>
      <p className="text-sm w-full text-right font-medium">{author}</p>
    </div>
  )
}
