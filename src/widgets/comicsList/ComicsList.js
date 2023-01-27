import { useEffect, useState } from "react"

import Comic from '../../entities/comic/Comic';
import useMarvelService from '../../services/hooks/useMarvelService';
import Spinner from '../../shared/ui/Spinner/Spinner'

import './comicsList.scss';

const ComicsList = () => {
    const [comicsList, setComicsList] = useState([])

    useEffect( async () => {
        getMoreComics()
  
    }, [])

    const getMoreComics = async () => {
        const newComicsList = await getAllComics()
        setComicsList(comicsList => [...comicsList,  ...newComicsList])
    }

    const {getAllComics, loading} = useMarvelService()

    const comicsListView = comicsList.map(comic => <Comic key={comic.id} comic={comic} />)
    const isLoading = loading ? <Spinner /> : null

    return (
        <div className="comics__list">
            <ul className="comics__grid">
                {isLoading}
                {comicsListView}
            </ul>
            <button className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;