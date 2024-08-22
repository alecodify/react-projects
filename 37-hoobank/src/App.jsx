import { Billing, Bussiness, Clients, CTA, Deal, Footer, Hero, Navbar, Stats, Testimonials } from "./components"

function App() {

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="sm:px-16 px-6 flex justify-center items-center xl:max-w-[1280px] w-full">
        <Navbar />
      </div>

      <div className="bg-primary flex justify-center items-start xl:max-w-[1280px] w-full">
        <Hero />
      </div>

      <div className="bg-primary flex flex-col justify-center items-center px-6 sm:px-16 xl:max-w-[1280px] w-full">
        <Stats />
        <Bussiness />
        <Billing />
        <Deal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    
    </div>
  )
}

export default App
