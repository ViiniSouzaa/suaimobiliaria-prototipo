import React from 'react'
import { useParams } from 'react-router-dom'
import { properties } from '../data/properties'

export default function PropertyDetail(){
  const { id } = useParams()
  const p = properties.find(x => x.id === id) || properties[0]

  return (
    <div className="container">
      <h1>{p.title}</h1>
      <img src={p.image} alt={p.title} style={{width:'100%',maxHeight:420,objectFit:'cover',borderRadius:12}} />
      <p style={{color:'var(--muted)',marginTop:12}}>{p.location} • {p.area}</p>
      <h2 style={{marginTop:10}}>{p.price}</h2>
      <p style={{marginTop:10}}>{p.description}</p>
    </div>
  )
}
