import Customize from './sections/customize';
import Footer from './sections/footer/Footer';
import Header from './sections/header/Header';
import News from './sections/news';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Customize />
      <News />
      <Footer />
    </div>
  );
};

export default App;
