import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FiArrowDownCircle, FiDollarSign, FiInfo, FiMenu, FiArrowUpCircle } from 'react-icons/fi'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import {
    Container,
    Header,
    HeaderContent,
    UpperContent,
    Categories,
    Title,
    Description,
    Category,
    Total,
    Value,
    InputArea,
} from '../styles/pages/dashboard'

import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Card from '../components/MoneyCard'

import { useAuth } from '../hooks/Auth'
import api from '../services/api'
import AddTransaction from '../components/AddTransaction'

interface Appointment {
    id: string
    date: string
    hourAsText: string
    user: {
        name: string
        avatarUrl: string
    }
}

type InputTypes = 'Category' | 'Transaction'

const Dashboard: React.FC = () => {
    const { signOut, user } = useAuth()
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [input, setInput] = useState<InputTypes>('Transaction')

    const handleMonthChange = useCallback((month: Date) => {
        setCurrentMonth(month)
    }, [])

    const formattedMonth = useMemo(() => {
        return format(currentMonth, 'MMMM', { locale: ptBR }).charAt(0).toUpperCase() + format(currentMonth, 'MMMM', { locale: ptBR }).slice(1)
    }, [currentMonth])

    return (
        <Container>
            <Header>
                <HeaderContent>
                    <Logo mode='light' />

                    <Menu />
                </HeaderContent>
                <h1 onClick={() => console.log('Trocar mês')}>{formattedMonth}</h1>
                <HeaderContent>
                    <Card title='Entradas' value='17400.50' icon={FiArrowUpCircle} iconColor='#12A454' />
                    <Card title='Saídas' value='7400.50' icon={FiArrowDownCircle} iconColor='#E83F5B' />
                    <Card title='Total' value='-1000.00' icon={FiDollarSign} iconColor='#E83F5B' />{' '}
                    {/* Total se for negatio mostra vermelho, se for positivo mostra verde */}
                </HeaderContent>
            </Header>

            <UpperContent>
                <Categories>
                    <Title>
                        <a>
                            <img src='/plus-circle.svg' alt='Adicionar Categoria' />
                        </a>
                        <h1>Categorias</h1>
                    </Title>

                    <Description>
                        <span>Título</span>
                        <span>Planejado</span>
                        <span>Disponível</span>
                        <span>Utilizado</span>
                    </Description>

                    <Category>
                        <strong>16 caracteres</strong>
                        <span>R$ 12.000,00</span>
                        <Value greaterThanZero={true}>R$ 10.000,00</Value>
                        <span>R$ 2.000,00</span>
                        <FiMenu size={24} />
                    </Category>

                    <Category>
                        <strong>Mensais</strong>
                        <span>R$ 12.000,00</span>
                        <Value greaterThanZero={true}>R$ 4.000,00</Value>
                        <span>R$ 8.000,00</span>
                        <FiMenu size={24} />
                    </Category>

                    <Category>
                        <strong>Outros</strong>
                        <span>R$ 12.000,00</span>
                        <Value greaterThanZero={false}>R$ -912.000,00</Value>
                        <span>R$ 24.000,00</span>
                        <FiMenu size={24} />
                    </Category>

                    <Total>
                        <div>
                            <strong>Total</strong>
                        </div>
                        <div>
                            <div className='data'>
                                <strong>R$ 12.000,00</strong>
                                <FiInfo size={16} />
                            </div>
                        </div>
                        <div>
                            <div className='data'>
                                <strong>Extra</strong>
                                <Value greaterThanZero={true}>R$ 2.000,00</Value>
                                <FiInfo size={16} />
                            </div>
                            <div className='data'>
                                <strong>Conta</strong>
                                <Value greaterThanZero={false}>R$ -122.000,00</Value>
                                <FiInfo size={16} />
                            </div>
                        </div>
                        <div>
                            <div className='data'>
                                <strong>R$ 12.000,00</strong>
                                <FiInfo size={16} />
                            </div>
                        </div>
                    </Total>
                </Categories>

                <InputArea>
                    <AddTransaction />
                </InputArea>
            </UpperContent>
        </Container>
    )
}

export default Dashboard
