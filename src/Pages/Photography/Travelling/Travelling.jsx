import React from 'react';
import ScrollUp from '../../../Components/ScrollUp/ScrollUp';
import Photo_Banner from '../../Home/Banner/Banner/Photo_Banner';
import TGallery from './TGallery';

const Landscape = () => {
    return (
        <div>
            <Photo_Banner/>
            <TGallery/>
            <ScrollUp/>
        </div>
    );
};

export default Landscape;