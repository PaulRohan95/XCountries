import React from 'react';
import styles from './FlagCard.module.css';


function FlagCard({ name, flagImg, flagAltTxt }) {
  return (
    <div className={styles.countryCard}>
        <img 
        src={flagImg} 
        alt={flagAltTxt} 
        style={{ width: '100px', height: '100px' }} 
        />
        <h2>{name}</h2>
    </div>
  )
}

export default FlagCard;