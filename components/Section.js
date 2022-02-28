import React from 'react'


const Section = ({ title, children }) => {
   return <div className="Section">
      <h4>{title}</h4>
      <div>
         {children}
      </div>
   </div>
}

export default Section