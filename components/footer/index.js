import React from 'react';
import Link from "next/link";
import WhatsappFooterButton from '../WhatsappFooterButton';

const Footer = () => {
    return (
        <>
        <footer>
            <div className='container'>
                <div className='footer-wrappr'>
                    <div className='footer-items'>
                        <div className='footer-logo'>
                            <img src='/images/logo_new.jpeg' alt='' />
                        </div>
                        <p>
                            Building a trusted brand for self help and mental health
                        </p>
                    </div>
                    <div className='footer-items'>
                        <h4>Contact Details</h4>
                        <div className='contact-address'>
                            <div className='adress-1'>
                            Space Creattors Heights, 3rd Floor, Landmark Cyberpark, Sector 67, Gurgaon (Haryana) -122018
                            </div>
                            <div className='adress-1' style={{display : 'inline-grid'}}>
                                <Link href={'tel:' + '+91-7838553377'}>
                                    Phone : +91-7838553377
                                </Link>
                                <Link href={'mailto:' + 'dailybetter108@gmail.com'}>
                                    Mail : dailybetter108@gmail.com
                                </Link>   
                            </div>
                            <div className='adress-1'>
                                Mon - Fri : 9am - 6pm <br></br>
                                Sat & Sun : 11am-7pm
                            </div>
                        </div>
                    </div>

                    <div className='footer-items'>
                        <h4>Links</h4>
                        <div className='links'>
                            <ul>
                                <li><Link href='/'>Home</Link></li>
                                <li><Link href='/service'>Services</Link></li>
                                <li><Link href='#'>About Us</Link></li>
                                <li><Link href='/self-help-resource'>Self Help Resources</Link></li>
                                <li><Link href='#'>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className='footer-items'>
                        <h4>Book Appointment</h4>
                        <div className='appointment'>
                            <div className='appointment-img'>
                                <img src='/images/telephone-call 1.svg' />
                            </div>
                            <div className='appointmenmt-txt'>
                                <p>Reach Us</p>
                                <h5>9947773334</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <WhatsappFooterButton />
        </>
    );
};

export default Footer;
