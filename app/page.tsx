'use client';

import { useState } from 'react';

const menu = [
  { title: 'Mezzés froids', items: ['Hommos', 'Moutabbal', 'Taboulé', 'Fattouche', 'Labné', 'Warak enab'] },
  { title: 'Mezzés chauds', items: ['Falafels', 'Rakakat fromage', 'Sambousek viande', 'Kebbé', 'Batata harra', 'Halloumi grillé'] },
  { title: 'Grillades', items: ['Chich taouk', 'Kafta', 'Chich kebab', 'Mix grillades', 'Ailes de poulet marinées'] },
  { title: 'Spécialités', items: ['Chawarma poulet', 'Chawarma viande', 'Moussaka libanaise', 'Sayadiyé', 'Plat végétarien du jour'] },
  { title: 'Douceurs', items: ['Baklawa', 'Mouhalabieh', 'Maamoul', 'Thé à la menthe'] },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  return <main>
    <header className="topbar">
      <a className="brand" href="#accueil" aria-label="Dardachat, accueil"><span>دردشة</span><b>Dardachat</b></a>
      <nav aria-label="Navigation principale">
        <a href="#carte">La carte</a><a href="#cuisine">Notre cuisine</a><a href="#galerie">Galerie</a><a href="#contact">Infos pratiques</a>
      </nav>
      <a className="call small" href="tel:+33XXXXXXXXX">Réserver <span>↗</span></a>
    </header>

    <section id="accueil" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Restaurant libanais · Montreuil</p>
        <h1>Le Liban,<br/><em>à votre table.</em></h1>
        <p className="intro">Une cuisine de partage, des épices justes et des recettes préparées avec générosité.</p>
        <div className="actions"><a className="button primary" href="tel:+33XXXXXXXXX">Appeler pour réserver</a><a className="button text" href="#carte">Découvrir la carte <span>↓</span></a></div>
        <p className="detail">58 avenue Marceau · 93100 Montreuil</p>
      </div>
      <div className="hero-art" aria-label="Motif décoratif inspiré des mosaïques levantines"><div className="plate"><span>✦</span></div><p>نلتقي حول المائدة</p></div>
    </section>

    <section id="carte" className="menu-section">
      <div className="section-heading"><p className="eyebrow">À partager, à savourer</p><h2>La carte</h2><p>Un aperçu de notre cuisine. Les prix et disponibilités sont à confirmer directement auprès du restaurant.</p></div>
      <div className="menu-grid">{menu.map((group) => <article className="menu-card" key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}<span>—</span></li>)}</ul></article>)}</div>
      <p className="note">Carte détaillée et tarifs : prochainement mis à jour.</p>
    </section>

    <section id="cuisine" className="cuisine"><div><p className="eyebrow">L’esprit de Dardachat</p><h2>La cuisine qui rassemble.</h2></div><div className="cuisine-copy"><p>Au Liban, la table n’est jamais seulement une table. C’est un lieu de conversation, de fraîcheur et de générosité. Chez Dardachat, les mezzés se passent de main en main et les grillades arrivent au centre.</p><a href="#contact">Nous trouver à Montreuil <span>↗</span></a></div></section>

    <section id="galerie" className="gallery"><div className="gallery-title"><p className="eyebrow">Quelques saveurs</p><h2>À découvrir sur place</h2></div><div className="gallery-grid"><figure className="image-placeholder one"><figcaption>Mezzés à partager</figcaption></figure><figure className="image-placeholder two"><figcaption>Grillades au feu</figcaption></figure><figure className="image-placeholder three"><figcaption>Douceurs libanaises</figcaption></figure></div><p className="gallery-note">Les photos du menu fournies seront intégrées dès qu’elles seront disponibles dans un format web compatible.</p></section>

    <section id="contact" className="contact"><div><p className="eyebrow">Infos pratiques</p><h2>On vous attend<br/><em>à Montreuil.</em></h2></div><div className="contact-details"><div><p className="label">Adresse</p><address>58 avenue Marceau<br/>93100 Montreuil</address><a href="https://www.google.com/maps/search/?api=1&query=58+avenue+Marceau+93100+Montreuil" target="_blank" rel="noreferrer">Itinéraire ↗</a></div><div><p className="label">Réservations</p><p className="placeholder">Téléphone à renseigner</p><a href="tel:+33XXXXXXXXX">Appeler le restaurant ↗</a></div><div><p className="label">Horaires</p><p className="placeholder">Horaires à renseigner</p><p className="muted">Merci de nous appeler avant de venir.</p></div></div></section>
    <footer><p>© {new Date().getFullYear()} Dardachat</p><p>Restaurant libanais · Montreuil</p></footer>
    <a className="mobile-call" href="tel:+33XXXXXXXXX">☎&nbsp; Réserver par téléphone</a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="quick-menu">La carte rapide</button>
    {open && <aside id="quick-menu" className="quick-menu"><button onClick={() => setOpen(false)} aria-label="Fermer">×</button><h2>La carte</h2>{menu.map(g => <p key={g.title}><b>{g.title}</b><br/>{g.items.join(' · ')}</p>)}</aside>}
  </main>;
}
