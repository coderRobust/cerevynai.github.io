
import React from 'react';
import Layout from '@/components/Layout';
import { Building2, ShoppingCart, Heart, GraduationCap, Factory, Shield } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Enterprise Solutions",
      description: "Complete AI transformation for large organizations",
      features: ["Custom AI models", "Enterprise integration", "24/7 support"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce AI",
      description: "Personalized shopping experiences and inventory optimization",
      features: ["Recommendation engines", "Price optimization", "Fraud detection"]
    },
    {
      icon: Heart,
      title: "Healthcare AI",
      description: "Medical diagnosis assistance and patient care optimization",
      features: ["Medical imaging", "Drug discovery", "Patient monitoring"]
    },
    {
      icon: GraduationCap,
      title: "Education Technology",
      description: "Personalized learning and educational content creation",
      features: ["Adaptive learning", "Content generation", "Performance analytics"]
    },
    {
      icon: Factory,
      title: "Manufacturing AI",
      description: "Smart factory automation and quality control",
      features: ["Predictive maintenance", "Quality inspection", "Process optimization"]
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "AI-powered cybersecurity and threat detection",
      features: ["Threat detection", "Anomaly monitoring", "Risk assessment"]
    }
  ];

  return (
    <Layout>
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Industry <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored AI solutions for every industry, designed to address specific challenges and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-2 rounded-lg text-sm hover:shadow-lg transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Solutions;
