import React from 'react'

const Footer = () => {
  const contactcss=`.cls-1{fill:#fff;opacity:0.8;}`
  return (
    <div><section className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center md:flex-row flex-col">
      <div className="flex mx-auto items-center flex-shrink-0 space-x-4">
        <a href='https://www.facebook.com/springfest.iitkgp' target="_blank" className="inline-flex py-3 px-3  hover:scale-[1.3] transition-all ease-in duration-500 ">
        <svg xmlns="http://www.w3.org/2000/svg" height={"45px"} width={"45px"} viewBox="0 0 35.38 35.38"><defs><style>{contactcss}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M35.38,17.69A17.69,17.69,0,1,0,14.93,35.17V22.8H10.44V17.69h4.49v-3.9c0-4.43,2.64-6.88,6.68-6.88a26.79,26.79,0,0,1,4,.35v4.35H23.34a2.55,2.55,0,0,0-2.88,2.76v3.32h4.9l-.78,5.11H20.46V35.17A17.7,17.7,0,0,0,35.38,17.69Z"/><path className="cls-1" d="M24.58,22.8l.78-5.11h-4.9V14.37a2.55,2.55,0,0,1,2.88-2.76h2.23V7.26a26.79,26.79,0,0,0-4-.35c-4,0-6.68,2.45-6.68,6.88v3.9H10.44V22.8h4.49V35.17a18.31,18.31,0,0,0,5.53,0V22.8Z"/></g></g></svg>
        </a>
        <a href="https://www.instagram.com/iitkgp.springfest/?hl=en" target="_blank" className="inline-flex py-3 px-3  hover:scale-[1.3] transition-all ease-in duration-500 ">
        <svg xmlns="http://www.w3.org/2000/svg" height={"45px"} width={"45px"}  viewBox="0 0 35.38 35.38"><defs><style>{contactcss}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M35.38,17.69A17.69,17.69,0,1,1,17.69,0,17.69,17.69,0,0,1,35.38,17.69Z"/><path className="cls-1" d="M23.18,11a1.22,1.22,0,1,0,1.22,1.21A1.21,1.21,0,0,0,23.18,11Z"/><path className="cls-1" d="M17.78,20.94a3.28,3.28,0,1,1,3.27-3.27,3.28,3.28,0,0,1-3.27,3.27Zm0-8.38a5.11,5.11,0,1,0,5.11,5.11,5.11,5.11,0,0,0-5.11-5.11Z"/><path className="cls-1" d="M13.55,9.25a4.28,4.28,0,0,0-4.28,4.28v8.28a4.28,4.28,0,0,0,4.28,4.28h8.28a4.28,4.28,0,0,0,4.28-4.28V13.53a4.28,4.28,0,0,0-4.28-4.28ZM21.83,28H13.55a6.24,6.24,0,0,1-6.23-6.23V13.53A6.24,6.24,0,0,1,13.55,7.3h8.28a6.23,6.23,0,0,1,6.23,6.23v8.28A6.24,6.24,0,0,1,21.83,28Z"/></g></g></svg>        </a>
        <a target="_blank" href="https://www.linkedin.com/in/sfiitkgp/" className="inline-flex py-3 px-3 hover:scale-[1.3] transition-all ease-in duration-500 ">
        <svg xmlns="http://www.w3.org/2000/svg" height={"45px"} width={"45px"} viewBox="0 0 65.96 65.96"><defs><style>{contactcss}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_6" data-name="Layer 6"><circle className="cls-1" cx="33.23" cy="32.68" r="31.55"/><path d="M33,0A33,33,0,1,0,66,33,33,33,0,0,0,33,0Zm-10,47.32H17.21V25.81h5.73ZM20.07,21.51a2.87,2.87,0,1,1,2.87-2.87A2.86,2.86,0,0,1,20.07,21.51ZM50.19,47.32H44.45V36.56a5,5,0,0,0-10,0V47.32H28.68V25.81h5.73v2.6a9.32,9.32,0,0,1,15.78,6.72Z"/></g></g></svg>
        </a>
        <a target="_blank" href="https://twitter.com/springfest_kgp?lang=en" className=" inline-flex py-3 px-3 hover:scale-[1.3] transition-all ease-in duration-500 ">
        <svg xmlns="http://www.w3.org/2000/svg" height={"45px"} width={"45px"}  viewBox="0 0 35.38 35.38"><defs><style>{contactcss}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M35.38,17.69A17.69,17.69,0,1,1,17.69,0,17.69,17.69,0,0,1,35.38,17.69Z"/><path className="cls-1" d="M27.47,11.63a8.36,8.36,0,0,1-1.95.56c.31-.06.77-.62.95-.85a3.46,3.46,0,0,0,.65-1.19.08.08,0,0,0,0-.1.14.14,0,0,0-.11,0A10,10,0,0,1,24.7,11a.15.15,0,0,1-.16,0l-.2-.2A4.18,4.18,0,0,0,23.22,10a4,4,0,0,0-1.72-.28,4.19,4.19,0,0,0-1.63.46,4.32,4.32,0,0,0-1.32,1.08,3.94,3.94,0,0,0-.82,3.23c0,.1,0,.11-.08.1a12.35,12.35,0,0,1-7.95-4c-.1-.11-.15-.11-.22,0a4,4,0,0,0,.69,4.76,4.91,4.91,0,0,0,.48.43,4.07,4.07,0,0,1-1.53-.43C9,15.26,9,15.3,9,15.4a2.48,2.48,0,0,0,0,.46,4.08,4.08,0,0,0,2.51,3.25,3,3,0,0,0,.51.15,4.43,4.43,0,0,1-1.51,0c-.1,0-.15,0-.1.14a4.21,4.21,0,0,0,3.16,2.64c.14,0,.28,0,.43.06,0,0,0,0,0,0a5,5,0,0,1-2.16,1.14,7.63,7.63,0,0,1-3.28.42c-.17,0-.21,0-.26,0s0,.07.05.12a6.85,6.85,0,0,0,.69.4,10.13,10.13,0,0,0,2.19.88,11.66,11.66,0,0,0,11.33-2.65,11.9,11.9,0,0,0,3.14-8.67c0-.13.14-.2.23-.26A7.59,7.59,0,0,0,27.44,12a.49.49,0,0,0,.11-.3v0c0-.05,0,0-.08,0Z"/></g></g></svg>        </a>
      </div>
    </div>
  </section></div>
  )
}

export default Footer