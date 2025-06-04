
import React from 'react';
import Layout from '@/components/Layout';
import { Target, Users, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "To democratize AI technology and make intelligent automation accessible to enterprises of all sizes."
    },
    {
      icon: Users,
      title: "People-First",
      description: "We believe AI should augment human capabilities, not replace them. Our tools empower teams to achieve more."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly pushing the boundaries of what's possible with AI, delivering cutting-edge solutions."
    },
    {
      icon: TrendingUp,
      title: "Growth-Oriented",
      description: "Focused on helping our clients achieve sustainable growth through intelligent AI implementation."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">CerevynAI</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a team of AI researchers, engineers, and visionaries dedicated to building the next generation of intelligent tools that will reshape how enterprises operate in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded with the vision of making artificial intelligence accessible and practical for enterprises, CerevynAI emerged from the recognition that while AI technology was advancing rapidly, there was a significant gap between cutting-edge research and real-world business applications.
                </p>
                <p>
                  Our team combines deep expertise in machine learning, natural language processing, and enterprise software development. We've worked with Fortune 500 companies and startups alike, understanding the unique challenges each faces in their AI transformation journey.
                </p>
                <p>
                  Today, we're building the bridge between advanced AI capabilities and practical business solutions, ensuring that every organization can harness the power of artificial intelligence to drive growth, efficiency, and innovation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-blue-100 leading-relaxed">
                  To create a world where AI technology seamlessly integrates with human intelligence, enabling unprecedented levels of productivity, creativity, and problem-solving across all industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team brings together decades of experience in AI research, enterprise software development, and business strategy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">AI</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Research</h3>
              <p className="text-gray-600">
                Deep expertise in machine learning, natural language processing, and neural network architectures.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">ENG</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Engineering</h3>
              <p className="text-gray-600">
                Scalable software architecture, cloud infrastructure, and enterprise-grade security implementations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">BIZ</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Strategy</h3>
              <p className="text-gray-600">
                Understanding enterprise needs and translating them into effective AI-powered solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
