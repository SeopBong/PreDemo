import './FivePart.css';

function FivePart(props) {
    let moreDate= ['추가내용1','추가내용2','추가내용3'];
    return(
        <div className='box-with-text'>
        <div className='empty-box'></div>
        <p className='text'>{props.text}</p>
        {moreDate.map((data, index) => (
            <p key={index}>{data}</p>
        ))}
        </div>
    );
};

export default FivePart;