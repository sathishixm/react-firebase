
import {Outlet, Link} from 'react-router-dom'
import { Fragment  } from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/logo/crown.svg';
import './navigation.styles.scss';
const Navigation = () => {
    return (
        <Fragment>
            <div class='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        Shop                        
                    </Link>
                    <Link className='nav-link' to='/sign-in'>
                        Sign in                      
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;