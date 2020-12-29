import React, { useCallback, useRef, useState } from 'react'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { FiArrowDownCircle, FiArrowUpCircle, FiAward, FiMenu, FiPercent } from 'react-icons/fi'

import Button from '../../components/Button'
import DashboardInput from '../DashboardInput'
import DashboardSelect from '../DashboardSelect'
import DashboardOptions from '../DashboardOptions'

const AddTransaction: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const [isInstallment, setIsInstallment] = useState(false)

    const handleTransactionTypeChange = useCallback((value: string) => {
        setIsInstallment(value === 'installment')
    }, [])

    return (
        <Form ref={formRef} onSubmit={data => console.log(data)}>
            <h1 style={{ marginBottom: 16 }}>Adicionar transação</h1>

            <DashboardInput placeholder='Título' name='title' maxLength={16} icon={FiAward} />
            <DashboardInput type='text' currency placeholder='Valor' name='value' prefix='R$ ' maxLength={16} />
            <DashboardInput type='date' placeholder='Data' name='date' />
            <DashboardSelect
                name='category'
                options={[
                    { value: 'category-id-1', label: 'Categoria 1' },
                    { value: 'category-id-2', label: 'Categoria 2' },
                    { value: 'category-id-3', label: 'Categoria 3' },
                ]}
                icon={FiMenu}
            />
            <DashboardOptions
                name='transactionType'
                options={[
                    { id: 'income', label: 'Entrada', value: 'income', icon: FiArrowUpCircle, iconColor: '#12A454' },
                    { id: 'outcome', label: 'Saída', value: 'outcome', icon: FiArrowDownCircle, iconColor: '#E83F5B' },
                ]}
            />

            <DashboardOptions
                name='transactionType'
                options={[
                    { id: 'incash', label: 'À vista', value: 'inCash' },
                    { id: 'installment', label: 'Parcelado', value: 'installment' },
                    { id: 'recurrent', label: 'Recorrente', value: 'recurrent' },
                ]}
                setter={handleTransactionTypeChange}
            />
            {isInstallment && <DashboardInput type='number' placeholder='Nº de parcelas' name='installments' icon={FiPercent} />}
            <Button type='submit'> Salvar </Button>
        </Form>
    )
}

export default AddTransaction
