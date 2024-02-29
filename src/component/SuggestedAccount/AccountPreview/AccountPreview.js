import classNames from "classnames/bind"
import styles from "./AccountPreview.module.scss"
import Image from "~/component/Image"
import Button from "~/component/Button"

const cx = classNames.bind(styles)

function AccountPreview(){
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image className={cx('avatar')} src="" alt=""/>
                <Button 
                    className={cx('custom-btn')}  
                    primary
                >
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>quocnguyenphu</p>
                <p className={cx('name')}>Quốc Nguyễn Phú</p>
            </div>
            <div className={cx('footer')}>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Likes</span>
            </div>
        </div>
    )
}

export default AccountPreview