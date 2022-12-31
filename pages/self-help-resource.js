import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from "next/link";
import {useState} from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const inter = Inter({ subsets: ['latin'] })

export default function SelfHelpResource() {

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
          <h2>Self Help Service</h2>
        </div>
      </div>

      <div className='self-help-section'>
        <div className='container'>
          <div className='self-help-wrappr'>
            <div className='self-help-itme'>
              <div className='self-help-img'>
                <img src='/images/being-productive.svg' />
              </div>
              Being Productive
            </div>
            <div className='self-help-itme'>
            <div className='self-help-img'>
                <img className='mt-4' src='/images/daily-better-life.svg' />
              </div>
              Daily Better Life
            </div>
            <div className='self-help-itme'>
            <div className='self-help-img'>
                <img className='mt-4' src='/images/meditation.svg' />
              </div>
              Meditation
            </div>
            <div className='self-help-itme'>
            <div className='self-help-img'>
                <img className='mt-3' src='/images/self-help.svg' />
              </div>
              Good Real/ Self Help
            </div>
          </div>
        </div>
      </div>

      <div className='blog-section'>
        <div className='container'>
          <div className='blog-wrappr'>
            <h2>Blog</h2>
            <div className='blog-box'>
              <div className='blog-itme'>
                <img src='/images/blog-1.svg' />
              </div>
              <div className='blog-itme'>
                <img src='/images/blog-2.svg' />
              </div>
              <div className='blog-itme'>
                <img src='/images/blog-3.svg' />
              </div>
              <div className='blog-itme'>
                <img src='/images/blog-4.svg' />
              </div>
            </div>
          </div>
        </div>
      </div>


    <Footer/>

    </>
  )
}
