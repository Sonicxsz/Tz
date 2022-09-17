import ItemList from '../components/itemList/itemList';
import Title from '../components/title/title';
import styles from '../styles/Home.module.css';
import InfoBlack from '../components/infoBlack/infoBlack';
import InfoRed from '../components/infoRed/infoRed';
import { transformData } from '../utils/transform';

export default function Home({ data }) {

  return (
    <div className={styles.container}>
      <Title />
      {data.map((i, ind) => {
        return <ItemList key={ind} title={i.title} subject={i.specializedSubjects} />
      })}
      <InfoRed />
      <InfoBlack />
    </div>
  )
}


export async function getStaticProps(context) {
  let res = await fetch('https://api-moscow-mba.herokuapp.com/products?_limit=100')
  res = await res.json()
  const data = transformData(res)
  return {
    props: { data }
  }
}
