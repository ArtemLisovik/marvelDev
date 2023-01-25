import { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ComicsList from '../comicsList/ComicsList'

import decoration from '../../resources/img/vision.png';

const App = () => {
    const [characterId, setCharacterId] = useState(null)

    return (
        <Router>
            <div className="app">
                <AppHeader />
                <main>
                    <Routes>
                        <Route path='/characters' element={<RandomChar />}/>
                        <Route path='/comics' element={<ComicsList />}/>
                    </Routes>
                    <div className="char__content">
                        <CharList setCharacterId={setCharacterId} />
                        <CharInfo characterId={characterId} />
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision" />
                </main>
            </div>
        </Router>
    )
}

export default App;