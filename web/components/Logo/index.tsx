import { Container } from './styles'

interface LogoProps {
    mode?: 'dark' | 'light'
}

export default function Logo({ mode = 'dark' }: LogoProps) {
    return (
        <Container mode={mode}>
            <img src={`/logo-icon-${mode}.svg`} alt='GoBarber' />
            CashStack
        </Container>
    )
}
