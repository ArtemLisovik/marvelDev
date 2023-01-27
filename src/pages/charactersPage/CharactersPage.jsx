import {useState} from 'react'

import RandomChar from "../../widgets/randomChar/RandomChar"
import CharInfo from "../../widgets/charInfo/CharInfo"
import CharList from "../../widgets/charList/CharList"

import decoration from './vision.png';

const Characters = () => {
    const [characterId, setCharacterId] = useState(null)

    return (
        <>
            <RandomChar />
            <div className="char__content">
                <CharList setCharacterId={setCharacterId} />
                <CharInfo characterId={characterId} />
            </div>
            <img className="bg-decoration" src={decoration} alt="vision" />
        </>
    )
}

export default Characters