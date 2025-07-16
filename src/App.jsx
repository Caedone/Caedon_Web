import Navbar from './components/navbar.jsx';
import Hero from './components/Hero.jsx';
import Technologies from './components/Technologies.jsx'
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden text-white antialiased"></div>
      {/* Black Background with Grid Pattern */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-black">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[1100px] w-[1100px] rounded-full bg-[radial-gradient(circle_440px_at_50%_50%,#fbfbfb36,#000)]"></div>
      </div>
      {/* End of Copy and Paste (EOCP)*/}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  )
}
export default App