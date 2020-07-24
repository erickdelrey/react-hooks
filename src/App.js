import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';


const items = [
    {
        title: 'What is React?',
        content: 'React is a Javascript front-end library. It is used to show content to users and handle events. Engineers use react to create reusable components.'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

export default () => {
    return (
        <div>
            <Search/>
        </div>
    );
}