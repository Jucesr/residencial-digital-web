import React, { useState } from 'react'
import { Element } from 'react-scroll'
// import 'isomorphic-fetch'
import {
   Icon,
   Message,
   Dimmer,
   Loader
} from 'semantic-ui-react'
// import isEmail from 'validator/lib/isEmail';


const Contact = ({ elementName }) => {

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const [error, setError] = useState(undefined);
   const [success, setSuccess] = useState(undefined);
   const [isSending, setIsSending] = useState(false);


   const onChangeName = e => {
      if (success)
         setSuccess(undefined)
      const val = e.target.value;
      setName(val)
   }
   const onChangeEmail = e => {
      if (success)
         setSuccess(undefined)
      const val = e.target.value;
      setEmail(val)
   }
   const onChangeMessage = e => {
      if (success)
         setSuccess(undefined)
      const val = e.target.value;
      setMessage(val)
   }

   const onSubmit = () => {
      if (success)
         setSuccess(undefined)
      if (name.length === 0) {
         return setError("Nombre no puede estar vacío.");
      }
      if (email.length === 0) {
         return setError("Email no puede estar vacío.");
      }
      // if (!isEmail(email)) {
      //    return setError("Email inválido")
      // }
      if (message.length === 0) {
         return setError("Mensaje no puede estar vacío.");
      }

      setError(undefined)
      setIsSending(true)

      // fetch('/api/contact', {
      //    method: 'POST',
      //    headers: {
      //       'Accept': 'application/json, text/plain, */*',
      //       'Content-Type': 'application/json'
      //    },
      //    body: JSON.stringify({
      //       name,
      //       email,
      //       message
      //    })
      // }).then((res) => {
      //    setIsSending(false)
      //    if (res.status === 200) {
      //       setName('')
      //       setEmail('')
      //       setMessage('')
      //       setSuccess('Se envió correctamente')
      //    }else{
      //       setIsSending(false)
      //       setError('Ha ocurrido un error. Intente más tarde')
      //    }
      // }).catch(e => {
      //    setIsSending(false)
      //    setError('Ha ocurrido un error. Intente más tarde')
      // })
   }

   const title = <div className="Body_title">
      Envianos un mensaje
   </div>
   return (
      <div className="Contact" style={{ textAlign: 'center', position: 'relative' }}>
         <Dimmer active={isSending} inverted>
            <Loader>Enviando mensaje</Loader>
         </Dimmer>
         {elementName ? <Element name={elementName}>
            {title}
         </Element> : title}
         <div className="Divider">
            <section >
               <div className="ContactForm">
                  <FormField name="name" value={name} onChange={onChangeName} label="Nombre" />
                  <FormField name="name" value={email} onChange={onChangeEmail} label="Correo electrónico" />
                  <FormField name="name" value={message} onChange={onChangeMessage} label="Mensaje" type="textarea" />
                  {error && <Message error style={{ textAlign: 'left' }}
                     content={error}
                  />}
                  {success && <Message success style={{ textAlign: 'left' }}
                     content={success}
                  />}
                  <button onClick={onSubmit} className="ContactFormButton Button_green">
                     Enviar
                  </button>
               </div>

            </section>
            <section >
               <div className="Social">
                  <div className="SocialTitle">
                  ¡Estamos activos en redes sociales!
                        </div>
                  <div className="SocialImages">
                     <a href="https://api.whatsapp.com/send?phone=526861779471" target="blank"><Icon className="SocialMediaLink" size="huge" name="whatsapp" /></a>
                     <a href="https://www.facebook.com/Residencial-Digital-110508651559025" target="blank"><Icon className="SocialMediaLink" size="huge" name="facebook" /></a>
                     {/* <a href="https://www.instagram.com/pacientesano/" target="blank"><Icon className="SocialMediaLink" size="huge" name="instagram" /></a> */}
                     {/* <a href="https://www.youtube.com/channel/UCaBzS-VAGdYiEM3dA2r_boA/" target="blank"> <Icon className="SocialMediaLink" size="huge" name="youtube" /></a> */}
                  </div>
               </div>
            </section>
         </div>
      </div>
   )
}


const FormField = ({ label, type = "input", ...rest }) => (
   <div className="FormField">
      <div>{label}</div>
      {type == 'input' ? <input {...rest} /> : <textarea {...rest} style={{ resize: 'none' }} />}
   </div>
)

export default Contact