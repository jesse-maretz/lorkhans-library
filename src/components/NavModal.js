import React from 'react';

const NavModal = () => {
    console.log('This is the nav')
    const words = ['sky', 'blue', 'falcon', 'wood', 'cloud'];
    const items = words.map((word, idx) => {
    return <li key={idx}>{word}</li>;
    });
    console.log(items);

    return (
        <div>
            <ul>{items}</ul>
        </div>
    )
}

export default NavModal