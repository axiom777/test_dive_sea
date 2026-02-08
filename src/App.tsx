import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
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
    </div>
  );
}

export default App;
