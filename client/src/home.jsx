import { useState,useRef ,useEffect, useContext} from "react"
import axios from "axios";
import GitHubLogo from "./svg/logos"
import { GmailLogo,LinkedInLogo,InstagramLogo } from "./svg/logos"
import  port from './port1.png';

import ctf1 from './cert/courctf-1.jpg'
import ctf2 from './cert/courCtf2.jpg'
import ctf3 from './cert/courctf3.jpg'

import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import { Toaster,toast } from "react-hot-toast";
const MainEl=()=>{
    return(
        <>
        <Gradi1 />
            <Toaster  position="top-center"   toastOptions={{
            className:' transparent_blue ',
            duration: 5000,
            style: {
            color: '#fff',
            },
}}
/>
            <Home />
            <About />
            <Tech />
            <Certif />
            <Projects />
            <ContactForm />
        <Gradi3 />
        </>
    )
}

const Home=()=>{
    const homeRef=useRef(null);
    let homevw=useInView(homeRef);
    const homeCtrl=useAnimation();

    useEffect(() => {
        if (homevw){
            homeCtrl.start("animate");
        }
        else{
            homeCtrl.start({opacity:0});
        }
    }, [homevw]);

    return (
    <div  id="home"  className=" h-[100vh] justify-center relative  flex items-center w-full  sm:h-[90vh] ">
       <div className="w-full px-[8%] flex flex-col relative sm:justify-center sm:items-center sm:px-2 "> 
            <motion.div
            
            variants={{
                initial: { opacity: 0, y: 100 },
                animate: { opacity: 1, y: 0 }
            }}
            initial="initial"
            animate={homeCtrl}
            transition={{ duration: 0.3, delay: 0.3 }}

            className="md:flex sm:mx-auto md:flex-col md:justify-center md:w-full min-w-[300px]">
                <h1 className="text-8xl md:text-7xl sm:text-[10vw] mb-1 cursor-pointer ">SAKTHI PRIYAN</h1>
                <h2 ref={homeRef}  className="text-[20px] font-semibold mb-2 text-slate-300 ">A Fullstack Developer</h2>
                <h2 className="text-gray-500 text-[18px] font-semibold sm:hidden">BE.Computer Science And Engineering</h2>
                <a href="#con">
                <button className="border-[1.5px] border-slate-800 hover:bg-teal-300/10 hover:text-teal-300 sm:mt-2 mt-4 w-32 bg-slate-800 opacity-[1.4] rounded-[10px] px-2 py-1 ">Contact Me</button>
                </a>
                <div className="flex space-x-5 mt-5">
                    <div className="insta hover:opacity-[1] opacity-[0.7] cursor-pointer">
                      <a href="https://www.instagram.com/_sakthi__29_?igsh=MTdybWxjbzN2bDB0cQ==" target="_blank" >
                            <InstagramLogo />
                        </a>  
                    </div>

                    <div className="link hover:opacity-[1] opacity-[0.7] cursor-pointer">
                        <a href="https://leetcode.com/u/Sakthi_V/" target="_blank">
                            <LinkedInLogo />
                        </a>
                    </div>

                    <div className="mail font-bold  hover:opacity-[1] opacity-[0.7] cursor-pointer">
                        <a href="mailto:sakthipriyan417@gmail.com" target="_blank"> 
                        <GmailLogo />
                        </a>
                    </div>

                    <div className="git hover:opacity-[1] opacity-[0.7] cursor-pointer">
                        <a href="https://github.com/SAKTHIPRIYAN1" target="_blank">
                        <GitHubLogo />
                        </a>
                    </div>
                    
                </div>
            </motion.div>

            <div className=" fixed -z-50 top-32  sm:top-10 sm:fixed sm:left-0 right-1 ">
                <Gradi2 />
            </div>
       </div>

        <div className=" animate-bounce items-center sm:hidden mt-2  absolute bottom-[11%] h-12 w-12 transparent_blue rounded-full flex justify-center ">

        <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-200 hover:text-teal-300 cursor-pointer"
        >
                    <path
                    fill="currentColor"
                    d="M12 16.5l-6-6h12l-6 6z"
                    />
        </svg>


                
        </div>
     </div>
    )
}

