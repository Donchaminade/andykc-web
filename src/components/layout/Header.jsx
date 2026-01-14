import React from 'react';
import { Button } from "@/components/ui/button";
    import { Link, NavLink } from 'react-router-dom';
    import { Home, Users, Briefcase, BookOpen, MessageSquare, Phone, ChevronDown } from 'lucide-react';
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu";

    const mainNavLinks = [
      { to: "/", label: "Accueil", icon: <Home className="w-5 h-5 mr-2 md:hidden" /> },
      { to: "/a-propos", label: "À propos", icon: <Users className="w-5 h-5 mr-2 md:hidden" /> },
    ];

    const serviceSubLinks = [
      { to: "/services", label: "Tous les Services", icon: <Briefcase className="w-5 h-5 mr-2" /> },
      { to: "/coaching-express", label: "Coaching Express", icon: <BookOpen className="w-5 h-5 mr-2" /> },
      { to: "/recrutement-freelance", label: "Recrutement Freelance", icon: <Users className="w-5 h-5 mr-2" /> },
    ];

    const otherNavLinks = [
      { to: "/temoignages", label: "Témoignages", icon: <MessageSquare className="w-5 h-5 mr-2 md:hidden" /> },
      { to: "/blog", label: "Blog & Conseils", icon: <BookOpen className="w-5 h-5 mr-2 md:hidden" /> },
      { to: "/contact", label: "Contact & RDV", icon: <Phone className="w-5 h-5 mr-2 md:hidden" /> },
    ];
    
    const NavItem = ({ to, label, icon, isDropdownItem = false }) => (
       <NavLink
        to={to}
        className={({ isActive: active }) => {
          const linkClasses = isDropdownItem 
            ? `flex items-center w-full px-3 py-2 text-sm hover:bg-accent/10 dark:hover:bg-accent/20 rounded-md transition-colors duration-150 ${active ? 'font-semibold text-primary dark:text-primary' : 'text-foreground/80 dark:text-foreground/80'}`
            : `flex items-center hover:text-primary-foreground/80 transition-colors duration-300 pb-1 ${active ? 'font-bold border-b-2 border-primary-foreground' : 'text-primary-foreground'}`;
          return linkClasses;
        }}
      >
        {icon && <span className={`mr-2 ${isDropdownItem ? 'text-muted-foreground' : ''}`}>{icon}</span>}
        {label}
      </NavLink>
    );


    const Header = () => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

      const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

      React.useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 768) {
            setIsMobileMenuOpen(false);
          }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);


      return (
        <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
          <nav className="container mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/akc.svg" alt="Andy KGZ Consulting Logo" className="h-10 w-auto rounded-full" />
              <span className="text-2xl font-bold tracking-tight text-primary-foreground">Andy KGZ Consulting</span>
            </Link>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Ouvrir le menu" className="text-primary-foreground hover:bg-primary-foreground/10">
                <ChevronDown size={28} className={`transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`} />
              </Button>
            </div>
            
            <div id="nav-menu" className={`w-full md:w-auto md:flex md:items-center text-lg ${isMobileMenuOpen ? 'flex flex-col mt-4 space-y-2 bg-primary/90 p-4 rounded-md' : 'hidden'} md:space-x-4`}>
              {mainNavLinks.map(link => (
                <div key={link.to} onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}>
                  <NavItem to={link.to} label={link.label} icon={link.icon} />
                </div>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className={`flex items-center hover:text-primary-foreground/80 transition-colors duration-300 pb-1 text-lg px-0 md:px-2 py-2 ${isMobileMenuOpen ? 'text-primary-foreground w-full justify-start hover:bg-transparent' : 'text-primary-foreground hover:bg-transparent'}`}>
                    {isMobileMenuOpen && <Briefcase className="w-5 h-5 mr-2" />}
                    Nos services
                    <ChevronDown size={20} className="ml-1 opacity-80" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-card shadow-xl rounded-lg mt-2 p-2 border-border">
                  {serviceSubLinks.map(link => (
                     <DropdownMenuItem key={link.to} asChild className="focus:bg-accent/10 dark:focus:bg-accent/20 cursor-pointer p-0" onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}>
                       <NavItem to={link.to} label={link.label} icon={link.icon} isDropdownItem />
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {otherNavLinks.map(link => (
                <div key={link.to} onClick={isMobileMenuOpen ? toggleMobileMenu : undefined}>
                  <NavItem to={link.to} label={link.label} icon={link.icon} />
                </div>
              ))}
            </div>
          </nav>
        </header>
      );
    };

    export default Header;