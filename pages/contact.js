
import Head from 'next/head'
import { Inter } from '@next/font/google'

import Footer from "../components/footer";
import Header from "../components/header";


const inter = Inter({ subsets: ['latin'] })

export default function Contact() {

    return (
        <>
            <Head>
                <title>Daily Better</title>
                <meta name="description" content="Daily Better app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <Header/>



            <div className='service-banner'>
                <div className='container'>
                    <h2>Contact Us</h2>
                </div>
            </div>

            <div className='payment-section'>
                <div className='container'>
                    <div className='payment-wrappr' style={{justifyContent:'center'}}>
                        <div className='payment-box'>
                            <div className='bank-detail'>
                                <h5>Contact Us</h5>
                                <div className='back-account-detail'>
                                    <span className='span-lbl'>Mobile No.</span>
                                    <span>7838553377</span>
                                </div>
                                <div className='back-account-detail'>
                                    <span className='span-lbl'>Email</span>
                                    <span>dailybetter108@gmail.com</span>
                                </div>
                                <div className='back-account-detail'>
                                    <span className='span-lbl'>Timing</span>
                                    <span>Mon - Fri : 10 AM - 11 PM</span>
                                </div>
                                <div className='back-account-detail'>
                                    <span className='span-lbl'></span>
                                    <span>Sat & Sun : 11 AM - 11 PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer/>

        </>
    )
}
