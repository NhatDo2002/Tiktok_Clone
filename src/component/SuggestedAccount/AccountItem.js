//import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import styles from './SuggestedAccount.module.scss'
import Image from '~/component/Image'
import images from "~/assets/images"
import {Wrapper as PopperWrapper } from '~/component/Popper'
import AccountPreview from './AccountPreview'

const cx = classNames.bind(styles)

function AccountItem(){
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }

    return (
        <div>
            <Tippy
                appendTo={document.body}
                offset={[-25,2]}
                placement='bottom-start'
                interactive
                delay={[500,100]}
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <Image 
                        className={cx('avatar')}
                        src={images.avatar}
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>quocnguyenphu</p>
                        <p className={cx('name')}>Quốc Nguyễn Phú</p>
                    </div>
                </div>
            </Tippy>
        </div>
    )
}

//AccountItem.propTypes = {}

export default AccountItem