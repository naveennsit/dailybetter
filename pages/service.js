import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from "next/link";

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
      
      <header>
        <div className='container'>
          <div className='header-wrappr'>
            <div className='logo'>
              <Link href='/'>
                <img src='/images/logo.svg' alt='' />
              </Link>
            </div>
            <div className='right-navigation'>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/service'>Services</Link>
                    </li>
                    <li>
                        <Link href='/self-help-resource'>Self Help Resources</Link>
                    </li>
                    <li>
                        <Link href='/'>Contact Us</Link>
                    </li>
                    <li>
                        <Link href=''>
                            <button type='button' className='btn'>BOOK SESSION</button>
                        </Link>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </header>

      <div className='service-banner'>
        <div className='container'>
          <h2>Services</h2>
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


      <footer>
        <div className='container'>
          <div className='footer-wrappr'>
            <div className='footer-items'>
              <div className='footer-logo'>
                <img src='/images/logo-white.svg' alt='' />
              </div>
              <p>
              Building a trusted brand for self help and mental health
              </p>
            </div>
            <div className='footer-items'>
               <h4>Contact Details</h4>
               <div className='contact-address'>
                <div className='adress-1'>
                  B-101, Ganesh Peth Ln, Ganesh Nagar, Juwekar Wadi, Dadar, Mumbai, Maharashtra 400028
                </div>
                <div className='adress-1'>
                  Phone: +91 9972449749
                  Mail: mindvoyageofficial@gmail.com
                </div>
                <div className='adress-1'>
                  Mon - Fri: 9am - 6pm <br></br>
                  Sat & Sun: 11am-7pm
                </div>
               </div>
            </div>

            <div className='footer-items'>
               <h4>Links</h4>
               <div className='links'>
                <ul>
                  <li><Link href='/'>Home</Link></li>
                  <li><Link href='#'>Services</Link></li>
                  <li><Link href='#'>About Us</Link></li>
                  <li><Link href='/self-help-resource'>Self Help Resources</Link></li>
                  <li><Link href='/'>Contact Us</Link></li>
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

    </>
  )
}
