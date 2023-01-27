import { Routes, Route, useParams, useNavigate } from "react-router-dom"
import { store, dispatch, useGlobalState, Context } from './globalState.jsx'


function App() {
    useEffect(() => {
        // fetchSubjects
        // setSubjects
    }, [])

    return (
        <Context.Provider value={{store, dispatch}}>
            <Nav subjects={subjects} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/subject/:subjectId' element={<Subject />}/>
                <Route path='/quiz/:quizId' element={<Quiz />} />
            </Routes>
        </Context.Provider>
    )
}

export default App