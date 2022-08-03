
import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { useTranslation } from 'react-i18next';
import TranslationSwitch from './components/utils/TranslationSwitch';

const App = () => {
  const { t, i18n } = useTranslation('global')
  
  return (
    <>
      {/* <button onClick={ () => i18n.changeLanguage ("es") }>ES</button>
      <button onClick={ () => i18n.changeLanguage ("en") }>EN</button> */}
      <TranslationSwitch translation={i18n} t={t}/>
      <Header t={t} />
      <Nav t={t} />
      <About t={t} />
      <Experience t={t} />
      <Services t={t} />
      <Portfolio t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </>
  );
}

export default App;
