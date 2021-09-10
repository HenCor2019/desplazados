import React, { useState } from "react";
import Image from "../../Components/WaitingTime/Image";
import processImg from "../../assets/images/WaitingTime/process.png";
import galleryImg from "../../assets/images/WaitingTime/gallery.png";
import meanwhileImg from "../../assets/images/WaitingTime/meanwhile.png";
import { useHistory } from 'react-router-dom'

function WaitingTime() {
    const [isProcessHover, setProcessHover] = useState(false);
    const [isGalleryHover, setGalleryHover] = useState(false);
    const [isMeanwhileHover, setMeanwhileHover] = useState(false);
    const { push } = useHistory()

    let process, gallery, meanwhile;
    const grayscale = {
        'filter': 'grayscale(1)'
    };

    if (isProcessHover) {
        gallery = grayscale;
        meanwhile = grayscale;
    }
    if (isGalleryHover) {
        process = grayscale;
        meanwhile = grayscale;
    }
    if (isMeanwhileHover) {
        process = grayscale;
        gallery = grayscale;
    }

    const handleOnProcess = () => {
        push('/la-espera/meanwhile')
    }

    const handleOnGallery = () => {
        push('/la-espera/gallery')
    }

    const handleOnMeanwhile = () => {
        push('/la-espera/meanwhile')
    }

    return (
        <div className="sm:flex sm:min-w-0 sm:justify-center sm:items-center">
            <main className='grid grid-cols-1 grid-flow-row gap-4 h-full sm:grid-cols-2 md:gap-0'>
                <Image
                    img={processImg}
                    alt={"Process"}
                    grayscale={process}
                    onMouseEnter={() => setProcessHover(true)}
                    onMouseLeave={() => setProcessHover(false)}
                    handleOnClick={handleOnProcess}
                    position={"justify-start items-center sm:justify-center"}
                />
                <Image
                    img={galleryImg}
                    alt={"Gallery"}
                    grayscale={gallery}
                    onMouseEnter={() => setGalleryHover(true)}
                    onMouseLeave={() => setGalleryHover(false)}
                    handleOnClick={handleOnGallery}
                    position={"justify-end items-center sm:justify-center"}
                />
                <div className='bg-time order-1 text-white flex justify-center items-center sm:order-none sm:bg-transparent sm:text-black'>
                    <p className='text-sm sm:text-base text-justify p-4 md:p-8 max-w-md'>
                        Luego de sufrir una ruptura en su proyecto de vida, algunas familias
                        buscan apoyo en organizaciones no gubernamentales, que han
                        desarrollado protocolos de atención a víctimas de desplazamiento
                        forzado, y trabajan en la construcción de soluciones duraderas que
                        permitan retomar la vida que les fue arrebatada a las víctimas. Es un
                        tiempo de espera, que requiere paciencia, donde las instituciones
                        brindan a las familias asistencia legal, humanitaria y psicosocial,
                        pero ¿cómo viven en realidad este tiempo las víctimas?
                    </p>
                </div>
                <Image
                    img={meanwhileImg}
                    alt={"Meanwhile"}
                    grayscale={meanwhile}
                    onMouseEnter={() => setMeanwhileHover(true)}
                    onMouseLeave={() => setMeanwhileHover(false)}
                    handleOnClick={handleOnMeanwhile}
                    position={"justify-start items-center sm:justify-center"}
                />
            </main>
        </div>
    );
}

export default WaitingTime;
