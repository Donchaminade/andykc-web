import React from 'react';
    import { Link } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';

    const NotFoundPage = () => (
      <div className="container mx-auto px-4 py-12 text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
          className="py-16"
        >
          <img  className="mx-auto h-64 w-auto" alt="Illustration d'une page 404 - chemin non trouvé" src="https://images.unsplash.com/photo-1459461747762-7e29961bf989" />
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-destructive to-orange-500 mt-8 mb-4">404</h1>
          <p className="text-2xl text-muted-foreground mb-8">Oups! La page que vous cherchez n'existe pas.</p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg">
            <Link to="/">Retour à l'accueil</Link>
          </Button>
        </motion.div>
      </div>
    );
    export default NotFoundPage;