import TitleDeco from '../../../assets/images/Support/Reportage/purple-paper-min.png'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'
import Section4 from './Sections/Section4'
import Section5 from './Sections/Section5'
import Tabs from './Tabs/Tabs'

const separation = (
    <p className="text-2xl font-bold text-right mt-4 pr-4">***</p>
)

const Reportages = () => {
    return (
        <main className="p-0 md:p-4">
            <div className="w-full flex flex-nowrap mb-2 md:mb-4 p-4">
                <p className="font-sans text-2xl bg-white md:w-11/12 w-full p-4">LOS SALVADOREÑOS QUE DEJAN TODO PARA SALVAR LA VIDA</p>
                <img src={TitleDeco} className="md:w-20 hidden md:inline-block" alt="Los salvadoreños que dejan todo para salvar la vida" />
            </div>
            <p className="leading-6 md:pr-8 font-acumin font-bold text-lg text-black-700 p-4">
                Según ACNUR, el 2020 cerró con un aproximado de 71 mil 500 personas desplazadas en El Salvador. La causa es la violencia ejercida por las pandillas y, en ocasiones, por los cuerpos de seguridad. Jackeline, Roberto y sus hijos son solo una familia más de las muchas que llegan a las instituciones de gobierno buscando ayuda, y al no encontrarla, se abocan a las organizaciones de la sociedad civil quienes asumen, de alguna manera, una responsabilidad que constitucionalmente corresponde al Estado.</p>
            <div className="lg:hidden mt-4" loading="lazy">
                <Tabs />
            </div>
            <div className="hidden lg:block" loading="lazy">
                <Section1 />
                {separation}
                <Section2 />
                {separation}
                <Section3 />
                {separation}
                <Section4 />
                {separation}
                <Section5 />
            </div>
        </main>
    )
}

export default Reportages;