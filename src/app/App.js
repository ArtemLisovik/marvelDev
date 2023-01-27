import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import AppHeader from "../widgets/appHeader/AppHeader";
import ComicsList from '../widgets/comicsList/ComicsList';
import Characters from "../pages/Characters/Characters";

const App = () => {


    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path='/' element={<Characters />}/>
                        <Route path='/comics' element={<ComicsList />}/>
                    </Routes>
                </main>
            </div>
        </Router>
    )
}

export default App;