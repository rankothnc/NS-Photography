import React from 'react';
import ScrollUp from '../../../Components/ScrollUp/ScrollUp';
import Photo_Banner from '../../Home/Banner/Banner/Photo_Banner';
import WGallery from './WGallery';

const WildLife = () => {
    return (
        <div>
            <Photo_Banner/>
            <WGallery/>
            <ScrollUp/>
        </div>
    );
};

export default WildLife;