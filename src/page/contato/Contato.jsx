import Header from '../../components/Header/Header'
import * as S from "./styled"
import { useForm } from 'react-hook-form'


export default function Contato() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    alert("Dados enviados com sucesso!");
  };


  return (
    <S.Main>
      <Header />
      <S.Container>
        <S.FormContainer className="display">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <S.FormGroup>
              <label htmlFor="fullname">Nome Completo</label>
              <input
                id='fullname'
                name='fullname'
                type='text'
                className='form-control'
                {...register('fullname')}
                placeholder='Digite seu nome completo'
              />
            </S.FormGroup>

            <S.FormGroup>
              <label htmlFor="username">Username</label>
              <input
                id='username'
                name='username'
                type='text'
                className='form-control'
                {...register('username')}
                placeholder='Digite um nome de usuário'
              />
            </S.FormGroup>

            <S.FormGroup >
              <label htmlFor="email">E-mail</label>
              <input
                id='email'
                name='email'
                type='text'
                className='form-control'
                {...register('email')}
                placeholder='Digite seu melhor e-mail'
              />
            </S.FormGroup>

            <S.FormGroup >
              <label htmlFor="password">Senha</label>
              <input
                id='password'
                name='password'
                type='password'
                className='form-control'
                {...register('password')}
                placeholder='Crie uma senha forte'
              />
            </S.FormGroup>

            <S.FormGroup >
              <label htmlFor="confirmPassword">Confirmar Senha</label>
              <input
                id='confirmPassword'
                name='confirmPassword'
                type='password'
                className='form-control'
                {...register('confirmPassword')}
                placeholder='Confirme sua senha'
              />
            </S.FormGroup>

            <S.FormGroup className="checkbox-group">
              <input
                id='acceptTemrs'
                name='acceptTemrs'
                type='checkbox'
                className='form-checkbox'
                {...register('acceptTemrs')}
              />
              <label htmlFor="acceptTemrs">
                Eu li e aceito os termos
              </label>
            </S.FormGroup>

            <S.FormGroup className=' button-group'>
              <S.SubmitButton type='submit' className="submit-button">
                Registrar
              </S.SubmitButton>
              <S.ResetButton type='reset' className="reset-button" onClick={() => reset()}>
                Resetar
              </S.ResetButton>
            </S.FormGroup>

          </form>
        </S.FormContainer>
      </S.Container>
    </S.Main>
  )
}