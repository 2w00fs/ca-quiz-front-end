import React, { useEffect, useRef, useState } from 'react'
import './style/ContentHeader.css'
import Button from '@/components/Button/Button.jsx'
import { Link } from 'react-router-dom'
import Line from '@/components/Line/Line.jsx'

const Title = ({ resource, heading, subheading, links, updateName, deleteHandler, addChildHandler, childResourceType }) => {
    const [ value, setValue ] = useState('')
    const [ inEditMode, setInEditMode ] = useState(false)
    const inputRef = useRef(null)

    // Subjects, HOME
    // Quiz List, GERMAN, Home, Subject
    // Quiz, QUIZ ONE, Subject, German

    useEffect(() => {
        if (resource) setValue(resource.name)
    }, [resource])

    useEffect(() => {
        if (inEditMode && !inputRef) {
            inputRef.current.focus()
        }
    }, [inEditMode])

    const onChangeHandler = (event) => {
        setValue(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (value !== '') {
            updateName(value)
            setInEditMode(false)
        } else {
            setValue(resource.name)
            setInEditMode(false)
        }
    }

    const headingClickHandler = (event) => {
        event.preventDefault()
        setInEditMode(true)
    }

    const getLinks = () => {
        if (!links || links.length === 0) {
            return null
        } else {
            return (
                <div className='links-wrapper'>
                    {links.map((link, index) => {
                        return (
                            <>
                                <Link to={link.path}>{link.text}</Link>
                                {index < links.length - 1 ? <div className='separator'>/</div> : null}
                            </>
                        )
                    })}
                </div>
            )
        }
    }

    return (
        <div className='content-header'>
            <div className='content-header-wrapper'>
                <div className='content-header-left'>
                    <h3>{subheading}</h3>
                    {!inEditMode ? <h1 onClick={headingClickHandler}>{heading}</h1> : <form onSubmit={submitHandler}><input ref={inputRef} onBlur={submitHandler} onChange={onChangeHandler} type="text" value={value} /></form>}
                    {getLinks()}
                </div>
                <div className='content-header-right'>
                    {deleteHandler ? <Button onClick={deleteHandler} size="1" type="2">Delete</Button> : null}
                    {addChildHandler ? <Button onClick={addChildHandler} size="1" type="1">Add {childResourceType}</Button> : null}
                </div>
            </div>
            <Line />
        </div>
    )
}

export default Title