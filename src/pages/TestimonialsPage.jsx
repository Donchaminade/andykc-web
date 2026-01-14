import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

    const TestimonialCarousel = ({ items, direction = 'left', speed = 'slow' }) => {
      const duplicatedItems = [...items, ...items];
      const duration = items.length * 10;

      return (
        <div className="overflow-hidden w-full relative group">
          <div 
            className="flex group-hover:[animation-play-state:paused]"
            style={{ 
                width: `${items.length * 2 * 350}px`,
                animation: `${direction === 'left' ? 'scroll-left-custom' : 'scroll-right-custom'} ${duration}s linear infinite`
            }} 
          >
            {duplicatedItems.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                className="flex-shrink-0 w-[320px] md:w-[350px] mx-4 h-full"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full flex flex-col bg-gradient-to-br from-secondary/20 to-background shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
                  <CardHeader className="flex-row items-center space-x-4 pb-4">
                    {testimonial.logo ? (
                      <img  className="h-12 w-12 object-contain rounded-full" alt={`Logo ${testimonial.name}`} src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                    ) : (
                      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gradient-to-tr from-primary to-accent items-center justify-center text-primary-foreground font-bold">
                        {testimonial.name.substring(0,1)}
                      </span>
                    )}
                    <CardTitle className="text-primary">{testimonial.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground italic text-justify">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      );
    };


    const TestimonialsPage = () => {
      const testimonialsParticuliers = [
        { name: "Sophie L.", text: "Grâce à AKC, j'ai enfin trouvé le poste qui me correspond. Un accompagnement exceptionnel !" , imageAlt: "Portrait de Sophie L."},
        { name: "Marc D.", text: "Le coaching express m'a donné les clés pour réussir mes entretiens. Très efficace.", imageAlt: "Portrait de Marc D."},
        { name: "Amina K.", text: "Je me sentais perdue dans ma reconversion, AKC m'a redonné confiance et une direction claire.", imageAlt: "Portrait d'Amina K."},
        { name: "Julien B.", text: "Une approche très humaine et des conseils personnalisés qui font la différence.", imageAlt: "Portrait de Julien B."},
        { name: "Laura P.", text: "AKC m'a aidé à mieux définir mon projet professionnel et à gagner en assurance.", imageAlt: "Portrait de Laura P."},
      ];
      const testimonialsEntreprises = [
        { name: "Tech Solutions Inc.", text: "AKC a su nous dénicher des profils freelances rares et parfaitement adaptés à nos projets.", logo: "Logo moderne pour Tech Solutions Inc."},
        { name: "Innov Conseil", text: "La formation en personal branding a été très bénéfique pour nos consultants. Une approche très pro.", logo: "Logo élégant pour Innov Conseil"},
        { name: "Alpha Digital", text: "Réactivité et compréhension de nos besoins, AKC est un partenaire de choix pour le recrutement.", logo: "Logo dynamique pour Alpha Digital"},
        { name: "Stratégie Plus", text: "Les ateliers proposés par AKC ont été très appréciés par nos équipes.", logo: "Logo professionnel pour Stratégie Plus"},
      ];

      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-12"
        >
          <motion.h1 
            className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent title-center-fix"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Témoignages
          </motion.h1>
          
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-accent mb-8 text-center underline decoration-primary decoration-4 underline-offset-8">Clients Particuliers</h2>
            <TestimonialCarousel items={testimonialsParticuliers} direction="left" />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-accent mb-8 text-center underline decoration-secondary decoration-4 underline-offset-8">Clients Entreprises</h2>
            <TestimonialCarousel items={testimonialsEntreprises} direction="right" />
          </motion.section>
        </motion.div>
      );
    };
    export default TestimonialsPage;