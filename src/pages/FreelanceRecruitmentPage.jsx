import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
    import { ArrowRight } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';

    const FreelanceRecruitmentPage = () => {
      const navigate = useNavigate();
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-12"
        >
          <Card className="shadow-xl overflow-hidden bg-gradient-to-br from-secondary/30 via-background to-secondary/10 border border-border">
            <CardHeader className="p-8 bg-gradient-to-r from-primary to-accent">
              <motion.h1 
                className="text-4xl font-extrabold text-primary-foreground tracking-tight"
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Recrutement Freelance
              </motion.h1>
              <CardDescription className="text-primary-foreground/80 text-lg mt-2">
                Votre partenaire stratégique pour le recrutement de talents freelances d'exception et l'externalisation de vos besoins RH.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <motion.p 
                className="text-foreground/80 text-justify leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                AKC propose un service de recrutement externalisé pour les entreprises, ESN et cabinets de conseil. Nous sommes spécialisés dans la chasse de profils rares et la sélection personnalisée de freelances hautement qualifiés.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-accent mb-2">Nos Atouts :</h3>
                <ul className="list-disc list-inside text-foreground/80 space-y-1 pl-4 marker:text-primary">
                  <li>Chasse de profils rares et spécialisés : Une approche proactive pour dénicher les experts freelances que vous ne trouvez pas ailleurs.</li>
                  <li>Expertise pointue pour ESN et cabinets de conseil : Compréhension approfondie de vos enjeux spécifiques et des exigences techniques de vos missions.</li>
                  <li>Processus de sélection rigoureux et personnalisé : Au-delà du CV, nous évaluons les compétences techniques, le savoir-être et l'adéquation culturelle.</li>
                  <li>Gain de temps et d'efficacité pour vos recrutements : Déléguez-nous la phase de sourcing et de pré-qualification pour vous concentrer sur votre cœur de métier.</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="p-6 bg-secondary/20 rounded-lg border border-border shadow"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">Modèle de Facturation Clair et Adapté</h3>
                <p className="text-foreground/80 text-justify">La transparence est au cœur de notre démarche. Notre modèle de facturation est simple, clair et entièrement adapté à la flexibilité du travail freelance et à vos contraintes budgétaires. Vous bénéficiez d'une visibilité totale sur les coûts et d'un excellent retour sur investissement grâce à l'intégration rapide de talents performants.</p>
              </motion.div>

              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => {
                    navigate('/contact', { state: { focus: 'entreprise' } });
                  }}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform px-10 py-6"
                >
                  Discutons de vos besoins <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      );
    };
    export default FreelanceRecruitmentPage;