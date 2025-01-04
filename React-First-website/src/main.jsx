import { createRoot } from 'react-dom/client'
import Navbar from './Navbar.jsx'
import Body from './body.jsx'
import Footer from './Footer.jsx'
createRoot(document.getElementById('root')).render(
    <>
    <Navbar />
        <Body />
        <Footer />
    </>
)
