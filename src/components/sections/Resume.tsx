
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, Code, Database, Code2, 
  Layers, PaintBucket, CircuitBoard, Braces 
} from 'lucide-react';
import { cn } from '@/lib/utils';

type TimelineItemProps = {
  title: string;
  company: string;
  period: string;
  description: string;
  isLeft?: boolean;
};

const TimelineItem = ({ title, company, period, description, isLeft = false }: TimelineItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={cn(
      "relative flex flex-col md:flex-row md:justify-between pb-12",
      isLeft ? "md:flex-row-reverse" : ""
    )}
  >
    <div className="absolute left-0 top-0 h-full w-px md:left-1/2 md:-ml-px bg-gradient-to-b from-sci-500 to-transparent"></div>
    
    <div className="absolute top-0 left-0 md:left-1/2 md:-ml-3 md:-mt-1 w-6 h-6 rounded-full bg-white border-2 border-sci-500"></div>
    
    <div className={cn(
      "pl-8 md:pl-0 md:w-[45%]",
      isLeft ? "md:text-right md:pr-8" : "md:pl-8"
    )}>
      <div className="glass p-6 rounded-xl hover:shadow-md transition-shadow">
        <h4 className="text-lg font-bold mb-1">{title}</h4>
        <p className="text-muted-foreground mb-3">{company}</p>
        <div className="flex items-center text-sm text-sci-500 mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          {period}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  </motion.div>
);

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  delay?: number;
};

const SkillCard = ({ icon, title, delay = 0 }: SkillCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className="glass p-6 rounded-xl flex flex-col items-center text-center gap-4"
  >
    <div className="h-14 w-14 rounded-xl bg-sci-500/10 flex items-center justify-center text-sci-500">
      {icon}
    </div>
    <h4 className="font-medium">{title}</h4>
  </motion.div>
);

const Resume = () => {
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
            Resume
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Experience & Education</h2>
          <div className="h-1 w-20 bg-sci-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative mt-16">
          <TimelineItem
            title="Full Stack Software Engineer"
            company="Yactraq Online Inc"
            period="2020 - Present"
            description="Developed the Emotion Detection module and independently built a 'Text to Emotion Detection' module using NLTK and machine learning."
          />
          
          <TimelineItem
            title="Data Science Engineer"
            company="Aerogram (IIT)"
            period="2019 - 2020"
            description="Achieved 95% accuracy in sensor value prediction for city-scale Air Pollution Monitors, reducing data storage requirements by 95%."
            isLeft
          />
          
          <TimelineItem
            title="Software Engineer"
            company="Proud Care Foundation"
            period="2017 - 2019"
            description="Created a successful web application for small businesses using React, Vue.js, jQuery, MongoDB, and Node.js."
          />
          
          <TimelineItem
            title="B.Tech Computer Science"
            company="Amity University, Noida"
            period="2015 - 2019"
            description="Bachelor's degree in Computer Science and Engineering with focus on artificial intelligence and machine learning technologies."
            isLeft
          />
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
          <h3 className="text-2xl font-bold mb-4 tracking-tight">Technical Skills</h3>
          <div className="h-1 w-16 bg-sci-500 rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <SkillCard icon={<Code className="h-6 w-6" />} title="Python" delay={0} />
          <SkillCard icon={<Braces className="h-6 w-6" />} title="C/C++" delay={1} />
          <SkillCard icon={<Code2 className="h-6 w-6" />} title="PHP" delay={2} />
          <SkillCard icon={<Code className="h-6 w-6" />} title="Java" delay={3} />
          <SkillCard icon={<Code2 className="h-6 w-6" />} title="HTML/CSS" delay={4} />
          <SkillCard icon={<CircuitBoard className="h-6 w-6" />} title="JavaScript" delay={5} />
          <SkillCard icon={<Database className="h-6 w-6" />} title="SQL" delay={6} />
          <SkillCard icon={<PaintBucket className="h-6 w-6" />} title="UI/UX" delay={7} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
