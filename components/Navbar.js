"use client"
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
export function Navbar() {
    const [dropdown, setDropdown] = useState(false);
    const togglemenu = () => setDropdown(!dropdown);

    return(
        <main className="shadow shadow-gray-300 w-full">
            <div className="h-15 px-5 flex justify-between items-center">
                <h1 className="text-3xl font-bold text-[#1D4ED8]">Finance App</h1>
                <ul className="text-gray-800 hidden md:flex md:gap-8 cursor-pointer">
                    <li className="hover:text-[#1D4ED8]">Add Funds</li>
                    <li className="hover:text-[#1D4ED8]">Withdraw Funds</li>
                    <li className="hover:text-[#1D4ED8]">Transactions</li>
                    <li className="hover:text-[#1D4ED8]">Profile</li>
                </ul>
                <div>
                    <button className="w-20 h-10 shadow bg-[#1D4ED8] text-white rounded-md">Login</button>
                </div>
                <div className="block md:hidden">
                    <FiMenu onClick={togglemenu} className="text-3xl text-[#1D4ED8]"/> 
                </div> 
               </div>
                {dropdown && (
            <div className="flex flex-col gap-3 justify-center py-3 items-center md:hidden">
                <ul>
                     <li className="hover:text-[#1D4ED8]">Add Funds</li>
                    <li className="hover:text-[#1D4ED8]">Withdraw Funds</li>
                    <li className="hover:text-[#1D4ED8]">Transactions</li>
                    <li className="hover:text-[#1D4ED8]">Profile</li>
                </ul>
                <div>
                    <button className="w-20 h-10 shadow bg-[#1D4ED8] text-white rounded-md">Login</button>
                </div>
            </div>
            )}
        </main>
    )
}