const About=()=>{

    const { ref: AboutRef, inView: Aboutvw } = useInView({
        threshold: 0, // Trigger as soon as any part of the element is visible
        rootMargin: '-30% 0px', // Offset to trigger when the element is in the center
    });

    const AboutCtrl=useAnimation();

    useEffect(() => {
        if (Aboutvw) {
            AboutCtrl.start({ opacity: 1 });
           
        } else {
            AboutCtrl.start({ opacity: 0 });
        }
    }, [Aboutvw]);

    return(
        <motion.div   

        variants={{
            initial: { opacity: 0, },
            animate: { opacity: 1, }
        }}
        initial="initial"
        animate={AboutCtrl}
        transition={{ duration: 0.3, delay: 0.2 }}
        id="about"
        >
        
        <div className=" sm:mt-[65px] mt-5 flex  w-full   " >
            <div className="paddingDiv">
                <div className="LargeCon">
                    <div className="ActualCon sm:flex-col transparent_tone2 sm:items-center  lg:space-x-5 sm:space-y-5 ">
                            <div className="text-fntclr w-full lg:text-[30px] sm:text-[22px] text-[25px] leading-[1.2] ">
                               <h1> Hi I'm Sakthipriyan , 
                                a UnderGraduate from the College of Engineering Guindy.
                                </h1>
                            </div>
                            <div className="text-fntclr w-full  lg:text-[18px] md:text-[17px] text-[15px] leading-[1.3]">
                                <h1 ref={AboutRef} >
                                    I Love Crafting and Cracking things Up.
                                    And I just love coding; the thrill of solving  problems and building  projects keeps me constantly engaged and excited.
                                </h1>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
    )
}

