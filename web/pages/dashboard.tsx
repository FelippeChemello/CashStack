import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { FiClock, FiArrowUpCircle, FiArrowDownCircle, FiDollarSign } from 'react-icons/fi'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import DayPicker, { DayModifiers } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

import { Container, Header, HeaderContent, Content, Categories, NextAppointment, Section, Appointment, Calendar } from '../styles/pages/dashboard'

import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Card from '../components/MoneyCard'

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

const months = ['Janeiro', 'Fevereiro', 'Ma']

const Dashboard: React.FC = () => {
    const { signOut, user } = useAuth()
    const [currentMonth, setCurrentMonth] = useState(new Date())

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

            <Content>
                <Categories>
                    <h1>Horários agendados</h1>

                    <NextAppointment>
                        <strong>Agendamento a seguir</strong>

                        <div>
                            <img src='logo-icon.svg' alt='avatar' />

                            <strong>Nome</strong>
                            <span>
                                <FiClock /> 10:00
                            </span>
                        </div>
                    </NextAppointment>

                    <Section>
                        <strong>Manhã</strong>

                        <p> Nenhum agendamento para este período</p>
                    </Section>

                    <Section>
                        <strong>Tarde</strong>

                        <Appointment>
                            <span>
                                <FiClock /> 12:00
                            </span>

                            <div>
                                <img src='logo-icon.svg' alt='avatar' />

                                <strong>Nome</strong>
                            </div>
                        </Appointment>
                    </Section>
                </Categories>

                <Calendar></Calendar>
            </Content>
        </Container>
    )
}

export default Dashboard
