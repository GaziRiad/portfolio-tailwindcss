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
    <section className=" bg-white py-6 px-8 h-20">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-3xl font-bold text-black  x uppercase">
          Riad Hallouch
        </a>
        <nav className="hidden md:flex flex-row space-x-8 list-none text-black text-lg font-medium cursor-pointer">
          <li>About</li>
          <li>Services</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </nav>
        <div className="flex flex-col space-y-2 cursor-pointer md:hidden">
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
      <section id="hero" className="bg-indigo-600 mb-20">
        <div className="container flex flex-col justify-center mx-auto px-8 h-screen">
          <h2 className="text-3xl leading-normal mb-8 linhe font-semibold uppercase text-center text-white  md:text-4xl">
            HEY, MY NAME IS RIAD HALLOUCH
          </h2>
          <p className="text-white text-lg text-center text-indigo-20 mb-14">
            Hi There, I’m Riad and i am a Front-End Web Developer
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className=" text-black text-xl inline-block bg-white px-14 py-3 rounded-sm  font-semibold uppercase drop-shadow-sm hover:-translate-y-2 transition-all duration-500"
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
    <section className="bg-white">
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
