import React, { useState } from 'react'
import Card from '@/components/Card/Card.jsx'
import './style/EditFlashcardForm.css'
import TextArea from '@/components/TextArea/TextArea.jsx'
import Line from '@/components/Line/Line.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import ErrorMessage from '@/components/ErrorMessage/ErrorMessage.jsx'
import ActionButton from '@/components/ActionButton/ActionButton.jsx'


const EditFlashcardForm = ({ flashcard, setQuiz, action }) => {
    const [ question, setQuestion ] = useState(action === 'edit' ? flashcard.question : '')
    const [ answerOptions, setAnswerOptions ] = useState(action === 'edit' ? [...flashcard.answerOptions] : [{ text: '', isCorrectOption: true }])
    const [ takesTextInput, setTakesTextInput ] = useState(action === 'edit' ? flashcard.takesTextInput : true)
    const [ errorMessage, setErrorMessage ] = useState(null)

    const { quizId, flashcardId } = useParams()

    const nav = useNavigate()

    const answerChangeHandler = event => {
        event.preventDefault()
        let updatedAnswerOptions = [...answerOptions]
        let answerElements = event.target.parentNode.parentNode.parentNode.getElementsByTagName("textarea")
        let index
        for (let i in answerElements) {
            if (answerElements[i] === event.target) {
                index = i
                break
            }
        }
        updatedAnswerOptions[index].text = event.target.value
        setAnswerOptions(updatedAnswerOptions)
    }

    const questionChangeHandler = event => {
        event.preventDefault()
        setQuestion(event.target.value)
    }

    const getAnswerOptions = () => {
        let answerList = []
        for (let index in answerOptions) {
            answerList.push(
                <div className='answer-container'>
                    {answerOptions.length === 1 ? null : <input checked={answerOptions[index].isCorrectOption} className='is-correct-input' type="radio" onChange={onChangeHandlerIsCorrectBtn} />}
                    <TextArea value={answerOptions[index].text} onChange={answerChangeHandler} rows='1' />
                    {answerOptions.length === 1 ? null : <div className='flashcard-field-button remove-field-button' onClick={handleClickRemoveField}><p>-</p></div>}
                </div>
            )
        }
        return answerList
    }

    function handleClickRemoveField(event) {
        let answerList = [...answerOptions]
        let btns = event.currentTarget.parentNode.parentNode.parentNode.getElementsByClassName("remove-field-button")
        for (let i in btns) {
            if (btns[i] === event.currentTarget) {
                answerList.splice(i, 1)
                setAnswerOptions(answerList)
                return
            }
        }
    }

    function handleClickAddField(event) {
        console.log('here')
        let answerList = [...answerOptions]
        answerList.push({text: '', isCorrectOption: false})
        setAnswerOptions(answerList)
    }

    function onChangeHandlerIsCorrectBtn(event) {
        let answerList = [...answerOptions]
        let btns = event.currentTarget.parentNode.parentNode.parentNode.getElementsByClassName("is-correct-input")
        for (let i = 0; i < answerList.length; i++) {
            answerList[i].isCorrectOption = false
        }
        for (let i = 0; i < btns.length; i++) {
            if (btns[i] === event.currentTarget) {
                answerList[i].isCorrectOption = event.currentTarget.checked
                setAnswerOptions(answerList)
                return
            }
        }
    }

    const singleAnswerTypeInputChange = (event) => {
        if (event.target.value === 'true') {
            setTakesTextInput(true)
        } else {
            setTakesTextInput(false)
        }
    }

    const validationCheck = () => {
        if (!question || answerOptions.find(answerOption => answerOption.text === '')) {
            setErrorMessage('Question and answers cannot be blank')
            return false
        }

        if (!answerOptions.find(answerOption => answerOption.isCorrectOption === true)) {
            setErrorMessage('A correct answer needs to be selected')
            return false
        }
        return true
    }

    const editSubmitHandler = async (event) => {
        if (!validationCheck()) return
        event.preventDefault()
        let token = localStorage.getItem('jwtToken')
        let res = await fetch(import.meta.env.VITE_API_URL + `quiz/${quizId}/flashcard/${flashcardId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ question: question, answerOptions: answerOptions, takesTextInput: takesTextInput })
        })
        let json = await res.json()
        if (res.status === 200) {
            if (!json.flashcards.find(flashcard => flashcard._id === flashcardId)) {
                setQuiz(json)
                nav(`/quiz/${quizId}/edit`)
            } else {
                setErrorMessage('Unable to update flashcard')
            }
        } else if (res.status === 500) {
            setErrorMessage('Unable to update flashcard')
        } else if (res.status === 401) {
            nav('/auth/login')
        } else if (res.status === 404) {
            setErrorMessage('Quiz or flashcard not found')
        }
    }

    const addSubmitHandler = async (event) => {
        if (!validationCheck()) return
        event.preventDefault()
        let token = localStorage.getItem('jwtToken')
        let res = await fetch(import.meta.env.VITE_API_URL + `quiz/${quizId}/flashcard`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ question: question, answerOptions: answerOptions, takesTextInput: takesTextInput })
        })
        let json = await res.json()
        if (res.status === 201) {
            setQuiz(json)
            nav(`/quiz/${quizId}/edit`)
        } else if (res.status === 500) {
            setErrorMessage('Unable to update flashcard')
        } else if (res.status === 401) {
            nav('/auth/login')
        }
    }


    return (
        <Card className='edit-flashcard-form'>
            <form className='question'>
                <h4>Question</h4>
                <TextArea value={question} onChange={questionChangeHandler} rows='1' />
            </form>
            <Line />
            <form className='answers'>
                <h4>{answerOptions.length > 1 ? 'Answers' : 'Answer'}</h4>
                {answerOptions.length > 1 ? <p className='correct-answer-prompt'>Select the correct answer:</p> : null}
                {getAnswerOptions()}
            </form>
            {answerOptions.length > 3 ? null : <div onClick={handleClickAddField} className='flashcard-field-button add-field-button'><p>+</p></div>}
            {
                answerOptions.length > 1 ? null : (
                    <form className='single-answer-prompt-container'>
                        <p>Which type of single-answer question?</p>
                        <span>
                            <input checked={takesTextInput} onChange={singleAnswerTypeInputChange} className='single-answer-type-input' type="radio" id='textInput' name='singleAnswerPrompt' value={true} />
                            <label htmlFor="textInput">User inputs exact text</label>
                        </span>
                        <span>
                            <input checked={!takesTextInput} onChange={singleAnswerTypeInputChange} className='single-answer-type-input' type="radio" id='honestySystem' name='singleAnswerPrompt' value={false} />
                            <label htmlFor="honestySystem">Honesty System</label>
                        </span>
                    </form>
                )
            }
            <ErrorMessage message={errorMessage} />
            <ActionButton onClick={action === 'edit' ? editSubmitHandler : addSubmitHandler} className='edit-flashcard-submit' type='1' size='1'>Submit</ActionButton>
        </Card>
    )
}

export default EditFlashcardForm