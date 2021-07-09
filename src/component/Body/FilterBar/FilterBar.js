import React, { Fragment } from 'react';
import { FaFilter, FaGlobe } from "react-icons/fa";
import './FilterBar.css';

function FilterBar() {
    return (
        <div class="container bg-white p-2 rounded">
            <div class="row">
                <div class="col-6">
                    <button type="button" class="btn btn-secondary btn-sm filter-button">Filters</button>
                </div>
                <div class="col-6 d-flex justify-content-end">
                    <FaFilter />
                </div>
            </div>
        </div>
    )
}

export default FilterBar;