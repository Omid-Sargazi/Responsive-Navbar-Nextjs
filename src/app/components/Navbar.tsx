"use client"
import Link from "next/link";
import React, { useEffect, useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true)
    
    function getMenuClasses(){
        let menuClasses = []

        if(isOpen){
            menuClasses = [
            "flex",
            "absolute",
            "top-[60px]",
            "bg-gray-600",
            "w-full",
            "p-4",
            "left-0",
            "gap-8",
            "flex-col",
            // "md:hidden",
            // "md:flex",
            // "md:flex-row"
           ]
        }else{
            menuClasses.push(["hidden","md:flex"])
        }
        return menuClasses.join(" ")
    }
    useEffect(()=>{
    })
  return (
    <nav className=" bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
     <div className=" container mx-auto flex justify-between items-center">
        <a className=" text-2xl font-bold ">Omid Developer</a>
        <div className={getMenuClasses()}>
            <Link className="hover:text-gray-300" href="/">Home</Link>
            <Link className="hover:text-gray-300" href="/about">About</Link>
            <Link className="hover:text-gray-300" href="/contact">Contact</Link>
        </div>
        <div className=" flex items-center md:hidden">
            <button className="z-10" onClick={()=>{
                setIsOpen(!isOpen)
            }}>{isOpen?<CiMenuFries size={30} /> : <IoMdCloseCircleOutline size={30} />}</button>
            
        </div>
     </div>
    </nav>
  )
}

export default Navbar
