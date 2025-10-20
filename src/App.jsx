import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Hero, Navbar, About } from "./components";
import DeferredStars from "./components/DeferredStars";

const Experience = lazy(() => import("./components/Experience"));
const Volunteering = lazy(() => import("./components/Volunteering"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <div className='relative z-0 bg-primary'>
        <header className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </header>
        <main>
          <About />
          <Suspense fallback={<div className="w-full py-20 bg-primary" />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<div className="w-full py-20 bg-primary" />}>
            <Volunteering />
          </Suspense>
          <Suspense fallback={<div className="w-full py-20 bg-primary" />}>
            <Tech />
          </Suspense>
          <Suspense fallback={<div className="w-full py-20 bg-primary" />}>
            <Works />
          </Suspense>
          <div className='relative z-0'>
            <Suspense fallback={<div className="w-full py-20 bg-primary" />}>
              <Contact />
            </Suspense>
            <DeferredStars />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
