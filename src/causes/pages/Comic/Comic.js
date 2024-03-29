import { useEffect, useState } from 'react';

import { useConfigContext } from 'contexts/ConfigContext';
import { LazySection } from 'shared/components/LazySection/LazySection';

import {
  Button,
  Dropdown,
  CompleteComic,
  GotoPage,
} from 'causes/components/';

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import 'causes/components/Comic/index.css';
import { addComicImages } from 'causes/constants/comic/helper';
import Footer from 'home/components/Footer';

function Comic() {
  const {
    isMobile,
    isTablet,
    isMonitor,
    isSmallMobile,
    isXlMonitor,
    is2XlMonitor,
  } = useConfigContext();

  const [t] = useTranslation('causesPagesComic');
  const comicImages = addComicImages(t('comics', { returnObjects: true }) ?? [], i18next.language);
  const [flipPage, setFlipPage] = useState(null);
  const [width, setWidth] = useState(650);
  const [height, setHeight] = useState(510);
  const [currentPage, setCurrentPage] = useState(null);

  const setNewSize = ({ newWidth, newHeight }) => {
    setWidth(newWidth);
    setHeight(newHeight);
  };

  const toggleSize = ({ isMobile, isMonitor, isTablet }) => {
    if (is2XlMonitor) setNewSize({ newWidth: 940, newHeight: 650 });

    if (isXlMonitor) setNewSize({ newWidth: 850, newHeight: 555 });

    if (isMonitor) setNewSize({ newWidth: 730, newHeight: 580 });

    if (isTablet) setNewSize({ newWidth: 700, newHeight: 530 });

    if (isMobile) setNewSize({ newWidth: 600, newHeight: 380 });

    if (isSmallMobile) setNewSize({ newWidth: 330, newHeight: 310 });
  };

  useEffect(
    () => toggleSize({
      isMobile, isMonitor, isTablet, isXlMonitor, is2XlMonitor,
    }),
    [isMobile, isTablet, isMonitor, isSmallMobile, isXlMonitor, is2XlMonitor],
  );

  const refFlipPage = (component) => {
    setFlipPage(component);
  };

  const onPreviousPage = () => flipPage.gotoPreviousPage();
  const onNextPage = () => flipPage.gotoNextPage();

  useEffect(() => {
    if (!currentPage) return;
    const [page] = currentPage;
    flipPage.gotoPage(page.index);
  }, [currentPage]);

  return (
    <div>
      <div>
        <Dropdown
          placeholder={t('page') ?? 'Go to page'}
          options={comicImages.filter((image) => image.name !== undefined)}
          onChange={(values) => setCurrentPage(values)}
          label="name"
          value="index"
          secondPlaceholder={t('placeholder') ?? 'Select page'}
        />

        <section className="comic-container w-full sm:h-full md:h-5/6 2xl:h-full flex flex-col lg:flex-row justify-center items-center">
          <Button
            height={height}
            margin="mr-5"
            onClick={onPreviousPage}
            rotate="-rotate-180"
          />

          <CompleteComic
            width={width}
            height={height}
            refFlip={refFlipPage}
            images={comicImages}
          />

          <GotoPage onNext={onNextPage} onPrev={onPreviousPage} />

          <Button height={height} margin="ml-5" onClick={onNextPage} />
        </section>
      </div>
      <Footer translateButtons={false} />
    </div>
  );
}

const CausesComic = LazySection(Comic);
export { CausesComic };
