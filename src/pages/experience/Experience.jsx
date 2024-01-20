import React from 'react';
import { ExperienceItems } from '../../resources/ExperienceItems';
const Experience = () => {
  return (
    <ol className='relative border-s border-black dark:border-gray-200 mx-2 mt-4 animate-slide-right'>
      {ExperienceItems.map((experience) => {
        return (
          <li key={experience.id} className='mb-10 ms-4'>
            <div className='absolute w-3 h-3 bg-black dark:bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white '></div>
            <time className='mb-1 text-sm font-normal leading-none text-[#666666] dark:text-gray-300 '>
              {experience.date}
            </time>
            <h3 className='text-lg font-semibold dark:text-[#FF6E30] mt-2'>
              {experience.position}
            </h3>
            {experience.achievements.map((achievement) => {
              return (
                <p
                  key={achievement}
                  className='mb-3 text-base font-normal text-gray-500 dark:text-gray-200'>
                  {achievement}
                </p>
              );
            })}
          </li>
        );
      })}
    </ol>
  );
};

export default Experience;
