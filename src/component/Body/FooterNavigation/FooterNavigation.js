import React, { Fragment } from 'react';
import { FaAngleLeft, FaAngleRight, FaGlobe, FaStepBackward, FaStepForward } from "react-icons/fa";
import './FooterNavigation.css';

function FooterNavigation() {
    return (
        <div class="container">
            <div class="container bg-white p-2 rounded">
            <div class="row">
                <div class="col-12 d-flex justify-content-end">
                <ul class="nav buttonss">
                    <li>
                        <p class="pag-button">Items per page </p>
                    </li>
                    <li>
                    <div class="dropdown">
                            <p type="button" class="dropdown-toggle pag-button" data-toggle="dropdown">
                                6
                            </p>
                        </div>
                    </li>
                    <li>
                        <p class="pag-button">1-6 of 12 </p>
                    </li>
                    <li class="mr-2">
                        <FaStepBackward class="pag-button" />
                    </li>
                    <li>
                        <FaAngleLeft class="pag-button" />
                    </li>
                    <li>
                        <FaAngleRight class="pag-button" />
                    </li>
                    <li>
                        <FaStepForward class="pag-button" />
                    </li>
                </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default FooterNavigation;