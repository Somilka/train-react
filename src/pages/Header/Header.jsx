import React from 'react';
import NavMenu from 'components/NavMenu/NavMenu';
import OpenLogin from 'components/OpenLogin/OpenLogin';
import HeadName from 'components/HeadName/HeadName';

import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header content">
                <div className="content">
                    <NavMenu />
                    <HeadName />
                    <OpenLogin logged={this.props.logged} openLogin={() => {this.props.openLogin()}} />
                </div>
            </div>
        );
    }
}

export default Header;