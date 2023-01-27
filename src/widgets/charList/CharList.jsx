import { useState, useEffect, useRef } from 'react';

import useMarvelService from '../../services/hooks/useMarvelService'
import Spinner from '../../shared/ui/Spinner/Spinner';
import Character from '../../entities/character/Character';

import './charList.scss';

const CharList = (props) => {
    const [charList, setCharList] = useState([])
    const [offset, setOffset] = useState(210)

    const { loading, getAllCharacters } = useMarvelService()

    useEffect(() => {
        getAllCharacters().then(res => setCharList(res))
        setOffset(offset => offset + 9)
        onCharList()
    }, [])

    const onCharList = () => {
        getAllCharacters(offset).then(res => setCharList([...charList, ...res]))
        setOffset(offset => offset + 9)
    }

    const onSelectedChar = (id, e) => {
        props.setCharacterId(id)
        charactersRef.current.forEach(elem => {
            if (elem === e ) {
                elem.classList.add('selected')
            }
            else {
                elem.classList.remove('selected')
            }
        });
    }

    const charactersRef = useRef([])

    const isLoading = loading ? <Spinner /> : null
    const characters = charList.map((char, index) => <Character 
        charactersRef={charactersRef}
        key={index}
        char={char}
        onSelectedChar={onSelectedChar}
        />)

    return (
        <div className="char__list">
            <ul className="char__grid">
                {characters}
                {isLoading}
            </ul>
            <button disabled={loading} className="button button__main button__long"
                onClick={() => onCharList()}>
                <div className="inner">load more</div>
            </button>
        </div>
    )
}


// const Character = ({char, onSelectedChar, charactersRef}) => {
//     useEffect(() => {
//         charactersRef.current.push(charItemRef.current)
//     }, [])

//     const charItemRef = useRef()

//     const avatarStyle = char.avatar.indexOf('image_not_available') > -1 ? {objectFit: 'contain'} : null
    
//     return (
//         <li className="char__item"
//             ref={charItemRef}
//             onClick={(e) => onSelectedChar(char.id, e.currentTarget)}>
//             <img style={avatarStyle} src={char.avatar} alt="abyss" />
//             <div className="char__name">{char.name}</div>
//         </li>
//     )
// }

export default CharList;