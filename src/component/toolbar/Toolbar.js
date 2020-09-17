import React from 'react'
import './Toolbar.css'

const toolbar = props =>(
    <header className='toolbar'>
        <nav className='toolbar-nav'>
            <div></div>
            <div className='logo'><a href='/'>Maxi Operation</a></div>
            <div className='spacer'/>
            <div className='toolbar-nav-item'>
                <ul>
                    <li><a href='/'>Go to Maxi Infra</a></li>
                    <li><a href='/'>Username</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;