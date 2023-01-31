import React, { useState } from 'react'
import Card from '@/components/Card/Card.jsx'
import Textarea from 'react-expanding-textarea'
import './style/EditFlashcardMultipleChoice.css'
import Button from '@/components/Button/Button.jsx'
import TextArea from '@/components/TextArea/TextArea.jsx'


const EditFlashcardMultipleChoice = ({ flashcard, setFlashcardById }) => {
    const [ question, setQuestion ] = useState(flashcard.question)
    const [ answers, setAnswers ] = useState([...flashcard.answers])

    const answerChangeHandler = event => {
        event.preventDefault()
        let updatedAnswers = [...answers]
        let answerElements = event.target.parentNode.getElementsByTagName("textarea")
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

    const getAnswers = () => {
        return answers.map((answer, index) => <TextArea value={answers[index].text} onChange={answerChangeHandler} rows='1' />)
    }

    return (
        <Card>
            <div className='edit-flashcard-multiple-choice-container'>
                <form className='question'>
                    <h4>Question</h4>
                    <TextArea value={question} rows='1' />
                </form>
                <form className='answers'>
                    <h4>Answers</h4>
                    {getAnswers()}
                </form>
                <Button type='1' size='1'>Submit</Button>
            </div>
        </Card>
    )
}

export default EditFlashcardMultipleChoice