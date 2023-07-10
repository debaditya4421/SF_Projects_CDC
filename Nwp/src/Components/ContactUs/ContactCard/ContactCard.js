import React from "react";
const ContactCard = (props) => {
  const contactcss = `.cls-1{fill:#fff;opacity:0.8;}`;
  return (
    <div className="w-3/4 xl:w-1/5 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-8 xl:max-w-1/2 lg:w-2/5 m-auto">
      <div className="rounded overflow-hidden shadow-md bg-black/50">
        <div className="absolute -mt-20 w-full flex justify-center">
          <div className="h-32 w-32">
            <img
              src={props.img.src}
              className="rounded-full object-cover h-full w-full shadow-md"
            />
          </div>
        </div>
        <div className="px-6 mt-16">
          <div className="font-bold text-3xl text-center pb-1">
            {props.name}
            <br></br>
            {props.lastname}
          </div>
          <div>
            <a
              className=""
              href={`https://api.whatsapp.com/send/?phone=91${props.number}&amp;text&amp;type=phone_number&amp;app  target="_blank"
              rel="noopener noreferrer"_absent=0`}
            >
              <div className=" h-[20px] w-[20px] relative inline-block">
                <div className="whatsapp-back top-1"></div>
                <div className="inline z-30 relative left-0 top-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={"20px"}
                    width={"20px"}
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.002 0h-.004C3.587 0 0 3.588 0 8a7.94 7.94 0 0 0 1.523 4.689l-.997 2.972 3.075-.983A7.93 7.93 0 0 0 8.002 16C12.413 16 16 12.411 16 8s-3.587-8-7.998-8zm4.655 11.297c-.193.545-.959.997-1.57 1.129-.418.089-.964.16-2.802-.602-2.351-.974-3.865-3.363-3.983-3.518-.113-.155-.95-1.265-.95-2.413s.583-1.707.818-1.947c.193-.197.512-.287.818-.287.099 0 .188.005.268.009.235.01.353.024.508.395.193.465.663 1.613.719 1.731.057.118.114.278.034.433-.075.16-.141.231-.259.367-.118.136-.23.24-.348.386-.108.127-.23.263-.094.498.136.23.606.997 1.298 1.613.893.795 1.617 1.049 1.876 1.157.193.08.423.061.564-.089.179-.193.4-.513.625-.828.16-.226.362-.254.574-.174.216.075 1.359.64 1.594.757.235.118.39.174.447.273.056.099.056.564-.137 1.11z" />
                  </svg>
                </div>
              </div>
            </a>
            <p className="text-center pt-3 px-1  text-slate-300 inline-block font-semibold text-xl">
              <a className="font-sans" href={`tel:+91 ${props.number}`}>
                {props.number}
              </a>
            </p>
          </div>
          <div className="w-full flex justify-center pt-5 pb-5">
            <a className="mx-2 sm:mx-2" href={props.linkedin}  target="_blank"
              rel="noopener noreferrer">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={"30px"}
                  width={"30px"}
                  viewBox="0 0 65.96 65.96"
                >
                  <defs>
                    <style>{contactcss}</style>
                  </defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_6" data-name="Layer 6">
                      <circle
                        className="cls-1"
                        cx="33.23"
                        cy="32.68"
                        r="31.55"
                      />
                      <path d="M33,0A33,33,0,1,0,66,33,33,33,0,0,0,33,0Zm-10,47.32H17.21V25.81h5.73ZM20.07,21.51a2.87,2.87,0,1,1,2.87-2.87A2.86,2.86,0,0,1,20.07,21.51ZM50.19,47.32H44.45V36.56a5,5,0,0,0-10,0V47.32H28.68V25.81h5.73v2.6a9.32,9.32,0,0,1,15.78,6.72Z" />
                    </g>
                  </g>
                </svg>
              </div>
            </a>
            <a className="mx-2 sm:mx-2" href={props.mail}  target="_blank"
              rel="noopener noreferrer">
              <div>
                <img
                  height={"30px"}
                  width={"30px"}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACRklEQVRIibWWvW8TQRDFf+e7KkWKSBTYETE6y/K/ggCDLLk0kv8Ah8JF0vmoYqeCDgtEQUnkAhNEZSlNKss9iq0IBStFksbEihxh51HcXTh/xB8JPGmLnZ17b2b2dnYNpuMB8Ax4DESBVc/eBn4Au8Bn4OcMnjFEgDLQBzRjDIBPXgBz4TlwPgfx6PgFJGeRv/QiWpQ8mM36tMjvQh4UGctk9ZZlmVaucFDgg78Yi8XUarW0KFqtlmKxWFDkHYCF+yu+8JXS6TS2bVMqlW4q5URsbGyQTqfZ2tryTVnglYVbe9O3Xl1dARAOh8nn85yenk4lXllZYXt7GwDDMIJLJu4Z4lsgLZmmqVwup06no7OzM2WzWRmGMVZnwzCUyWR0cnKibrerfD4vy7JG/b4CNING27ZlmqYikYgqlYokaW9vT4lE4tonHo+rVqtJkqrVqtbW1hQKhRSNRkcFvsPI3+M4jur1+vU8mUzq6OhIvV5PjuOoUCio1+up3W4rlUpd++3v78txnFGB84kCkoYcl5aWVCwW1e/3NRgMVC6Xtby8POQjaZJAxwKOgfi0jby4uGBzc5OdnR0AGo3G1I0P4NgCDmcJ+FiA2MdhCG+n/xN2Ldx+/hrvLFxeXgLuwVkU/rce+sAXf/KeQKtoNpsLt4qDgwPZth3c4LdBtQhug/pXza4D3B/N8BHz3WDztOunN5VxnbtfOLmbyH0kb1muDvBkFrmPe8Ab4PecUX9kQs0BjEnGAFb5+2x5yPCz5RD3DFW9+UT8AR/kASX3aksmAAAAAElFTkSuQmCC"
                />
              </div>
            </a>
            <a className="mx-2 sm:mx-2" href={props.facebook} target="_blank"
              rel="noopener noreferrer">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={"30px"}
                  width={"30px"}
                  viewBox="0 0 35.38 35.38"
                >
                  <defs>
                    <style>{contactcss}</style>
                  </defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path d="M35.38,17.69A17.69,17.69,0,1,0,14.93,35.17V22.8H10.44V17.69h4.49v-3.9c0-4.43,2.64-6.88,6.68-6.88a26.79,26.79,0,0,1,4,.35v4.35H23.34a2.55,2.55,0,0,0-2.88,2.76v3.32h4.9l-.78,5.11H20.46V35.17A17.7,17.7,0,0,0,35.38,17.69Z" />
                      <path
                        className="cls-1"
                        d="M24.58,22.8l.78-5.11h-4.9V14.37a2.55,2.55,0,0,1,2.88-2.76h2.23V7.26a26.79,26.79,0,0,0-4-.35c-4,0-6.68,2.45-6.68,6.88v3.9H10.44V22.8h4.49V35.17a18.31,18.31,0,0,0,5.53,0V22.8Z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
