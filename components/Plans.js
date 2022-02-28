import React from 'react'
import { Table, Icon } from 'semantic-ui-react'
import { Element } from 'react-scroll'

const baseURL = `https://api.whatsapp.com/send?phone=526861779471&`

const plansObj = [{
   title: 'Básico',
   price: '$500',
   discount: '$350'
}, {
   title: 'Profesional',
   price: '$800',
   discount: '$650'
}, {
   title: 'Experto',
   price: '$800',
   discount: '$650'
}]

const Plans = ({ elementName }) => {
   const title = <div className="Body_title">
      Planes
      <div className="subtitle">
         Elige el plan que se ajuste a tus necesidades
      </div>
   </div>
   return (
      <div className="Plans" style={{ textAlign: 'center' }}>
         {elementName ? <Element name={elementName}>
            {title}
         </Element> : title}

         <div className='ResponsiveDesktop'>
            <div className="PlanTable">
               <Table definition>
                  <Table.Header>
                     <Table.Row className="PlanTableHeader">
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell>
                           <div className="title">
                              {plansObj[0].title}
                           </div>
                           {/* <div className="subtitle">
                              {plansObj[0].price} MXN al mes
                        </div>
                           <div className="dis_subtitle">
                              {plansObj[0].discount} MXN al mes
                        </div> */}
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                           <div className="title">
                              {plansObj[1].title}
                           </div>
                           {/* <div className="subtitle">
                              {plansObj[1].price} MXN al mes
                        </div>
                           <div className="dis_subtitle">
                              {plansObj[1].discount} MXN al mes
                        </div> */}
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                           <div className="title">
                              {plansObj[2].title}
                           </div>
                           {/* <div className="subtitle">
                              {plansObj[1].price} MXN al mes
                        </div>
                           <div className="dis_subtitle">
                              {plansObj[1].discount} MXN al mes
                        </div> */}
                        </Table.HeaderCell>

                     </Table.Row>
                  </Table.Header>

                  <Table.Body className="PlanTableBody">
                     <Table.Row>
                        <Table.Cell>
                           Control de visitantes
                        </Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                     </Table.Row>
                     <Table.Row>
                        <Table.Cell>Control de eventos</Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                     </Table.Row>
                     <Table.Row>
                        <Table.Cell>Envio de mensajes</Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                     </Table.Row>
                     <Table.Row>
                        <Table.Cell>Reportes de acceso</Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                     </Table.Row>
                     <Table.Row>
                        <Table.Cell>App movil para residentes</Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                     </Table.Row>
                     <Table.Row>
                        <Table.Cell>App para guardias</Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                     </Table.Row>
                     <Table.Row>
                        <Table.Cell>Módulo de pago de cuotas</Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                     </Table.Row>
                     <Table.Row>
                        <Table.Cell>Reportes de morosos</Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                     </Table.Row>
                     <Table.Row>
                        <Table.Cell>Control de tarjetas de acceso</Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                     </Table.Row>

                     <Table.Row>
                        <Table.Cell>Ajustes personalizados</Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell></Table.Cell>
                        <Table.Cell> <Icon name="checkmark"></Icon> </Table.Cell>
                     </Table.Row>
                  </Table.Body>

                  <Table.Footer>
                     <Table.Row className="PlanTableHeader">
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell>
                           <a href={`${baseURL}text=Hola, me interesa conocer más sobre el plan básico`} target="blank" className="fontSmall Button_green">Cotizar</a>
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                        <a href={`${baseURL}text=Hola, me interesa conocer más sobre el plan profesional`} target="blank" className="fontSmall Button_green">Cotizar</a>
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                        <a href={`${baseURL}text=Hola, me interesa conocer más sobre el plan experto`} target="blank" className="fontSmall Button_green">Cotizar</a>
                        </Table.HeaderCell>
                

                     </Table.Row>
                  </Table.Footer>
               </Table>
            </div>

         </div>

         <div className='ResponsiveTablet'>
            <div className="Card_row">

               <CardPlan
                  title={plansObj[0].title}
                  subtitle={`${plansObj[0].price} MXN al mes`}
                  discount={`${plansObj[0].discount} MXN al mes`}
                  features={[
                     'Control de visitantes',
                     'Control de eventos',
                     'Envio de mensajes',
                     'Reportes de acceso',
                     'App movil para residentes',
                     'App para guardias',
                  ]}
               />
               <CardPlan
                  title={plansObj[1].title}
                  subtitle={`${plansObj[1].price} MXN al mes`}
                  discount={`${plansObj[1].discount} MXN al mes`}
                  features={[
                     'Mismos beneficios que plan básico',
                     'Módulo de pago de cuotas',
                     'Reportes de morosos',
                  ]}
               />
               <CardPlan
                  title={plansObj[2].title}
                  subtitle={`${plansObj[2].price} MXN al mes`}
                  discount={`${plansObj[2].discount} MXN al mes`}
                  features={[
                     'Mismos beneficios que plan profesional',
                     'Control de tarjetas de acceso',
                     'Ajustes personalizados',
                  ]}
               />
            </div>
         </div>

      </div>
   )
}

const CardPlan = ({ title, subtitle, discount, features }) => (
   <div className="CardPlan">
      <div className="CardPlanContainer">
         <div className="title">
            {title}
         </div>
         {/* <div className="subtitle">
            {subtitle}
         </div>
         <div className="discount">
            {discount}
         </div> */}
         <div className="features">
            {features.map((f, i) => <div key={i}>
               {f}
            </div>)}
         </div>
         <a href={process.env.registerUrl} target="blank" className="fontSmall Button_green">Cotizar</a>
      </div>

   </div>
)

export default Plans