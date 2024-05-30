import React from 'react';

import Partner from '../../components/partner/partner';
import Sponsors from '../../components/sponsors/sponsors';
import Corusel from '../../components/corusel/Corusel';
import Banner from '../../components/banner/Banner';
import CustomCarousel from '../../components/Scroller/scroller';
import Slider from 'react-slick';
import FooterComp from '../../components/footer/Footer.jsx';
import Speakers from '../../components/speakers/speakers';
import Section from '../../components/section/Section';
import Organixation from '../../components/organization/organixation';
import Map from '../../components/map/Map';


const MainPage = () => {
    return (
        <>
        <Banner/>
        <Corusel/> 
        <CustomCarousel/>
             <Speakers/>
             <Section/> 
<Map/>
<Organixation/>
             {/* <Sponsors/>   
             <Partner/>         */}
             <FooterComp/>

        </>
    );
};

export default MainPage;