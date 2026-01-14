import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    
    import HomePage from '@/pages/HomePage';
    import AboutPage from '@/pages/AboutPage';
    import ServicesPage from '@/pages/ServicesPage';
    import CoachingExpressPage from '@/pages/CoachingExpressPage';
    import FreelanceRecruitmentPage from '@/pages/FreelanceRecruitmentPage';
    import TestimonialsPage from '@/pages/TestimonialsPage';
    import BlogPage from '@/pages/BlogPage';
    import SingleArticlePage from '@/pages/SingleArticlePage';
    import ContactPage from '@/pages/ContactPage';
    import NotFoundPage from '@/pages/NotFoundPage';

    const AppRouter = () => {
      return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/coaching-express" element={<CoachingExpressPage />} />
          <Route path="/recrutement-freelance" element={<FreelanceRecruitmentPage />} />
          <Route path="/temoignages" element={<TestimonialsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:articleSlug" element={<SingleArticlePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      );
    };

    export default AppRouter;