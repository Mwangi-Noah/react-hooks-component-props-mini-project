import React from 'react';

import blogData from "../data/blog";

function Article({
    title,
    preview,
    date = "January 1, 1970"
}){
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
    </article>

}