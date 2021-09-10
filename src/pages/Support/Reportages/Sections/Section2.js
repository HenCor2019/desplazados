import SimpleVideoPlayer from '../../../../Components/VideoPlayer/SimpleVideoPlayer'

const Section2 = () => {
    return (
        <section className="h-full mt-8 lg:grid lg:grid-cols-3 lg:grids-rows-4 lg:grid-flow-col lg:gap-8 bg-brownie-gray md:p-8">
            <div className="row-span-3">
                <p className="font-acumin text-black-700 leading-5 text-justify">
                    El reconocimiento del desplazamiento forzado en El Salvador es reciente. En 2017, la Sala de lo Constitucional de la Corte Suprema de Justicia, emitió la sentencia 411 a favor de una familia que sufrió desplazamiento. Este caso fue acompañado por Cristosal, una organización que desde 2015 apoya a víctimas de este fenómeno.
                    <br /><br />
                    Fue hasta enero de 2020 que la Asamblea Legislativa aprobó una Ley, obedeciendo a la sentencia, para la atención y protección integral de víctimas de desplazamiento forzado, adscribiendo esta responsabilidad a la Dirección de Atención a Víctimas, una dependencia del Ministerio de Seguridad Pública.
                    <br /><br />
                    La Ley nació muerta. Sin presupuesto para su ejecución. Celina Morán, de COMCAVIS-TRANS, sostiene que no ha existido voluntad política para dar respuesta a las víctimas ni para implementar la ley. Más de un año después de la aprobación, se desconoce el reglamento y la política de dicha ley. Además, no cuenta con un enfoque de inclusión y atención a poblaciones vulnerables: niñez, adolescencia, mujeres y población LGTBI.
                    <br /><br />
                    Poco se ha avanzado, expresan representantes de las organizaciones sociales. “Han pasado meses en los que hemos estado a la espera de una respuesta por parte de las instituciones. Para la creación del reglamento de la ley y la comisión técnica interinstitucional que daría vida a todas las rutas, los planes”, expresa Johanna Ramírez, del Servicio Social Pasionista (SSPAS), una organización que también atiende a víctimas de desplazamiento.
                </p>
            </div>
            <div className="lg:row-span-2 lg:col-start-2 lg:col-end-4">
                <div className="w-full h-72 lg:h-3/4 mt-6 lg:mt-0">
                    <SimpleVideoPlayer embedId="3FYF-ENXrPI" />
                </div>
                <div className="my-6 lg:mt-6 lg:h-1/4">
                <p className="font-acumin text-black-700 leading-6 text-justify font-bold">
                    En enero de 2020 la Asamblea Legislativa aprobó una ley para el acompañamiento de víctimas del desplazamiento forzado que carecía de presupuesto. Tampoco se ha conformado la comisión técnica que daría vida a los planes de acción de la ley.
                </p>
                </div>
            </div>
            <div className="lg:col-start-2 lg:col-end-3">
                <p className="font-acumin text-black-700 leading-5 text-justify">
                    Con errores y aciertos, dice Rina Montti de Cristosal, las organizaciones de la sociedad civil, que forman parte de la Mesa contra el Desplazamiento Forzado, han apoyado y adquirido experiencia en el acompañamiento de familias que son víctimas del problema.
                </p>
            </div>
            <div className="lg:col-start-3 lg:col-end-4">
                <p className="font-acumin text-black-700 leading-5 text-justify mt-6 lg:mt-0">
                    Pero, hace hincapié, en que el papel de las organizaciones debería ser como contralores y asesores, verificando el cumplimiento de leyes nacionales y acuerdos internacionales que amparan a las víctimas, y no asumiendo las responsabilidades que corresponden al Estado.
                </p>
            </div>
        </section>
    )
}

export default Section2;