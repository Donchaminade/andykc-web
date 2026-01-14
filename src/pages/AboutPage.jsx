import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';

    const AboutPage = () => (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12"
      >
        <Card className="overflow-hidden shadow-xl bg-gradient-to-br from-secondary/20 to-background border border-border">
          <CardHeader className="p-8 bg-gradient-to-r from-primary to-accent">
            <motion.h1 
              className="text-4xl font-extrabold text-primary-foreground tracking-tight title-center-fix"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              À Propos d'AKC
            </motion.h1>
            <CardDescription className="text-primary-foreground/80 text-lg mt-2">
              Révéler l'identité professionnelle et accompagner le développement de carrière de chacun.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-accent mb-3">Notre Histoire</h2>
                <p className="text-foreground/80 text-justify leading-relaxed">
                  Fondée en 2021 par Andréanne KGZ, une consultante RH passionnée, Andy KGZ Consulting (AKC) est née d'une conviction profonde : la gestion de carrière et le recrutement ne sont pas de simples transactions, mais des aventures humaines. En pleine crise sanitaire, la vision était claire : créer un cabinet de conseil qui place l'individu au cœur du développement professionnel.
                </p>
                <p className="text-foreground/80 text-justify leading-relaxed mt-4">
                  Notre mission chez Andy KGZ Consulting est d'agir comme un catalyseur pour votre succès professionnel. Que ce soit par le coaching de carrière individualisé ou par l'identification de talents freelances pour dynamiser les entreprises, nous nous engageons à offrir des solutions concrètes et innovantes. Nous valorisons l'intégrité, la personnalisation et l'excellence dans chaque accompagnement.
                </p>
              </motion.div>
              
              <motion.blockquote 
                className="border-l-4 border-primary pl-6 py-4 my-8 bg-secondary/20 rounded-r-md shadow"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-xl italic text-accent">
                  « Pour atteindre une vision, il faut se mettre en mouvement. »
                </p>
                <footer className="text-muted-foreground mt-2">- Andréanne KGZ</footer>
              </motion.blockquote>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl font-semibold text-accent mb-3">Notre Valeur Ajoutée</h2>
                <p className="text-foreground/80 text-justify leading-relaxed">
                  Notre force réside dans une double compétence rare et précieuse sur le marché actuel. D'une part, une expertise de consultante RH aguerrie, capable de naviguer les complexités des différents secteurs (IT, marketing, immobilier, finance...). D'autre part, une approche de coach certifiée, profondément humaine et axée sur le développement personnel et professionnel.
                </p>
                <p className="text-foreground/80 text-justify leading-relaxed mt-2">
                  Cette synergie unique nous permet non seulement de comprendre précisément les enjeux stratégiques des entreprises en matière de recrutement et de gestion des talents, mais aussi de saisir les aspirations profondes des individus en quête de sens et d'évolution dans leur carrière. Chez AKC, nous créons des ponts entre ces mondes pour des collaborations fructueuses et un développement professionnel durable.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <h2 className="text-2xl font-semibold text-accent mb-3">Notre Vision</h2>
                <p className="text-foreground/80 text-justify leading-relaxed">
                  Nous aspirons à un monde du travail où chaque personne est à sa juste place, épanouie et performante. Pour les entreprises, nous imaginons des équipes agiles, enrichies par des talents freelances qui apportent innovation et flexibilité. Chez AKC, nous ne faisons pas que pourvoir des postes, nous construisons des avenirs professionnels.
                </p>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-accent mb-3">Qui est Andréanne KGZ ?</h2>
              <img className="rounded-lg shadow-xl object-cover w-full max-w-sm h-auto aspect-[3/4] mx-auto mb-6 md:float-right md:ml-6 md:mb-2" alt="Andréanne KGZ, fondatrice d'AKC, une femme noire souriante et professionnelle" src="https://images.unsplash.com/photo-1573878221136-9b03f3d976b7" />
              <p className="text-foreground/80 text-justify leading-relaxed">
                Fondatrice d'Andy KGZ Consulting, Andréanne est une consultante RH expérimentée et une coach certifiée passionnée par le développement humain. Avec plus d'une décennie d'expérience dans des environnements variés, elle a développé une expertise unique en recrutement de talents, gestion de carrière, et accompagnement à la reconversion professionnelle. Son approche allie rigueur stratégique et écoute empathique, faisant d'elle une partenaire privilégiée pour les entreprises et les particuliers.
              </p>
              <p className="text-foreground/80 text-justify leading-relaxed mt-2">
                Andréanne est convaincue que la clé du succès réside dans l'alignement entre les compétences, les aspirations et les opportunités. Elle s'investit personnellement pour aider chacun à identifier ses forces, à surmonter ses défis, et à élaborer une stratégie de carrière qui mène à l'épanouissement durable.
              </p>
            </motion.div>
          </CardContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center p-8"
          >
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent title-center-fix">
              AKC : Votre partenaire pour une carrière et un recrutement épanouis.
            </span>
          </motion.div>
        </Card>
      </motion.div>
    );
    export default AboutPage;