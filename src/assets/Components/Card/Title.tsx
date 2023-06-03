import * as React from 'react';
import {MotionValue, motion} from 'framer-motion';
import {closeSpring, openSpring} from './animations'; 

interface TitleProps {
    title: string;
    category: string;
    isSelected: boolean;
}

export const Title: React.FC<TitleProps> = ({ title, category, isSelected}) => {
    const x = isSelected ? 30 : 15;
    const y = x;
    const scale = isSelected ? 1 : .8;

    return (
        <motion.div className = 'title-container'
        initial={false}
        animate={{x, y}}
        transition = {isSelected ? openSpring : closeSpring}
        transformTemplate={scaleTranslate}
        style={{originX: 0, originY: 0}} >
            <span className='category'>{category}</span>
            <h2>{title}</h2>
        </motion.div>
    );
};

const scaleTranslate =({x, y, scale}: {x: number; y: number; scale: number}) =>
`scale(${scale}) translate(${x}px, ${y}px) translateZ(0)`;

{/*This ^^ might need to change to be more reactive across device screens */}