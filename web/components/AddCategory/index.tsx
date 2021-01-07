import React, { useCallback, useMemo, useRef, useState } from 'react'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { FiAward, FiMenu, FiPercent, FiType } from 'react-icons/fi'

import Button from '../../components/Button'
import DashboardInput from '../DashboardInput'
import DashboardOptions from '../DashboardOptions'
import DashboardIconPicker from '../DashboardIconPicker'

const AddCategory: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const [isInstallment, setIsInstallment] = useState(false)

    const handleTransactionTypeChange = useCallback((value: string) => {
        setIsInstallment(value === 'installment')
    }, [])

    return (
        <Form ref={formRef} onSubmit={data => console.log(data)}>
            <h1 style={{ marginBottom: 16 }}>Adicionar categoria</h1>

            <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <DashboardInput
                    placeholder='Nome'
                    name='title'
                    maxLength={16}
                    icon={FiAward}
                    containerStyle={{ marginRight: '10px', flex: '1', marginTop: '0' }}
                />
                <DashboardIconPicker name='categoryIcon' />
            </div>

            <DashboardInput placeholder='Descrição' name='description' maxLength={100} icon={FiType} />
            <DashboardInput
                type='text'
                currency
                placeholder='Valor planejado'
                name='value'
                prefix='R$ '
                maxLength={16}
                containerStyle={{ marginBottom: '8px' }}
            />
            <p>Movimento permitido: </p>
            <DashboardOptions
                name='categoryDirection'
                options={[
                    { id: 'income', label: 'Entrada', value: 'income' },
                    { id: 'outcome', label: 'Saída', value: 'outcome' },
                    { id: 'both', label: 'Ambos', value: 'both' },
                ]}
                setter={handleTransactionTypeChange}
                containerStyle={{ marginTop: '0' }}
            />

            {isInstallment && <DashboardInput type='number' placeholder='Nº de parcelas' name='installments' icon={FiPercent} />}
            <Button type='submit'> Salvar </Button>
        </Form>
    )
}

export default AddCategory
