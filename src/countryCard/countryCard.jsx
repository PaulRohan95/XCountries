import React from 'react';
import styles from './countryCard.module.css';


function countryCard({ name, flagImg, flagAltTxt }) {
  return (
    <div className={styles.wrapper}>
        <img 
        src={flagImg} 
        alt={flagAltTxt} 
        style={{ width: '100px', height: '100px' }} 
        />
        <h2>{name}</h2>
    </div>
  )
}

export default countryCard;