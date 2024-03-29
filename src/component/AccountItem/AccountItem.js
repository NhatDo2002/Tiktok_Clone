import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

import Image from "~/component/Image";
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles)

function AccountItem({ data }){
    return (
            <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
                <Image
                    alt="Avatar"
                    src={data.avatar}
                    className={cx("avatar")} 
                />
                <div className={cx("info")}>
                    <h4 className={cx("name")}>
                        <span>{data.full_name}</span>
                        {data.tick && <FontAwesomeIcon icon={faCircleCheck} className={cx("check")} />}
                    </h4>
                    <span className={cx("username")}>{data.nickname}</span>
                </div>
            </Link>
    )
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AccountItem;