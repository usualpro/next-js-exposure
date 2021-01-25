
import BreedImage from '../components/BreedImg';
import styles from '../styles/Dog.module.scss'

export default function Dogs({ breeds }) {
    const List = () => <div className={styles.listDogs}>
        {
            Object.keys(breeds).map(
                (breedName, index) => {
                return <div key={index}>
                    <BreedImage name={breedName} />
                </div>
                }
            )
        }
    </div>
    return <div>
        <List />
    </div>
}
Dogs.getInitialProps = async (ctx) => {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const json = await res.json();
    return { breeds: json.message }
}