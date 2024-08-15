import NavigationBar from './components/NavigationBar'
import Header from './components/Header'
import Main from './components/main/Main';
import Footer from './components/Footer';

import './assets/styles/App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
