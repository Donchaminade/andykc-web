import React, { useState, useEffect, useCallback } from 'react';
    import { motion, useAnimation } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { useToast } from '@/components/ui/use-toast';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
    import { Users, Briefcase, ArrowRight, ChevronLeft, ChevronRight as ChevronRightIcon, Award, Target, Lightbulb, TrendingUp } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';
    import { useInView } from 'react-intersection-observer';

    const carouselImages = [
      { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80", alt: "Équipe collaborant dans un bureau moderne aux tons chauds, vue panoramique" },
      { src: "https://th.bing.com/th/id/R.8aed42c4bfb9e3bd505287e9dc2676c5?rik=npjKWsfLQ7Qybg&pid=ImgRaw&r=0", alt: "Personne travaillant sur un ordinateur portable dans un café à l'ambiance chaleureuse, format large" },
      { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80", alt: "Présentation lors d'une réunion d'affaires dans un espace lumineux, format large" },
    ];

    const ImageCarousel = () => {
      const [currentIndex, setCurrentIndex] = useState(0);

      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? carouselImages.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };

      const nextSlide = useCallback(() => {
        const isLastSlide = currentIndex === carouselImages.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      }, [currentIndex]);

      useEffect(() => {
        const slideInterval = setInterval(nextSlide, 7000); 
        return () => clearInterval(slideInterval);
      }, [nextSlide]);

      return (
        <motion.div 
          className="relative w-full h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] max-h-[800px] overflow-hidden group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {carouselImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full bg-center bg-cover"
              style={{ backgroundImage: `url(${image.src})` }}
              initial={{ opacity: 0, x: index === currentIndex ? 0 : (index > currentIndex ? '100%' : '-100%')}}
              animate={{ opacity: index === currentIndex ? 1 : 0, x: 0 }}
              transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
              role="img"
              aria-label={image.alt}
              aria-hidden={index !== currentIndex}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-xl title-center-fix"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            >
              Révélez Votre Potentiel, <br className="hidden md:block" /> Propulsez Votre Carrière.
            </motion.h1>
            <motion.p 
              className="text-lg md:text-2xl text-white/90 mb-10 max-w-3xl drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            >
              Andy KGZ Consulting : Votre partenaire expert pour le développement professionnel, du coaching carrière à la recherche de talents freelances.
            </motion.p>
           
          </div>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-1/2 left-2 md:left-5 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full p-2 z-10 focus-visible:ring-2 focus-visible:ring-primary"
            onClick={prevSlide}
            aria-label="Image précédente"
          >
            <ChevronLeft size={40} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-1/2 right-2 md:right-5 transform -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full p-2 z-10 focus-visible:ring-2 focus-visible:ring-primary"
            onClick={nextSlide}
            aria-label="Image suivante"
          >
            <ChevronRightIcon size={40} />
          </Button>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
            {carouselImages.map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => setCurrentIndex(slideIndex)}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-primary scale-125 ring-2 ring-offset-2 ring-offset-black/30 ring-primary' : 'bg-white/50 hover:bg-white/80'}`}
                aria-label={`Aller à l'image ${slideIndex + 1}`}
              ></button>
            ))}
          </div>
        </motion.div>
      );
    };

    const AnimatedSection = ({ children, className = "" }) => {
      const controls = useAnimation();
      const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

      useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);

      return (
        <motion.section
          ref={ref}
          className={`py-16 ${className}`}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 } },
            hidden: { opacity: 0, y: 50 }
          }}
        >
          {children}
        </motion.section>
      );
    };
    
    const featureVariants = {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 }}
    }

    const FeatureCard = ({ icon, title, description }) => (
      <motion.div
        className="bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-primary/10 transition-all duration-300 flex flex-col items-center text-center h-full"
        variants={featureVariants}
        whileHover={{ y: -6, boxShadow: "0 12px 24px hsla(var(--primary)/0.2)" }}
      >
        <div className="p-4 bg-primary/10 rounded-full mb-6 inline-block">
          {React.cloneElement(icon, { className: "w-12 h-12 text-primary" })}
        </div>
        <h3 className="text-2xl font-semibold text-accent mb-3">{title}</h3>
        <p className="text-foreground/80 text-justify leading-relaxed flex-grow">{description}</p>
      </motion.div>
    );

    const HomePage = () => {
      const { toast } = useToast();
      const navigate = useNavigate();

      const handleDiscoverServices = () => {
        navigate('/services');
        toast({ title: "Redirection", description: "Vous êtes redirigé vers la page Nos Services." });
      };

      const sectionTitleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 }}
      }

      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <section className="w-full relative">
            <ImageCarousel />
             <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-0"></div>
          </section>

          <div className="container mx-auto px-4 py-8 relative z-10">
            <AnimatedSection className="text-center -mt-10 md:-mt-20 bg-gradient-to-br from-card to-background rounded-xl shadow-xl overflow-hidden border border-border p-8 md:p-16">
              <motion.h2 
                className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-6 title-center-fix"
                variants={sectionTitleVariants}
              >
                Bienvenue chez Andy KGZ Consulting
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-foreground/80 mb-8 max-w-3xl mx-auto px-4"
                 variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 }}}}
              >
                Que vous soyez un professionnel en quête d'évolution, en reconversion, ou une entreprise cherchant des talents freelances d'exception, Andy KGZ Consulting vous accompagne. Notre expertise en gestion de carrière et en recrutement de consultants RH nous permet de transformer vos ambitions en succès.
              </motion.p>
              <motion.div
                 variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7 }}}}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground text-lg px-10 py-7 shadow-lg transform hover:scale-105 transition-all duration-300 rounded-lg group"
                  onClick={handleDiscoverServices}
                >
                  Explorer nos solutions <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection className="bg-secondary/10">
              <motion.h2 
                className="text-4xl font-bold text-center text-accent mb-16 title-center-fix"
                variants={sectionTitleVariants}
              >
                Pourquoi Nous Choisir ?
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <FeatureCard 
                  icon={<Award />} 
                  title="Expertise Reconnue" 
                  description="Notre connaissance approfondie du marché du travail, acquise à travers une expérience multisectorielle, nous permet de déployer des stratégies de recrutement et de coaching carrière réellement efficaces."
                />
                <FeatureCard 
                  icon={<Target />} 
                  title="Approche Personnalisée" 
                  description="Nous croyons en un accompagnement sur mesure. Chaque parcours de développement professionnel est unique, c'est pourquoi nous adaptons nos services à vos besoins spécifiques pour garantir des résultats optimaux."
                />
                <FeatureCard 
                  icon={<Lightbulb />} 
                  title="Solutions Innovantes" 
                  description="En veille constante, nous utilisons des outils de personal branding et des méthodes de sourcing modernes pour une approche dynamique du coaching carrière et du recrutement de talents."
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="bg-secondary/20 rounded-xl border border-border p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <motion.div
                  variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7 }}}}
                >
                  <h2 className="text-4xl font-bold text-accent mb-6 title-center-fix">Notre Double Expertise</h2>
                  <p className="text-foreground/80 text-justify mb-4">Chez AKC, nous combinons deux pôles de compétences essentiels pour répondre aux défis du monde professionnel actuel :</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <Users className="w-8 h-8 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground/90"><strong className="text-primary">Coaching Carrière :</strong> Un accompagnement sur mesure en gestion de carrière pour les individus (étudiants, salariés, entrepreneurs) visant l'épanouissement et la performance professionnelle.</span>
                    </li>
                    <li className="flex items-start">
                      <Briefcase className="w-8 h-8 text-secondary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-foreground/90"><strong className="text-secondary">Recrutement Freelance :</strong> Identification et placement de talents freelances qualifiés (consultants RH, experts techniques, etc.) pour les entreprises, ESN et cabinets de conseil, optimisant flexibilité et expertise.</span>
                    </li>
                  </ul>
                  <Button onClick={() => navigate('/a-propos')} variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary group">
                    En savoir plus sur AKC <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </motion.div>
                <motion.div
                  className="h-72 md:h-96 rounded-lg overflow-hidden shadow-xl border border-border"
                   variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7 }}}}
                >
                  <img  className="w-full h-full object-cover" alt="Collage d'images professionnelles : coaching, recrutement, collaboration" src="https://images.unsplash.com/photo-1698287450960-deacc4126a28" />
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="bg-primary/20 rounded-xl border border-border p-8 md:p-12">
              <motion.h2 
                className="text-4xl font-bold text-center text-accent mb-16 title-center-fix"
                variants={sectionTitleVariants}
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
              >
                Nos Engagements
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-10 text-center">
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 }}}}
                >
                  <Users className="w-16 h-16 text-primary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-primary mb-3">Humain au cœur</h3>
                  <p className="text-foreground/80">Chaque individu est unique. Nous privilégions une approche personnalisée, respectueuse de vos valeurs et de votre parcours.</p>
                </motion.div>
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 }}}}
                >
                  <Lightbulb className="w-16 h-16 text-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-accent mb-3">Excellence & Innovation</h3>
                  <p className="text-foreground/80">Nous nous engageons à offrir des services de la plus haute qualité, en intégrant les dernières tendances du marché et les meilleures pratiques du coaching et du recrutement.</p>
                </motion.div>
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 }}}}
                >
                  <Briefcase className="w-16 h-16 text-secondary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-secondary mb-3">Impact Durable</h3>
                  <p className="text-foreground/80">Notre objectif est de construire des relations de confiance et d'assurer un impact positif et durable sur votre carrière ou sur la croissance de votre entreprise.</p>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="bg-gradient-to-br from-primary/10 to-transparent rounded-xl border border-border p-8 md:p-12">
              <motion.h2 
                className="text-4xl font-bold text-center text-accent mb-16 title-center-fix"
                variants={sectionTitleVariants}
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }}
              >
                Nos Histoires de Succès
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 }}}}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 bg-card border border-border">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-primary">Transformation de Carrière</CardTitle>
                      <CardDescription className="text-muted-foreground">"Sophie L. - Cadre en reconversion"</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80 text-justify">
                        Grâce à un coaching de carrière approfondi, Sophie a réussi sa reconversion du secteur bancaire vers le marketing digital, doublant son salaire et trouvant un épanouissement professionnel qu'elle n'espérait plus.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 }}}}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 bg-card border border-border">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-primary">Recrutement Stratégique</CardTitle>
                      <CardDescription className="text-muted-foreground">"Tech Innov - Startup"</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80 text-justify">
                        Tech Innov, une startup en pleine croissance, a pu intégrer 5 talents freelances clés en moins de 3 mois grâce à notre expertise en sourcing et sélection, accélérant ainsi le développement de leurs produits.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 }}}}
                >
                  <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 bg-card border border-border">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-primary">Leadership Accéléré</CardTitle>
                      <CardDescription className="text-muted-foreground">"Marc D. - Jeune Manager"</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80 text-justify">
                        Marc, un jeune manager, a consolidé ses compétences en leadership et en prise de décision après un programme de coaching intensif, menant son équipe à des résultats record en un an.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </AnimatedSection>


            <AnimatedSection className="bg-gradient-to-br from-accent/10 to-transparent">
              <motion.h2 
                className="text-4xl font-bold text-center text-accent mb-16 title-center-fix"
                variants={sectionTitleVariants}
              >
                Prêt à passer à l'action ?
              </motion.h2>
              <div className="grid md:grid-cols-2 gap-10">
                <motion.div
                  className="bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-accent/10 transition-all duration-300 text-center"
                  whileHover={{ y: -5 }}
                  variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 }}}}
                >
                  <TrendingUp className="w-16 h-16 text-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-primary mb-4">Boostez Votre Carrière</h3>
                  <p className="text-foreground/80 mb-6 text-justify">Que vous soyez en début de parcours, en reconversion professionnelle ou en quête de nouveaux défis, notre coaching personnalisé vous donne les outils pour bâtir une carrière à la hauteur de vos ambitions.</p>
                  <Button onClick={() => navigate('/contact', { state: { focus: 'candidat' }})} className="bg-gradient-to-r from-accent to-primary/80 hover:from-accent/90 hover:to-primary/70 text-accent-foreground group">
                    Je suis un Candidat <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </motion.div>
                <motion.div
                  className="bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-secondary/10 transition-all duration-300 text-center"
                  whileHover={{ y: -5 }}
                   variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 }}}}
                >
                  <Users className="w-16 h-16 text-secondary mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-primary mb-4">Trouvez les Meilleurs Talents</h3>
                  <p className="text-foreground/80 mb-6 text-justify">Accédez à notre réseau de talents freelances qualifiés et construisez une équipe flexible et performante. Nous simplifions votre processus de recrutement pour des collaborations fructueuses et durables.</p>
                  <Button onClick={() => navigate('/contact', { state: { focus: 'entreprise' }})} className="bg-gradient-to-r from-secondary to-muted hover:from-secondary/90 hover:to-muted/90 text-secondary-foreground group">
                    Je suis une Entreprise <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="bg-primary/10 rounded-lg border border-border relative overflow-hidden">
                <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${typeof window !== 'undefined' ? getComputedStyle(document.documentElement).getPropertyValue('--primary').trim().split(" ").map(c => parseInt(c).toString(16).padStart(2,'0')).join("") : 'A67B5B'}' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                    animate={{ backgroundPositionX: ['0px', '60px'], backgroundPositionY: ['0px', '60px']}}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              <div className="relative z-10 p-8 md:p-12">
                <motion.h2 
                  className="text-4xl font-bold text-center text-accent mb-12 title-center-fix"
                  variants={sectionTitleVariants}
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }}
                >
                  Découvrez notre univers en vidéo
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="text-3xl font-bold text-accent mb-4">Notre approche en quelques minutes</h3>
                    <p className="text-foreground/80 text-justify mb-6">
                        Plongez au cœur de l'univers d'Andy KGZ Consulting et découvrez comment nous transformons les carrières et optimisons le recrutement freelance. Cette vidéo vous présente notre philosophie, nos méthodes de coaching de carrière innovantes et notre expertise en gestion de talents pour les entreprises.
                    </p>
                    <Button onClick={() => navigate('/a-propos')} variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary group">
                        En savoir plus sur AKC <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </motion.div>
                  <motion.div 
                    className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto shadow-2xl rounded-lg overflow-hidden border-2 border-primary/50"
                    initial={{ opacity:0, scale:0.9}}
                    whileInView={{ opacity:1, scale:1}}
                    viewport={{ once: true }}
                    transition={{duration: 0.6, delay: 0.4}}
                  >
                    <iframe 
                      src="https://www.youtube.com/embed/fLvHhYh3K9o" 
                      title="Présentation de Andy KGZ Consulting - Coaching carrière et recrutement" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </motion.div>
      );
    };
    export default HomePage;