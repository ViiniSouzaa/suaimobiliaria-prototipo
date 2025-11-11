import React from 'react'
import PropertyCard from '../components/PropertyCard'
import { properties } from '../data/properties'

export default function Properties(){
  return (
    <div className="container">
      <h1>Imóveis</h1>
      <p style={{color:'var(--muted)'}}>Lista estática de exemplo — você pode conectar ao backend depois.</p>
      <div className="grid">
        {properties.map(p => <PropertyCard key={p.id} p={p} />)}
      </div>
    </div>
  )
}
