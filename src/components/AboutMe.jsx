import React from 'react';
import headshot from '../assets/headshot.png'
import blackscroll from '../assets/blackscroll.png'

function AboutMe(props) {
    return (
        <section>
            <div className='aboutMe'>
                <div className='column1'>
                    <h2>About me</h2>
                    <div className='headshotImg'>
                        <img src={headshot} alt="Melissa Morgan" />
                    </div>
                </div>
                <div className='column2'>
                    <h3 className='subtitle'>Software Engineer</h3>
                    <p>Resourceful Software Engineer and Product Manager with equal parts creative and analytical thinking. Experience in strategic growth in KPI metrics, improving user experience, and new business development. Demonstrated history of cross-functional collaboration to deliver optimized product experiences.</p>
                    <ul>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Django</li>
                        <li>Python</li>
                        <li>AWS</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>PostgresSQL</li>
                        <li>SQL</li>
                        <li>Adobe Suite</li>
                        <li>Tableau</li>
                        <li>Qualtrics</li>
                    </ul>
                </div>
            </div>
            <div className='scroll'>
                <img src={blackscroll} alt="scroll down" />
            </div>
        </section>
    );
}

export default AboutMe;