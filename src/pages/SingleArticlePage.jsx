import React from 'react';
    import { useParams, useNavigate } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { getArticleBySlug } from '@/pages/BlogPage'; 
    import { Button } from '@/components/ui/button';
    import { ArrowLeft, CalendarDays, UserCircle } from 'lucide-react';
    import NotFoundPage from '@/pages/NotFoundPage';

    const SingleArticlePage = () => {
      const { articleSlug } = useParams();
      const article = getArticleBySlug(articleSlug);
      const navigate = useNavigate();

      if (!article) {
        return <NotFoundPage />;
      }

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-12 max-w-4xl"
        >
          <motion.div 
            className="mb-8"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <Button variant="outline" onClick={() => navigate(-1)} className="group text-primary hover:bg-primary/10 hover:text-primary">
              <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" />
              Retour au Blog
            </Button>
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <header className="mb-8">
              <motion.h1 
                className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4 title-center-fix"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {article.title}
              </motion.h1>
              <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.4 }}
                >
                  <CalendarDays className="w-4 h-4 mr-1.5 text-primary" />
                  <span>{article.date}</span>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <UserCircle className="w-4 h-4 mr-1.5 text-secondary" />
                  <span>Par AKC Expert</span>
                </motion.div>
                <motion.span 
                  className={`px-2 py-0.5 rounded-full text-xs font-semibold ${article.category === "Candidats" ? "bg-primary/10 text-primary" : "bg-secondary/20 text-secondary-foreground"}`}
                  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.4 }}
                >
                  {article.category}
                </motion.span>
              </div>
            </header>

            <motion.div 
              className="w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-xl mb-10 border border-border"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <img  className="w-full h-full object-cover" alt={article.imageAlt} src={article.imageSrc} />
            </motion.div>

            <motion.div 
              className="prose prose-lg max-w-none text-foreground/90 text-justify leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="text-xl italic text-muted-foreground mb-6 border-l-4 border-primary pl-4 py-2 bg-secondary/10 rounded-r-md">
                {article.excerpt}
              </p>
              
              {article.fullContent.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-6">{paragraph}</p>
              ))}
            </motion.div>
          </motion.article>

          <motion.div 
            className="mt-12 pt-8 border-t border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-accent mb-4">Partager cet article :</h3>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary">LinkedIn</Button>
              <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary">Facebook</Button>
              <Button variant="outline" size="sm" className="hover:bg-primary/10 hover:text-primary">Twitter</Button>
            </div>
          </motion.div>
        </motion.div>
      );
    };

    export default SingleArticlePage;