import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Loops from './components/Loops'
import ContactForm from './components/ContactForm';
import '../src/assets/css/styles.css'

function App() {
  return (
    <div className="App">
     <Header className="header"></Header>
     <Loops></Loops>
     <ContactForm></ContactForm>
    <Footer></Footer>
    </div>
  );
}

export default App;
