import classNames from "classnames/bind";
import styles from "./LoginMenu.module.scss"
import images from "~/assets/images";
import Image from "~/component/Image";
const cx = classNames.bind(styles)

export function LoginQR() {
    return (
        <div className={cx('qr-container')}>
            <h2 className={cx('form-header')}>Log in with QR code</h2>
            <div className={cx('modal-qr')}>
                <Image src={images.qrCode} alt=""  className={cx('modal-qr-img')}/>
            </div>
            <p className={cx('qr-text')}>
                1. Scan with your mobile device's camera
            </p>
            <p className={cx('qr-text')}>
                2. Confirm login or sign up
            </p>
        </div>
    )
}