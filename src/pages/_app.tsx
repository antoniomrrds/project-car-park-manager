import { GlobalStyles } from '@/styles/global-styles'
import { Reset } from '@/styles/reset'
import { theme } from '@/styles/theme'
import { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyles />
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} />
    </ThemeProvider>
  )
}
