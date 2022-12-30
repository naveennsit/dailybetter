import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function SelfHelpResource() {
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
                <img src='/images/logo.svg' alt='' />
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
            <img src='/images/logo.svg' />
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
