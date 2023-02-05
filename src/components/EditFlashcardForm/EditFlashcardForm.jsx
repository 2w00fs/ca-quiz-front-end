import React, { useState } from 'react'
import Card from '@/components/Card/Card.jsx'
import './style/EditFlashcardForm.css'
import Button from '@/components/Button/Button.jsx'
import TextArea from '@/components/TextArea/TextArea.jsx'
import Line from '@/components/Line/Line.jsx'


const EditFlashcardForm = ({ flashcard, setFlashcardById }) => {
    const [ question, setQuestion ] = useState(flashcard.question)
    const [ answers, setAnswers ] = useState([...flashcard.answerOptions])

    console.log(flashcard)

    const answerChangeHandler = event => {
        event.preventDefault()
        console.log(answers)
        let updatedAnswers = [...answers]
        let answerElements = event.target.parentNode.parentNode.parentNode.getElementsByTagName("textarea")
        let index
        for (let i in answerElements) {
            if (answerElements[i] === event.target) {
                index = i
                break
            }
        }
        updatedAnswers[index].text = event.target.value
        setAnswers(updatedAnswers)
    }

    const questionChangeHandler = event => {
        event.preventDefault()
        setQuestion(event.target.value)
    }

    const getAnswers = () => {
        let answerList = []
        for (let index in answers) {
            answerList.push(
                <div className='answer-container'>
                    {answers.length === 1 ? null : <input checked={answers[index].isCorrectOption} className='is-correct-input' type="radio" onChange={onChangeHandlerIsCorrectBtn} />}
                    <TextArea value={answers[index].text} onChange={answerChangeHandler} rows='1' />
                    <div className='flashcard-field-button remove-field-button' onClick={handleClickRemoveField}><p>-</p></div>
                </div>
            )
        }
        return answerList
    }

    function handleClickRemoveField(event) {
        let answerList = [...answers]
        let btns = event.currentTarget.parentNode.parentNode.parentNode.getElementsByClassName("remove-field-button")
        for (let i in btns) {
            if (btns[i] === event.currentTarget) {
                answerList.splice(i, 1)
                setAnswers(answerList)
                return
            }
        }
    }

    function handleClickAddField(event) {
        console.log('here')
        let answerList = [...answers]
        answerList.push({text: '', isCorrectOption: false})
        setAnswers(answerList)
    }

    function onChangeHandlerIsCorrectBtn(event) {
        let answerList = [...answers]
        let btns = event.currentTarget.parentNode.parentNode.parentNode.getElementsByClassName("is-correct-input")
        for (let i = 0; i < answerList.length; i++) {
            answerList[i].isCorrectOption = false
        }
        for (let i = 0; i < btns.length; i++) {
            if (btns[i] === event.currentTarget) {
                answerList[i].isCorrectOption = event.currentTarget.checked
                setAnswers(answerList)
                return
            }
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
                <h4>{answers.length > 1 ? 'Answers' : 'Answer'}</h4>
                {answers.length > 1 ? <p className='correct-answer-prompt'>Select the correct answer:</p> : null}
                {getAnswers()}
            </form>
            {answers.length > 3 ? null : <div onClick={handleClickAddField} className='flashcard-field-button add-field-button'><p>+</p></div>}
            {
                answers.length > 1 ? null : (
                    <form className='single-answer-prompt-container'>
                        <p>Which type of single-answer question?</p>
                        <span>
                            <input checked type="radio" id='textInput' name='singleAnswerPrompt' value='User inputs exact text' />
                            <label htmlFor="textInput">User inputs exact text</label>
                        </span>
                        <span>
                            <input type="radio" id='honestySystem' name='singleAnswerPrompt' value='Honesty system' />
                            <label htmlFor="honestySystem">Honesty System</label>
                        </span>
                    </form>
                )
            }
            <Button className='edit-flashcard-submit' type='1' size='1'>Submit</Button>
        </Card>
    )
}

export default EditFlashcardForm