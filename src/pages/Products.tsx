
import React from 'react';
import Layout from '@/components/Layout';
import { Brain, Cpu, Database, Network, Zap, Shield } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: Brain,
      name: "CerevynGPT",
      description: "Enterprise-grade conversational AI platform",
      features: ["Custom training", "Multi-language support", "API integration"],
      price: "Custom pricing"
    },
    {
      icon: Cpu,
      name: "AutoML Suite",
      description: "Automated machine learning for business processes",
      features: ["No-code interface", "Real-time predictions", "Model deployment"],
      price: "Starting at $299/month"
    },
    {
      icon: Database,
      name: "DataVision",
      description: "AI-powered data analytics and visualization",
      features: ["Smart insights", "Custom dashboards", "Predictive analytics"],
      price: "Starting at $199/month"
    }
  ];

  return (
    <Layout>
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <product.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-lg font-semibold text-blue-600 mb-4">{product.price}</div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300">
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

export default Products;
