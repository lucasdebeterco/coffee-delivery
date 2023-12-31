import { Header } from './components/Header';
import { DefaultLayput } from './styles.ts';
import { BannerArea } from './components/BannerArea';
import { CoffeeList } from './components/CoffeeList';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default.ts';
import { GlobalStyle } from './styles/global.ts';

function App() {
  return (
      <ThemeProvider theme={defaultTheme}>
          <DefaultLayput>
              <Header />
              <BannerArea />
              <CoffeeList />
          </DefaultLayput>

          <GlobalStyle />
      </ThemeProvider>
  )
}

export default App
