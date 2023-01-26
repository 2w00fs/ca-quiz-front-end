import { createContext, useContext, useReducer } from "react"

let initialState = {
    user: {},
    subjects: [],
    quizzes: {},
    flashcards: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'setUser': {
            return {
                ...state, 
                user: action.data
            }
        }
        
        case 'removeUser': {
            return {
                ...state, 
                user: undefined
            }
        }
        
        case 'setSubjects': {
            return {
                ...state,
                subjects: action.data
            }
        }

        case 'addSubject': {
            return {
                ...state, 
                subjects: [...state.subjects, action.data]
            }
        }
        
        case 'removeSubject': {
            let subjects = [...state.subjects].filter(subject => subject._id !== action.data)
            return {
                ...state,
                subjects
            }
        }

        case 'updateSubjectName': {
            let subjects = [ ...state.subjects ]
            let index = subjects.findIndex(subject => subject._id === action.data.id)
            subjects[index] = action.data.subject
            return {
                ...state,
                subjects
            }
        }

        case 'setQuizzes': {
            let quizzes = { ...state.quizzes }
            quizzes[action.data.subjectId] = action.data.quizzes
            return {
                ...state,
                quizzes
            }
        }

        case 'addQuiz': {
            let quizzes = { ...state.quizzes }
            quizzes[action.data.subjectId].push(action.data.quiz)
            return {
                ...state,
                quizzes
            }
        }

        case 'removeQuiz': {
            let quizzes = { ...state.quizzes }
            quizzes[action.data.subjectId] = quizzes[action.data.subjectId].filter(quiz => quiz._id !== action.data.quizId)
            return {
                ...state,
                quizzes
            }
        }

        case 'updateQuizName': {
            let quizzes = { ...state.quizzes }
            let index = quizzes[action.data.subjectId].findIndex(quiz => quiz._id === action.data.quizId)
            quizzes[action.data.subjectId][index] = action.data.quiz
            return {
                ...state,
                quizzes
            }
        }

        case 'setFlashcards': {
            let flashcards = { ...state.flashcards }
            flashcards[action.data.quizId] = action.data.flashcards
            return {
                ...state,
                flashcards
            }
        }

        case 'addFlashcard': {
            let flashcards = { ...state.flashcards }
            flashcards[action.data.quizId].push(action.data.flashcard)
            return {
                ...state,
                flashcards
            }
        }

        case 'removeFlashcard': {
            let flashcards = { ...state.flashcards }
            flashcards[action.data.quizId] = flashcards[action.data.quizId].filter(flashcard => flashcard._id !== action.data.flashcardId)
            return {
                ...state,
                flashcards
            }
        }

        case 'updateFlashcard': {
            let flashcards = { ...state.flashcards }
            let index = flashcards[action.data.quizId].findIndex(flashcard => flashcard._id === action.data.flashcardId)
            flashcards[action.data.quizId][index] = action.data.flashcard
            return {
                ...state,
                flashcards
            }
        }
    }
}

const [store, dispatch] = useReducer(reducer, initialState)

const context = createContext()

const globalState = () => useContext(context)

export default { store, dispatch, globalState }