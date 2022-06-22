import './style.css';
import { Link } from 'react-router-dom';

export default function Card(props:any) {
    return (
        <Link to={"details/"+props.name}>
            <div tabIndex={0} className="card">
                <span className='card_img'>
                    <img src={props.flag} alt={props.name}></img>
                </span>
                <span className='card_info'>
                    <h3>{props.name}</h3>
                    <ol>
                        <li><strong>Population:</strong> {props.population}</li>
                        <li><strong>Region:</strong> {props.region}</li>
                        <li><strong>Capital:</strong> {props.capital}</li>
                    </ol>
                </span>
            </div>
        </Link>
    )
}