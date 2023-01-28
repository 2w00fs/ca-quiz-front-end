import { Routes, Route } from "react-router-dom"
import Home from "@/routes/Home.jsx"
import Nav from "@/components/Nav/Nav.jsx"
import Subject from "@/pages/Subject/Subject.jsx"
import Auth from "@/routes/Auth.jsx"
import Quiz from "@/routes/Quiz.jsx"


function App() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/subject/:subjectId' element={<Subject />}/>
                <Route path='/quiz/:quizId' element={<Quiz />} />
            </Routes>
        </>
    )
}

export default App