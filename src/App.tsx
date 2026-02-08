import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Menu from './components/layout/Menu';
import NFTSlider from './components/slider/NFTSlider';
import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <NFTSlider />
      </main>
      <Footer />
      <Menu />
    </div>
  );
}

export default App;
