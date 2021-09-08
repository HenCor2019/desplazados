import React from "react";
const aClasses = "px-4 font-sans text-gray-500 hover:text-gray-400";

const Landscape = (props) => {
    const linksComponents = props.links.map(link => (
        <a key={`link_land_${link.title}`} href={link.path} className={aClasses}> {link.title} </a>
    ));

    return (
        <div className="Section flex w-full h-screen min-h-0 overflow-y-hidden">
            <div className="w-1/4 h-screen bg-right bg-cover bg-no-repeat" style={{ backgroundImage: `url(${props.banner})` }}>
            </div>
            <div className="w-3/4 h-full">
                <nav className="main-nav flex justify-end p-4">
                    {linksComponents}
                </nav>
                {props.children}
            </div>
        </div>
    );
}

export default Landscape;