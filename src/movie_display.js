import React, { useState } from 'react';
export function movie_display(currentContent) {
    return (
        <div class="card" style={{ "width": "48rem" }}>
            <img class="card-img-top" src={currentContent.image} alt="Card image cap"></img>
            <div class="card-body">
                <h3>Se en film: {currentContent.title}</h3>
                <p class="card-text">{currentContent.description}</p>
            </div>
        </div>
    )
}