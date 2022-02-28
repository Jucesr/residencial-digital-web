import React from 'react'

import { Link, Events, animateScroll as scroll, scrollSpy } from 'react-scroll'
import {
   Button,
} from 'semantic-ui-react'

import Footer from "../components/Footer";
import Header from "./Header";
import Page from "../components/Page";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Plans from "../components/Plans";
import Contact from "../components/Contact";

class Body extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         isTop: true
      }
   }

   componentDidMount = () => {

      Events.scrollEvent.register('begin', function (to, element) {
         console.log("begin", arguments);
      });

      Events.scrollEvent.register('end', function (to, element) {
         console.log("end", arguments);
      });

      scrollSpy.update();

      document.addEventListener('scroll', () => {
         const isTop = window.scrollY < 200;
         if (isTop !== this.state.isTop) {
            this.setState({ isTop })
         }
      });

   }
   componentWillUnmount = () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
   }

   render() {
      const { props } = this

      return (
         <React.Fragment>

            <Header>
               <div className="Header_right Header_NoMovile white-color">
                  <Link className="Header_navbar_item" activeClass="active" to="caracteristicas" spy={true} smooth={true} offset={50} duration={1500} onSetActive={this.handleSetActive}>
                     <span>Caracteristicas</span>
                  </Link>
                  <Link className="Header_navbar_item" activeClass="active" to="planes" spy={true} smooth={true} duration={1500} onSetActive={this.handleSetActive}>
                     <span>Planes</span>
                  </Link>
                  <Link className="Header_navbar_item" activeClass="active" to="contacto" spy={true} smooth={true} offset={50} duration={1500} onSetActive={this.handleSetActive}>
                     <span>Contacto</span>
                  </Link>
               </div>
            </Header>

            <div className="Body">

               <Page color="primary">
                  <div className="Body1">
                     <div className="Body_item Body_left">
                        <div className="Body_image_row">
                           <div className="Body_image">
                              <img alt="medicina" src="/svg/sedan.svg" />
                              <img alt="historia clinica" src="/images/white_shadow.png" />
                           </div>
                           <div className="Body_image">
                              <img alt="cardiologo" src="/svg/chat.svg" />
                              <img alt="historia clinica" src="/images/white_shadow.png" />
                           </div>
                        </div>
                        <div className="Body_image_row">
                           <div className="Body_image">
                              <img alt="neurologia" src="/svg/money.svg" />
                              <img alt="historia clinica" src="/images/white_shadow.png" />
                           </div>
                           <div className="Body_image">
                              <img alt="odontologia" src="/svg/research.svg" />
                              <img alt="historia clinica" src="/images/white_shadow.png" />
                           </div>
                        </div>


                     </div>
                     <div className="Body_item Body_rigth">
                        <div className="Slogan">
                           El mejor software para tu residencial
                        </div>
                        {/* <div className="Body_button">
                           <a href={process.env.registerUrl} target="blank" className="Button_green" >
                              PRUEBA GRATIS
                           </a>
                        </div> */}

                        <div className="Body_subtitle">
                           Organiza tu vecindario.
                        </div>
                     </div>
                  </div>
               </Page>

               <Page>
                  <div className="BigFeature">
                     <div className="BigFeature__Text">
                        <div className="title">
                           <span className="Lobster">Residencial Digital</span> te permite controlar el acceso de las visitas de tu residencial
                        </div>
                        <div className="subtitle">
                           ¡Toma tu prueba de <span>15 días</span> <a href={process.env.registerUrl} target="blank" style={{ textDecoration: 'underline' }}>ya!</a>
                        </div>

                     </div>
                     <div className="Body_item Body_rigth Laptops">
                        <img alt="software digital" src="/images/laptops.png" />
                     </div>
                  </div>
               </Page>

               <Page>
                  <div className="SmallFeatures">

                     <div className="SmallFeature">
                        <div>
                           <h4>Control de cuotas</h4>
                           <span>Tus residentes podrán hacer pagos desde la comodidad de su hogar</span>

                        </div>
                        <div className="SmallFeatureImg ">

                           <img alt="norma 024-ssa3" src="/images/payment.png" />

                        </div>

                     </div>

                     <div className="SmallFeature">
                        <div>
                           <h4>Seguridad</h4>
                           <span>Toda la información de accesos al alcance de tu mano.</span>
                        </div>
                        <div className="SmallFeatureImg">
                           <img alt="software digital" src="/images/control.png" />
                        </div>
                     </div>
                  </div>

               </Page>


               <div className="Body_rooms">
               </div>

               <Page>
                  <Features elementName="caracteristicas"></Features>
               </Page>

               <Page color="lg-gray">
                  <Plans elementName="planes"></Plans>
               </Page>

               <Banner />

               <Page>
                  <Contact elementName="contacto"></Contact>
               </Page>

               <Footer />
               {!this.state.isTop && <div>
                  <div style={{
                     backgroundColor: "rgba(0,0,0,0)",
                     textAlign: "right",
                     // padding: "20px",
                     position: "fixed",
                     right: "0",
                     bottom: "0",
                     height: "60px",
                     width: "10%",
                  }}>
                     <Button style={{
                        margin: '10px 15px 5px 0'
                     }}
                        onClick={() => scroll.scrollToTop()}
                        color="green" size="large" circular icon='arrow up' />
                  </div>
               </div>}
            </div>
         </React.Fragment>

      )
   }
}




export default Body