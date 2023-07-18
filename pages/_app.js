import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main className='p-4 min-h-[calc(100vh-64px-56px)] bg-black'>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}
