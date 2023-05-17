import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/Home'
import { CreatePostPage } from '../pages/CreatePost'
import { Header } from '../components/Header'

export const AppRoutes = () => {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/post/create' element={<CreatePostPage />} />
      </Routes>
    </BrowserRouter>
  )
}