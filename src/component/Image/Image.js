import { forwardRef, useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import images from '~/assets/images'
import styles from './Image.module.scss'

const Image = forwardRef(({ className, src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState("")

    const handleError = () => {
        setFallback(images.noImage)
    }

    return (
        <img className={classNames(styles.wrapper, className)} ref={ref} src={fallback || src} alt={alt} {...props} onError={handleError} />
    )
})

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
}

export default Image