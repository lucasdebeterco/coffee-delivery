import { Header } from './components/Header';
import { DefaultLayput } from './styles.ts';
import { BannerArea } from './components/BannerArea';
import { CoffeeList } from './components/CoffeeList';

function App() {
  return (
      <DefaultLayput>
        <Header />
        <BannerArea />
        <CoffeeList />
      </DefaultLayput>
  )
}

export default App
