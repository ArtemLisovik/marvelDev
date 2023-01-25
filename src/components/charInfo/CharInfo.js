import { useState, useCallback, useEffect } from 'react'
import useMarvelService from '../../services/useMarvelService';
import Skeleton from '../skeleton/Skeleton'
import Spinner from '../Spinner/Spinner'

import './charInfo.scss';

const CharInfo = (props) => {
    const [selectedCharacter, setSelectedCharacter] = useState(null)

    useEffect(() => {
        onCharacterId()
    }, [props.characterId])

    const { getCharacter, loading } = useMarvelService()

    const onCharacterId = () => {
        if (props.characterId) {
            getCharacter(props.characterId).then(res => setSelectedCharacter(res))
        }
    }

    console.log(selectedCharacter)

    const isLoading = loading ? <Spinner /> : null
    const skeleton = !(selectedCharacter || loading) ? <Skeleton /> : null
    const content = (selectedCharacter && !loading) ? <View char={selectedCharacter}/> : null

    return (
        <div className="char__info">
            {skeleton}
            {isLoading}
            {content}
        </div>
    )
}

const View = ({char}) => {
    const comicsList = char.comics.map((comic, index) => (
        <li className="char__comics-item"
        key={index}>
           {comic.name}
        </li>
    )).slice(0, 10)

    return (
        <>
            <div className="char__basics">
                <img src={char.avatar} alt="abyss" />
                <div>
                    <div className="char__info-name">{char.name}</div>
                    <div className="char__btns">
                        <a href="#" className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href="#" className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {char.descr}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
               {comicsList}
            </ul>
        </>
    )
}

export default CharInfo;