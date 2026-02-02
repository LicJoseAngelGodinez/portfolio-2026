import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from '@/i18n'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
