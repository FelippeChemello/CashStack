import React, { useRef } from 'react'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { FiMail } from 'react-icons/fi'

import Button from '../../components/Button'
import DashboardInput from '../../components/DashboardInput'
import DashboardSelect from '../../components/DashboardSelect'

const AddTransaction: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    return (
        <Form ref={formRef} onSubmit={data => console.log(data)}>
            <h1 style={{ marginBottom: 16 }}>Adicionar transação</h1>

            <DashboardInput placeholder='Título' name='title' maxLength={16} />
            <DashboardInput type='text' currency placeholder='Valor' name='value' prefix='R$ ' maxLength={16} />
            <DashboardInput type='date' placeholder='Data' name='date' />
            <DashboardSelect
                name='category'
                options={[
                    { value: 'category-id-1', label: 'Categoria 1' },
                    { value: 'category-id-2', label: 'Categoria 2' },
                    { value: 'category-id-3', label: 'Categoria 3' },
                ]}
            />
            <Button type='submit'> Entrar </Button>
        </Form>
    )
}

export default AddTransaction
