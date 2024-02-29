import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faLanguage,
    faQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
//import { useEffect, useState } from "react";
//import 'tippy.js/dist/tippy.css'; // optional

import Menu from '~/component/Popper/Menu';
import Login from '~/component/Login';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/component/Button';
import { MessageIcon, InboxIcon } from '~/component/Icons';
import Image from '~/component/Image';
import Search from '../Search';
import config from '~/config';
import { useState } from 'react';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Tiếng việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const currentUser = sessionStorage.getItem('user');

function Header() {
    const [showLogin, setShowLogin] = useState(false);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //Handle change
                break;
            default:
                break;
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@mee',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/feedback',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/feedback',
            separate: true,
        },
    ];

    return (
        <>
            <Login showLogin={showLogin} />
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <Link to={config.routes.home} className={cx('logo')}>
                        <Image className={cx('logo-img')} src={images.logo} alt="Logo" />
                        <h3 className={cx('logo-word')}>TikTok</h3>
                    </Link>

                    <Search />

                    <div className={cx('actions')}>
                        {currentUser ? (
                            <>
                                <Button
                                    className={cx('header-custom-outline-button')}
                                    outline
                                    leftIcon={<FontAwesomeIcon icon={faPlus} />}
                                >
                                    Upload
                                </Button>
                                <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <InboxIcon />
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button
                                    className={cx('header-custom-outline-button')}
                                    outline
                                    leftIcon={<FontAwesomeIcon icon={faPlus} />}
                                >
                                    Upload
                                </Button>
                                <Button
                                    primary
                                    onClick={() => {
                                        setShowLogin(!showLogin);
                                    }}
                                >
                                    {' '}
                                    Log in{' '}
                                </Button>
                            </>
                        )}
                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                            {currentUser ? (
                                <Image
                                    className={cx('user-avatar')}
                                    alt="Nguyen Van A"
                                    src={images.avatar}
                                    width={50}
                                />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
