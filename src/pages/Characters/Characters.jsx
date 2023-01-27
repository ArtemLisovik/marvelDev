import {useState} from 'react'

import RandomChar from "../../entities/randomChar/RandomChar"
import CharInfo from "../../entities/charInfo/CharInfo"
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