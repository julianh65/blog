import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <nav className='flex text-xl'>
            <Link to='/' className="pl-8 text-lg">Home</Link>
            <Link to='/' className="pl-8 text-lg">About</Link>

        </nav>
    );

}
export default Header;