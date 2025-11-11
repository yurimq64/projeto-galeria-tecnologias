import './App.css';

import { useState, useEffect } from 'react';

function App() {

    return (

        <>
            <header>
                <h1>Galeria de Tecnologias</h1>
                <input type="text" id="campo-busca" placeholder="Filtrar por nome..."/>
            </header>

            <main>
                <div id="galeria-cards" className="galeria-container">
                    {}
                </div>
            </main>
        </>
    );
}

export default App;