import useRequest from "./useRequest"

const useMarvelService = () => {

    const {loading, error, request, clearError} = useRequest()

    const getCharacter = async (id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)) => {
        const result = await request(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=b9cd5ff800088663996fca66ed987b75`)
        return _modifiedCharacter(result.data.results[0])
    }

    const getAllCharacters = async (offset = 210) => {
        const result = await request(`https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=${offset}&apikey=b9cd5ff800088663996fca66ed987b75`)
        const modifiedList = result.data.results.map(char => _modifiedCharacter(char))
        return modifiedList
    }

    const getAllComics = async () => {
        const result = await request(`https://gateway.marvel.com:443/v1/public/comics?limit=9&apikey=b9cd5ff800088663996fca66ed987b75`)
        const modifyedComics = result.data.results.map(comic => _modifyComics(comic))
        return modifyedComics
    }

    const _modifiedCharacter = (char) => {
        return {
            name: char.name,
            id: char.id,
            descr: char.description ? char.description : 'There is no information about this character yet.',
            avatar:`${char.thumbnail.path}.${char.thumbnail.extension}`,
            comics: char.comics.items
        }
    }
    
    const _modifyComics = (comics) => {
        return {
            id: comics.id,
            title: comics.title,
            descr: comics.description,
            avatar: `${comics.thumbnail.path}.${comics.thumbnail.extension}`

        }
    }

    return {error, loading, getCharacter, clearError, getAllCharacters, getAllComics}
}

export default useMarvelService