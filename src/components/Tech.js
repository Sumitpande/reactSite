import React from "react";
import { TECHLIST as TechIcons } from "../shared/tech_list";

function Tech(props) {
  return (
    <div class="bg-white dark:bg-gray-800 ">
      <div class="text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h4 class=" font-extrabold text-black dark:text-white sm:text-4xl">
          <span class="block  hover:underline hover:underline-offset-[16px]">
            skills
          </span>
        </h4>
      </div>
      <div className="grid gap-4 place-content-center justify-items-center lg:grid-cols-4 grid-cols-3  grid-flow-row gap-4 dark:bg-gray-800 px-6">
        {TechIcons.items.map(tech => {
          return (
            <div class=" flex-row gap-4 flex justify-center items-center">
              <div class="flex-shrink-0 ">
                {/* <a href="#" class="block relative"> */}
                <img
                  alt={tech.name}
                  src={tech.image}
                  class="mx-auto object-cover rounded-full h-14 w-14 "
                />
                {/* </a> */}
              </div>
              <div class="flex flex-col md:block hidden">
                <span class="text-gray-600 dark:text-white text-lg font-medium">
                  {tech.name}
                </span>

                {/* <span class="text-gray-400 text-xs">
                                        CTO
                                    </span> */}
              </div>
            </div>
          );

          // <img className='h-16 w-16' alt={tech.name} src={tech.image}></img>
        })}
      </div>
    </div>
  );
}

export default Tech;
