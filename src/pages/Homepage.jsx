import Herotop from '../components/page-sections/Herotop'
import Navbar from '../components/page-sections/Navbar'
import About from '../components/page-sections/About'
import Services from '../components/page-sections/Services'
import Projects from '../components/page-sections/Projects'
import Contact from '../components/page-sections/Contact'
import Footer from '../components/page-sections/Footer'

export default function Homepage() {
    return (
        <>
            <Navbar />
            <Herotop />
            <About />
            <Services />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}
