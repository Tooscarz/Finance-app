import Image from "next/image"
import { MdLogout } from "react-icons/md";

export default function profile() {
    return(
        <main className="min-h-screen flex justify-center py-20 px-5 ">
            <div className="w-full md:w-90 md:md:max-h-140 roundede shadow-md py-5 px-4">
                <h1 className="text-xl text-center font-semibold text-gray-700">User Details</h1>
            <div className="mt-3 flex justify-center">
                <image
                src="/banking.png"
                alt="profile image"
                width={80}
                height={80}
                className="w-20 h-20 rounded-full"
                />
            </div>
              <div className="px-5 py-5 flex flex-col gap-4 mt-8 w-80 h-50 shadow-md rounded-md">
                  <p className="font-semibold">Full Name</p>
                  <p className="text-gray text-xs">John Doe</p>
                <div className="flex justify-between items-center"> 
                    <p className="font-semibold">Email Address</p>
                    <p className="text-gray text-xs">john.doe@example.com</p>
                 </div>
                 <div className="flex justify-between items-center"> 
                    <p className="font-semibold">Home Address</p>
                    <p className="text-gray text-xs">123 Main St, City, State 12345</p>
                 </div>
               </div> 
               <form className="mt-2">
                <button className="w-30 h-10 shadow-md text-white bg-red-500 rounded-md flex justify-center items-center gap-2 cursor-pointer">
                    <MdLogout />
                    <span>Logout</span>
                </button>
                  
               </form>
            </div>
        </main>
    )
}