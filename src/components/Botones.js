import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';
import firebase from '../firebase';

const MainBotones = ({name, referencia}) => {
    const getOrder = () => {
        firebase.firestore()
        .collection('tryreactfire').add({name: 'Roxana', edad: 26})
    }    

    return (
        <div className="containerBtn">         
            <Link to={referencia}>
                <button className="btnMain" onClick={getOrder} >
                    {name}
                </button>
            </Link>
        </div>        
    )
}

export default MainBotones;