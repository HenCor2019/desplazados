import React from 'react'
import PaperTexture from '../../assets/images/Support/Statistics/paper-texture.png'

const StatisticsInfo = ({ sectionClasses, imgSrc, imgAlt, divClasses, description }) => (
    <section className={ sectionClasses }>
        <img src={ imgSrc } className="w-full lg:w-5/6" alt={ imgAlt } />
        <div className={ divClasses } style={{ backgroundImage: `url(${PaperTexture})` }} >
            <p className="leading-5 text-justify md:text-sm">{ description }</p>
        </div>
    </section>
)

export default StatisticsInfo
