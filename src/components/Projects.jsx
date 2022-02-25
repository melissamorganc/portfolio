import React from 'react';
import Modal from 'react-modal';
// Modal error message
Modal.setAppElement('#root');

function Projects(props) {


    return (
        <section>
            <h2>Projects</h2>
            <div className='projectList'>
                <a href="https://petfindr.netlify.app/">
                    <h4>Petfindr</h4>   
                </a>
                <a href="https://theflowfactory.netlify.app/">
                    <h4>The Flow Factory</h4>
                </a>
                <a href="https://the-cocktail-constructor.netlify.app/">
                    <h4>The Cocktail Constructor</h4>
                </a>
                <a href="https://melissamorganc.github.io/color-sorter/">
                    <h4>Color Sorter</h4>
                </a>
            </div>
        </section>
    );
}

export default Projects;