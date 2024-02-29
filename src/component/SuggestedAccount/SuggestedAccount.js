import classNames from "classnames/bind"
import PropTypes from 'prop-types'

import styles from "./SuggestedAccount.module.scss"
import AccountItem from "./AccountItem"

const cx = classNames.bind(styles)

function SuggestedAccount({ label }){
    return (
        <div className={cx("wrapper")}>
            <h4 className={cx('label')}>{label}</h4>
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-btn')}>See all</p>
        </div>
    )
}

SuggestedAccount.propTypes = {
    label: PropTypes.string.isRequired,
}

export default SuggestedAccount