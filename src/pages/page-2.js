import React from "react"
import SEO from "../components/seo"
import Clientes from "../components/SectionClientes/index"
import Produtos from "../components/SectionProducts/index"
import Sobre from "../components/SectionSobre/index"
import Contact from "../components/SectionContact/Card/index"
import Hero from "../components/SectionHero/index"
import Navbar from "../components/NavBar/index"

const SecondPage = () => (
  <div>
    <SEO title="Empresa Júnior IDE" />
    <Navbar />
    <Hero />
    <Sobre id="sobre" />
    <Clientes />
    <Produtos id="produtos" />
    <Contact id="contato" />
  </div>
 
)

export default SecondPage
