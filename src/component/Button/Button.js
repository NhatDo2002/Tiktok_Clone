import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

function Button({ to, href, primary = false, forVideo = false,rounded = false, small = false, disabled = false, large = false, text = false, outline = false, children, onClick, rightIcon, leftIcon, className, ...passProps }){
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    }

     

    if(to){
        props.to = to
        Comp = Link
    }else if(href){
        props.href = href
        Comp = "a"
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        forVideo,
        small,
        large,
        text,
        disabled,
        rounded,
    })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

Button.propTypes = {
    to: PropTypes.string, 
    href: PropTypes.string, 
    primary: PropTypes.bool,
    rounded: PropTypes.bool,
    forVideo: PropTypes.bool, 
    small: PropTypes.bool, 
    disabled: PropTypes.bool, 
    large: PropTypes.bool, 
    text: PropTypes.bool, 
    outline: PropTypes.bool, 
    children: PropTypes.node.isRequired, 
    onClick: PropTypes.func, 
    rightIcon: PropTypes.node, 
    leftIcon: PropTypes.node, 
    className: PropTypes.string
}

export default Button;