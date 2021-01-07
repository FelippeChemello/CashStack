import Link from 'next/link'
import Image from 'next/image'

export default function Wip() {
    return (
        <>
            <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', height: '100vh' }}>
                <h1>
                    Parece que você clicou em <br />
                    alguma funcionalidade em construção...
                </h1>
                <br />
                <h2>
                    Em breve disponibilizaremos esta função, <br />
                    por enquanto <Link href='dashboard'>clique aqui</Link> para voltar ao Dashboard
                </h2>

                <div>
                    <Image height={300} width={320} src='/money-tree-animation.gif' alt='Arvore de dinheiro' />
                </div>
            </main>
        </>
    )
}
