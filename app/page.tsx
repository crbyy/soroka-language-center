import Header from "./components/Header"
import Hero from "./components/Hero"
import Advantages from "./components/Advantages"
import Courses from "./components/Courses"
import About from "./components/About"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className='bg-[#FFF8EE]'>
        <Header />
        <Hero />
        <Advantages />
        <Courses />
        <About />
        <Footer />
    </main>
  );
}

