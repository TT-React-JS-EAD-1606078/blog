import { Button } from "../../components/Button"
import { Input } from "../../components/Input"
import { Title } from "../../components/Title"
import { Form, InputsContainer, MainInfo } from "./styles"

export const CreatePostPage = () => {
  return (
    <>
      <Title>Cadastrar Post</Title>

      <Form onSubmit={(e) => e.preventDefault()}>
        <InputsContainer>
          <MainInfo>
            <Input name='title' label='Titulo' placeholder='Escreva o titulo do post' />

            <Input name='author' label='Autor' placeholder='Escreva o autor do post' />
          </MainInfo>

          <Input name='description' label='Descrição' placeholder='Escreva a descrição do post' />
        </InputsContainer>

        <Button secondary>Cadastrar Post</Button>
      </Form>

    </>
  )
}