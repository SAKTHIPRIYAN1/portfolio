import React, { useState, useEffect, useContext } from 'react';
import MenuBar from "./svg/menu.jsx";
import { MenuCancel } from "./svg/menu.jsx";

const SideBar = () => {
   




    const comp = [
        {name:'Home',id:'home'},
        { name: 'About', id: 'about' },
        { name: 'Tech Stack', id: 'tech' },
        { name: 'Certificates', id: 'cert' },
        { name: 'Project', id: 'pro' },
        { name: 'Contact', id: 'con' }
    ];

    const [menuclick, setclick] = useState(false);

    const handleLinkClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <>
            <div className="bg-transparent z-10 fixed w-[130px] right-5 top-8 grid grid-flow-row grid-col-1 sm:hidden md:hidden gap-[0.5px] px-3 py-0">
            {comp.map((el, ind) => {
                            return(
                                <a  href={'#' +el.id}  onClick={(e) => handleLinkClick(e, el.id)}  className="mnuicns2 z-10 subpixel-antialiased text-[18px] px-2 pr-4 m-0 py-[1] text-start" key={ind}>
                                    {el.name}
                                </a>
                            )
                           })}
            </div>
            <Prof />
            <div className="z-10 fixed w-[full] transparent_blue right-5 top-1 rounded-lg bg-opacity-50 backdrop-blur-md lg:hidden flex flex-col h-max pb-10">
                <div onClick={() => setclick(!menuclick)} className="cursor-pointer">
                    {!menuclick ? <MenuBarCon /> : <MenuCancelCon />}
                </div>
                {menuclick ? (
                    <div className="mt-12 grid grid-flow-row grid-col-1 gap-[0.5px] px-3 py-0">
                           {comp.map((el, ind) => {
                            return(
                                <a  href={'#' +el.id}  onClick={(e) => handleLinkClick(e, el.id)}  className="mnuicns2 z-10 subpixel-antialiased text-[18px] px-2 pr-4 m-0 py-[1] text-start" key={ind}>
                                    {el.name}
                                </a>
                            )
                           })}
                    </div>
                ) : null}
            </div>
        </>
    );
};

const MenuBarCon = () => {
    return (
        <div className="menuicons active:scale-[0.3]">
            <MenuBar />
        </div>
    );
};

const MenuCancelCon = () => {
    return (
        <div className="menuicons scale-[0.4] active:scale-[0.3] fixed -mr-1 -top-2 p-0">
            <MenuCancel />
        </div>
    );
};

export const Prof = ({ cl }) => {
    return (
        <div className="fixed sm:top-2 z-20 cursor-pointer left-10 top-8 text-[18px] font-bold text-hdclr flex items-center justify-center rounded-full px-2">
            SK
        </div>
    );
};

export default SideBar;
