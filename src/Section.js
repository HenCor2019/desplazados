import {Link} from 'react-router-dom';

function Section(props) {
    return (
        <div className="Section flex">
            <div className="h-screen w-72 bg-right bg-auto bg-cover bg-no-repeat min-0" style={{ backgroundImage: `url(${props.img})` }}>
            </div>
            <div className="w-5/6">
                <nav className="main-nav flex justify-end p-4">
                    {/* Los href son temporales */}
                    <Link to="/" className="px-4 font-sans text-gray-500 hover:text-gray-400">Inicio</Link>
                    <Link to="/causas" className="px-4 font-sans text-gray-500 hover:text-gray-400">Causas</Link>
                    <Link to="/espera" className="px-4 font-sans text-gray-500 hover:text-gray-400">Tiempo de espera</Link>
                    <Link to="/sueños" className="px-4 font-sans text-gray-500 hover:text-gray-400">Los sueños</Link>
                    <Link to="/apoyo" className="px-4 font-sans text-gray-500 hover:text-gray-400">En busca de apoyo</Link>
                </nav>
                <main>
                    {/* Contenido principal */}
                </main>
            </div>
        </div>
    )
}

export default Section