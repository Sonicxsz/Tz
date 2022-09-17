import React from 'react';
import styles from './itemlist.module.css';
import Item from '../Item/item';
import {ItemListProps} from './itemListTypes'


function ItemList({title, subject}:ItemListProps) {
   const first = subject.slice(0,5)
   const second = subject.slice(5)
   
  return (
    <div className={styles.wrapper}>
            <h2>{title}</h2>
        <div className={styles.itemsWrapper}>
            <Item subject={first} sec={false}/>
            <Item subject={second} sec={true}/>
        </div>
    </div>
   
  )
}

export default ItemList