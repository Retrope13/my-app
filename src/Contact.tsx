import './Contact.css';
import linkedIn from './assets/imgs/LinkedIn.png';
import phone from './assets/imgs/Phone.png';
import github from './assets/imgs/github.png';
import email from './assets/imgs/Contact_Icon.png';
import download from './assets/imgs/Download.png';
import {motion, useCycle} from 'framer-motion';
import { useRef} from 'react';
import { useDimensions} from "./assets/Components/use-dimensions";
import {Navigation} from './assets/Components/Navigation';
import { MenuToggle } from './assets/Components/MenuToggle';
import styled from 'styled-components';
import React from 'react';



export const TextDiv = styled.div`
  border: .15vw solid #FFFFFF;
  border-radius: 2vw;
  height: 15vh;
  background-color: #1b2636;
  justify-content: center;
  align-items: center;
  width: 60vw;
  padding-left: 1vw;
  margin-left: 27vw;
  margin-bottom: 3vh;
`

const Head = styled.h1`
  color: #FFFFFF;
  margin-top: 0vh;
  font-family: Bavista;
  font-size: 10vh;
  background-color: #00000000;
  border-radius: 5px;
  height: auto;
  margin-left: 15vw;
  `

const Intro = styled.h2`
  color: #fff;
  margin: 8px 0;
  margin-top: 1vh;
  font-family: "Alba";
  font-size: 3.2vh;
  margin-left: 15vw;
`

const ContactText = styled.h2`
  color: #fff;
  margin-top: 1vh;
  font-family: "Alba";
  font-size: 3.2vh;
  display: inline-flex;
  align-items: 'center;
  vertical-align: middle;
  justify-content: left;
  white-space: wrap;
`

const sidebar ={
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transitions: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

function Contact() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const height = useDimensions(containerRef).current.height;

  return (
    <div className="App">
      <title>Contact Me</title>
      <body>
        <div className='top'>
          <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          >
            <motion.div className="background" variants={sidebar}/>
              {/*This preserves the animation while also preventing users from clicking on links when the nav is closed*/}
              <div style={{pointerEvents: isOpen ? 'all' : 'none'}}> 
              <Navigation/>
              </div>
            <MenuToggle toggle={isOpen} onClick={toggleOpen}/>
          </motion.nav>
          </div>

          <div className='contactContent'>
            <Head>Connect with me</Head>
            <Intro>Here are a few ways to get in touch with me!</Intro>

            <TextDiv className='PhoneDiv' style={{width: '30vw', marginTop:'7vh', marginLeft: '15vw', alignItems: 'center', display: 'inline-flex', justifyContent: 'flex-start'}}>
              <img className='icon' src={phone} style={{height: '8vh', width: '4vw', marginRight:'3vw', border: '0px'}} alt="An all white icon of a handheld phone"/>
              <ContactText>(409)-504-8250</ContactText>
            </TextDiv>

            <a rel='noreferrer' href='mailto:sammckay31@gmail.com?subject=In%20Regards%20To%20Your%20Website'>
            <TextDiv style={{width: '30vw', marginLeft: '2vw', marginTop:'7vh', alignItems: 'center', display: 'inline-flex', justifyContent: 'flex-start'}}>
            <img className='icon' src={email} style={{height: '8vh', width: '5vw', marginRight:'1vw'}} alt="An all white, thin lined icon of an envelope rounded on the sides"/>
            <ContactText>sammckay31@gmail.com</ContactText>
            </TextDiv>
            </a>

            <a rel='noreferrer' href='https://github.com/Retrope13' target='_blank'>
            <TextDiv style={{width: '30vw', marginLeft: '15vw', marginTop: '7vh', alignItems: 'center', display: 'inline-flex', justifyContent: 'flex-start'}}>
            <img className='icon' src={github} style={{marginRight:'5vw'}} alt="An all white icon version of the GitHub logo"/>
            <ContactText>Retrope13</ContactText>
            </TextDiv>
            </a>

            <a rel='noreferrer' href='https://www.linkedin.com/in/sam-mckay13/' target='_blank'>
            <TextDiv style={{width: '30vw', marginLeft: '2vw', marginTop: '7vh', alignItems: 'center', display: 'inline-flex', justifyContent: 'flex-start'}}>
            <img className='icon' src={linkedIn} style={{marginRight:'4vw'}} alt="An all white icon version of the LinkedIn logo"/>
            <ContactText>Sam-mckay13</ContactText>
            </TextDiv>
            </a>

            <a href="./assets/Sam-McKay-Resume.pdf" download={true}>
            <TextDiv style={{width: '30vw', marginLeft: '30vw', marginTop: '6vh', alignItems: 'center', display: 'inline-flex', justifyContent: 'flex-start'}}>
            <img className='icon' src={download} style={{marginRight:'4vw'}} alt="An all white icon version of the LinkedIn logo"/>
            <ContactText style={{marginLeft: '2.2vw'}}>Resume</ContactText>
            </TextDiv>
            </a>
            </div>
      </body>
    </div>
  );
}

export default Contact;
