import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faQrcode, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'

import styles from "./Login.module.scss"
import { useEffect, useReducer, useState } from "react";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Button from "~/component/Button";
import { reducer, initState, returnMain, loginEmail, loginQR } from "./useReducer";

const cx = classNames.bind(styles)

function Login({ showLogin = false }){
    const [state, dispatch] = useReducer(reducer, initState)

    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faQrcode} />,
            title: "Use QR code",
            disabled: false,
            onClick: () => { dispatch(loginQR(state)) },
        },
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "Use email / username",
            disabled: false,
            onClick: () => { dispatch(loginEmail(state))}
        },
        {
            icon: <FontAwesomeIcon icon={faFacebook} />,
            title: "Continue with Facebook",
            disabled: true
        },
        {
            icon: <FontAwesomeIcon icon={faGoogle} />,
            title: "Continue with Google",
            disabled: true
        }
    ]

    const [show, setShow] = useState(false)

    useEffect(() => {
        setShow(show => (!show))
    },[showLogin])
    let Comp = state.locate


    return (
        <div className={cx('wrapper',{show})}>
            <div className={cx('modal-login')}>
                    {state.main ? 
                        <>
                            <div className={cx('modal-close')} onClick={() => {setShow(!show)}}>
                                <FontAwesomeIcon icon={faXmark} className={cx('modal-close-icon')}/>
                            </div>
                            <h2 className={cx('form-header')}>Log in to TikTok</h2>
                            <div className={cx('modal-choice-containter')}>
                                {MENU_ITEMS.map(item => {
                                    return (<Button className={cx('modal-choice')} key={item.title} disabled={item.disabled} onClick={item.onClick}>
                                        <div className={cx("modal-main-icon")}>
                                            {item.icon}
                                        </div>
                                        <p className={cx('modal-btn-title')}>{item.title}</p>
                                    </Button>)
                                })}
                            </div>
                        </>
                    : <>
                        <div className={cx('modal-back')} onClick={() => {dispatch(returnMain(state))}}>
                            <FontAwesomeIcon icon={faChevronLeft} className={cx('modal-back-icon')}/>
                        </div>
                        <div className={cx('modal-close')} onClick={() => {setShow(!show)}}>
                            <FontAwesomeIcon icon={faXmark} className={cx('modal-close-icon')}/>
                        </div>
                        {Comp}
                    </>}
                <div className={cx('modal-footer')}>
                    <p>Don't have an account? <span className={cx('signup-text')}>Sign up</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login