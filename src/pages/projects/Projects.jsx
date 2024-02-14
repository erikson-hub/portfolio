import React from 'react';
import { ProjectItems } from '../../resources/ProjectItems';
import './projects.css';
const Projects = () => {
  return (
    <div className='grid projects  text-black dark:text-white w-full animate-slide-down'>
      {ProjectItems.map((ProjectItem) => (
        <article
          key={ProjectItem.id}
          className='rounded-md bg-white dark:bg-[#2C353D] outline'>
          <a href={ProjectItem.url} target='_blank'>
            <img
              src={ProjectItem.img}
              alt={ProjectItem.name}
              className='h-[390px] w-full object-cover'
            />
          </a>
          <section className='px-2 py-2'>
            <h4 className='font-GraphikLight'>{ProjectItem.name}</h4>
            <p className='my-2'>{ProjectItem.description}</p>
            <div>
              <ul className='flex gap-2'>
                {ProjectItem.techs.map((tech) => (
                  <li className='px-2' key={tech}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>
      ))}
    </div>
  );
};

export default Projects;
