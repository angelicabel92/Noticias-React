import React from 'react';
import ItemNewsComponent from './ItemNewComponent';

const NewsComponent = ({news}) => (
    <div className="container">
        <div className="row">
            {news.map(newItem => (
                <ItemNewsComponent new={newItem}/>
            ))}
        </div>
    </div>
);

export default NewsComponent;
