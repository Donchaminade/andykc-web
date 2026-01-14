import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { useToast } from '@/components/ui/use-toast';
    import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
    import { Users, ArrowRight, Download, Info, School, Building, UserCheck } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';

    const ServiceCard = ({ icon, title, description, imageSrc, imageAlt, children, delay }) => (
      <motion.div 
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } } }}
        initial="hidden" 
        animate="visible"
        className="bg-card shadow-lg rounded-lg overflow-hidden border border-border hover:shadow-primary/10 transition-shadow duration-300"
      >
        <div className="h-56 w-full overflow-hidden">
          <img  className="w-full h-full object-cover" alt={imageAlt} src="https://images.unsplash.com/photo-1675023112817-52b789fd2ef0" />
        </div>
        <AccordionItem value={title.toLowerCase().replace(/\s/g, '-')} className="border-none">
          <AccordionTrigger className="p-6 text-2xl font-semibold text-primary hover:bg-secondary/20 transition-colors w-full text-left hover:no-underline">
            <div className="flex items-center">
              {icon}
              {title}
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-6 border-t border-border">
            <p className="text-muted-foreground mb-6 text-justify">{description}</p>
            {children}
          </AccordionContent>
        </AccordionItem>
      </motion.div>
    );


    const ServicesPage = () => {
      const { toast } = useToast();
      const navigate = useNavigate();

      const handleDownloadPlaquette = (type) => {
        toast({
          title: "Téléchargement en cours",
          description: `La plaquette ${type} sera bientôt téléchargée.`,
        });
        
        setTimeout(() => {
          toast({
            title: "Plaquette téléchargée!",
            description: "Merci de votre intérêt.",
          });
        }, 2000);
      };
      
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
            Nos Services
          </motion.h1>
          
          <Accordion type="single" collapsible className="w-full space-y-8">
            <ServiceCard
              icon={<UserCheck className="w-8 h-8 mr-4 text-primary" />}
              title="Pour les Particuliers"
              description="Transformez votre trajectoire professionnelle avec notre coaching carrière personnalisé. Que vous soyez en quête de votre premier emploi, en reconversion professionnelle, ou souhaitiez optimiser votre gestion de carrière, nous vous offrons un accompagnement sur mesure. Développez vos compétences, renforcez votre personal branding et atteignez vos objectifs de développement professionnel."
              imageSrc="Personne souriante lors d'un coaching carrière individuel"
              imageAlt="Coaching carrière individuel"
              delay={0.2}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.open('https://calendly.com', '_blank')}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-md transform hover:scale-105 transition-transform w-full sm:w-auto"
                >
                  Oui, je veux impacter ! <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => handleDownloadPlaquette("particuliers")}
                  className="border-primary text-primary hover:bg-primary/10 hover:text-primary w-full sm:w-auto"
                >
                  <Download className="mr-2 h-5 w-5" /> Télécharger la plaquette
                </Button>
              </div>
            </ServiceCard>

            <ServiceCard
              icon={<School className="w-8 h-8 mr-4 text-secondary" />}
              title="Pour les Établissements Scolaires"
              description="Préparez vos étudiants aux défis du monde professionnel grâce à nos ateliers interactifs. Axés sur l'orientation, la recherche d'emploi, la gestion de carrière et le développement des compétences, nos programmes sont conçus pour éclairer leurs choix et faciliter leur insertion professionnelle."
              imageSrc="Groupe d'étudiants attentifs lors d'un atelier en milieu scolaire"
              imageAlt="Atelier en établissement scolaire"
              delay={0.4}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => handleDownloadPlaquette("école")}
                  className="border-secondary text-secondary-foreground hover:bg-secondary/30 hover:text-secondary-foreground w-full sm:w-auto"
                >
                  <Download className="mr-2 h-5 w-5" /> Télécharger la plaquette école
                </Button>
                <Button 
                  onClick={() => navigate('/contact', { state: { focus: 'entreprise', subject: 'Demande de devis Établissement Scolaire' }})}
                  className="bg-gradient-to-r from-secondary to-muted hover:from-secondary/90 hover:to-muted/90 text-secondary-foreground shadow-md transform hover:scale-105 transition-transform w-full sm:w-auto"
                >
                  Demander un devis
                </Button>
              </div>
            </ServiceCard>

            <ServiceCard
              icon={<Building className="w-8 h-8 mr-4 text-accent" />}
              title="Pour les Entreprises"
              description="Boostez la performance de vos équipes avec nos formations sur mesure. Du personal branding pour vos collaborateurs à la prise de parole en public, en passant par le développement du leadership et la gestion de talents, nos programmes sont conçus pour renforcer l'impact et l'efficacité de votre capital humain."
              imageSrc="Professionnels en formation sur le personal branding en entreprise"
              imageAlt="Formation en entreprise"
              delay={0.6}
            >
               <Button 
                  onClick={() => navigate('/contact', { state: { focus: 'entreprise', subject: 'Renseignement Formation Entreprise' }})}
                  className="bg-gradient-to-r from-accent to-primary/80 hover:from-accent/90 hover:to-primary/70 text-accent-foreground shadow-md transform hover:scale-105 transition-transform w-full sm:w-auto"
                >
                 <Info className="mr-2 h-5 w-5" /> En savoir plus
                </Button>
            </ServiceCard>

            <ServiceCard
              icon={<Users className="w-8 h-8 mr-4 text-primary" />}
              title="Pour les Entrepreneur.e.s"
              description="Accélérez le succès de votre projet entrepreneurial. Nous vous accompagnons depuis la structuration de votre idée, le développement de votre personal branding en tant que dirigeant, jusqu'à la mise en place de stratégies de réseautage et de recrutement freelance pour bâtir une équipe solide."
              imageSrc="Entrepreneur travaillant sur son projet avec des graphiques et des post-its"
              imageAlt="Accompagnement entrepreneurs"
              delay={0.8}
            >
              <p className="text-muted-foreground mb-6 text-sm italic">Statistique : +50% des emplois via le réseau.</p>
              <Button 
                onClick={() => window.open('https://calendly.com', '_blank')}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-md transform hover:scale-105 transition-transform w-full sm:w-auto"
              >
                Je veux être accompagné.e ! <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </ServiceCard>
          </Accordion>
        </motion.div>
      );
    };
    export default ServicesPage;