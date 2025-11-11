import React from 'react'

export default function Contact(){
  return (
    <div className="container">
      <h1>Contato</h1>
      <p style={{color:'var(--muted)'}}>Preencha o formulário abaixo (exemplo estático):</p>
      <form style={{maxWidth:640,marginTop:16}} onSubmit={e => { e.preventDefault(); alert('Mensagem simulada — formulário estático.')}}>
        <div style={{display:'grid',gap:10}}>
          <input placeholder="Seu nome" style={{padding:10,borderRadius:8,background:'transparent',border:'1px solid rgba(255,255,255,0.06)',color:'inherit'}} />
          <input placeholder="Seu email" style={{padding:10,borderRadius:8,background:'transparent',border:'1px solid rgba(255,255,255,0.06)',color:'inherit'}} />
          <textarea placeholder="Mensagem" rows={6} style={{padding:10,borderRadius:8,background:'transparent',border:'1px solid rgba(255,255,255,0.06)',color:'inherit'}} />
          <button className="button" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}
