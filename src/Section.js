const aClasses = "px-4 font-sans text-gray-500 hover:text-gray-400";

function Section(props) {
    return (
        <div className="Section flex h-screen overflow-hidden">
            <div className="w-1/4 h-screen bg-right bg-auto bg-cover bg-no-repeat" style={{ backgroundImage: `url(${props.img})` }}>
            </div>
            <div className="w-3/4 h-full">
                <nav className="main-nav flex justify-end p-4">
                    {/* Los href son temporales */}
                    <a href="./index.js" className={aClasses}>Inicio</a>
                    <a href="./index.js" className={aClasses}>Causas</a>
                    <a href="./index.js" className={aClasses}>Tiempo de espera</a>
                    <a href="./index.js" className={aClasses}>Los sueños</a>
                    <a href="./index.js" className={aClasses}>En busca de apoyo</a>
                </nav>
                {/* Contenido principal */}
                {props.children}
            </div>
        </div>
    )
}

export default Section