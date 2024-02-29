import { useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faEllipsis, faPause, faVolumeHigh, faHeartBroken, faFlag } from '@fortawesome/free-solid-svg-icons';
import styles from './Video.module.scss';

const cx = classNames.bind(styles);

function Video({ src, className, type }) {
    const [actionShow, setActionShow] = useState(true);
    const [playState, setPlayState] = useState(false);

    const classes = cx({
        [className]: className,
    });

    const videoRef = useRef();

    const handleMouseEnter = () => {
        setActionShow(true);
    };

    const handleMouseLeave = () => {
        setActionShow(false);
    };

    const handleVideo = () => {
        if (!playState) {
            videoRef.current.play();
            setPlayState(true);
        } else {
            videoRef.current.pause();
            setPlayState(false);
        }
    };

    return (
        <div className={classes} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <video ref={videoRef} className={classes}>
                <source src={src} type={type} />
            </video>
            {actionShow ? (
                <>
                    <div>
                        <Tippy
                            //appendTo={document.body}
                            interactive
                            offset={[50, -80]}
                            delay={[0, 500]}
                            placement="top-start"
                            render={(attrs) => (
                                <div className={cx('popup-video')} tabIndex="-1" {...attrs}>
                                    <div
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        className={cx('popup-content')}
                                    >
                                        <FontAwesomeIcon icon={faHeartBroken} className={cx('popup-content-icon')} />
                                        <p className={cx('popup-content-word')}>Not interested</p>
                                    </div>
                                    <div className={cx('popup-content')}>
                                        <FontAwesomeIcon icon={faFlag} className={cx('popup-content-icon')} />
                                        <p className={cx('popup-content-word')}>Report</p>
                                    </div>
                                </div>
                            )}
                        >
                            <div className={cx('about-btn')}>
                                <FontAwesomeIcon icon={faEllipsis} style={{ width: '20px', height: '20px' }} />
                            </div>
                        </Tippy>
                    </div>
                    <div className={cx('video-btn')} onClick={handleVideo}>
                        {playState ? (
                            <FontAwesomeIcon icon={faPause} className={cx('play-btn')} />
                        ) : (
                            <FontAwesomeIcon icon={faPlay} className={cx('play-btn')} />
                        )}
                    </div>
                    <Tippy
                        //appendTo={document.body}
                        interactive
                        placement="top"
                        render={(attrs) => (
                            <div className={cx('popup-volume')} tabIndex="-1" {...attrs}>
                                <div className={cx('popup-volume-control')}></div>
                                <div className={cx('popup-volume-circle')}></div>
                                <div className={cx('popup-volume-bar')}></div>
                            </div>
                        )}
                    >
                        <div className={cx('volume-btn')}>
                            <FontAwesomeIcon icon={faVolumeHigh} />
                        </div>
                    </Tippy>
                </>
            ) : (
                <></>
            )}
        </div>
    );
}

export default Video;
