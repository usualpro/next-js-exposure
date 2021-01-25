import Link from 'next/link';

export default function Dogs({breeds}) {
    return <h1>HELLO DOGS {JSON.stringify(breeds)}</h1>
}

Dogs.getInitialProps = async (ctx) => {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    const json = await res.json();
    return { breeds: json.message }
} 