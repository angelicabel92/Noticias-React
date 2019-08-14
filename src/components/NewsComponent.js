import React from 'react';
import ItemNewsComponent from './ItemNewComponent';
import PropTypes from 'prop-types';

const NewsComponent = ({news}) => (
    <div className="container">
        <div className="row">
            {news.map(newItem => (
                <ItemNewsComponent key={newItem.url} newItem={newItem}/>
            ))}
        </div>
    </div>
);

NewsComponent.propType = {
    news: PropTypes.array.isRequired
}

export default NewsComponent;
