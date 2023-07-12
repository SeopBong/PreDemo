import './SecondPart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function SecondPart(props) {
    return(
        <div className='box-with-text'>
        <FontAwesomeIcon icon={faUser} />
        {/* <div className='empty-box'></div> */}
        <p className='text'>{props.text}</p>

        </div>
        
    );
};

export default SecondPart;