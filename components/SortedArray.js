import CatItem from './CatItem'
import { Flipped } from 'react-flip-toolkit'



export default function SortedArray({ data }) {

    return (
        <Flipped flipId="sortedArray" >
            <div>
                {data.map(s => (
                    <CatItem key={s.id} data={s} />
                ))}

            </div>
        </Flipped>
    )
}