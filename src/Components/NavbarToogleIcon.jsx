import React from 'react';

const ListIcon = 'Images/LightToggleIcon.png'
const NavbarToogleIcon = ({mode}) => {
    return (
        <div className={`${mode}`}>
            <button className='toggleBtn'>
                <img src={ListIcon}  />
            </button>
        </div>
    )
}

export default NavbarToogleIcon;
