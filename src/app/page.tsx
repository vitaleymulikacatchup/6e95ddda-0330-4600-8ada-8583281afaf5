"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Briefcase, Star, Shield, TrendingUp, Users, Quote, Mail } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="large"
      background="plain"
      cardStyle="layered-gradient"
      primaryButtonStyle="flat"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Portfolio", id: "feature" },
            { name: "Experience", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Michal Zeidman"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Cloud Security & Business Growth Expert"
          description="Account Executive at Orca Security specializing in cloud security solutions and driving business growth for enterprise clients"
          tag="Professional Portfolio"
          tagIcon={Briefcase}
          buttons={[
            { text: "View Portfolio", href: "feature" },
            { text: "Get In Touch", href: "contact" }
          ]}
          imageSrc="https://images.pexels.com/photos/7006136/pexels-photo-7006136.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Michal Zeidman professional portrait"
          frameStyle="card"
        />
      </div>
      
      <div id="about" data-section="about">
        <TextAbout
          title="With extensive experience in cloud security and business development, I help organizations secure their digital infrastructure while driving sustainable growth and building lasting partnerships"
          buttons={[
            { text: "Connect on LinkedIn", href: "https://linkedin.com/in/michal-zeidman" },
            { text: "Learn More", href: "feature" }
          ]}
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardTwo
          title="Expertise & Specializations"
          description="Core areas where I deliver exceptional value to organizations"
          tag="Skills"
          tagIcon={Star}
          features={[
            {
              title: "Cloud Security Solutions",
              description: "Expert in comprehensive cloud security strategies, risk assessment, and implementation of robust protection frameworks for enterprise environments",
              icon: Shield
            },
            {
              title: "Business Growth Strategy",
              description: "Proven track record in developing and executing growth strategies that drive revenue, expand market presence, and build competitive advantage",
              icon: TrendingUp
            },
            {
              title: "Account Management",
              description: "Skilled in managing strategic client relationships, understanding complex business needs, and delivering tailored solutions that exceed expectations",
              icon: Users
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Professional Recommendations"
          description="What colleagues and clients say about working with me"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "David Martinez",
              role: "CTO",
              company: "TechVision Corp",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5716037/pexels-photo-5716037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Martinez portrait",
              content: "Michal's expertise in cloud security is exceptional. Their strategic approach helped us implement comprehensive security measures while maintaining operational efficiency."
            },
            {
              id: "2",
              name: "Sarah Chen",
              role: "VP Security",
              company: "GlobalData Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Chen portrait",
              content: "Working with Michal transformed our security posture. Their deep understanding of enterprise needs and ability to deliver tailored solutions is remarkable."
            },
            {
              id: "3",
              name: "Michael Thompson",
              role: "Director",
              company: "CloudFirst Industries",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5726785/pexels-photo-5726785.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Thompson portrait",
              content: "Michal's business growth strategies have been instrumental in our expansion. Their combination of technical expertise and business acumen is truly valuable."
            },
            {
              id: "4",
              name: "Rachel Goldman",
              role: "Security Manager",
              company: "Enterprise Systems",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4427630/pexels-photo-4427630.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Rachel Goldman portrait",
              content: "Michal's account management skills are outstanding. They consistently deliver solutions that exceed our expectations and drive meaningful business outcomes."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Let's Connect and Explore Opportunities"
          description="Whether you're looking for cloud security expertise, business growth strategies, or partnership opportunities, I'd love to hear from you"
          tagIcon={Mail}
          inputPlaceholder="Enter your email address"
          buttonText="Send Message"
          termsText="By submitting your email, you agree to receive professional communications. You can unsubscribe at any time."
          imageSrc="https://images.pexels.com/photos/4973885/pexels-photo-4973885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Professional workspace with cloud security technology"
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Michal Zeidman"
          copyrightText="© 2025 | Michal Zeidman"
          columns={[
            {
              title: "Professional",
              items: [
                { label: "Portfolio", href: "feature" },
                { label: "Experience", href: "testimonial" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "LinkedIn", href: "https://linkedin.com/in/michal-zeidman" },
                { label: "Orca Security", href: "https://orca.security" },
                { label: "Bar-Ilan University", href: "https://biu.ac.il" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}