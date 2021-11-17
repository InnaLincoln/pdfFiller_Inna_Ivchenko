import React, { Component } from 'react';
import Button from './Button';

import './DocumentList.scss';
import documentIcon from '../images/document.png';

var documents = [
    { title: 'Rundofase', description: 'Last Edited: 08/08/2020', buttonClass: 'document__button button_primary'},
    { title: 'Genco Pura Olive Oil Company', description: 'Last Edited: 08/08/2020', buttonClass: 'document__button button_primary'},
    { title: 'Bubba Gump', description: 'Last Edited: 08/08/2020', buttonClass: 'document__button button_secondary'},
];

export default class DocumentList extends Component {

    render() {
        return (
            <ul className="documents__list">
                {
                    documents.map(doc => (
                            <li className='document'>
                                <div key={doc.title} className="document__wrapper">
                                    <div className="document__img-wrapper">
                                        <img className="document__img" src={documentIcon} alt="document icon"/>
                                    </div>
                                    <div className="document__info">
                                        <h3 className="document__title">{doc.title}</h3>
                                        <p className="document__description">{doc.description}</p>
                                    </div>
                                </div>
                                <Button className={doc.buttonClass}/>
                            </li>
                        )
                    )
                }
            </ul>
        )
    }

}