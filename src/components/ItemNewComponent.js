import React from 'react';
import PropTypes from 'prop-types';

const ItemNewsComponent = ({newItem}) => {
    //Extracción de datos
    const { urlToImage, url, title, description, source } = newItem;
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className={`card-image ${urlToImage ? "": "hide"}`}>
                    <img src={urlToImage} alt={title}/>
                    <span className="card-title">{source.name}</span>
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn">Ver noticia completa</a>
                </div>
            </div>
        </div>
    );
 }

 ItemNewsComponent.propType = {
    newItem: PropTypes.object.isRequired
}

export default ItemNewsComponent;