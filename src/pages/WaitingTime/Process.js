import React, { useState } from "react";

function WaitingTimeProcess(){
    return(
        <>
            <h1>Procesos que siguen las familias que viven desplazamiento forzado</h1>
            <div className="grid grid-cols-1 grid-rows-2 bg-blue-500 rounded-t-lg">
                <nav className="flex flex-row flex-wrap justify-around items-center rounded-t-lg">
                    <div className="bg-red-700 p-4 w-1/5 text-center rounded-tl-lg">La familia de Andrés</div>
                    <div className="bg-red-600 p-4 w-1/5 text-center">Búsqueda de ayuda</div>
                    <div className="bg-red-500 p-4 w-1/5 text-center">Seguimiento</div>
                    <div className="bg-red-400 p-4 w-1/5 text-center">Acompañamiento</div>
                    <div className="bg-red-300 p-4 w-1/5 text-center rounded-tr-lg">Soluciones duraderas</div>
                </nav>
                <div>

                </div>
            </div>
        </>
    );
}
export default WaitingTimeProcess;