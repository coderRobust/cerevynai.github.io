
import React from 'react';
import Layout from '@/components/Layout';
import { Brain, Sparkles, Wand2, Eye, MessageSquare, FileText } from 'lucide-react';

const AIProducts = () => {
  const aiProducts = [
    {
      icon: Brain,
      name: "Neural Assistant",
      description: "Advanced AI assistant for complex problem-solving",
      capabilities: ["Reasoning", "Analysis", "Decision support"],
      category: "General AI"
    },
    {
      icon: Eye,
      name: "Vision AI",
      description: "Computer vision solutions for image and video analysis",
      capabilities: ["Object detection", "Face recognition", "Quality inspection"],
      category: "Computer Vision"
    },
    {
      icon: MessageSquare,
      name: "Conversation AI",
      description: "Natural language processing for customer interactions",
      capabilities: ["Chatbots", "Sentiment analysis", "Language translation"],
      category: "NLP"
    },
    {
      icon: FileText,
      name: "Document AI",
      description: "Intelligent document processing and extraction",
      capabilities: ["OCR", "Data extraction", "Classification"],
      category: "Document Processing"
    }
  ];

  return (
    <Layout>
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized AI solutions powered by cutting-edge machine learning and deep learning technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiProducts.map((product, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-purple-600 font-medium mb-2">{product.category}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="space-y-2">
                      {product.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-center text-gray-600">
                          <Sparkles className="w-4 h-4 text-purple-500 mr-2" />
                          {capability}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                    Explore AI Solution
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AIProducts;
