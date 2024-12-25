import './App.css'
import './scrollbar.css';
import Header from './components/Header'
import HeroSection from './Components/HeroSection'
import Profile from './Components/Profile'
import Projects from './Components/Projects'
import FreelancingPage from './Components/FreelancingPage'
import MyStory from './Components/Mystory'
import Footer from './Components/Footer';

function App() {
  
    
// const [selectedTab, setSelectedTab] = useState('home')
  return (

    <>

    <Header></Header>
    <HeroSection></HeroSection>
    <Profile></Profile>
    <Projects></Projects>
    <FreelancingPage></FreelancingPage>
    <MyStory></MyStory>
    <Footer></Footer>
    
    </>

  )
  
}

export default App
