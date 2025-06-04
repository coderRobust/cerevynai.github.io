import React from 'react';
import Layout from '@/components/Layout';
import FeatureCard from '@/components/FeatureCard';
import { Brain, Zap, Shield, Rocket, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Models",
      description: "Cutting-edge LLM technology that understands context and delivers intelligent solutions tailored to your business needs.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed and efficiency, our AI tools process complex tasks in seconds, not hours.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Built with security-first principles, ensuring your data remains protected with enterprise-grade encryption.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Rocket,
      title: "Seamless Integration",
      description: "Easy-to-implement APIs and tools that integrate smoothly with your existing workflow and infrastructure.",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-white p-6 rounded-3xl shadow-2xl shadow-blue-500/25 hover:scale-105 transition-all duration-500 hover:shadow-blue-500/40">
              <img 
                src="/lovable-uploads/30c84560-900f-4e62-bcf5-21d656096be1.png" 
                alt="CerevynAI Logo" 
                className="h-24 w-auto"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              CerevynAI
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto font-light">
            Reimagining Intelligence. Powered by AI.
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            We're building transformative LLM-powered AI tools to help enterprises automate, learn, and evolve in the age of artificial intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/services"
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2 hover:scale-105"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              to="/about"
              className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center space-x-2 hover:scale-105"
            >
              <span>Learn More</span>
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-blue-600 font-medium mb-2">Launching Soon</p>
            <p className="text-gray-500">Stay connected for updates and early access</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">CerevynAI</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our cutting-edge AI technology is designed to transform how businesses operate, making intelligent automation accessible to everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join the AI revolution and discover how CerevynAI can help your enterprise reach new heights of efficiency and innovation.
          </p>
          
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
