import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function PropertyCard({p}){
  return (
    <motion.div className="card" whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 280 }}>
      <div className="card-img-wrap">
        <img src={p.image} alt={p.title} />
      </div>
      <h3>{p.title}</h3>
      <p>{p.location} • {p.area}</p>
      <p style={{marginTop:8,fontWeight:700}}>{p.price}</p>
      <div style={{marginTop:12}}>
        <Link className="button" to={`/properties/${p.id}`}>Ver detalhes</Link>
      </div>
    </motion.div>
  )
}
