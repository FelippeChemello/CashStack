import React, { useCallback, useContext, useRef, useState } from 'react'
import Link from 'next/link'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import { FiLogIn, FiMail } from 'react-icons/fi'

import { Container, Content, Background, AnimationContainer } from '../styles/pages/forgot-password'

import Input from '../components/Input'
import Button from '../components/Button'
import Logo from '../components/Logo'

import getValidationErrors from '../utils/getValidationErrors'
import { useToast } from '../hooks/Toast'
import api from '../services/api'

interface ForgotPasswordFormData {
    email: string
}

const ForgotPassword: React.FC = () => {
    const formRef = useRef<FormHandles>(null)
    const [loading, setLoading] = useState(false)
    const { addToast } = useToast()

    const handleSubmit = useCallback(
        async (data: ForgotPasswordFormData) => {
            formRef.current?.setErrors({})

            try {
                setLoading(true)

                const schema = Yup.object().shape({
                    email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                })

                await schema.validate(data, {
                    abortEarly: false,
                })

                // await api.post('/password/forgot', {
                //     email: data.email,
                // })

                addToast({
                    type: 'success',
                    title: 'E-mail de recuperação enviado',
                    description: 'Enviamos um e-mail para confirmar a recuperação de senha. Verifique sua caixa de entrada',
                })

                // history.push('/')
            } catch (err) {
                if (err instanceof Yup.ValidationError) {
                    const errors = getValidationErrors(err)

                    formRef.current?.setErrors(errors)
                    return
                }

                addToast({
                    type: 'error',
                    title: 'Erro ao recuperar senha',
                    description: 'Ocorreu um erro ao tentar recuperar a senha, tente novamente.',
                })
            } finally {
                setLoading(false)
            }
        },
        [addToast]
    )

    return (
        <Container>
            <Content>
                <AnimationContainer>
                    <Logo />

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Recuperar senha</h1>

                        <Input placeholder='E-mail' name='email' icon={FiMail} />

                        <Button type='submit' loading={loading}>
                            Recuperar
                        </Button>
                    </Form>

                    <Link href='/signin'>
                        {/* <FiLogIn /> */}
                        Voltar ao login
                    </Link>
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    )
}

export default ForgotPassword
