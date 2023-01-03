import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from "next/link";
import {useState} from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const inter = Inter({ subsets: ['latin'] })

export default function Service() {
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
          <h2>Services</h2>
        </div>
      </div>

      <div className='service-box'>
        <div className='container'>
          <div className='service-box-img'>
            <div className='service-box-img1'>
              <span className='qoute'>“</span>
              <h4>
              Nurture your mind with great thoughts, for you will never go any higher than you think”...
              </h4>
              <span className='qoute1'>“</span>
              <p>Benjamin Disraeli</p>
            </div>
            <div className='service-box-img2'>
              <img src='/images/service_box_image.jpeg' />
            </div>
          </div> 
        </div>
      </div>

      <div className='service-area'>
        <div className='container'>
          <div className='service-wrappr'>
            <div className='service-item'>
              <h4>Personal Issues</h4>
              <p>Challenge in Relationship</p>
              <p>Breakup in a relationship</p>
              <p>Clarity in own life</p>
              <p>Divorce/ Seperation</p>
              <p>Family matters</p>              
            </div>
            <div className='service-item'>
              <h4>Mild Depression</h4>
              <p>Loss of closed one</p>
              <p>Dealing with Grief</p>
              <p>Dealing with Self esteem</p>    
            </div>
            <div className='service-item'>
              <h4>Feeling Stressed / Anxious</h4>
              <p>Financial loss</p>
              <p>Stress from a relative</p>          
            </div>

            <div className='service-item'>
              <h4>Work Related Issues</h4>
              <p>Difficulty at work </p>
              <p>Issues with Boss</p>
              <p>No recognition </p>
              <p>Switch of jobs</p>             
            </div>
            <div className='service-item'>
              <h4>Self confidence and complexity</h4>
              <p>Low self confidence</p>
              <p>Peer pressure </p>
              <p>Inferiority complex</p>    
            </div>
            <div className='service-item'>
              <h4>Health / Body issues</h4>
              <p>Self image</p>
              <p>Additction and eating</p>          
            </div>
          </div>

          <div className='note-section'>
            <p><strong>Note:</strong> We deal with people of 20-45 years of age</p>
            <p><strong>Disclaimer: </strong>If you are going through severe stress, having suicidal thoughts, any previous history of suicide attempts or if you are previously diagnosed with a mental health disorder of any severe condition, this is not the right service for you. In such cases, we highly recommend that you, please visit nearest emergency services immediately or visit a nearest Psychiatrist.</p>
          </div>

        </div>
      </div>


        <Footer/>

    </>
  )
}
