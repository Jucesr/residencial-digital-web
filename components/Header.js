import React from 'react'
import Link from 'next/link'

const Header = ({ inverted = false, children }) => {
  return (
    <header className={`Header ${!inverted ? 'primary-bg' : 'white-bg'}`}>
      <div className="HeaderWrapper">


        <div className='HeaderMobile' style={{marginBottom: '1rem'}}>
          <Link href="/" >
            <div className={`Header_left ${inverted ? 'blue-color' : 'white-color'}`}>
              <img alt="residencial digital" className="Header_logo" src={`/images/logo${inverted ? '': '_'}.png`} />
              <h2 className="Header_title">Residencial Digital</h2>
            </div>

          </Link>
          <div className={`Header_right ${inverted ? 'blue-color' : 'white-color'}`}>
            <Link href="/caracteristicas" ><div className="Header_Item"><span>Caracteristicas</span></div></Link>
            <Link href="/planes" ><div className="Header_Item"><span>Planes</span></div></Link>
            <Link href="/contacto" ><div className="Header_Item"><span>Contacto</span></div></Link>
            {/* <a href={process.env.registerUrl} target="blank" className="Header_Button"> Prueba gratis</a> */}
          </div>
        </div>


        <div className='HeaderDesktop'>
          <Link href="/" >
            <div className={`Header_left ${inverted ? 'blue-color' : 'white-color'}`}>
              <img alt="residencial digital" className="Header_logo" src={`/images/logo${inverted ? '': '_'}.png`} />
             
              <h2 className="Header_title">Residencial Digital</h2>
            </div>

          </Link>
          {children}
        </div>

      </div>


    </header>
  )
}

export default Header