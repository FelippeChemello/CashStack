import Link from 'next/link'

export default function Index() {
    return (
        <main>
            <h1> Hello World </h1>
            <Link href='/signin'>Login</Link>
        </main>
    )
}
