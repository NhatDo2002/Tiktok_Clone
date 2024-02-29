import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from "classnames/bind"
import { useEffect, useState, useRef } from "react";

import styles from "./Search.module.scss"
import { Wrapper as PopperWrapper} from "~/component/Popper" 
import AccountItem from "~/component/AccountItem";
import { useDebounce} from "~/hooks";
import * as searchService from "~/utils/services/searchService"

const cx = classNames.bind(styles)

function Search(){
    const [searchValue, setSearchValue] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const debounce = useDebounce(searchValue, 500)

    const inputRef = useRef()

    useEffect(() => {
        if(!debounce.trim()){
            setSearchResult([])
            return;
        }
        
        const fetchApi = async () => {
            setLoading(true)

            const result = await searchService.search(debounce)
            setSearchResult(result)

            setLoading(false)
        }

        fetchApi()


    }, [debounce])

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleChange = (e) => {
        const searchValue = e.target.value
        if(!searchValue.startsWith(' ') || searchValue.trim()){
            setSearchValue(searchValue)
        }
    }

    return (
        //Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context if Tippy warning you
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx("search-title")}>
                                Accounts    
                            </h4>
                            {searchResult.map((result) => {
                                return <AccountItem key={result.id} data={result} />
                            })}
                            </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        className={cx('search-input')} 
                        type="text" placeholder="Search" 
                        spellCheck={false} 
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('search-clear')} onClick={() => {
                            setSearchValue("")
                            inputRef.current.focus()
                        }}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('search-loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    )
}

export default Search