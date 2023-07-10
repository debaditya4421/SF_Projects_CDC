import React from 'react'
import CreditCard from './CreditCard/CreditCard'
// import creditName from "./CreditName.json"
import creditNames from "./CreditNames.json"

const Credits = () => {
  return (
    <section className=" body-font">
  <div className="container px-5 pt-10 py-4 mx-auto">
    <div className="flex flex-col text-center w-full mb-10 text-bold">
      <h1 className="sm:text-5xl text-3xl title-font font-bold mb-4">CREDITS</h1>
    </div>
    <div className="flex flex-wrap items-center justify-center m-2">
      {
        creditNames.map(e=>{
          return(<CreditCard key={e.name} name={e.name} github={e.github} linkedin={e.linkedin}/>)
        })
      }
      
    </div>
  </div>
</section>
  )
}

export default Credits