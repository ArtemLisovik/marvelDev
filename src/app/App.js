import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import AppHeader from "../widgets/appHeader/AppHeader";
import {ComicsPage, CharactersPage, ComicSoloPage} from '../pages'

const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path='/' element={<CharactersPage />}/>
                        <Route path='/comics' element={<ComicsPage />}/>
                            <Route path='/comics/:id' element={<ComicSoloPage/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;