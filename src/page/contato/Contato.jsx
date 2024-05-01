import Header from '../../components/Header/Header'
import * as S from "./styled"
// import * as C from '../../components/Cursor_styles'
import { useForm } from 'react-hook-form'
import whatsapp from '../../assets/img/whatsapp.png'
import insta from '../../assets/img/instagram.png'
import linkedin from '../../assets/img/linkedin.png'
import github from '../../assets/img/github.png'


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
        <S.Contact>
          <button>
            <a href="https://www.linkedin.com/feed/">
              <img src={linkedin} alt="icone do linkedin" />
            </a>
          </button>
          <button>
            <a href="https://www.instagram.com/beca.fer_24/">
              <img src={insta} alt="icone do instagram para contato" />
            </a>
          </button>
          <button>
            <a href="https://github.com/RebecaFer23">
              <img src={github} alt="icone do github" />
            </a>
          </button>
          <button>
            <a href="https://web.whatsapp.com/">
              <img src={whatsapp} alt="icone do whatsapp para contato" />
            </a>
          </button>
        </S.Contact>
      </S.Container>
    </S.Main>
  )
}