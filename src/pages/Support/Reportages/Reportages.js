import ReportageTitle from '../../../assets/images/Support/Reportage/reportage-title.png'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'
import Section4 from './Sections/Section4'
import Section5 from './Sections/Section5'

const separation = (
    <p className="text-2xl font-bold text-right mt-4">***</p>
)


const Reportages = () => {
    return (
        <main className="p-10">
            <img src={ReportageTitle} className="my-8" alt="Los salvadoreños que dejan todo para salvar la vida" />
            <p className="leading-6 pr-8 font-acumin font-bold text-lg text-black-700">
                Según ACNUR, el 2020 cerró con un aproximado de 71 mil 500 personas desplazadas en El Salvador. La causa es la violencia ejercida por las pandillas y, en ocasiones, por los cuerpos de seguridad. Jackeline, Roberto y sus hijos son solo una familia más de las muchas que llegan a las instituciones de gobierno buscando ayuda, y al no encontrarla, se abocan a las organizaciones de la sociedad civil quienes asumen, de alguna manera, una responsabilidad que constitucionalmente corresponde al Estado.</p>
            <Section1/>
            { separation }
            <Section2/>
            { separation }
            <Section3/>
            { separation }
            <Section4/>
            { separation }
            <Section5/>
        </main>
    )
}

export default Reportages;