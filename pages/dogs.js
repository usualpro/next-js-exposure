
export default function Dogs({ breeds }) {
    const List = () => <ul>
        {
            Object.keys(breeds).map((breedName, index) => <li key={index}>{breedName}</li>)
        }
    </ul>
    return <div>
        <List />
    </div>
}
Dogs.getInitialProps = async (ctx) => {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const json = await res.json();
    return { breeds: json.message }
}