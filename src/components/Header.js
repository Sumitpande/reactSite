import React from "react";
import Typewriter from "typewriter-effect";

export default function Headers(){
    return(

        <div class="bg-white dark:bg-gray-800 ">
            <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span class="block">
                        Hey there,
                    </span>
                    <span class="block text-indigo-500">
                        I'm Sumit Pande
                    </span>
                </h2>
                <p class="text-xl mt-4 max-w-md mx-auto text-gray-400">
                    <Typewriter
                        options={{
                            strings: ['Developer', 'Programmer', 'Learner'],
                            autoStart: true,
                            loop: true,
                        }}
    
                       
                    />
                </p>
                {/* 
                 */}
            </div>
        </div>
    
    )
}