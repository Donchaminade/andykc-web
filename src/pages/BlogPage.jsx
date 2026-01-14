import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { ArrowRight, Lightbulb, Users, Briefcase, BookOpen } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const articles = [
      { slug: "5-astuces-cv-impactant", title: "5 Astuces pour un CV Impactant", category: "Candidats", date: "2025-05-07", excerpt: "Découvrez comment rendre votre CV irrésistible pour les recruteurs et décrocher plus d'entretiens.", imageAlt: "Bureau de travail moderne avec un CV à l'écran et des éléments de design graphique", imageSrc:"https://images.unsplash.com/photo-1553877522-c369803ea52C?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", fullContent: "Un CV percutant est votre passeport pour l'emploi. Voici cinq astuces essentielles pour faire la différence :\n1. **Clarté et Conciseness** : Allez droit au but. Utilisez des listes à puces et des phrases courtes. Un recruteur passe en moyenne 6 secondes sur un CV.\n2. **Mots-clés Pertinents** : Adaptez votre CV à chaque offre en intégrant les mots-clés de l'annonce. De nombreux systèmes de suivi des candidats (ATS) filtrent les CV sur cette base.\n3. **Réalisations Quantifiables** : Au lieu de lister des tâches, mettez en avant vos succès avec des chiffres. Exemple : \"Augmentation des ventes de 15% en 6 mois\" est plus parlant que \"Gestion des ventes\".\n4. **Design Professionnel et Lisible** : Optez pour une mise en page aérée, une police professionnelle (Calibri, Arial) et une structure claire. Évitez les excès de couleurs ou de graphismes.\n5. **Relecture Impeccable** : Une faute d'orthographe peut être rédhibitoire. Faites relire votre CV par plusieurs personnes ou utilisez des outils de correction avancés."},
      { slug: "reseau-reussite-professionnelle", title: "Le Réseau : Clé de la Réussite Professionnelle", category: "Candidats", date: "2025-04-20", excerpt: "Pourquoi et comment développer efficacement votre réseau professionnel pour ouvrir de nouvelles opportunités.", imageAlt: "Illustration conceptuelle de connexions réseau entre différentes personnes stylisées", imageSrc: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", fullContent: "Le réseautage est bien plus qu'une simple collection de contacts. C'est un écosystème vivant qui peut propulser votre carrière.\n**Pourquoi réseauter ?**\n- Accès au marché caché de l'emploi : de nombreuses offres ne sont jamais publiées.\n- Obtention de conseils et d'informations précieuses sur votre secteur.\n- Développement de votre réputation professionnelle.\n**Comment réseauter efficacement ?**\n- **Soyez authentique** : L'objectif est de créer des relations mutuellement bénéfiques, pas seulement de demander des faveurs.\n- **Écoutez activement** : Intéressez-vous sincèrement à vos interlocuteurs.\n- **Donnez avant de recevoir** : Partagez vos connaissances, offrez votre aide.\n- **Utilisez LinkedIn** : C'est un outil puissant pour identifier et contacter des professionnels.\n- **Participez à des événements** : Salons, conférences, webinaires sont d'excellentes occasions de rencontrer du monde."},
      { slug: "attirer-talents-freelances", title: "Comment Attirer les Meilleurs Talents Freelances ?", category: "Recruteurs", date: "2025-04-15", excerpt: "Stratégies pour sourcer et engager les freelances les plus compétents et dynamiser vos projets.", imageAlt: "Aimant attirant des icônes de personnes symbolisant des talents freelances de qualité", imageSrc: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", fullContent: "Les freelances de haut niveau sont très demandés. Pour les attirer, il faut se démarquer.\n**Stratégies clés :**\n- **Projets stimulants** : Les meilleurs freelances recherchent des missions intéressantes qui leur permettent de développer leurs compétences.\n- **Rémunération attractive et juste** : Proposez des tarifs compétitifs et soyez transparent sur les conditions.\n- **Communication claire et réactive** : Dès le premier contact, montrez-vous professionnel et organisé.\n- **Flexibilité et confiance** : Les freelances apprécient l'autonomie. Évitez le micro-management.\n- **Bonne réputation d'entreprise** : Des témoignages positifs d'autres freelances peuvent être un atout majeur.\n- **Processus de recrutement simplifié** : Ne les submergez pas de démarches administratives complexes."},
      { slug: "personal-branding-impactant", title: "Construire un Personal Branding Impactant", category: "Candidats", date: "2025-05-01", excerpt: "Développez votre marque personnelle pour vous démarquer et attirer les opportunités qui vous correspondent.", imageAlt: "Personne se tenant devant un miroir reflétant une version améliorée et confiante d'elle-même", imageSrc: "https://images.unsplash.com/photo-1531496678536-2e6839961d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80", fullContent: "Votre personal branding est la perception que les autres ont de vous et de votre expertise. C'est un outil essentiel pour votre carrière.\n**Étapes pour construire votre marque :**\n1. **Définissez votre identité** : Quelles sont vos valeurs, vos passions, vos compétences uniques ? Quelle est votre promesse de valeur ?\n2. **Identifiez votre public cible** : À qui souhaitez-vous vous adresser ? Quels sont leurs besoins ?\n3. **Créez votre message** : Élaborez un discours clair et cohérent sur qui vous êtes et ce que vous offrez.\n4. **Optimisez votre présence en ligne** : LinkedIn, portfolio, site personnel... Assurez-vous que votre image est professionnelle et alignée avec votre message.\n5. **Partagez votre expertise** : Publiez du contenu pertinent (articles, posts, commentaires) pour démontrer votre savoir-faire.\n6. **Soyez cohérent et authentique** : Votre marque personnelle doit refléter qui vous êtes réellement."},
    ];

    const conseils = [
      { title: "Optimisez votre LinkedIn", description: "Un profil complet est votre vitrine. Utilisez des mots-clés pertinents et demandez des recommandations.", icon: <Users className="w-10 h-10 text-primary" />, imageAlt: "Illustration d'un profil LinkedIn optimisé avec des badges de compétence et des recommandations", imageSrc: "https://images.unsplash.com/photo-1634912335809-4c0465953b15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" },
      { title: "Préparez vos entretiens", description: "Renseignez-vous, anticipez les questions et préparez des exemples concrets de vos réalisations.", icon: <Briefcase className="w-10 h-10 text-secondary" />, imageAlt: "Personnage animé se préparant pour un entretien avec une checklist et des notes", imageSrc: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
      { title: "Soyez proactif", description: "Activez votre réseau, ciblez des entreprises et osez les candidatures spontanées.", icon: <Lightbulb className="w-10 h-10 text-accent" />, imageAlt: "Flèche pointant vers le haut traversant des obstacles, symbolisant la proactivité", imageSrc: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" },
      { title: "Apprenez Continuement", description: "Investissez dans votre développement pour rester compétitif dans un monde en évolution.", icon: <BookOpen className="w-10 h-10 text-primary" />, imageAlt: "Cerveau lumineux avec des engrenages, symbolisant l'apprentissage et le développement continu", imageSrc: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1590&q=80" },
    ];

    export const getArticleBySlug = (slug) => articles.find(article => article.slug === slug);


    const BlogPage = () => {
      const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut"
          }
        })
      };

      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-12"
        >
          <motion.h1 
            className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent title-center-fix"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Blog & Conseils
          </motion.h1>
          <motion.p 
            className="text-center text-muted-foreground mb-16 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Plongez au cœur de l'actualité professionnelle avec nos analyses, astuces et partages d'expérience. Que vous soyez en quête d'opportunités ou de talents, trouvez l'inspiration ici.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
            {articles.map((article, index) => (
               <motion.div 
                key={article.slug}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -5, boxShadow: "0 10px 20px hsla(var(--primary)/0.15)" }}
                className="h-full"
              >
              <Card className="h-full flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-card border border-border group rounded-xl">
                <div className="h-48 w-full overflow-hidden rounded-t-xl">
                  <img  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={article.imageAlt} src={article.imageSrc} />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground pt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${article.category === "Candidats" ? "bg-primary/10 text-primary" : "bg-secondary/20 text-secondary-foreground"}`}>
                      {article.category}
                    </span> ・ {article.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-2">
                  <p className="text-foreground/80 text-justify line-clamp-3">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="text-primary hover:text-primary/80 p-0 group-hover:underline">
                    <Link to={`/blog/${article.slug}`}>
                      Lire la suite <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              </motion.div>
            ))}
          </div>

          <motion.section 
            className="py-20 bg-gradient-to-br from-secondary/10 via-background to-secondary/5 rounded-xl shadow-inner border border-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl font-bold text-center text-accent mb-16 title-center-fix"
              initial={{ opacity:0, y:20}}
              whileInView={{ opacity:1, y:0}}
              viewport={{ once: true }}
              transition={{duration: 0.6, delay: 0.2}}
            >
              Nos Meilleurs Conseils pour Votre Succès
            </motion.h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 px-4">
              {conseils.map((conseil, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
                  className="group"
                >
                  <Card className="h-full flex flex-col overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-card border-2 border-transparent hover:border-primary group-hover:-translate-y-2 rounded-xl">
                    <div className="h-60 w-full overflow-hidden rounded-t-xl relative">
                      <img  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" alt={conseil.imageAlt} src={conseil.imageSrc} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                      <div className="absolute top-4 right-4 p-3 bg-primary/80 rounded-full text-primary-foreground shadow-lg group-hover:bg-primary transition-colors duration-300 transform group-hover:scale-110">
                        {conseil.icon}
                      </div>
                       <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-md">{conseil.title}</h3>
                    </div>
                    <CardContent className="flex-grow p-6">
                      <p className="text-foreground/70 text-justify">{conseil.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

        </motion.div>
      );
    };
    export default BlogPage;