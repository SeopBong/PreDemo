import React from 'react';
import './FiveAdd.css';
import image from './1.png';

function FiveAdd(props) {
    return(
        <div className='fiveAddCard'>
            <img className='brainImage' src={image} alt='이미지'></img>
            <div className='text-card1'>
                <h1>여기에 글 쫘라라라라라락?</h1>
                <h3>알파고 AI기술의 기본이 되는 인공신경망 기술은 인간의 두뇌를 흉내내서</h3>
                <h3>스스로 학습하고 블라블라</h3>
            </div>

        </div>
        )
}

export default FiveAdd;