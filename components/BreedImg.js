import useSWR from 'swr'

export default function BreedImage({ name }) {
    const getData = async (url) => {
        const response = await fetch(url);
        return await response.json();
    };
    const { data, error } = useSWR(`https://dog.ceo/api/breed/${name}/images/random`, getData)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <img src={data.message} />
}