import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import image from '../../assets/images/7.png'
// import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const Form = useRef()

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_qhgopse',
                'template_cca3lho',
                Form.current,
                'yDL--Rwz5Dzzvb23e',               
        )
            .then(
                () => {
                    alert('Message Success')
                    window.location.reload(false)
                },
                () => {
                    alert('failed to send the message, please try again')
                }
        )
    }
    
    return (
        <>
            <div className="container contact-page">
            <Loader type='pacman' />
                <div className="text-zone">
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                    </h1>
                    <p>
                        I have an interest in all opportunities related to my skillset, please
                        get in touch with me using the form below.
                    </p>
                    <div className='contact-form'>
                        <form ref={Form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                        Carla Brown
                        <br />
                        United Kingdom
                        <br />
                        Crankhall Lane <br />
                        Wednesbury <br />
                        <span>djmisscbrown@hotmail.com</span>
                </div>
                <div className='map-wrap'>
                    <img
                        className='cbrown'
                        src={image}
                        alt='cbrown'
                    >
                    </img>
                {/* <MapContainer center={[52.5563, -2.0011]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        noWrap={true}
                        />
                        <Marker position={[52.5563, -2.0011]}>
                            <Popup>Carla lives here!</Popup>
                        </Marker>
                </MapContainer> */}
                    </div>
                </div>
        </>
    )
}

export default Contact;
