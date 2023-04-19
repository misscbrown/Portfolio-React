import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useState } from 'react';
import { faCss3, faFigma, faHtml5, faJsSquare, faReact, faSquarespace } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I'm into everything fintech, music and tech. I have a music industry background
                    that has led me into exploring tech. I come from a startup culture (I have had my own)
                    and consider myself an innovative creative entrepreneur!
                </p>
                <p>I have experience working within a music tech company; where I work on UI design, creating and
                    styling components to mockups, creating styled components, creating methods using Meteor, calling 
                    information from the database using MongoDB and Meteor, creating new collections in Mongo, tracking
                    data using Mongo Compass, working with React Hooks, mobile responsiveness and much more.
                </p>
                <p>Technical abilities include React.js, Javascript, HTML, CSS, Node Js, MongoDB, Figma, Canva and all
                    MS Office packages. I have developed excellent skills using no-code platforms such as WordPress, Webflow,
                    Wix and Squarespace - using these tools to create functioning websites both on a personal and freelance basis.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faFigma} color="#DD0031" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faSquarespace} color="#FFF" />
                    </div>
                </div>
            </div>
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default About;
