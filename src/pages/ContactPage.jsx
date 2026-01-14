import React, { useEffect, useRef } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { useToast } from '@/components/ui/use-toast';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { Send, CalendarDays, User, Building, Mail, MessageSquare as MessageIcon } from 'lucide-react';
    import { useLocation } from 'react-router-dom';


    const ContactPage = () => {
      const { toast } = useToast();
      const location = useLocation();
      const entrepriseFormRef = useRef(null);
      const candidatSectionRef = useRef(null);

      const [formData, setFormData] = React.useState({
        companyName: '',
        email: '',
        subject: location.state?.subject || '',
        message: ''
      });

      useEffect(() => {
        if (location.state?.focus === 'entreprise' && entrepriseFormRef.current) {
          entrepriseFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
          const firstInput = entrepriseFormRef.current.querySelector('input, textarea');
          if (firstInput) firstInput.focus();
        } else if (location.state?.focus === 'candidat' && candidatSectionRef.current) {
          candidatSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        if (location.state?.subject) {
          setFormData(prev => ({ ...prev, subject: location.state.subject }));
        }
      }, [location.state]);

      const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
      };

      const handleSubmitCandidat = (e) => {
        e.preventDefault();
        window.open('https://calendly.com/votre-lien-calendly', '_blank');
        toast({
          title: "Redirection vers Calendly",
          description: "Vous allez être redirigé pour prendre rendez-vous.",
        });
      };

      const handleSubmitEntreprise = (e) => {
        e.preventDefault();
        console.log("Formulaire entreprise soumis:", formData);
        toast({
          title: "Message Envoyé !",
          description: "Merci de nous avoir contactés. Nous reviendrons vers vous rapidement.",
        });
        setFormData({ companyName: '', email: '', subject: '', message: '' });
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
            Contact & Rendez-vous
          </motion.h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              ref={candidatSectionRef}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-xl bg-gradient-to-br from-secondary/20 to-background h-full border border-border overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary to-accent p-6 rounded-t-lg">
                  <CardTitle className="text-3xl font-bold text-primary-foreground text-center flex items-center justify-center">
                    <User className="mr-3 w-8 h-8" /> Je suis Candidat
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 text-center flex flex-col items-center h-full">
                  <motion.p 
                    className="text-muted-foreground mb-6 text-lg"
                    initial={{ opacity: 0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.3 }}
                  >
                    Prêt à donner un nouvel élan à votre carrière ? Planifiez un entretien directement.
                  </motion.p>
                  <motion.div 
                    className="my-6 w-full max-w-xs"
                    initial={{ opacity: 0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ delay: 0.4 }}
                  >
                    <img  className="rounded-lg shadow-md object-cover w-full h-auto aspect-video" alt="Personne souriante lors d'un entretien d'embauche ou de coaching" src="https://images.unsplash.com/photo-1698047681432-006d2449c631" />
                  </motion.div>
                  <Button 
                    size="lg" 
                    onClick={handleSubmitCandidat}
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform px-10 py-6 mt-auto text-lg"
                  >
                    <CalendarDays className="mr-2 w-5 h-5" /> Prendre RDV sur Calendly
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              ref={entrepriseFormRef}
              id="contact-form-entreprise"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="shadow-xl bg-gradient-to-br from-secondary/30 to-background h-full border border-border overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-accent to-primary/80 p-6 rounded-t-lg">
                  <CardTitle className="text-3xl font-bold text-accent-foreground text-center flex items-center justify-center">
                    <Building className="mr-3 w-8 h-8" /> Je suis une Entreprise
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 flex flex-col h-full">
                  <CardDescription className="text-muted-foreground mb-6 text-lg text-center">
                    Discutons de vos besoins en recrutement, formation ou accompagnement.
                  </CardDescription>
                  <form onSubmit={handleSubmitEntreprise} className="space-y-6 flex-grow flex flex-col">
                    <motion.div initial={{ opacity: 0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.5 }}>
                      <Label htmlFor="companyName" className="text-foreground font-medium flex items-center"><Building className="w-4 h-4 mr-2 text-primary" />Nom de l'entreprise</Label>
                      <Input type="text" id="companyName" placeholder="Votre nom d'entreprise" required value={formData.companyName} onChange={handleInputChange} className="mt-1 bg-background border-border focus:border-primary focus:ring-primary" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.6 }}>
                      <Label htmlFor="email" className="text-foreground font-medium flex items-center"><Mail className="w-4 h-4 mr-2 text-primary" />Email</Label>
                      <Input type="email" id="email" placeholder="contact@entreprise.com" required value={formData.email} onChange={handleInputChange} className="mt-1 bg-background border-border focus:border-primary focus:ring-primary" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.7 }}>
                      <Label htmlFor="subject" className="text-foreground font-medium flex items-center"><MessageIcon className="w-4 h-4 mr-2 text-primary" />Sujet</Label>
                      <Input type="text" id="subject" placeholder="Sujet de votre demande" required value={formData.subject} onChange={handleInputChange} className="mt-1 bg-background border-border focus:border-primary focus:ring-primary" />
                    </motion.div>
                    <motion.div className="flex-grow" initial={{ opacity: 0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.8 }}>
                      <Label htmlFor="message" className="text-foreground font-medium">Votre message</Label>
                      <Textarea id="message" placeholder="Décrivez brièvement votre besoin..." required value={formData.message} onChange={handleInputChange} rows={5} className="mt-1 bg-background border-border focus:border-primary focus:ring-primary h-full resize-none" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ delay: 0.9 }}>
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-gradient-to-r from-accent to-primary/80 hover:from-accent/90 hover:to-primary/70 text-accent-foreground shadow-lg transform hover:scale-105 transition-transform py-3 mt-auto text-lg"
                    >
                      <Send className="mr-2 w-5 h-5" /> Envoyer le Message
                    </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      );
    };
    export default ContactPage;