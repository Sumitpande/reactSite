import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


export default function ProjectCard({project}) {
  

  return (
    
    <div class=" overflow-hidden shadow-lg rounded-2lg h-70 w-50 md:w-80 cursor-pointer m-auto">
     
        {/* <Shopping class="fill-blue-500 max-h-40 w-full bg-red object-cover" /> */}
        <img src={project.image} class="max-h-40 w-full object-contain" alt={project.name} />
        <div class="bg-white dark:bg-gray-800 w-full p-4">
            <p class="text-indigo-500 text-md font-medium">
                Web App
            </p>
            <p class="text-gray-800 dark:text-white text-xl font-medium mb-2">
                {project.name}
            </p>
            <p class="text-gray-400 dark:text-gray-300 font-light text-md">
                {project.description}
            </p>
            <div class="flex items-center justify-start my-4 space-x-4">
                {/* <span class="px-2 py-1 flex items-center text-xs rounded-md font-semibold text-green-500 bg-green-50">
                    WEB APP
                </span>
               */}
            </div>
            <div class="flex flex-wrap justify-starts items-center mt-4">
                <div class="text-xs mr-2 py-1.5 px-4 text-gray-600">
                    <a target='blank' href={project.site}>
                        <FontAwesomeIcon icon={solid('mobile')} className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200" />
                    </a>
                </div>
                <div class="text-xs mr-2 py-1.5 px-4 text-gray-600">
                <a target='blank' href={project.code}>
                    <FontAwesomeIcon icon={brands('github')} className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200" size="lg" />
                </a>
                </div>
                
            </div>
        </div>
    
    </div>

  );
}
