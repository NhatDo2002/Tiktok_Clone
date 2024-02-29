import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Home.module.scss';
import ContentItem from '~/component/ContentItem';
import * as listVideo from '~/utils/services/videoService';



const cx = classNames.bind(styles);
function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await listVideo.getListVideo();
            setVideos(result);
        };

        fetchApi();
    }, []);

    return (
        <div className={cx('homepage')}>
            {videos.map((video) => (
                <ContentItem key={video.id} data={video} user={video.user} />
            ))}
        </div>
    );
}

export default Home;
