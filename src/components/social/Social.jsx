import React from 'react';

import {
  IoLogoDiscord,
  IoLogoGithub,
  IoLogoGoogle,
  IoLogoLinkedin,
} from 'react-icons/io5';

const Social = () => {
  return (
    <div className='flex h-16 items-center'>
      <div className='flex items-center w-[92%]  mx-auto h-7 gap-3'>
        <a
          title='linkedin'
          target='_blank'
          className='h-full'
          href='https://www.linkedin.com/in/velroerikson/'>
          <IoLogoLinkedin className='h-full w-auto text-black dark:text-white' />
        </a>
        <a
          title='github'
          target='_blank'
          className='h-full'
          href='https://github.com/erikson-hub'>
          <IoLogoGithub className='h-full w-auto text-black dark:text-white' />
        </a>
        <a
          title='discord'
          target='_blank'
          className='h-full'
          href='http://discordapp.com/users/926093598225743902'>
          <IoLogoDiscord className='h-full w-auto text-black dark:text-white' />
        </a>
        <a
          title='gmail'
          target='_blank'
          className='h-full'
          href='https://mail.google.com/mail/?view=cm&to=erikson.velro@gmail.com'>
          <IoLogoGoogle className='h-full w-auto text-black dark:text-white' />
        </a>
      </div>
    </div>
  );
};

export default Social;
