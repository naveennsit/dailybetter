
import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from "next/link";
import {useState} from "react";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [state,setState] = useState(false);
    const onClickMenu =(updateState)=>{
        setState(updateState)
    }
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
              <div className='menu-icon' onClick={()=>onClickMenu(true)}>
                <img src='/images/menu-icon.svg' />
              </div>
              <Link href='/'>
                <img src='/images/logo.jpeg' alt='' width={80}/>
              </Link>
            </div>
            <div className='right-navigation'>
              <ul>
                <li className='mobile-hide'>
                  <Link href='/'>Home</Link>
                </li>
                <li className='mobile-hide'>
                  <Link href='/service'>Services</Link>
                </li>
                <li className='mobile-hide'>
                  <Link href='/self-help-resource'>Self Help Resources</Link>
                </li>
                <li className='mobile-hide'>
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

      <div className={`overley ${state ? 'active' : ''}`} onClick={()=>onClickMenu(false)}></div>
      <div className={`sidebar ${state ? 'active' : ''}`}>
        <div className='sidebar-wrappr'>
          <div className='side-bar-logo'>
            <img src='/images/logo.jpeg'  width={80}/>
          </div>
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
          </ul>
        </div>
      </div>


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

      <div className='daily-banner-container'>
        <div className='container'>
          <div className='daily-banner-wrappr'>
            <h2>Daily Better</h2>
            <p className='subtitle'>AnimusViaCredo - Road to mind through Self Awareness and Belief</p>
            <div className='daily-list-box'>
              <div className='daily-list'>
                <h4>Etymology</h4>
                <p>Animus - Means mind</p>
                <p>Credo - means personal belief and principles</p>
                <p>Via - means &quot;by way of&quot;, which is from Latin word road (The via Appia was one of the famous highways of ancient Roman times).</p>
              </div>
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

    </>
  )
}
