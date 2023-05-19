import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Shop } from './components/Shop';
import { API_URL, API_KEY } from './config';

function App() {
  return (
    <div className="App">
      <Header />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
