import Tippy from '@tippyjs/react/headless';
import classNames from "classnames/bind"
import { useState } from 'react'

import styles from "./Menu.module.scss"
import PropTypes from "prop-types"
import { Wrapper as PopperWrapper} from "~/component/Popper" 
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles)

const defaultFn = () => {}

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }){
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]


    const renderItems = () => {
        return current.data.map((item, index)=> {
            const isParent = !!item.children
            return <MenuItem key={index} data={item} onClick={() => {
                if(isParent){
                    setHistory(prev => [...prev, item.children])
                } else {
                    onChange(item)
                }
            }}/>
        })
    }

    //Reset to first page of menu
    const handleResetToFirstPage = () => {
        setHistory(prev => prev.slice(0, 1))
    }

    return (
        <Tippy 
            offset={[10,10]}
            interactive
            placement="bottom-end"
            hideOnClick = {hideOnClick}
            delay={[0, 500]}
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className = {cx('menu-popper')}>
                        {history.length > 1 && 
                            <Header 
                                title={current.title} 
                                onBack={() => {
                                    setHistory(prev => prev.slice(0, prev.length -1))
                                }} 
                            />
                        }
                        <div className={cx("menu-scrollable")}>
                            {renderItems()}
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onHide={handleResetToFirstPage}
        >
            {children}
        </Tippy>
    )
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
}

export default Menu