import { GlobalStyles } from '@/styles/global-styles'
import { Reset } from '@/styles/reset'
import { theme } from '@/styles/theme'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
