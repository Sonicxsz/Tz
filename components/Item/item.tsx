import styles from './item.module.css';
import { useState } from 'react';
import cn from 'classnames';
import {ItemProps} from './itemTypes';



function Item({ subject, sec = false }:ItemProps) {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button onClick={() => {
        setActive(!active)
      }}
        className={cn(styles.module, {
          [styles.module_active]: active
        })}>

        <span>{sec ? '2 модуль' : '1 модуль'}</span>
      </button>
      <div className={cn(styles.ulWrapper, {
        [styles.ulWrapper_active]: active
      })}>
        <ul className={styles.ul}>
          {subject.map((i, ind) => {
            return <li key={ind} className={styles.li}>{i.string}</li>
          })}

        </ul>
      </div>
    </div>
  )
}

export default Item