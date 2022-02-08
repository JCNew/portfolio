import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FcIcons from 'react-icons/fc';

export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
    },
    {
        title: 'Algorithms',
        path: '/algorithms',
        icon: <AiIcons.AiOutlineCode />,
    },
    {
        title: 'About',
        path: '/about',
        icon: <FcIcons.FcAbout />,
    }
]