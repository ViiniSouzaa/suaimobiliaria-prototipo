import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { properties } from '../data/properties'
import PropertyCard from '../components/PropertyCard'

export default function Home(){
  return (
    <div>
      <div className="container hero">
        <div className="hero-left">
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}}>Encontre o imóvel dos seus sonhos</motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}}>Procuramos os melhores imóveis com avaliação especializada. Navegue pelos destaques ou entre em contato.</motion.p>
          <div style={{marginTop:18}}>
            <Link className="button" to="/properties">Ver Imóveis</Link>
          </div>
        </div>
        <div className="hero-right">
          <img src="/assets/placeholder.jpg" alt="hero" style={{width:'100%',borderRadius:12}} />
        </div>
      </div>

      <div className="container">
        <h2>Destaques</h2>
        <div className="grid">
          {properties.map(p => <PropertyCard key={p.id} p={p} />)}
        </div>
      </div>
    </div>
  )
}
