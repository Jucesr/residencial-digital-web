import React from 'react'
import NextLink from 'next/link'
import {
   Icon,
} from 'semantic-ui-react'

const Footer = (props) => {
   return (
      <div className="Footer">
         <div className="FooterWrapper">
            <div className="FooterLeft">

               <div className='FooterLinks'>
                  <div className='ResponsiveMobile '>
                     <div className='FooterLinks'>
                        <div className="FooterTitle">Mapa del sitio</div>
                        <NextLink href="/caracteristicas">Caracteristicas</NextLink>
                        <NextLink href="/planes">Planes</NextLink>
                        <NextLink href="/contacto">Contacto</NextLink>
                     </div>
                  </div>
                  {/* <NextLink href="/terminos-condiciones">Términos y condiciones</NextLink> */}
                  {/* <NextLink href="/aviso-privacidad">Aviso de privacidad</NextLink> */}

               </div>
               <div className="FooterCopyRight">
                  COPYRIGHT @ 2022 Residencial Digital SA de CV
               </div>
            </div>
            <div className="FooterRigth">
               <div>
                  <a href="https://api.whatsapp.com/send?phone=526861779471" target="blank"><Icon className="SocialMediaLink" size="big" name="whatsapp" /></a>
                  <a href="https://www.facebook.com/pacientesano/" target="blank"><Icon className="SocialMediaLink" size="big" name="facebook" /></a>
                  <a href="https://www.instagram.com/pacientesano/" target="blank"><Icon className="SocialMediaLink" size="big" name="instagram" /></a>
                  <a href="https://www.youtube.com/channel/UCaBzS-VAGdYiEM3dA2r_boA/" target="blank"> <Icon className="SocialMediaLink" size="big" name="youtube" /></a>
               </div>
               <div className="FooterContacts">
                  <a href="https://api.whatsapp.com/send?phone=526861779471">Teléfono : +52 (686) 177 94 71</a>
                  {/* <div>Email : contacto@pacientesano.com</div> */}

               </div>
            </div>
         </div>
      </div>
   )
}


export default Footer