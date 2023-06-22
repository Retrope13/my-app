import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import React from 'react';
import Home from '../imgs/Home_Icon.png';
import Projects from '../imgs/Projects_Icon.png';
import Contact from '../imgs/Contact_Icon.png';

interface MenuItemProps {
    i: number;
}

const variants = {
    open: {
        y: 0,
        opacity: 1, 
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },

    closed: {
        y: 50,
        opacity: 0, 
        transition: {
            y: {stiffness: 1000}
        }
    }

};

const pages = ['/', '/projects', '/contact'];
const titles = ["Home", "Projects", "Contact Me"];
const icons = [Home, Projects, Contact];

export const MenuItem: React.FC<MenuItemProps> = ({ i }) => {

    return (
        //if I move the img into the link it makes the icon part of the link, but it resizes the image
        <motion.li 
        variants = {variants}
        whileHover={{scale: 1.1}}
        whileTap = {{scale: 1}} >
        <img alt='An Icon for the navbar. The icon could be a house with a chimney, a piece of paper with lines instead of text, or an unopened envelope. All of these are in a minimalistic, white style.' style={{minWidth: '70px', border: '0px'}} src={icons[i]} className="icon-placeholder"/> 
        <Link to={pages[i]} className='text-placeholder' style={{width: 'auto'}}>{titles[i]} </Link>

        </motion.li>
    );
};