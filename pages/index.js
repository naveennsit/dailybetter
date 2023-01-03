
import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from "next/link";
import {useState} from "react";
import Footer from "../components/footer";
import Header from "../components/header";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Daily Better</title>
        <meta name="description" content="Daily Better app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 

        <Header/>

      <div className='banner-container'>
        <div className='container'>
          <div className='banner-wrappr'>
            <div className='banner-txt'>
              <h1>Building a trusted brand for self help and mental health</h1>
              <p>Its all in your mind, you can lead the best life with little assit</p>
              <button type='button' className='btn'>Know More</button>
            </div>
            <div className='banner-image'>
              <img src='/images/banner-image.svg' alt='' />
            </div>
          </div>
        </div>
      </div>
      <div className='service-box'>
        <div className='container'>
          <div className='service-box-img home-service'>
            <div className='service-box-img1'>
              <h4>
                AnimusViaCredo
              </h4>
              <p>Road to mind through Self Awareness and Belief</p>
              <div className='home-box-section'>
                <h5>Etymology</h5>
                <ul>
                  <li>Animus - Means mind</li>
                  <li>Credo - means personal belief and principles</li>
                  <li>Via - means &quot;by way of&quot;, which is from Latin word road (The via Appia was one of the famous highways of ancient Roman times).</li>
                </ul>
              </div>
            </div>
            <div className='service-box-img2'>
              <img src='/images/home-page-img.png' />
            </div>
          </div>
        </div>
      </div>
      <div className='daily-banner-container'>
        <div className='container'>
          <div className='daily-banner-wrappr'>
            <h2>Daily Better</h2>
            <p className='subtitle'>AnimusViaCredo - Road to mind through Self Awareness and Belief</p>
            <div className='daily-list-box'>
              <div className='daily-list grey'>
                <h4>Benjamin Disraeli</h4>
                <p>Nurture your mind with great thoughts, for you will never go any higher than you think </p> 
              </div>
              <div className='daily-list'>
                <h4>Henry Ford</h4>
                <p>Whether you think you can, or you think you can&apos;t, you are right..</p>
              </div>
              <div className='daily-list grey'>
                <h4>Lao Tzu</h4>
                <p>Simplicity, patience, compassion. These three are your greatest treasures</p> 
              </div>
              <p>
              We try to make your life better by showing you a mirror of yourself and the helping you on a path of self awareness and Belief. 
              </p>
              <p>
              This finally takes you to a place where you are happy and more content in life. 
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className='our-section'>
        <div className='container'>
          <div className='our-section-wrappr'>
            <div className='our-item'>
              <h4>3 Years</h4>
              <p>of Experince of Life Coaching</p>
            </div>
            <div className='our-item'>
              <h4>1000+</h4>
              <p>Happy Clients</p>
            </div>
            <div className='our-item'>
              <h4>500+</h4>
              <p>Better Life</p>
            </div>
          </div>
        </div>
      </div>

      <div className='make-life-better'>
          <div className='container'>
            <div className='make-life-wrappr'>
              <h2>We can make your daily life better.</h2>
              <div className='well-being-section'>
                <div className='well-being-img'>
                  <img src='/images/well-being.svg' alt='' />
                </div>
                <div className='well-being-list'>
                  <h4>What is mental Well being</h4>
                  <ul>
                    <li>To be in a state where i am at ease in my day to day life</li>
                    <li>To be in a state where i am at peace with me , my environment , my surrounding and my day to day work</li>
                    <li>To be physically healthy</li>
                    <li>To be in a state where i am being productive and don&apos;t feel stressed</li>
                    <li>To be in state where i am not dwelling too much on past and not being too anxious about future</li>
                  </ul>
                </div> 
              </div> 
            </div>
          </div>
      </div>

      <div className='make-life-outcome'>
        <div className='container'>
        <div className='well-being-section'> 
                <div className='well-being-list'>
                  <h4>What is the expected outcome of this exercise</h4>
                  <ul>
                    <li>You will feel happier</li>
                    <li>You will feel in more control of your life</li>
                    <li>You will do better on your professional front</li>
                  </ul>
                </div> 
                <div className='well-being-img'>
                  <img src='/images/health-outcome-banner.svg' alt='' />
                </div>
              </div>
        </div>
      </div>

     <Footer/>

    </>
  )
}
