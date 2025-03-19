
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Download, Image, Film, BookOpen,
  AtomIcon, BrainCircuit, CircuitBoard, Focus, Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

const AboutInfoCard = ({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="glass p-5 rounded-2xl flex items-center gap-4"
  >
    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-sci-500/10 flex items-center justify-center text-sci-500">
      {icon}
    </div>
    <div>
      <h3 className="font-medium">{value}</h3>
      <p className="text-sm text-muted-foreground">{title}</p>
    </div>
  </motion.div>
);

const InterestItem = ({ icon, title }: { icon: React.ReactNode, title: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    transition={{ duration: 0.5 }}
    className="glass p-4 rounded-xl flex flex-col items-center justify-center gap-3 text-center"
  >
    <div className="h-12 w-12 rounded-full bg-sci-500/10 flex items-center justify-center text-sci-500">
      {icon}
    </div>
    <p className="font-medium">{title}</p>
  </motion.div>
);

const About = () => {
  return (
    <div className="flex flex-col gap-20 py-16">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-sci-100 text-sci-600 text-sm font-medium mb-4">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Professional Summary</h2>
          <div className="h-1 w-20 bg-sci-500 rounded-full mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <AboutInfoCard 
            icon={<Award className="h-6 w-6" />} 
            title="Experience" 
            value="5+ Years"
          />
          <AboutInfoCard 
            icon={<Focus className="h-6 w-6" />} 
            title="Completed" 
            value="200+ Projects"
          />
          <AboutInfoCard 
            icon={<Sparkles className="h-6 w-6" />} 
            title="Availability" 
            value="Freelance Available"
          />
        </div>
        
        <div className="glass rounded-3xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-7 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sci-400 to-sci-600 opacity-20 blur-xl animate-pulse-subtle"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-sci-100 to-white"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" 
                  alt="Utkrisht Sharma"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
          <div className="md:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-2">Utkrisht Sharma</h3>
              <div className="flex items-center text-muted-foreground mb-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Delhi, India
                </div>
              </div>
              <p className="text-pretty leading-relaxed mb-6">
                Utkrisht Sharma is a dynamic and accomplished Full Stack Software Engineer with a rich background in developing innovative solutions for diverse industries. With expertise in AI, machine learning, and full-stack development, he has consistently delivered impactful solutions across various domains.
              </p>
              <a 
                href="resume.docx" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sci-500 text-white hover:bg-sci-600 transition-colors shadow-md"
              >
                <Download className="h-5 w-5" />
                Download CV
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-4 tracking-tight">My Interests</h3>
          <div className="h-1 w-16 bg-sci-500 rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          <InterestItem icon={<Image className="h-6 w-6" />} title="Photos" />
          <InterestItem icon={<Film className="h-6 w-6" />} title="Movies" />
          <InterestItem icon={<BookOpen className="h-6 w-6" />} title="Books" />
          <InterestItem icon={<AtomIcon className="h-6 w-6" />} title="Science" />
        </div>
      </div>
    </div>
  );
};

export default About;
