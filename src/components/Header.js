import React, { useState } from 'react';
import '../styles/Style.css';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import TableRowsIcon from '@mui/icons-material/TableRows';
import CancelIcon from '@mui/icons-material/Cancel';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const handleCancelClick = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <div className='navBar'>
                <div>
                    <a className='logo' href="#">
                        <h1 className='logo' style={{ fontWeight: "700" }}>sid<span style={{ color: "red" }} className='logo' >.</span>dev</h1>
                    </a>
                </div>
                <div>
                    <ul className='ul'>
                        <a className='li' href="#"><li>
                            Home
                        </li></a>
                        <a className='li' href='#about'>
                            <li>
                                About
                            </li>
                        </a>

                        <a className='li' href='#project'>
                            <li>
                                Projects
                            </li>
                        </a>
                        <a className='li' href='#contact'>
                            <li>
                                Contact
                            </li>
                        </a>
                    </ul>

                    <IconButton id='menu-stack' onClick={handleMenuClick}>
                        {menuOpen ? <CancelIcon onClick={handleCancelClick} /> : <TableRowsIcon style={{ fontSize: "2.5rem" }} />}
                    </IconButton>
                </div>
            </div>

            <Drawer anchor='right' open={menuOpen} onClose={() => setMenuOpen(false)}>
                <IconButton onClick={handleCancelClick}>
                    <CancelIcon style={{ marginLeft: "25rem", fontSize: "2.5rem" }} />
                </IconButton>
                <ul id='toggleList'>
                    <li className='ulList'>
                        <a href='#' onClick={() => setMenuOpen(false)}>
                            Home
                        </a>
                    </li>
                    <li className='ulList'>
                        <a href='#about' onClick={() => setMenuOpen(false)}>
                            About
                        </a>
                    </li>
                    <li className='ulList'>
                        <a href='#project' onClick={() => setMenuOpen(false)}>
                            Projects
                        </a>
                    </li>
                    <li className='ulList'>
                        <a href='#contact' onClick={() => setMenuOpen(false)}>
                            Contact
                        </a>
                    </li>
                </ul>

            </Drawer>
        </>
    );
}

export default Header;
