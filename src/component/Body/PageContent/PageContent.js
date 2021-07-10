import React from 'react';
import { FaBookmark } from "react-icons/fa";
import './PageContent.css';
import avatar from '../../Header/avatar.jpg';
import addmore from '../../Header/addmore.png';

function PageContent() {
    return (
        <div class="container">
            <h5 class="mb-1 mt-3 text-secondary">Anatomia Umana</h5>
            <div class="table-responsive">
                <table class="table custom-table">
                    <thead class="bg-white">
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <FaBookmark class="bookmarkcss" />
                                </th>
                                <td>
                                    <p class="p-css">Anatomia Umana - Chapter I 
                                    <small class="d-block">CFU: 30 | Freq: 35% | Esame: False | Ore Totale: 35</small></p>
                                </td>
                                <td>
                                    <ul class="persons">
                                        <li>
                                            <a href="#">
                                                <img src={avatar} alt="Person" class="img-fluid" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={avatar} alt="Person" class="img-fluid" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={avatar} alt="Person" class="img-fluid" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={addmore} alt="Person" class="img-fluid" />
                                            </a>
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <ul class="buttonss">
                                        <li>
                                            <button type="button" class="btn btn-secondary btn-sm">CFU</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm">LF:25</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm">TP:15</button>
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <ul class="buttonss">
                                        <li class="mr-2">
                                            <button type="button" class="btn btn-info btn-sm season-button">Sezoni 1</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm season-button">Sezoni 1</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm season-button">Sezoni 1</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm season-button">Sezoni +</button>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </thead>
                </table>
                <table class="table custom-table">
                    <thead class="bg-white">
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <FaBookmark class="bookmarkcss" />
                                </th>
                                <td>
                                    <p class="p-css">Anatomia Umana - Chapter II 
                                    <small class="d-block">CFU: 30 | Freq: 35% | Esame: False | Ore Totale: 35</small></p>
                                </td>
                                <td>
                                    <ul class="persons">
                                        <li>
                                            <a href="#">
                                                <img src={avatar} alt="Person" class="img-fluid" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={avatar} alt="Person" class="img-fluid" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={addmore} alt="Person" class="img-fluid" />
                                            </a>
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <ul class="buttonss">
                                        <li>
                                            <button type="button" class="btn btn-secondary btn-sm">CFU</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm">LF:25</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm">TP:15</button>
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <ul class="buttonss">
                                        <li class="mr-2">
                                            <button type="button" class="btn btn-info btn-sm season-button">Sezoni 1</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm season-button">Sezoni 1</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm season-button">Sezoni 1</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm season-button">Sezoni +</button>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </thead>
                </table>
                <table class="table custom-table">
                    <thead class="bg-white">
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <FaBookmark class="bookmarkcss" />
                                </th>
                                <td>
                                    <p class="p-css">Anatomia Umana - Chapter III 
                                    <small class="d-block">CFU: 30 | Freq: 35% | Esame: False | Ore Totale: 35</small></p>
                                </td>
                                <td>
                                    <ul class="persons">
                                        <li>
                                            <a href="#">
                                                <img src={avatar} alt="Person" class="img-fluid" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={avatar} alt="Person" class="img-fluid" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={addmore} alt="Person" class="img-fluid" />
                                            </a>
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <ul class="buttonss">
                                        <li>
                                            <button type="button" class="btn btn-secondary btn-sm">CFU</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm">LF:25</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm">TP:15</button>
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <ul class="buttonss">
                                        <li class="mr-2">
                                            <button type="button" class="btn btn-info btn-sm season-button">Sezoni 1</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm season-button">Sezoni 1</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm season-button">Sezoni 1</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm season-button">Sezoni +</button>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </thead>
                </table>
            </div>
            
            <h5 class="mb-1 mt-3 text-secondary">Anatomia Umana II</h5>
            <div class="table-responsive">
                <table class="table custom-table">
                    <thead class="bg-white">
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <FaBookmark class="bookmarkcss" />
                                </th>
                                <td>
                                    <p class="p-css">Anatomia Umana - Chapter I 
                                    <small class="d-block">CFU: 30 | Freq: 35% | Esame: False | Ore Totale: 35</small></p>
                                </td>
                                <td>
                                    <ul class="persons">
                                        <li>
                                            <a href="#">
                                                <img src={avatar} alt="Person" class="img-fluid" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={avatar} alt="Person" class="img-fluid" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={addmore} alt="Person" class="img-fluid" />
                                            </a>
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <ul class="buttonss">
                                        <li>
                                            <button type="button" class="btn btn-secondary btn-sm">CFU</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm">LF:25</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm">TP:15</button>
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <ul class="buttonss">
                                        <li class="mr-2">
                                            <button type="button" class="btn btn-info btn-sm season-button">Sezoni 1</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm season-button">Sezoni 1</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm season-button">Sezoni 1</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm season-button">Sezoni +</button>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </thead>
                </table>
                <table class="table custom-table">
                    <thead class="bg-white">
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <FaBookmark class="bookmarkcss" />
                                </th>
                                <td>
                                    <p class="p-css">Anatomia Umana - Chapter II 
                                    <small class="d-block">CFU: 30 | Freq: 35% | Esame: False | Ore Totale: 35</small></p>
                                </td>
                                <td>
                                    <ul class="persons">
                                        <li>
                                            <a href="#">
                                                <img src={avatar} alt="Person" class="img-fluid" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={avatar} alt="Person" class="img-fluid" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={addmore} alt="Person" class="img-fluid" />
                                            </a>
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <ul class="buttonss">
                                        <li>
                                            <button type="button" class="btn btn-secondary btn-sm">CFU</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm">LF:25</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm">TP:15</button>
                                        </li>
                                    </ul>
                                </td>
                                <td>
                                    <ul class="buttonss">
                                        <li class="mr-2">
                                            <button type="button" class="btn btn-info btn-sm season-button">Sezoni 1</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm season-button">Sezoni 1</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm season-button">Sezoni 1</button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-warning btn-sm season-button">Sezoni +</button>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </thead>
                </table>
            </div>

        </div>
    )
}

export default PageContent;