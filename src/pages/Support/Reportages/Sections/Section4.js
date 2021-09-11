import SimpleVideoPlayer from '../../../../Components/VideoPlayer/SimpleVideoPlayer'

const Section4 = () => {
    return (
        <section className="h-full mt-4 md:mt-8 lg:grid lg:grid-cols-3 lg:grids-rows-4 lg:grid-flow-col lg:gap-8 bg-brownie-gray p-4 mb-4 md:mb-0">
            <div className="row-span-3">
                <p className="font-acumin text-black-700 leading-5 text-justify">
                    Los procesos de acompañamiento a víctimas de desplazamiento forzado han ido cambiando con los años. Cristosal, COMCAVIS-TRANS, SSPAS, la Iglesia Luterana y el IDHUCA sostienen que sus programas surgieron de manera progresiva. Algunas organizaciones comenzaron con proyectos sobre migración y retorno. Pero cada vez, de 2014 en adelante, fueron más frecuentes los casos de personas que buscaban protección frente a un persecutor que amenazaba su integridad física.
                    <br /><br />
                    Según Aníbal Cerros, del IDHUCA, el acompañamiento a víctimas no es un proceso estandarizado en cuanto a pasos y tiempos. Depende de la particularidad de cada uno. Sin embargo, todos inician la entrevista inicial donde se evalúa la necesidad de medidas de emergencia y una ruta preliminar de seguimiento.
                    <br /><br />
                    Cerros explica que la gran necesidad de las familias es la protección del persecutor. Las personas en muchas ocasiones llegan de tocar puertas afuera: FGR, PNC, alcaldías municipales, Ministerio de Justicia y Seguridad, organismos internacionales (cuyo apoyo directo no es posible pues tienen un mandato específico), y no han recibido la atención debida.
                    <br /><br />
                    Dicha protección, en muchos casos, implica la movilización de emergencia porque necesitan resguardar su vida. Esto trae consigo la necesidad de ayuda humanitaria como alimentación, vestimenta y medios para subsistir. Y por último, las necesidades psicosociales, para trabajar el autoestima, reconocer los derechos vulnerados y retomar un plan de vida.
                    <br /><br />
                    Como respuesta al nuevo panorama, las organizaciones han adoptado nuevos planes de trabajo enmarcados en el enfoque de soluciones duraderas. El SSPAS, por ejemplo, se ha decantado por la reubicación interna de las familias,
                    a través de la activación de sus redes de apoyo, aplicando la estrategia de “Medios de vida”, que permite abordar emprendimientos, empleabilidad y mecanismos de supervivencia para fortalecer y retomar sus proyectos de vida.
                </p>
            </div>
            <div className="lg:row-span-2 lg:col-start-2 lg:col-end-4">
                <div className="w-full h-72 lg:h-3/4 mt-6 lg:mt-0">
                    <SimpleVideoPlayer embedId="-wydYafKSi0" />
                </div>
                <div className="my-6 lg:mt-6 lg:h-1/4">
                    <p className="font-acumin text-black-700 leading-6 text-justify font-bold">
                        El 13 de julio de 2018, la Sala de lo Constitucional emitió la sentencia 411. En ella mandó al Estado a reconocer que existe el desplazamiento forzado por violencia, así como a legislar para la protección de las víctimas. Este caso fue acompañado con Cristosal, como parte de su programa de litigio estratégico.
                    </p>
                </div>
            </div>
            <div className="lg:col-start-2 lg:col-end-3">
                <p className="font-acumin text-black-700 leading-5 text-justify">
                    Por su parte, la Iglesia Luterana a través de la pastoral del migrante, usa una estrategia parecida, pero auxiliándose de las regiones en que han dividido el país y de la organización eclesial existente. Según explica la Rev. Blanca Rodríguez, las familias buscan dos apoyos puntuales: suplir las necesidades en la emergencia y en el reinicio de sus vidas. Por eso, les apoyan con capital semilla para que las familias se vuelvan económicamente autosostenidas.
                    <br /><br />
                    Jimena López, del Idhuca, explica que cuando la reubicación es interna, la restitución de los derechos es mucho más rápida, en comparación con las personas que salen de El Salvador.  Estas últimas deben tener una orientación cultural y someterse al proceso legal que el país de acogida determine para reconocerles en calidad de refugiados.
                </p>
            </div>
            <div className="lg:col-start-3 lg:col-end-4">
                <p className="font-acumin text-black-700 leading-5 text-justify mt-6 lg:mt-0">
                    Aunque la cantidad de familias que se evacuan internacionalmente han bajado, no han dejado de existir, esto en los casos en los que el nivel amenaza es tan grande que las familias han sufrido múltiples movilizaciones de emergencia.
                    <br /><br />
                    Muchas de las familias llegan buscando la protección internacional, sin embargo esta es muy difícil que se otorgue. Además, es un proceso largo, que puede ir desde 1 a 2 años, o más. Hasta finales de 2019, ACNUR reportó 136 mil 292 solicitantes de asilo salvadoreños alrededor del mundo. Al respecto Montti manifiesta que la probabilidad de obtener refugio es mínima y por eso Cristosal ya no busca eso. “Era sumamente frustrante para las familias, era doloroso, que habían pausado con una esperanza su vida y la reinserción a la sociedad era muy compleja”, expone.
                </p>
            </div>
        </section>
    )
}

export default Section4;