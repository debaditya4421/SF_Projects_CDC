import React from "react";
import Credits from "../Credits/Credits";
import Footer from "../Footer/Footer";
import ContactCard from "./ContactCard/ContactCard";
import "./contact.css";
import BackButton from "../BackButton/BackButton";
const ContactUs = (props) => {
  const conctactstyle=`
  .contact-background{
    background: url(${props.contactbackground.src}) no-repeat; 
    background-attachment: fixed;
    background-size: 100% 100%;
    font-family: 'Cinzel Decorative', cursive;
}
  `
  return (
    <div className="contact-background text-white p-1  text-center ">
      <style>{conctactstyle}</style>
      <div>
        <BackButton togglebackclick={props.toggleBackClickPgeTurn}/>
        <div className="container flex justify-center mx-auto mt-[5rem]">
          <div>
            <h1 className="sm:text-5xl text-3xl  font-bold pb-6 mx-auto">
              Contact Team
            </h1>
          </div>
        </div>
        <div className="w-full px-10 pt-10">
          <div className="container mx-auto">
            <div className="lg:flex md:flex sm:flex items-center justify-center xl:justify-around flex-wrap md:justify-around sm:justify-around lg:justify-around p-1">
              
              
                <ContactCard
                  number={8766426877}
                  img={props.cimg4}
                  name={"Ajinkya"}
                  lastname={"Kulkarni"}
                  facebook={
                    "https://www.facebook.com/ajinkya.kulkarni.37819"
                  }
                  linkedin={
                    "https://www.linkedin.com/in/ajinkya-kulkarni-93b7501b9/"
                  }
                  mail={"mailto:arihantshukla.iitkgp@gmail.com"}
                />
                <ContactCard
                number={7782923389}
                img={props.cimg2}
                name={"Anurag"}
                lastname={"Raj"}
                facebook={"https://www.facebook.com/anurag.raj.94064"}
                linkedin={"https://www.linkedin.com/in/anuragraj111/"}
                mail={"mailto:anuragraj.iitkgp@gmail.com"}
              />
              <ContactCard
                number={9836367011}
                img={props.cimg3}
                name={"Arihant"}
                lastname={"Shukla"}
                facebook={
                  "https://www.facebook.com/profile.php?id=100072451752291"
                }
                linkedin={
                  "https://www.linkedin.com/in/arihant-shukla-50404b21b/"
                }
                mail={"mailto:arihantshukla.iitkgp@gmail.com"}
              /><ContactCard
              number={8387096388}
              img={props.cimg1}
              name={"Vinay"}
              lastname={"Bagra"}
              facebook={"https://www.facebook.com/vinay.bagra.737/"}
              linkedin={"https://www.linkedin.com/in/vinay-bagra-1615a821b"}
              mail={"mailto:vinaybagra@springfest.in"}
            />
            </div>
          </div>
        </div>
      </div>
      <Credits />
      <Footer />
    </div>
  );
};

export default ContactUs;
