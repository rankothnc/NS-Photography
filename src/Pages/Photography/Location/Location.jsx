import React from 'react';
import ScrollUp from '../../../Components/ScrollUp/ScrollUp';
import Photo_Banner from '../../Home/Banner/Banner/Photo_Banner';
import Loca_Gallery from './Loca_Gallery';

const Location = () => {
    return (
        <div>
            <Photo_Banner/>
            <Loca_Gallery/>
            <ScrollUp/>
        </div>
    );
};

export default Location;