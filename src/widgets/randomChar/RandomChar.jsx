import { useState, useEffect } from 'react';

import useMarvelService from '../../services/hooks/useMarvelService';
import Spinner from '../../shared/ui/Spinner/Spinner';
import Error from '../../shared/ui/Error/Error';

import './randomChar.scss';
import mjolnir from './mjolnir.png';

const RandomChar = () => {
    const [character, setCharacter] = useState(null)

    const { getCharacter, loading, error, clearError } = useMarvelService()

    useEffect(() => {
        onCharacter()
    }, [])

    const onCharacter = () => {
        clearError()
        getCharacter().then(res => setCharacter(res))
    }

    const isLoading = loading ? <Spinner /> : null
    const isError = error ? <Error /> : null
    const content = (character && !(loading || error)) ? <View char={character}/> : null

    return (
        <div className="randomchar">
            <div className="randomchar__block">
                {isLoading}
                {isError}
                {content}
            </div>
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br />
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button
                    className="button button__main"
                    onClick={onCharacter}>
                    <div className="inner">try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
            </div>
        </div>
    )
}

const View = ({ char }) => {

    const {name, avatar, descr} = char
    const modifiedDescr = descr.length > 210 ? `${descr.slice(0, 210)}...` : descr
    return (
        <>
        <img src={avatar} alt="Random character" className="randomchar__img" />
        <div className="randomchar__info">
            <p className="randomchar__name">{name}</p>
            <p className="randomchar__descr">{modifiedDescr}</p>
            <div className="randomchar__btns">
                <a href="#" className="button button__main">
                    <div className="inner">homepage</div>
                </a>
                <a href="#" className="button button__secondary">
                    <div className="inner">Wiki</div>
                </a>
            </div>
        </div>
    </>
    )
}



export default RandomChar;