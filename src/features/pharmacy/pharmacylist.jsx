import { useDispatch, useSelector } from 'react-redux'
import styles from './pharmacy.module.css'
import { findeDrug, increment, decrement } from './parmacylist.slice'

export const DrugList = () => {
    const drugs = useSelector(state => state.drugs)
    const dispatch = useDispatch()
    return <>
        <h3>Drug list</h3>
        <input type="text" onChange={(e) => {
            e.preventDefault()
            dispatch(findeDrug(e.target.value))
        }} />
        <div className={styles.conatainer}>
            {
                drugs.map(drug => <div key={drug.id}>
                    <img src={drug.img} className={styles.photo} />
                    <p>{drug.name}</p>
                    <div className={styles.review}>
                        {Array(drug.review).fill(1).concat(Array(5 - drug.review).fill(0)).map((el, i) => (
                            <img
                                onClick={() => el == 1 ? dispatch(decrement(drug.id)) : dispatch(increment(drug.id))}
                                className={styles.star}
                                key={i}
                                src={el == 1 ? "https://cdn1.iconfinder.com/data/icons/christmas-flat-4/58/019_-_Star-256.png" : "https://cdn4.iconfinder.com/data/icons/multimedia-75/512/multimedia-19-256.png"} />
                        ))}
                    </div>

                </div>)
            }
        </div>

    </>
}