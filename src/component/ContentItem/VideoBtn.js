import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from "./ContentItem.module.scss"
import Button from "~/component/Button";

const cx = classNames.bind(styles)
const fn = () => {}

function VideoBtn({ liked=false, favorited=false, count,  icon, onClick = fn}){

    const classes = cx({
        liked,
        favorited,
    })

    return (
        <div className={cx('action-btn')}>
            <Button 
                forVideo 
                className={classes}
                onClick={onClick}
            >
                {icon}
            </Button>
            <strong className={cx('count')}>{count}</strong>
        </div>
    )
}


VideoBtn.propTypes = {
    liked: PropTypes.bool,
    favorited: PropTypes.bool,
    icon: PropTypes.node,
    onClick: PropTypes.func,
    count: PropTypes.number
}

export default VideoBtn