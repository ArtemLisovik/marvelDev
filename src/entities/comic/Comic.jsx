
import { Link } from "react-router-dom"

const Comic = ({comic}) => {
    return (
        <Link>
            <li className="comics__item">
                <a href="#">
                    <img src={comic.avatar} alt="ultimate war" className="comics__item-img" />
                    <div className="comics__item-name">{comic.title}</div>
                    <div className="comics__item-price">9.99$</div>
                </a>
            </li>
        </Link>
    )
}

export default Comic