import React from 'react';
import Link from './Link';

const Header = () => {
    return (
        <div className="ui secondaray pointing menu">
            <Link href="/react-hooks/"className="item">
                Accordion
            </Link>
            <Link href="/react-hooks/list"className="item">
                Search
            </Link>
            <Link href="/react-hooks/dropdown"className="item">
                Dropdown
            </Link>
            <Link href="/react-hooks/translate"className="item">
                Translate
            </Link>
        </div>
    )
};

export default Header;