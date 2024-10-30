import React from 'react'
import { AiOutlineOpenAI } from "react-icons/ai";
import { FaConnectdevelop } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div class="bg-black text-white p-10 rounded-2xl my-2">
            <div class="container mx-auto text-center ">
                <h2 class="text-lg font-bold mb-4">Credits</h2>
                <div class="flex flex-col justify-between items-center">
                <div class="mb-4 space-y-4">
                    <p>Powered by:</p>
                    <div class="flex space-x-4">
                    <div class="flex items-center space-x-2">
                        <AiOutlineOpenAI class="w-6 h-6"/>
                        <span>ChatGpt</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <FaConnectdevelop class="w-6 h-6"/>
                        <span>V2.dev</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer