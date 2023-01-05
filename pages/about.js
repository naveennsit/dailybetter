
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
                    <h2>About Us</h2>
                </div>
            </div>




            <Footer/>

        </>
    )
}
