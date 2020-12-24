import React, { useCallback, useRef } from 'react'
import Link from 'next/link'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi'

import { Container, Content, Background, AnimationContainer } from '../styles/pages/signin'

import Logo from '../components/Logo'
import Input from '../components/Input'
import Button from '../components/Button'

import getValidationErrors from '../utils/getValidationErrors'
import { useAuth } from '../hooks/Auth'
import { useToast } from '../hooks/Toast'

interface SignInFormData {
    email: string
    password: string
}

export default function SignIn() {
    const formRef = useRef<FormHandles>(null)
    const { signIn, user } = useAuth()
    const { addToast } = useToast()

    const handleSubmit = useCallback(async (data: SignInFormData) => {
        formRef.current?.setErrors({})

        try {
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatória'),
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            // await signIn({
            //     email: data.email,
            //     password: data.password,
            // })

            // history.push('/')
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err)

                formRef.current?.setErrors(errors)
                return
            }

            // addToast({
            //     type: 'error',
            //     title: 'Erro ao autenticar',
            //     description: 'Ocorreu um erro ao realizar o login, verifique as credenciais.',
            // })
        }
    }, [])

    return (
        <Container>
            <Content>
                <AnimationContainer>
                    <Logo />

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu login</h1>

                        <Input placeholder='E-mail' name='email' icon={FiMail} />

                        <Input type='password' placeholder='Senha' name='password' icon={FiLock} />

                        <Button type='submit'> Entrar </Button>

                        <Link href='/forgot-password'> Esqueci minha senha</Link>
                    </Form>

                    <Link href='/signup'>
                        {/* <FiLogIn /> */}
                        Criar conta
                    </Link>
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    )
}
