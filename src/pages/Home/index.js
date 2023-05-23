import { useEffect, useState } from "react"
import { getPosts } from "../../api/post"
import { Post } from "../../components/Post"
import { Title } from "../../components/Title"
import { PostsContainer } from "./styles"
import { Error } from "../../components/Error"
import { isString } from "../../utils/string"

export const HomePage = () => {
  const [posts, setPost] = useState([]);
  const [error, setError] = useState()

  const handleGetPosts = async () => {
    try {
      const response = await getPosts()

      setPost(response.data)
    } catch (error) {
      if (error.response.status === 404) {
        setError('Requisição não encontrada')
      } else if (error.response.status === 500) {
        setError('Deu ruim no servidor, erro interno')
      } else if (error.response.status === 400) {
        setError(error.response.data.message)
      }
    }
  }

  useEffect(() => {
    handleGetPosts()

    console.log("🚀 ~ file: index.js:34 ~ useEffect ~  isString:", isString(true))
  }, [])

  return (
    <>
      <Title>Listagem de Posts</Title>

      <Error message={error} />

      <PostsContainer>
        {
          posts.map(post => {
            return (
              <Post
                title={post.title}
                description={post.description}
                author={post.author}
                createdAt={post.createdAt}
                avatar={post.avatar}
              />
            )
          })
        }
      </PostsContainer>
    </>
  )
}