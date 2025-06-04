
import React from 'react';
import Layout from '@/components/Layout';
import FeatureCard from '@/components/FeatureCard';
import { Brain, Cpu, Cloud, Shield, Zap, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Consultation",
      description: "Expert guidance on AI strategy, implementation, and optimization for your specific business needs.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Cpu,
      title: "Custom AI Development",
      description: "Tailored AI solutions built from scratch to address your unique challenges and requirements.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Cloud,
      title: "AI Integration",
      description: "Seamless integration of AI capabilities into your existing systems and workflows.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: Shield,
      title: "AI Security & Compliance",
      description: "Ensure your AI systems meet security standards and regulatory compliance requirements.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize your AI models for speed, accuracy, and cost-effectiveness at scale.",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Training & Support",
      description: "Comprehensive training programs and ongoing support to maximize your AI investment.",
      gradient: "from-rose-500 to-pink-600"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your business needs and identify AI opportunities"
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop a comprehensive AI roadmap tailored to your goals"
    },
    {
      step: "03",
      title: "Development",
      description: "Build and train custom AI models using cutting-edge technology"
    },
    {
      step: "04",
      title: "Integration",
      description: "Seamlessly integrate AI solutions into your existing infrastructure"
    },
    {
      step: "05",
      title: "Optimization",
      description: "Continuously monitor and improve performance for maximum ROI"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Comprehensive AI services to transform your business operations, from consultation to implementation and beyond.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end AI services designed to help you harness the full potential of artificial intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FeatureCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology to ensure successful AI implementation and maximum business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your AI Journey?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how our AI services can transform your business and drive measurable results.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-blue-100">Free consultation and strategy session</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-blue-100">Custom AI roadmap for your business</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-blue-100">No commitment required</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Schedule a Consultation</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <textarea
                  placeholder="Tell us about your AI needs"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                ></textarea>
                <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
