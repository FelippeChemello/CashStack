import Image from 'next/image'

import { Container } from './styles'

interface LogoProps {
    mode?: 'dark' | 'light' | 'blue'
}

export default function Logo({ mode = 'dark' }: LogoProps) {
    return (
        <Container mode={mode}>
            <Image src={`/logo-icon-${mode}.svg`} width={56} height={56} alt='CashStack' />
            <span>CashStack</span>
        </Container>
    )
}
