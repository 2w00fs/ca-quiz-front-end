import { Routes, Route } from "react-router-dom"
import Nav from "./components/Nav/Nav.jsx"
import Subject from "./components/Subject/Subject.jsx"
import Auth from "./components/Auth/Auth.jsx"
import Quiz from "./components/Quiz/Quiz.jsx"
import Home from "./components/Home/Home.jsx"


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