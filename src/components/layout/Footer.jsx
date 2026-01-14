import React from 'react';
    import { Link } from 'react-router-dom';
    import { Linkedin, Instagram } from 'lucide-react';

    const navLinks = [
      { to: "/", label: "Accueil" },
      { to: "/a-propos", label: "À propos" },
      { to: "/services", label: "Nos services" },
      { to: "/contact", label: "Contact & RDV" },
    ];
    
    const Footer = () => (
      <footer className="bg-accent text-accent-foreground py-12 mt-10">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src="/akc.svg" alt="Andy KGZ Consulting Logo" className="h-10 w-auto rounded-full" />
              <span className="text-2xl font-bold text-accent-foreground">Andy KGZ Consulting</span>
            </Link>
            <p className="text-accent-foreground/80">Révéler l'identité professionnelle unique de chacun.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-accent-foreground">Liens rapides</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.to}><Link to={link.to} className="hover:text-primary-foreground/70 transition-colors text-accent-foreground/80">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4 text-accent-foreground">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn AKC" className="hover:text-primary-foreground/70 transition-colors text-accent-foreground/80"><Linkedin size={24} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram AKC" className="hover:text-primary-foreground/70 transition-colors text-accent-foreground/80"><Instagram size={24} /></a>
            </div>
          </div>
        </div>
        <div className="text-center text-accent-foreground/70 mt-8 pt-8 border-t border-accent-foreground/20">
          <p>&copy; {new Date().getFullYear()} Andy KGZ Consulting. Tous droits réservés.</p>
        </div>
      </footer>
    );

    export default Footer;