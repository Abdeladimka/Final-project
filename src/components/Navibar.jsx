
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import { Routes, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Pricing from "../pages/Pricing";
import Contact from "../pages/Contact";




function Navibar() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar fluid rounded>
        <NavbarBrand as={Link} to="/">
          <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            Portfolio
          </span>
        </NavbarBrand>

        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink as={Link} to="/">Home</NavbarLink>
          <NavbarLink as={Link} to="/about">About</NavbarLink>
          <NavbarLink as={Link} to="/services">Services</NavbarLink>
          <NavbarLink as={Link} to="/pricing">Pricing</NavbarLink>
          <NavbarLink as={Link} to="/contact">Contact</NavbarLink>
        </NavbarCollapse>
      </Navbar>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Navibar;
