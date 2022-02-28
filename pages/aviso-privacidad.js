import Layout from "../components/Layout"
import Section from '../components/Section'

const PrivacyNotify = (props) => {
   return (
      <Layout headerInverted={true}>
         <div className="CondicionesPage">
            <div className="PageTitle">Aviso de privacidad</div>

            <Section
            >
               <span className="CompanyName">Paciente Sano</span> respeta la privacidad del usuario por lo cual a continuación se muestra la información que se recolecta y lo que se hace con ella.
               </Section>
            <Section
               title="Información recolectada"
            >
               <div>
                  Cuando el usuario se registra en <span className="CompanyName">Paciente Sano</span> por medio de nuestros servicios web, provee información personal de manera voluntaria, la cual se almacena en una base de datos.
               </div>
               <div>
                  Además, el usuario podrá registrar información personal de terceros en <span className="CompanyName">Paciente Sano</span>, así como también información médica de los pacientes registrados.

               </div>

            </Section>
            <Section
               title="Uso de la información"
            >
               <span className="CompanyName">Paciente Sano</span> puede usar la información personal del usuario para brindarle un mejor servicio tales como el desarrollo de nuevas funcionalidades en función del comportamiento del usuario con respecto al uso del servicio.
            </Section>
            <Section
               title="Derecho de la información"
            >
               <div>
                  A <span className="CompanyName">Paciente Sano</span> le pertenece el almacenamiento de la información, las bases de datos y todos los derechos del servicio. Sin embargo, no reclamamos ningún derecho sobre la información. Todos los derechos de información le pertenecen al usuario.
               </div>

            </Section>
            <Section
               title="Seguridad"
            >
               <div>
                  <span className="CompanyName">Paciente Sano</span> usa métodos razonables de seguridad para proteger la información que reside en nuestros servidores. Sin embargo, ningún sistema de seguridad es impenetrable, debido a esto, no le podemos garantizar la seguridad de nuestros servidores. Es también posible que la información que usted nos provea pueda ser interceptada durante la transmisión de datos.
               </div>

               <div>
               Toda la información de pacientes almacenada en nuestros servidores se encuentra encriptada y es virtualmente imposible acceder a ella por métodos convencionales, sin embargo, <span className="CompanyName">Paciente Sano</span> no se hace responsable del acceso a dicha información por medio de nuestro servicio. Es responsabilidad del usuario restringir el acceso de esta información a las personas indicadas por el mismo y al buen uso de las llaves de acceso al servicio.
               </div>
            </Section>
            <Section
               title="Divulgación"
            >
               <div>
               No vendemos o proveemos información personal a otras compañías para el mercadeo de sus propios productos y servicios.
               </div>
            </Section>
            <Section
               title="Cambios a la política"
            >
               <div>
               Nos reservamos el derecho de modificar esta declaración de privacidad en cualquier momento, por lo que debes revisarla frecuentemente. Si hacemos algunos cambios a esta política, te notificaremos aquí o a través de nuestra página para que seas consciente de la información que recolectamos, cómo la usamos y bajo qué circunstancias, si hay algunas, decidimos divulgarla.
               </div>
            </Section>
           
            <Section
               title="Información de contacto."
            >
               <div>
               Preguntas y reclamaciones acerca del aviso de privacidad deben ser enviadas a  <span className="CompanyName">contact@pacientesano.com</span>
               </div>
            </Section>
         </div>
      </Layout>

   )
}

export default PrivacyNotify