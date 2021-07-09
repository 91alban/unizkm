import React, { Fragment } from 'react';
import './Body.css';
import FilterBar from './FilterBar/FilterBar';
import PageContent from './/PageContent/PageContent';
import FooterNavigation from './FooterNavigation/FooterNavigation';

function Body() {
    return (
        <div>
            <FilterBar />
            <PageContent />
            <FooterNavigation />
        </div>
    )
}

export default Body;