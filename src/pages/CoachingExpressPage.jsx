import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
    import { ArrowRight, Zap } from 'lucide-react';
    import { useNavigate } from 'react-router-dom';

    const CoachingExpressPage = () => {
      const navigate = useNavigate();
      const handleReserveSession = () => {
        navigate('/contact', { state: { focus: 'candidat', subject: 'Réservation Coaching Express' } });
      };

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
              className="text-4xl font-extrabold text-primary-foreground tracking-tight title-center-fix flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-10 h-10 mr-3 text-yellow-300" /> Coaching Express
            </motion.h1>
            <CardDescription className="text-primary-foreground/80 text-lg mt-2 text-center">
              Une séance ciblée d'1h pour un diagnostic rapide, des solutions concrètes et un impact maximal sur votre développement de carrière.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <motion.p 
              className="text-foreground/80 text-justify leading-relaxed mb-6 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Vous faites face à un défi professionnel urgent ou avez besoin d'un éclairage rapide sur une situation spécifique ? Notre séance de Coaching Express est la solution idéale. En seulement 60 minutes, nous plongeons au cœur de vos besoins : perfectionnement de votre CV, optimisation de votre profil LinkedIn, préparation stratégique à un entretien d'embauche, développement de votre leadership, ou maîtrise des techniques de prise de parole en public et de négociation professionnelle.
            </motion.p>
            <motion.p 
              className="text-foreground/80 text-justify leading-relaxed font-semibold text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Ce format <strong className="text-primary">one-shot impactant</strong> est conçu pour vous apporter des stratégies actionnables et des conseils personnalisés, garantissant des résultats concrets et un développement de carrière accéléré.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 p-6 bg-secondary/20 rounded-lg border border-border shadow"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">Comment ça marche ?</h3>
              <ul className="list-disc list-inside text-foreground/80 space-y-1 pl-4 marker:text-primary">
                <li>Vous réservez votre créneau et précisez votre objectif.</li>
                <li>Nous nous connectons pour une séance intensive d'une heure.</li>
                <li>Vous repartez avec des outils et un plan d'action clair.</li>
              </ul>
            </motion.div>
            <motion.div 
              className="mt-10 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button 
                size="lg" 
                onClick={handleReserveSession}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform px-10 py-6 text-lg"
              >
                Réserver ma séance Express <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    );
    }
    export default CoachingExpressPage;