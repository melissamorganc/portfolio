import React from 'react';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../assets/resume.pdf'

function Home(props) {
    return (
        <div className='resume'>
            <h2>Resume</h2>
            <Document file={resume}>
                <Page pageNumber={1}/>
            </Document>
        </div>
    );
}

export default Home;