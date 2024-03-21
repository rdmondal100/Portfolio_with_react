import React from 'react'; // Import React if using JSX syntax
import { HiHome } from 'react-icons/hi';
import { FaBloggerB } from 'react-icons/fa';
import { PiDotsNineBold } from 'react-icons/pi';
import { MdMarkEmailRead } from 'react-icons/md';

export const MenuBarDetails = [
  {
    name: 'Home',
    icon: <HiHome />,
    slug: '/home'
  },
  {
    name: 'Projects',
    icon: <PiDotsNineBold />,
    slug: '/projects'
  },
  {
    name: 'Blogs',
    icon: <FaBloggerB />,
    slug: '/blogs'
  },
  {
    name: 'Contact',
    icon: <MdMarkEmailRead />,
    slug: '/contact'
  }
];
