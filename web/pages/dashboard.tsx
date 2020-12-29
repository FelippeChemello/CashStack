import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { FiArrowDownCircle, FiDollarSign, FiInfo, FiMenu, FiArrowUpCircle, FiChevronDown } from 'react-icons/fi'
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
    Info,
    ReactSelect,
} from '../styles/pages/dashboard'

import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Card from '../components/MoneyCard'
import AddTransaction from '../components/AddTransaction'

import { useAuth } from '../hooks/Auth'
import api from '../services/api'

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

                <ReactSelect
                    classNamePrefix='month-selector'
                    placeholder='Dezembro | 2020'
                    options={[
                        { value: '1', label: 'Janeiro | 8888' },
                        { value: '2', label: 'Fevereiro | 8888' },
                        { value: '3', label: 'Março | 8888' },
                        { value: '4', label: 'Abril | 8888' },
                        { value: '5', label: 'Maio | 8888' },
                        { value: '6', label: 'Junho | 8888' },
                        { value: '7', label: 'Julho | 8888' },
                        { value: '8', label: 'Agosto | 8888' },
                        { value: '9', label: 'Setembro | 8888' },
                        { value: '10', label: 'Outubro | 8888' },
                        { value: '11', label: 'Novembro | 8888' },
                        { value: '12', label: 'Dezembro | 8888' },
                    ]}
                />

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
                        <span>Movimentado</span>
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
                                <Info title='Total de entrada de valores no mês'>
                                    <FiInfo size={16} />
                                </Info>
                            </div>
                        </div>
                        <div>
                            <div className='data'>
                                <strong>Extra</strong>
                                <Value greaterThanZero={true}>R$ 2.000,00</Value>
                                <Info title='Total de entradas de valores do mês subtraindo os Valores planejados de cada categoria e eventuais valores negativos de cada categoria'>
                                    <FiInfo size={16} />
                                </Info>
                            </div>
                            <div className='data'>
                                <strong>Conta</strong>
                                <Value greaterThanZero={false}>R$ -122.000,00</Value>
                                <Info title='Valor que você deve ter na conta atualmente. Utilizado para validação dos valores inseridos na plataforma.'>
                                    <FiInfo size={16} />
                                </Info>
                            </div>
                        </div>
                        <div>
                            <div className='data'>
                                <strong>R$ 12.000,00</strong>
                                <Info title='Total de saídas de valores no mês'>
                                    <FiInfo size={16} />
                                </Info>
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