const Tech = () => {

    const { ref: AboutRef, inView: Aboutvw } = useInView({
        threshold: 0, // Trigger as soon as any part of the element is visible
        rootMargin: '-30% 0px', // Offset to trigger when the element is in the center
    });
    const AboutCtrl = useAnimation();

    useEffect(() => {
        if (Aboutvw) {
            AboutCtrl.start({ opacity: 1 });
        } else {
            AboutCtrl.start({ opacity: 0 });
        }
    }, [Aboutvw]);

    const [chan, setchan] = useState(0);
    const techStack = [
        {
            tech: 'Front End',
            opt: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
        },
        {
            tech: 'Back End',
            opt: ['Node.js', 'Express.js', 'SQL', 'Mongo DB'],
        },
        {
            tech: 'Programming',
            opt: ['C', 'C++', 'Bash', 'Python'],
        },
        {
            tech: 'Others',
            opt: ['Linux', 'Git', 'GitHub', 'PostMan'],
        },
    ];

    const decre = () => {
        let tmp = chan + 1;
        if (tmp >= techStack.length) tmp = 0;
        setchan(tmp);
    };

    const incre = () => {
        let tmp = chan - 1;
        if (tmp < 0) tmp = techStack.length - 1;
        setchan(tmp);
    };

    return (
        <motion.div
            ref={AboutRef}
            variants={{
                initial: { opacity: 0 },
                animate: { opacity: 1 },
            }}
            initial="initial"
            animate={AboutCtrl}
            transition={{ duration: 0.3, delay: 0.2 }}
            id="tech"
            className="relative"
        >
            <div className="paddingDiv transition-all">
                <div className="LargeCon">
                    <div className="ActualCon">
                        <div className="h-full flex sm:space-x-1 space-x-5 w-full items-center">
                            <div className="w-full font-bold text-[25px] sm:text-[22px] h-full flex flex-col justify-center items-center">
                                <h1>{techStack[chan].tech}</h1>
                                <div className="flex space-x-4 mt-2">
                                    <div
                                        onClick={incre}
                                        className="sm:h-10 sm:w-10 active:scale-75 transition-transform rotate-90 hover:text-teal-300 bg-slate-900 cursor-pointer items-center h-12 w-12 transparent_blue rounded-full flex justify-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-8 h-8 cursor-pointer"
                                        >
                                            <path fill="currentColor" d="M12 16.5l-6-6h12l-6 6z" />
                                        </svg>
                                    </div>
                                    <div
                                        onClick={decre}
                                        className="sm:h-10 sm:w-10 active:scale-75 transition-transform -rotate-90 hover:text-teal-300 bg-slate-900 cursor-pointer items-center h-12 w-12 transparent_blue rounded-full flex justify-center"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="w-8 h-8 cursor-pointer"
                                        >
                                            <path fill="currentColor" d="M12 16.5l-6-6h12l-6 6z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full text-[20px] sm:text-[14px] space-y-2 h-full flex flex-col">
                                {techStack[chan].opt.map((el, ind) => (
                                    <Lang nam={el} key={ind} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};



const Lang=({nam})=>{
    return (
        <div className=" group bg-[rgb(16,23,41)] flex items-center hover:text-slate-400  hover:-translate-x-4  transition-all cursor-pointer pl-8 space-x-5  py-1 rounded-[3px] ">
            <div className=" group-hover:text-teal-300 border-[1.5px] h-max  rounded-[7px] border-slate-300 inline-block">
            <svg width="25" height="25" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_359_2361" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="9" y="9" width="24" height="24">
                    <rect x="9" y="9" width="24" height="24" fill="currentColor"></rect>
                    </mask>
                    <g mask="url(#mask0_359_2361)">
                    <path d="M15.4 27L14 25.6L23.6 16H15V14H27V26H25V17.4L15.4 27Z" fill="currentColor"></path>
                    </g>
            </svg>
            </div>

            <h1>{nam}</h1>
        </div>
    )
}

const Certif=()=>{
    const { ref: AboutRef, inView: Aboutvw } = useInView({
        threshold: 0, // Trigger as soon as any part of the element is visible
        rootMargin: '-40% 0px', // Offset to trigger when the element is in the center
    });
    const AboutCtrl = useAnimation();

    useEffect(() => {
        if (Aboutvw) {
            AboutCtrl.start({ opacity: 1 });
        } else {
            AboutCtrl.start({ opacity: 0 });
        }
    }, [Aboutvw]);


    const certificates=[
        {
            topic:"Python",
            ph:ctf1
        },
        {
            topic:"Python with Os",
            ph:ctf2
        },
        {
            topic:"Git and Git Hub",
            ph:ctf3
        }

    ]

    return(
        <motion.div

        variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
        }}
        initial="initial"
        animate={AboutCtrl}
        transition={{ duration: 0.3, delay: 0.2 }}

        id="cert" ref={AboutRef} className=" relative min-w-[300px]  ">
            <div className="   paddingDiv transition-all">
                <div className="LargeCon">
                    <div className="ActualCon ">
                            <div className="h-full    w-full flex space-y-3 justify-center flex-col items-center ">
                                <h1 className="lg:text-[30px]  sticky top-2   text-[30px] sm:text-[22px] " >CERTIFICATES</h1>
                                <div  className="w-full  h-full flex flex-col space-y-14 items-center  ">
                                            {
                                                certificates.map((el,ind)=>{
                                                    return <CerComp pro={el} key={ind }/>
                                                })
                                            }
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const CerComp=({pro})=>{
    // console.log(pro);

    

   
    let im=pro.ph;
    let title=pro.topic
    const handleClick = () => {
        window.open(im, '_blank');
    };

    return(
        <div 

        

        onClick={handleClick}  className="  hover:text-teal-300 sticky top-20  group shadow-lg cursor-pointer shadow-slate-700 flex md:min-w-[400px] bg-[rgba(45,58,83,0.34)]  border-[0.5px] rounded-[8px] border-slate-600  sm:min-w-[230px]  w-[62%] flex-col  space-y-0 lg:mx-auto sm:mx-2" >
            <div className="bg-slate-900 rounded-t-[8px]  sm:h-10 md:h-11 h-12 flex justify-between items-center px-4 ">
                <h1 >
                    {title}
                </h1>

            <div className="border-[1.5px] h-max group-hover:text-black group-hover:border-black group-hover:bg-white rounded-[7px] border-slate-300 inline-block">
                    <svg width="25" height="25" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_359_2361" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="9" y="9" width="24" height="24">
                            <rect x="9" y="9" width="24" height="24" fill="currentColor"></rect>
                            </mask>
                            <g mask="url(#mask0_359_2361)">
                            <path d="M15.4 27L14 25.6L23.6 16H15V14H27V26H25V17.4L15.4 27Z" fill="currentColor"></path>
                            </g>
                    </svg>
            </div>

            </div>
            <div className=" relative w-full h-full transparent_tone">
            <div className=" w-full   shadow-md sm:w-full md:w-full lg:w-full sm:h-32 md:h-52 lg:h-64"></div>
                <img className=" -z-10 absolute rounded-b-[8px] top-0 left-0 bottom-0 right-0   h-full  w-full aspect-video  shadow-lg" src={im} alt="" />
            </div>
        </div>
    )
}

const Projects=()=>{
    const { ref: AboutRef, inView: Aboutvw } = useInView({
        threshold: 0, // Trigger as soon as any part of the element is visible
        rootMargin: '-40% 0px', // Offset to trigger when the element is in the center
    });
    const AboutCtrl = useAnimation();

    useEffect(() => {
        if (Aboutvw) {
            AboutCtrl.start({ opacity: 1 });
        } else {
            AboutCtrl.start({ opacity: 0 });
        }
    }, [Aboutvw]);


    const [chan,setchan]=useState(0);
        const projectDet=[
            {
                name:"College Portal",
                des:'A comprehensive college management system integrating admin, alumni,  portals for seamless operations and connectivity.',
                tym:'College 2nd year',
                tools:'React, Express.js, PostgreSQL',
                lnk:""
            },
            {
                name:"Tic Tac Toe",
                des:'A strategic Tic Tac Toe game implemented with the Minimax algorithm for unbeatable AI gameplay.',
                tym:"1st sem",
                tools:'HTML, CSS, JS',
                lnk:"https://sakthipriyan1.github.io/tic-tac-toe/"
            },
            {
                name:"To Do List",
                des:'A simple to-do list created using JavaScript, HTML, and CSS allows users to organize and manage tasks effectively.',
                tym:'1st sem',
                tools:'HTML, CSS, JS',
                lnk:"https://sakthipriyan1.github.io/To-Do-List/"

            },
        ]
        const incre=()=>{
            let tmp=chan+1;
            if(tmp>=projectDet.length)
                tmp=0;
            setchan(tmp);
        }
    
        const decre=()=>{
            let tmp=chan-1;
            if(tmp<0)
                tmp=projectDet.length-1;
            setchan(tmp);
        }

        return(
        <motion.div
        
        variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
        }}
        initial="initial"
        animate={AboutCtrl}
        transition={{ duration: 0.3, delay: 0.2 }}

        ref={AboutRef}

        id="pro">
            <div className=" min-w-[300px] paddingDiv transition-all">
                <div className="LargeCon"> 
                    <h1 className="text-[30px] mb-3 ">Projects</h1>
                        <div className="w-full h-full blmd:hidden sm:hidden flex space-x-2">
                            {
                                projectDet.map((el,ind)=>{
                                    return <ProjComp det={el} key={ind} />
                                })    
                            }
                        </div> 
                        <div className="blmd:visible sm:visible sm:opacity-[1] sm:z-0 sm:flex blmd:flex items-center space-x-2 justify-center blmd:opacity-[1] blmd:z-0 opacity-[0] hidden invisible -z-10  ">
                        <div onClick={incre} className=" sm:h-10 sm:w-10 active:scale-75 transition-transform rotate-90  hover:text-teal-300 bg-teal-300/10  cursor-pointer items-center      h-12 w-12 transparent_blue rounded-full flex justify-center ">
                                    <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                className="w-8 h-8  cursor-pointer"
                                    >
                                                <path
                                                fill="currentColor"
                                                d="M12 16.5l-6-6h12l-6 6z"
                                                />
                                    </svg>
                        </div> 
                                
                                <ProjComp det={projectDet[chan]} />
                             <div onClick={decre} className=" sm:h-10 sm:w-10 active:scale-75 transition-transform sm:z-30 -rotate-90 hover:text-teal-300  bg-teal-300/10 cursor-pointer  items-center      h-12 w-12 transparent_blue rounded-full flex justify-center ">
                                    <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                className="w-8 h-8 cursor-pointer"
                                    >
                                                <path
                                                fill="currentColor"
                                                d="M12 16.5l-6-6h12l-6 6z"
                                                />
                                    </svg>
                                </div>
                        </div>  

                        {/* <div className=" flex w-full justify-center space-x-2 py-2">
                        <div className="h-[6px] w-[6px] rounded-full bg-white/70 hover:bg-white cursor-pointer hover:h-[8px] hover:w-[8px] " ></div>
                        <div className="h-[6px] w-[6px] rounded-full bg-white/70 hover:bg-white cursor-pointer hover:h-[8px] hover:w-[8px] " ></div>
                        <div className="h-[6px] w-[6px] rounded-full bg-white/70 hover:bg-white cursor-pointer hover:h-[8px] hover:w-[8px] " ></div>
                        </div> */}
                </div>
            </div>
        </motion.div>
        )
}

const ProjComp=({det})=>{
    let name=det.name
    let tools=det.tools
    let tym=det.tym
    let des=det.des
    let PreLink=det.lnk

    return(
        <div className=" sm:min-w-[200px]  sm:h-[260px] sm:text-[14px] md:text-[14px] blmd:w-[50%] sm:w-[50%] sm:mx-auto blmd:mx-auto blmd:text-[17px]   relative  h-[280px] md:h-[310px] flex flex-col hover:shadow-sm hover:shadow-slate-700 cursor-pointer group   w-1/3 bg-[rgba(45,58,83,0.34)] px-4 py-3 rounded-lg"> 
            <div className="flex items-center justify-center font-bold text-teal-300 "> 
                <h1>{name}</h1>
            </div>
            <div className=" sm:my-1 my-2 grid grid-flow-row grid-cols-1 gap-2  sm:gap-0 h-full w-full ">
                <div className=" flex space-x-3 ">
                    <h1 className="font-bold text-teal-00">Tools:</h1>
                    <h1>{tools}</h1>
                </div>
                <div className="absolute top-24 sm:space-y-1 space-y-2">

                
                    <div className="  flex leading-tight ">
                        <h1>    {des}
                        </h1>
                    </div>
                    <div className=" flex space-x-3 ">
                        <h1 className="font-bold text-teal-0">Period:</h1>    
                        <h1>{tym}</h1>
                    </div>   
                </div>            
            </div>
            <a href={PreLink} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                 <p className=" italic group-hover:font-bold "  target="_blank">Preview</p>
            </div>
            </a>
        </div>
    )
}


const ContactForm = () => {
    const { ref: AboutRef, inView: Aboutvw } = useInView({
        threshold: 0, // Trigger as soon as any part of the element is visible
        rootMargin: '-40% 0px', // Offset to trigger when the element is in the center
    });
    const AboutCtrl = useAnimation();
    useEffect(() => {
        if (Aboutvw) {
            AboutCtrl.start({ opacity: 1 });
        } else {
            AboutCtrl.start({ opacity: 0 });
        }
    }, [Aboutvw]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try{
        let resp=await axios.post('https://portfolio-server-da9zdsrgb-sakthipriyans-projects.vercel.app/sendmail',formData);
        toast.success("Mail sent succssfully");
        setFormData({
            name: '',
            email: '',
            message: ''
          })
    }
    catch(err){
        toast.error("sorry can't send email now");
        setFormData({
            name: '',
            email: '',
            message: ''
          })
    }

  };

  return (
    
    <motion.div 
    variants={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    }}
    initial="initial"
    animate={AboutCtrl}
    transition={{ duration: 0.3, delay: 0.2 }}

    ref={AboutRef}
    id="con" className="min-w-[300px] mb-48 relative">
            <div className="paddingDiv  transition-all">
                <div className="LargeCon">
                            <div>
                            <h1 className="text-[30px] mb-3">Contact</h1>
                                <form onSubmit={handleSubmit} className="max-w-full p-4 shadow-md rounded-md bg-[rgba(45,58,83,0.34)]">
                                    <div className="flex  space-x-5">
                                        <div className="mb-4 w-full ">
                                            <label className="block text-teal-300 text-sm font-bold mb-2" htmlFor="name">
                                            Name
                                            </label>
                                            <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 bg-transparent border-[1.5px]  border-slate-500 rounded-md focus:outline-none  focus:border-white/80"
                                            required
                                            />
                                        </div>
                                        <div className="mb-4 w-full">
                                            <label className="block text-teal-300 text-sm font-bold mb-2" htmlFor="email">
                                            Email
                                            </label>
                                            <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 bg-transparent border-[1.5px]  border-slate-500 rounded-md focus:outline-none  focus:border-white/80"
                                            required
                                            />
                                        </div>

                                </div>
                                <div className="mb-4">
                                    <label className="block text-teal-300 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                    </label>
                                    <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 bg-transparent border-[1.5px]  border-slate-500 rounded-md focus:outline-none  focus:border-white/80"
                                    required
                                    />
                                </div>
                                <button 
                                    type="submit"
                                    className="flex self-center  items-center justify-center rounded-full bg-slate-700 px-12 hover:font-[600] py-1 text-[15px] mx-auto font-medium leading-5 text-emerald-300 "
                                >
                                    Send
                                </button>
                                </form>
                             </div>    
                 </div>
            </div>
    </motion.div>
    
    
  );
};

const Gradi1=()=>{
    return(
        <div className="  fixed h-[400px] rounded-full w-[400px] z-[-1] filter-blur-100 opacity-[1] -top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1  bg-[rgba(29,78,216,0.2)] ">
            <div className=" fixed h-[400px] rounded-full w-[400px] z-[-1] filter-blur-100 opacity-[1] -top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1  bg-[rgba(29,78,216,0.2)]  ">
            </div>
        </div>
    )
}



const Gradi2 = () => {
  return (
    <div className="mdl h-[360px] w-[512px] min-w-[512px] max-w-[512px] max-h-[360px] min-h-[360px]  -z-50">
        <div className="circles">
        <div className=" lg:h-[285px] lg:w-[285px] lg:left-[-25px] shadow-2xl shadow-slate-700 circle circle-1">
        
        </div>
        <div className=" lg:h-[195px] lg:w-[195px] lg:top-[-12px] shadow-2xl shadow-slate-700 circle circle-2">
        
        </div>
        <div className=" lg:h-[285px] lg:w-[285px] lg:left-[44%] shadow-2xl shadow-slate-700 circle circle-3">
        
        </div>
        </div>
    </div>
  );
};

const Gradi3=()=>{
    return (
        <div className=" sm:hidden md:scale-[0.6] md:-left-[15%] blmd:hidden -z-50 top-0 left-12 fixed ">        
        <div className="relative -z-40 w-[500px] flex  ">
        <div className="mdl  min-w-[512px] max-w-[512px] max-h-[360px] min-h-[360px]  ">
            <div className="circles">
                <div className=" lg:h-[200px] -z-40 lg:w-[200px] shadow-2xl shadow-slate-700 circle circle-1">
                
                </div>
                <div className="lg:h-[100px] lg:w-[100px] lg:left-[37%] lg:top-[28%] shadow-2xl shadow-slate-700 circle circle-2">
                
                </div>
                <div className=" lg:h-[150px] lg:w-[150px] lg:top-[50%] lg:left-[30%] shadow-2xl shadow-slate-700  circle circle-3">
                </div>
            </div>
            </div>
            </div>
        </div>
      );
}

// const Gradi4 = () => {
//     return (
//         <div className=" sm:hidden top-2 -left-8  absolute ">        
//             <div className="relative -z-40   w-[500px] flex">
//                 <div className="mdl min-w-[512px] max-w-[512px] max-h-[360px] min-h-[360px]">
//                     <div className="circles">
//                         <div className="h-[170px] w-[170px] top-[10%] left-[5%] shadow-2xl shadow-slate-700 circle circle-1"></div>
//                         <div className="h-[100px] w-[100px] top-[30%] left-[35%] shadow-2xl shadow-slate-700 circle circle-2"></div>
//                         <div className="h-[130px] w-[130px] top-[50%] left-[20%] shadow-2xl shadow-slate-700 circle circle-3"></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }







export default MainEl;
