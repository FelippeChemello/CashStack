import Link from 'next/link'
import Image from 'next/image'

import { Container, Content, Header, Img, Lead } from '../styles/pages/index'

import Logo from '../components/Logo'

export default function Index() {
    return (
        <Container>
            <Header>
                <div>
                    <Logo mode='blue' />
                    <div>
                        <Link href='/signin'>Acessar</Link>
                        <Link href='/signup'>Cadastrar</Link>
                    </div>
                </div>
            </Header>
            <Content>
                <div>
                    <h1>
                        Gerencie suas finanças de forma <strong>fácil</strong> e <strong>descomplicada</strong>
                    </h1>
                    <h2>Inicie hoje mesmo seu planejamento e alcance sua independencia financeira</h2>

                    <Lead>
                        <form>
                            <input placeholder='Insira seu e-mail'></input>
                            <button>Cadastrar</button>
                        </form>
                    </Lead>
                </div>
                <Img>
                    <Image src='/Mockup.png' height={420} width={560} />
                </Img>
            </Content>
        </Container>
    )
}
