// App.js

import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import scrollreveal from "scrollreveal";
import Avaliation from "./components/Avaliation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Portfolio from "./components/Portfolio";
import Products from "./components/Products";
import Reserva from "./components/Reserva";
import Reservas from "./components/Reservas/Reservas";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";


export default function App() {
  const location = useLocation();

  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #portfolio,
        #testimonials,
        #products,
        #newsletter,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);

  return (
    <>
      <ScrollToTop />
      {location.pathname !== '/avaliation' && location.pathname !== '/reservas' && <Navbar />}
      {location.pathname !== '/avaliation' && location.pathname !== '/reservas' && <Hero />}
      {location.pathname !== '/avaliation' && location.pathname !== '/reservas' && <Services />}
      {location.pathname !== '/avaliation' && location.pathname !== '/reservas' && <Portfolio />}
      {location.pathname !== '/avaliation' && location.pathname !== '/reservas' && <Reserva />}  
      {location.pathname !== '/avaliation' && location.pathname !== '/reservas' && <Products />}
      {location.pathname !== '/avaliation' && location.pathname !== '/reservas' && <Newsletter />}
      {location.pathname !== '/avaliation' && location.pathname !== '/reservas' && <Footer />}
      
      <Routes>
        <Route path="/avaliation" element={<Avaliation />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
    </>
  );
}
