import { GalleryMessage, GalleryImage } from 'causes/components';
import { useTranslation } from 'react-i18next';

export function Gallery({
  photos, onClick, dimensions, isMobile,
}) {
  const [t] = useTranslation('causesPagesGallery');
  return (
    <>
      {photos.map((photo, index) => {
        if (index === 4) {
          return (
            <>
              <GalleryMessage
                key={photo.src + t('secondary')}
                text="text-xs lg:text-base font-acumin"
                cols={{ md: 'md:col-start-5 md:col-end-6' }}
                rows={{ md: 'md:row-start-3 md:row-end-5' }}
                order={{ base: 'order-6', sm: 'sm:order-2', md: 'md:order-5' }}
                message={t('secondary')}
              />

              <GalleryImage
                key={photo.src}
                content={photo}
                onClick={onClick}
                cols={dimensions[index].cols}
                rows={dimensions[index].rows}
                isMobile={isMobile}
              />
            </>
          );
        }

        return (
          <GalleryImage
            key={photo + index}
            content={photo}
            onClick={onClick}
            cols={dimensions[index].cols}
            rows={dimensions[index].rows}
            isMobile={isMobile}
          />
        );
      })}
    </>
  );
}
