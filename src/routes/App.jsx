import { Routes, Route } from "react-router-dom"
import Home from "@/routes/Home.jsx"
import Nav from "@/components/Nav/Nav.jsx"
import Subject from "@/pages/Subject/Subject.jsx"
import Auth from "@/routes/Auth.jsx"
import Quiz from "@/routes/Quiz.jsx"
import QuizHome from '../pages/QuizHome/QuizHome.jsx'
import TakeQuiz from '../pages/TakeQuiz/TakeQuiz.jsx'
import EditQuiz from '../pages/EditQuiz/EditQuiz.jsx'
import EditFlashcard from '../pages/EditFlashcard/EditFlashcard.jsx'
import Login from '@/pages/Login/Login.jsx'
import SignUp from '@/pages/SignUp/SignUp.jsx'
import SubjectList from '@/pages/SubjectList/SubjectList.jsx'
import AddSubject from '@/pages/AddSubject/AddSubject.jsx'
import QuizResult from "@/pages/QuizResult/QuizResult.jsx"


function App() {
    // const updateFlashcardLoader = async (category, content) => {
    //     // fetch from api
    //     redirect(flashcard/:flashcardId/update)
    //   }


    return (
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />}>
                    <Route index element={<SubjectList />} />
                    <Route path='subject/add' element={<AddSubject />} />
                </Route>
                <Route path='auth'>
                    <Route path='login' element={<Login />} />
                    <Route path='signup' element={<SignUp />} />
                </Route>
                <Route path='subject/:subjectId' element={<Subject />} />
                <Route path='quiz/:quizId' element={<Quiz />}>
                    <Route index element={<QuizHome />} />
                    <Route path='take' element={<TakeQuiz />} />
                    <Route path='result' element={<QuizResult />} />
                    <Route path='edit' element={<EditQuiz />} />
                    <Route path='flashcard/:flashcardId/edit' element={<EditFlashcard />} />
                    {/* <Route path='flashcard/:flashcardId/update' loader={updateFlashcardLoader} /> */}
                </Route>
            </Routes>
        </>
    )
}

export default App