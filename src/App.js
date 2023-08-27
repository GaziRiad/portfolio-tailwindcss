export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
    </div>
  );
}

function Header() {
  return (
    <section className="bg-white py-6 px-8 h-20">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-3xl font-bold text-black uppercase">
          Riad Hallouch
        </a>
        <nav className="hidden lg:flex flex-row space-x-8 list-none text-black text-lg font-medium cursor-pointer">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Pojects</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </nav>
        <div className="flex flex-col space-y-2 cursor-pointer lg:hidden">
          <p className="w-7 h-0.5 bg-black"></p>
          <p className="w-7 h-0.5 bg-black"></p>
          <p className="w-7 h-0.5 bg-black"></p>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <>
      <section id="hero" className="mb-20">
        <div className="container relative flex flex-col justify-center mx-auto px-8 h-screen">
          <h2 className="text-3xl leading-normal mb-8 linhe font-semibold uppercase text-center text-white  md:text-4xl">
            HEY, MY NAME IS RIAD HALLOUCH
          </h2>

          <p className="text-white text-lg text-center text-indigo-20 mb-14 relative">
            Hi There, I’m Riad and i am a Front-End Web Developer
          </p>

          <div className="flex justify-center">
            <a
              href="#Projects"
              className="text-black text-xl inline-bloc bg-white px-14 py-3 rounded-sm  font-semibold uppercase drop-shadow-sm hover:-translate-y-2 transition-all duration-500"
            >
              projects
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <section id="About" className="bg-white">
      <div className="container mx-auto">
        <div className="relative mb-12">
          <h2 className="text-center text-3xl font-semibold text-zinc-800 uppercase md:text-4xl">
            About me
          </h2>
          <p className="bg-sky-600 w-14 h-2.5 rounded-lg absolute -bottom-3.5 left-1/2 -translate-x-1/2"></p>
        </div>
        <p className="text-md text-zinc-600 text-center md:text-lg mb-8">
          Get to know me, and what kind of person and a developer i am. And what
          are my skills
        </p>
      </div>
    </section>
  );
}
