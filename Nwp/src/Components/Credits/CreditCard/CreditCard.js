import React from "react";
const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};
const CreditCard = (props) => {
  const contactcss = `.cls-1{fill:#fff;opacity:0.8;}`;
  return (
    <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
      <div className="h-full flex items-center p-4 rounded-lg bg-black/50">
        <div className="flex-grow">
          <h2 className="text-white title-font font-bold text-base">
            {props.name}
          </h2>
          <div className="flex justify-center items-center">
            <a href={props.github} target="_blank"
              rel="noopener noreferrer" className=" mx-1  h-7 w-7 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.1 39.1">
                <defs>
                  <style>{contactcss}</style>
                </defs>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_6" data-name="Layer 6">
                    <circle className="cls-1" cx="19.8" cy="19.08" r="17.41" />
                    <path
                      className="cls-2"
                      d="M19.72,1.67a17.77,17.77,0,0,0-5.61,34.62c.89.16,1.21-.39,1.21-.86s0-1.54,0-3c-4.94,1.07-6-2.38-6-2.38a4.69,4.69,0,0,0-2-2.6c-1.61-1.1.12-1.08.12-1.08a3.72,3.72,0,0,1,2.73,1.83,3.78,3.78,0,0,0,5.16,1.48,3.88,3.88,0,0,1,1.13-2.38c-3.94-.45-8.09-2-8.09-8.78a6.87,6.87,0,0,1,1.83-4.77A6.42,6.42,0,0,1,10.39,9s1.5-.47,4.89,1.82a17,17,0,0,1,8.89,0C27.56,8.56,29.05,9,29.05,9a6.39,6.39,0,0,1,.18,4.7,6.87,6.87,0,0,1,1.83,4.77c0,6.83-4.16,8.33-8.11,8.77a4.27,4.27,0,0,1,1.2,3.29c0,2.37,0,4.29,0,4.87s.32,1,1.22.85A17.76,17.76,0,0,0,19.72,1.67Z"
                    />
                    <path d="M19.55,0A19.55,19.55,0,1,0,39.1,19.55,19.55,19.55,0,0,0,19.55,0Zm0,36.62A17.38,17.38,0,1,1,36.93,19.24,17.39,17.39,0,0,1,19.55,36.62Z" />
                  </g>
                </g>
              </svg>
            </a>
            <a
              href={props.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className=" mx-1 h-7 w-7"
            >
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
                    <circle className="cls-1" cx="33.23" cy="32.68" r="31.55" />
                    <path d="M33,0A33,33,0,1,0,66,33,33,33,0,0,0,33,0Zm-10,47.32H17.21V25.81h5.73ZM20.07,21.51a2.87,2.87,0,1,1,2.87-2.87A2.86,2.86,0,0,1,20.07,21.51ZM50.19,47.32H44.45V36.56a5,5,0,0,0-10,0V47.32H28.68V25.81h5.73v2.6a9.32,9.32,0,0,1,15.78,6.72Z" />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
