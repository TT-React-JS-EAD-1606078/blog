import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../pages/Home'
import { CreatePostPage } from '../pages/CreatePost'
import { Header } from '../components/Header'
import { PageContent } from '../styles/PageContent'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />

      <PageContent>
        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route path='/post/create' element={<CreatePostPage />} />
        </Routes>
      </PageContent>
    </BrowserRouter>
  )
}