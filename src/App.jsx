import Navbar from './components/navbar.jsx';
import Hero from './components/Hero.jsx';
import Technologies from './components/Technologies.jsx'
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden text-stone-300 antialiased"></div>
      {/* Background Color from: https://bg.ibelick.com/ */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      {/* End of Copy and Paste (EOCP)*/}

      <div className="container mx-auto px-8">
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