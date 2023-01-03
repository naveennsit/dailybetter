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
          <h2>Book Session</h2>
        </div>
      </div>

      <div className='payment-section'>
        <div className='container'>
          <div className='payment-wrappr'>
            <div className='payment-box'>
              <div className='qr-code'>
                <img src='/images/qr-code.svg' />
                <p>Scan & Pay</p>
              </div>
              <p>Or send to bank</p>

              <div className='bank-detail'>
                <h5>Bank Account Details</h5>
                <div className='back-account-detail'>
                  <span className='span-lbl'>Bank Account No.</span>
                  <span>7787287232323</span>
                </div>
                <div className='back-account-detail'>
                  <span className='span-lbl'>IFSC Code</span>
                  <span>HHD0034</span>
                </div>
                <div className='back-account-detail'>
                  <span className='span-lbl'>Branch</span>
                  <span>New Delhi</span>
                </div>
              </div>
              <div className='book-now-link'>
                <a href='https://calendly.com/dailybetter/coaching'>Book Now</a>
              </div>
            </div>
            <div className='price-box'>
              <h3>Price</h3>
              <div className='slot-box'>
                <div className='slot-time'>
                  <span>30</span>
                  Min slot
                </div>
                <div className='slot-price'>
                  <div className='slot-price-rate'>
                    <div className='current-price'><img src='/images/rupee-indian.svg' />999</div>
                    <div className='preview-price'><img src='/images/rupee-indian.svg' />3999
                    <span></span>
                    </div>
                    <div className='discount-slot'>60% off</div>
                  </div>
                  <div className='book-lot'><a href="https://calendly.com/dailybetter/coaching">Book Now</a></div>
                </div>
              </div>
              <div className='slot-box'>
                <div className='slot-time'>
                  <span>01</span>
                  Hour slot
                </div>
                <div className='slot-price'>
                  <div className='slot-price-rate'>
                    <div className='current-price'><img src='/images/rupee-indian.svg' />1499</div>
                    <div className='preview-price'><img src='/images/rupee-indian.svg' />4999
                    <span></span>
                    </div>
                    <div className='discount-slot'>60% off</div>
                  </div>
                  <div className='book-lot'><a href="https://calendly.com/dailybetter/coaching">Book Now</a></div>
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
