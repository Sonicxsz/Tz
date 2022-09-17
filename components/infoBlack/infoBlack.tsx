import styles from './infoBlack.module.css';

function InfoBlack() {
  return (
    <div className={styles.infoWrapper}>
      <h2>Итоговая аттестация</h2>
      <ul>
        <li>Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование по бизнес-проектированию)</li>
        <li>Защита итоговой аттестационной работы</li>
      </ul>
    </div>
  )
}

export default InfoBlack