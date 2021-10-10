import CatItem from './CatItem'



export default function SortedArray({ data }) {

    return (
        <>
            {data.map(s => (
                <CatItem key={s.id + 2} data={s} />
            ))}
        </>
    )
}