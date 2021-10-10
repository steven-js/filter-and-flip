import styles from '../styles/Home.module.css'
import { Flipped } from 'react-flip-toolkit'


export default function CatItem({ data }) {
    // console.log(data)
    const { title, bodyCopy, id } = data

    return (
        <Flipped flipId={id} key={bodyCopy}>
            <li
                className={styles.card}>
                <h2>{title}</h2>
                <p>{bodyCopy}</p>
            </li>
        </Flipped>
    )
}