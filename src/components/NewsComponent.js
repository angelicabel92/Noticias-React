import React from 'react';
import ItemNewsComponent from './ItemNewComponent';

const NewsComponent = ({news}) => (
    <div className="container">
        <div className="row">
            {news.map(newItem => (
                <ItemNewsComponent key={newItem.url} newItem={newItem}/>
            ))}
        </div>
    </div>
);

export default NewsComponent;
