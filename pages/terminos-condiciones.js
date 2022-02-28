import Layout from "../components/Layout"
import Section from '../components/Section'

const TermsAndConditions = (props) => {
   return (
      <Layout headerInverted={true}>
         
               <div className="PageTitle">Términos y condiciones</div>

               <Section
                  title="Sección 1 - Aceptación"
               >
                  El usuario de este sitio acepta por el uso del sistema <span className="CompanyName">Paciente Sano</span> lo presentado en este apartado y Términos y Condiciones,
   los cuales podrán ser cambiados sin previo aviso por parte de <span className="CompanyName">Paciente Sano</span>. Si el usuario representa una organización,
   está dando por entendido que la organización acepte de igual manera este contrato.
   El usuario que no esté de acuerdo con esto no podrá hacer uso de los servicios prestados por <span className="CompanyName">Paciente Sano</span>.
   </Section>
               <Section
                  title="Sección 2 – Mayor de edad"
               >
                  El usuario debe ser legalmente mayor de edad en el país, estado o provincia de residencia para poder convenir y aceptar estos términos.
   </Section>
               <Section
                  title="Sección 3 – Prestaciones de servicio"
               >
                  <span className="CompanyName">Paciente Sano</span> se reserva el derecho de rechazar la prestación del servicio a cualquier persona, por cualquier motivo y en cualquier momento. El usuario puede acceder a <span className="CompanyName">Paciente Sano</span> desde cualquier navegador web en el dominio <a target="blank" href={process.env.appURL} className="CompanyApp"> www.app.pacientesano.com</a>. Es responsabilidad del usuario cubrir cualquier otro cargo indirecto relacionado con el uso de <span className="CompanyName">Paciente Sano</span>, tales como el pago de servicio de internet y pago del servicio de luz eléctrica y pago del mantenimiento del equipo de cómputo. Es responsabilidad del usuario tener en todo momento acceso a un equipo de cómputo en condiciones de hardware suficientes para hacer uso de <span className="CompanyName">Paciente Sano</span>.
</Section>
               <Section
                  title="Sección 4 – Planes de suscripción y costos"
               >
                  <div>
                     <span className="CompanyName">Paciente Sano</span> ofrece dos modalidades de uso, gratuita y de pago. Cualquier usuario puede gozar de un periodo gratuito de 1 mes con todas las funcionalidades que <span className="CompanyName">Paciente Sano</span> ofrece. Una vez finalizado este periodo y de querer continuar utilizando el sistema, el usuario estará obligado a escoger un tipo de suscripción de paga de acuerdo con las necesidades del usuario.
   </div>
                  <div>
                     El plan “Básico” deberá pagar 350 pesos mexicanos al mes para mantener la suscripción y el acceso al sistema. Esto le dará derecho a tener un usuario tipo PROFESIONISTA y un usuario tipo RECEPCION, además podrá registrar hasta 100 pacientes al mes.
   </div>
                  <div>
                     El plan “Estandar” deberá pagar 750 pesos mexicanos al mes para mantener la suscripción y el acceso al sistema. Esto le dará derecho a tener tres usuarios tipo PROFESIONISTA y dos usuarios tipo RECEPCION, además podrá registrar hasta 400 pacientes al mes.
   </div>
                  <div>
                     El plan “Profesional” deberá pagar 1,250 pesos mexicanos al mes para mantener la suscripción y el acceso al sistema. Esto le dará derecho a tener siete usuarios tipo PROFESIONISTA y tres usuarios tipo RECEPCION, además podrá registrar hasta 1000 pacientes al mes.
   </div>
                  <div>
                     Por cada paciente que se agregue extra se cobrarán 5 pesos mexicanos, los cuales se agregarán al cobro mensual.
   </div>
               </Section>
               <Section
                  title="Sección 5 – Métodos de pago"
               >
                  <div>
                     Una vez que el usuario seleccionó su plan de suscripción tendrá que realizar el pago por medio de <a target="blank" href="https://stripe.com/en-mx" className="CompanyApp"> Stripe</a> y posteriormente tendrá acceso a los beneficios del plan. A partir de este día tendrá una suscripción la cual hará el cargo automático mensual.
   </div>

                  <div>
                     El usuario es responsable del pago de cualquier impuesto aplicable al servicio, incluyendo impuesto de ventas, IVA, por remesas al exterior, o cualquier otro similar aplicable.
   </div>
               </Section>
               <Section
                  title="Sección 6 – Cancelación del servicio"
               >
                  <div>
                     <span className="CompanyName">Paciente Sano</span> se reserva el derecho de terminar el servicio en cualquier momento de manera permanente o temporal para aquellos usuarios que violen alguno de los términos y condiciones aquí presentados.
   </div>

                  <div>
                     De igual manera el usuario puede cancelar el servicio en cualquier momento si así lo desea. Sin embargo, no se harán devoluciones de dinero por los días restantes del mes en curso o por pagos adelantados del servicio. El procedimiento para realizar esta acción esta indicado en el manual de usuario de <span className="CompanyName">Paciente Sano</span>. INSERTE MANUAL AQUÍ.
   </div>
               </Section>
               <Section
                  title="Sección 7 – Uso de información"
               >
                  <div>
                     El uso de información almacenada en <span className="CompanyName">Paciente Sano</span> es responsabilidad del usuario que la registra. Dicha información puede ser de carácter personal como información personal de pacientes, alergias, familiares y consultas. <span className="CompanyName">Paciente Sano</span> tiene mecanismos de encriptación para proteger toda esta información de hackers, pero no se hace responsable por la exposición de la información a través de su plataforma web. El usuario debe ser responsable de mantener su usuario y contraseña segura para evitar el mal uso de la información.
   </div>
               </Section>
               <Section
                  title="Sección 8 – Casos de fuerza mayor"
               >
                  <div>
                     <span className="CompanyName">Paciente Sano</span> queda totalmente exento de incumplimiento del acuerdo si se presenta una falla técnica por un evento de fuerza mayor tales como desastres naturales, guerras, actos o actividades terroristas, pandemias, huelgas o paros nacionales.
   </div>
               </Section>
               <Section
                  title="Sección 9 – Ley"
               >
                  <div>
                     Estas Condiciones del servicio y cualquier acuerdo aparte en el que te proporcionemos servicios se regirán e interpretarán en conformidad con las leyes de Baja California, México.
   </div>
               </Section>
               <Section
                  title="Sección 10 – Indemnización"
               >
                  <div>
                     Aceptas indemnizar, defender y mantener indemne a <span className="CompanyName">Paciente Sano</span> y nuestras matrices, subsidiarias, afiliados, socios, funcionarios, directores, agentes, contratistas, concesionarios, proveedores de servicios, subcontratistas, proveedores, internos y empleados, de cualquier reclamo o demanda, incluyendo honorarios razonables de abogados, hechos por cualquier tercero a causa o como resultado de tu incumplimiento de las Condiciones de Servicio o de los documentos que incorporan como referencia, o la violación de cualquier ley o de los derechos de un tercero.
   </div>
               </Section>
               <Section
                  title="Sección 11 – Relación con usuario"
               >
                  <div>
                     La relación entre <span className="CompanyName">Paciente Sano</span> y el usuario es estrictamente comercial y bajo un esquema de contratistas independientes, por lo que no existe ni existirá entre las partes ninguna sociedad, ni relación laboral. Ninguna de las partes se anunciará o presentará como un agente de la otra. Ninguna de las partes tiene el poder ni la autoridad para obligar a la otra en acuerdo o contrato alguno, y se abstendrán de representar que sí ostentan ese poder.
   </div>
               </Section>
               <Section
                  title="Sección 12 – Propiedad intelectual"
               >
                  <div>
                     El usuario acepta que el servicio contiene códigos e información confidencial que se encuentra protegida por las leyes vigentes de propiedad intelectual y de otra naturaleza. Con excepción a lo que expresamente autorice <span className="CompanyName">Paciente Sano</span>, el usuario no podrá modificar, rentar, arrendar, prestar, vender, distribuir o crear, total o parcialmente, obras derivadas procedentes del servicio o del software indicado
   </div>
               </Section>
               <Section
                  title="Sección 13 – Cancelación por usuario administrador"
               >
                  <div>
                     <span className="CompanyName">Paciente Sano</span> cuenta con diferentes tipos de usuarios. En cualquier momento el usuario administrador puede cancelar la suscripción o incluso eliminar los datos de la cuenta para siempre. Si esto se hace, la información de los usuarios que fueron invitados por el usuario administrador también será eliminada.
   </div>
               </Section>
               <Section
                  title="Sección 14 - Información de contacto"
               >
                  <div>
                     Preguntas y reclamaciones acerca de los términos y condiciones del servicio deben ser enviadas a <span className="CompanyName">contact@pacientesano.com</span>
                  </div>
               </Section>

      </Layout>

   )
}



export default TermsAndConditions