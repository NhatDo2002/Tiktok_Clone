import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import { HomeIcon, UserGroupIcon, LiveIcon } from '~/component/Icons';
import SuggestedAccount from '~/component/SuggestedAccount';
import Button from '~/component/Button';
import Login from '~/component/Login';

const cx = classNames.bind(styles);

const user = sessionStorage.getItem('user');

function Sidebar() {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <Login showLogin={showLogin} />
            <aside className={cx('wrapper')}>
                <Menu>
                    <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} />
                    <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} />
                    <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
                </Menu>
                {user ? (
                    <SuggestedAccount label="Following accounts" />
                ) : (
                    <div className={cx('sidebar-login-wrapper')}>
                        <p className={cx('sidebar-login-text')}>
                            Log in to follow creators, like vides, and view comments.
                        </p>
                        <Button
                            outline
                            className={cx('sidebar-login-btn')}
                            onClick={() => {
                                setShowLogin(!showLogin);
                            }}
                        >
                            Log in
                        </Button>
                    </div>
                )}
                <div className={cx('footer')}>
                    <div>
                        <p className={cx('footer-label')}>About</p>
                        <p className={cx('footer-label')}>Newsroom</p>
                        <p className={cx('footer-label')}>Contact</p>
                        <p className={cx('footer-label')}>Careers</p>
                    </div>
                    <div>
                        <p className={cx('footer-label')}>TikTok for Goods</p>
                        <p className={cx('footer-label')}>Advertise</p>
                        <p className={cx('footer-label')}>Developers</p>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;
