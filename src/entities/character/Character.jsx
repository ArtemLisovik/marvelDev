import { useEffect, useRef } from "react"

const Character = ({char, onSelectedChar, charactersRef}) => {

    useEffect(() => {
        charactersRef.current.push(charItemRef.current)
    }, [])

    const charItemRef = useRef()

    const avatarStyle = char.avatar.indexOf('image_not_available') > -1 ? {objectFit: 'contain'} : null
    
    return (
            <li key={char.id} className="char__item"
                ref={charItemRef}
                onClick={(e) => onSelectedChar(char.id, e.currentTarget)}>
                <img style={avatarStyle} src={char.avatar} alt="abyss" />
                <div className="char__name">{char.name}</div>
            </li>
    )
}

export default Character