import Navbar from '../Components/Home/Navbar'
import Header from '../Components/Home/Header'
import Footer from '../Components/Home/Footer'
import './style.css'
import Features from '../Components/Home/Features'
import Mailchimp from '../Components/Home/Mailchimp'

const Home = () => {
  return (
    <div>
      {/* dhamaan components home page oo link isku ah oo aan eheyn pages kala duwan  */}
      <Navbar />
      <Header />
      <Features />
      <Mailchimp />
      <Footer />
    </div>
  )
}

export default Home 