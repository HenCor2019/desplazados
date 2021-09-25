import { Fragment } from 'react'
import { secondaryCauseMessage } from '../../../constants/Causes'
import Image from './Image'
import Message from './Message'

export default function Gallery({ photos, onClick, dimensions, isMobile }) {
  return (
    <>
      {photos.map((photo, index) => {
        if (index === 4)
          return (
            <>
              <Message
                key={photo.src + secondaryCauseMessage}
                text={'text-xs lg:text-base font-acumin'}
                cols={{ md: 'md:col-start-5 md:col-end-6' }}
                rows={{ md: 'md:row-start-3 md:row-end-5' }}
                order={{ base: 'order-6', sm: 'sm:order-2', md: 'md:order-5' }}
                message={secondaryCauseMessage}
              />

              <Image
                key={photo.src}
                content={photo}
                onClick={onClick}
                cols={dimensions[index].cols}
                rows={dimensions[index].rows}
                isMobile={isMobile}
              />
            </>
          )

        return (
          <Image
            key={photo + index}
            content={photo}
            onClick={onClick}
            cols={dimensions[index].cols}
            rows={dimensions[index].rows}
            isMobile={isMobile}
          />
        )
      })}
    </>
  )
}
