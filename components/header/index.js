import React, {useState} from 'react';
import Link from "next/link";

const Index = () => {
    const [state,setState] = useState(false);
    const onClickMenu =(updateState)=>{
        setState(updateState)
    }
    return (
        <>

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
        </>
    );
};

export default Index;
