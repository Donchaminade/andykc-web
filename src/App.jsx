import React from 'react';
    import { BrowserRouter as Router } from 'react-router-dom';
    import { Toaster } from '@/components/ui/toaster';
    
    import Header from '@/components/layout/Header';
    import Footer from '@/components/layout/Footer';
    import AppRouter from '@/router/AppRouter';
    import ScrollToTop from '@/components/layout/ScrollToTop';
    import AnimatedBackground from '@/components/layout/AnimatedBackground';

    const App = () => {
      return (
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-background text-foreground relative overflow-x-hidden">
            <AnimatedBackground />
            <Header />
            <main className="flex-grow relative z-10">
              <AppRouter />
            </main>
            <Footer />
            <Toaster />
          </div>
        </Router>
      );
    };

    export default App;