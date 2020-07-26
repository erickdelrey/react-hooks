import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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
            <Header />
            <Route path="/react-hooks/">
                <Accordion items={items} />
            </Route>
            <Route path="/react-hooks/list">
                <Search />
            </Route>
            <Route path="/react-hooks/dropdown">
                <Dropdown label="Select a color"  options={options} selected={selected} onSelectedChange={setSelected}/>
            </Route>
            <Route path="/react-hooks/translate">
                <Translate />
            </Route>
        </div>
    );
}