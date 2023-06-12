import './SecondPart.css';

function SecondPart(props) {
    return(
        <div className='box-with-text'>
        <div className='empty-box'></div>
        <p className='text'>{props.text}</p></div>
    )
};

export default SecondPart;