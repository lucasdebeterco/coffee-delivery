import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default.ts';
import { GlobalStyle } from './styles/global.ts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Checkout } from './Pages/Checkout';
import { DefaultLayout } from './layouts/DefaultLayout';
import { Done } from './Pages/Done';
import { Home } from './Pages/Home';

function App() {
  return (
      <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<DefaultLayout/>}>
                      <Route path='/' element={<Home />} />
                      <Route path='/checkout' element={<Checkout />} />
                      <Route path='/checkout/done' element={<Done />} />
                  </Route>
              </Routes>
          </BrowserRouter>


          <GlobalStyle />
      </ThemeProvider>
  )
}

export default App
