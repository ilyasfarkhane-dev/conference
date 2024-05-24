"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import NavMenu from './nav-menu';
import SlideBar from './slide-bar';
import MobileMenus from './mobile-menus';
type style_type ={
    style: boolean
}
const HeaderTwo = ({style}: style_type) => {
    const [sidebarOppen, setSidebarOppen] = useState(false)
    return (
        <> 
            <header className="header-transparent header-2 header-space">
                {style ? null :
                    <div className="header-top pt-25 pb-25 d-none d-md-block">
                        <div className="container-fluids">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="header-left">
                                       
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <div className="header-cta text-right">
                                        <ul className="top-list">
                                            <li><a href="#"><i className="fal fa-envelope"></i><span> tim24fsbm@gmail.com</span></a></li>
                                            <li className="mr-0"><a href="#"><i className="fal fa-phone"></i><span> +212 660-082091</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                
                }
            <div className={`header-area ${style ? "header-transparent header-space" : "header-bottom-space"} pt-45 pb-45`}>
                <div className="container-fluids">
                    <div className="row"> 
                        <div className="col-xl-3 col-lg-3 col-md-5 d-flex align-items-lg-center">
                            <div className="logo">
                                <Link href="/"> 
                                {style ?
                                <img src="/assets/img/logo/logo.png" alt="theme-pure" className='log' /> 
                                :
                                <img src="/assets/img/logo/logo.png" alt="theme-pure"  className='log'  />                                 
                                }
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block">
                            <div className={`main-menu ${style ? "contract-menu" : "text-center"}`}>
                                <nav id="mobile-menu">
                                <NavMenu /> 
                                </nav>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-7 d-flex align-items-center justify-content-end">
                            <div className="header-btn f-right d-none d-md-block">
                                <Link href={"#"}>
                                    <button className="btn"><i className="far fa-user"></i> Inscription</button>                                
                                </Link>
                            </div>
                            
                        </div>
                        <div className="col-12">
                            <div className="mobile-menu mean-container d-lg-none"> 
                                <div className="mean-bar">
                                <MobileMenus />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <SlideBar sidebarOppen={sidebarOppen} setSidebarOppen={setSidebarOppen} />
        </>
    );
};

export default HeaderTwo;