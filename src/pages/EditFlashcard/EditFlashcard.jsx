import React from 'react'
import './style/EditFlashcard.css'

const EditFlashcard = () => {
        return (
            <>
                <div>

                </div>
                <main>
                    <Title subheading='Quiz List' heading={subject.name ? subject.name.toUpperCase() : ''} />
                    <EditFlashcardMultipleChoice />
                </main>
            </>
        )
}

export default EditFlashcard