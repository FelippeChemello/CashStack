import Link from 'next/link'

export default function Index() {
    return (
        <main style={{ display: 'flex', flexDirection: 'column' }}>
            <h1> Hello World </h1>
            <Link href='/signin'>Login</Link>
            <Link href='/signup'>Cadastro</Link>
            <Link href='/dashboard'>Dashboard</Link>
        </main>
    )
}
