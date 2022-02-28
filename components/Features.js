import React from 'react'
import { Element } from 'react-scroll'


const Features = ({ elementName }) => {
   const title = <div className="Body_title">
      Todo lo necesario para organizar tu residencial
   </div>
   return (
      <div className="Body4" style={{ textAlign: 'center' }}>
         {elementName ? <Element name={elementName}>
            {title}
         </Element> : title}
         <div className="Card_row">
            <Card
               title="Accesos"
               image="parking"
               text="Controla entradas, salidas, visitantes activos."
               alt="acceso electronica"
            />
            <Card
               title="Pagos"
               image="save-money"
               text="Recibe pagos de cuota de los residentes."
               alt="pago de cuotas"
            />
            <Card
               title="Reportes"
               image="analytics"
               text="Visualiza reportes de pagos, accesos, morosos y más."
               alt="reportes de entradas"
            />
            <Card
               title="Eventos"
               image="appointment"
               text="Organiza los eventos que suceden en tu residencial."
               alt="calendario de eventos"
            />
            <Card
               title="Mensajes"
               image="email"
               text="Envia mensajes a todos tus residentes."
               alt="envio de mensajes"
            />
            <Card
               title="Tarjetas"
               image="inventory"
               text="Administra las tarjetas de acceso de los residentes."
               alt="tarjetas de identificacion"
            />

            <Card
               title="Guardias"
               image="policeman"
               text="Administra las guardias de tu residencial."
               alt="guardias de seguridad"
            />
            <Card
               title="Notificaciones"
               image="notifications"
               text="Notifica a los residentes accesos, pagos, eventos y más."
               alt="notificaciones"
            />

            <Card
               title="Digitalización"
               image="excel"
               text="¿No tienes tu información digitalizada?. Nosotros te ayudamos."
               alt="importa informacion de excel"
            />
         </div>
      </div>
   )
}

const Card = ({ title, image, text, alt }) => (
   <div className="Card">
      <div className="title">
         {title}
      </div>
      <div className="image">
         <img alt={alt} src={`/images/cards/${image}.png`} />
      </div>
      <div className="text">
         {text}
      </div>
   </div>
)

export default Features