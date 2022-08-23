/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  const router = useRouter()

  useEffect(()=>{
    setCurrentUrl(router.pathname);
  });

    return (
        <div className='menu'>
            <div className='container-menu'>
              <div className='left-panel'>
              <div className='logo'>
                <img src='/img/logo.png' alt='logo' />
              </div>
              <div 
              className='hamburger-menu' 
              onClick={() => setShowMenu(!showMenu)} 
              style={{ backgroundImage: `url('/img/${showMenu ? 'x' : 'menu'}.png')`, width: showMenu && '7vw' }}
              />
              <div className={`sections ${showMenu ? 'show' : 'hide'}`}>
                <Link href="/">
                  <a>
                    <div className={`section ${currentUrl === '/' && 'active'}`}>
                      Inicio
                    </div>
                  </a>
                </Link>
                <Link href="/curriculum">
                  <a>
                    <div className={`section ${currentUrl === '/curriculum' && 'active'}`}>
                      Curriculum
                    </div>
                  </a>
                </Link>
                <Link href="/galeria">
                  <a>
                    <div className={`section ${currentUrl === '/galeria' && 'active'}`}>
                    Galería
                    </div>
                  </a>
                </Link>
                <Link href="/contacto">
                  <a>
                    <div className={`section ${currentUrl === '/contacto' && 'active'}`}>
                      Contacto
                    </div>
                  </a>
                </Link>
              </div>
              </div>
            </div> 
        </div>
    );
};

export default Menu;