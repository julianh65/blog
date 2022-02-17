import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {


    return (
        <nav className='flex text-xl'>
            <Link to='/' className="text-xl">Home</Link>
            <Link to='/About' className="pl-8 text-xl">About</Link>

        </nav>
    );

}
export default Header;