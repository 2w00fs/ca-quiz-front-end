import React, { useEffect, useRef, useState } from 'react'
import './style/ContentHeader.css'
import { Link, useLocation } from 'react-router-dom'
import Line from '@/components/Line/Line.jsx'
import ActionButton from '@/components/ActionButton/ActionButton.jsx'

const Title = ({ resource, heading, subheading, links, updateName, deleteHandler, addChildHandler, childResourceType }) => {
    const [ value, setValue ] = useState('')
    const [ inEditMode, setInEditMode ] = useState(false)
    const inputElement = useRef(null)

    let location = useLocation()

    useEffect(() => {
        if (resource) setValue(resource.name)
    }, [resource])

    useEffect(() => {
        if (location.state && location.state.inEditMode) {
            setInEditMode(true)
        }
    }, [])

    useEffect(() => {
        if (inputElement.current) {
          inputElement.current.focus()
          inputElement.current.select()
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
        if (!updateName) return
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

    const inputLoadHandler = (event) => {
        console.log('here')
        event.target.select()
    }

    return (
        <div className='content-header'>
            <div className='content-header-wrapper'>
                <div className='content-header-left'>
                    <h3>{subheading}</h3>
                    {!inEditMode ? <h1 className={updateName ? 'editable-heading' : 'non-editable-heading'} onClick={headingClickHandler}>{heading}</h1> : <form onSubmit={submitHandler}><input ref={inputElement} onLoad={inputLoadHandler} onBlur={submitHandler} onChange={onChangeHandler} type="text" value={value} /></form>}
                    {getLinks()}
                </div>
                <div className='content-header-right'>
                    {deleteHandler ? <ActionButton onClick={deleteHandler} size="1" type="2">Delete</ActionButton> : null}
                    {addChildHandler ? <ActionButton onClick={addChildHandler} size="1" type="1">Add {childResourceType}</ActionButton> : null}
                </div>
            </div>
            <Line />
        </div>
    )
}

export default Title