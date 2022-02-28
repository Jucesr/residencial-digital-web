import React from 'react'

const Page = ({children, color = 'secondary'}) => {
   return (
      <div className={`Page ${color}-bg`}>
         <div className="PageWrapper">
            {children}
         </div>
      </div>
   )
}

export default Page