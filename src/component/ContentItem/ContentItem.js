import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faHeart, faBookmark, faCommentDots, faShare } from '@fortawesome/free-solid-svg-icons';
import { useReducer } from 'react';

import Video from '~/component/Video';
import styles from './ContentItem.module.scss';
import Image from '~/component/Image';
import Button from '~/component/Button';
import VideoBtn from './VideoBtn';
import { reducer, initState } from './reducer';
import { likeVideo, unlikeVideo, favoriteVideo, unfavoriteVideo } from './actions';
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles);

function ContentItem({ data, user }) {
    const [stateVideo, dispatch] = useReducer(reducer, initState);

    const handleHeart = () => {
        if (stateVideo.liked === true) {
            dispatch(unlikeVideo(stateVideo));
        } else {
            dispatch(likeVideo(stateVideo));
        }
    };

    const handleBookmark = () => {
        if (stateVideo.favorited === true) {
            dispatch(unfavoriteVideo(stateVideo));
        } else {
            dispatch(favoriteVideo(stateVideo));
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div>
                <Image src={user.avatar} alt="" className={cx('avatar')} />
            </div>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <Tippy
                        //appendTo={document.body}
                        interactive
                        animation={false}
                        offset={[-75, -13]}
                        delay={[500, 100]}
                        placement="bottom-start"
                        render={(attrs) => (
                            <div className={cx('popup-user')} tabIndex="-1" {...attrs}>
                                <div className={cx('popup-header')}>
                                    <Image src={user.avatar} alt="" className={cx('popup-avatar')} />
                                    <Button outline className={cx('popup-follow-custom')}>
                                        Follow
                                    </Button>
                                </div>
                                <div className={cx('popup-name')}>
                                    <strong className={cx('nickname')}>{user.nickname}</strong>
                                    <p className={cx('name')}>{user.first_name + ' ' + user.last_name}</p>
                                    <div className={cx('popup-count')}>
                                        <strong className={cx('count')}>{user.followers_count}</strong>
                                        <p className={cx('kind')}>Followers</p>
                                        <strong className={cx('count')}>{user.likes_count}</strong>
                                        <p className={cx('kind')}>Likes</p>
                                    </div>
                                </div>
                                <div className={cx('popup-description')}>{user.bio}</div>
                            </div>
                        )}
                    >
                        <div className={cx('word')}>
                            <strong className={cx('nickname')}>{user.nickname} </strong>{' '}
                            <span className={cx('name')}>{user.first_name + ' ' + user.last_name}</span>
                            <p className={cx('description')}>{data.description}</p>
                            <p className={cx('music-description')}>
                                <FontAwesomeIcon icon={faMusic} className={cx('music-icon')} />
                                <span>{data.music !== '' ? data.music : 'Không có nhạc nền'}</span>
                            </p>
                        </div>
                    </Tippy>
                    {user.is_followed ? (
                        <Button
                            outline
                            onClick={() => {
                                console.log('click');
                            }}
                            className={cx('home-follow-btn', 'following')}
                        >
                            Following
                        </Button>
                    ) : (
                        <Button
                            outline
                            onClick={() => {
                                console.log('click');
                            }}
                            className={cx('home-follow-btn')}
                        >
                            Follow
                        </Button>
                    )}
                </div>
                <div className={cx('video')}>
                    <Video src={data.file_url} className={cx('video-content')} type="video/mp4" />
                    {/* <video className={cx('video-content')} controls autoPlay>
                        <source src={data.file_url} type="video/mp4"/>
                    </video> */}
                    <div className={cx('action-area')}>
                        <VideoBtn
                            icon={<FontAwesomeIcon icon={faHeart} className={cx('action-icon')} />}
                            count={data.likes_count}
                            liked={data.is_liked}
                            onClick={handleHeart}
                        />
                        <VideoBtn
                            icon={<FontAwesomeIcon icon={faCommentDots} className={cx('action-icon')} />}
                            count={data.comments_count}
                        />
                        <VideoBtn
                            icon={<FontAwesomeIcon icon={faBookmark} className={cx('action-icon')} />}
                            count={20}
                            favorited={stateVideo.favorited}
                            onClick={handleBookmark}
                        />
                        <VideoBtn
                            icon={<FontAwesomeIcon icon={faShare} className={cx('action-icon')} />}
                            count={data.shares_count}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentItem;
