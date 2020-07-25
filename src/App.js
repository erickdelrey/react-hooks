import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';


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

const options = [
    {
        label: 'Vermillion',
        value: '#e34234'
    },
    {
        label: 'Blue Hydrangea',
        value: '#90b0c5'
    },
    {
        label: 'Marijuana Green',
        value: '#499b4a'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div>
            <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
            />
        </div>
    );
}