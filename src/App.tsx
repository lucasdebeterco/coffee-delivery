import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { AdressContextProvider } from './contexts/AdressContext.tsx'
import { CoffeeContextProvider } from './contexts/CoffeeContext.tsx'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './Pages/Checkout'
import { Done } from './Pages/Done'
import { Home } from './Pages/Home'
import { GlobalStyle } from './styles/global.ts'
import { defaultTheme } from './styles/themes/default.ts'

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <CoffeeContextProvider>
                    <AdressContextProvider>
                        <Routes>
                            <Route path="/" element={<DefaultLayout/>}>
                                <Route path="/" element={<Home />} />
                                <Route path="/checkout" element={<Checkout />} />
                                <Route path="/checkout/done" element={<Done />} />

                            </Route>
                        </Routes>
                    </AdressContextProvider>
                </CoffeeContextProvider>
            </BrowserRouter>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            <GlobalStyle />
        </ThemeProvider>
    )
}

export default App
