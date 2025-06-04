
import React from 'react';
import Layout from '@/components/Layout';
import { Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const GetStarted = () => {
  const steps = [
    {
      step: 1,
      title: "Sign Up",
      description: "Create your free account in seconds"
    },
    {
      step: 2,
      title: "Choose Your Plan",
      description: "Select the perfect plan for your needs"
    },
    {
      step: 3,
      title: "Integrate",
      description: "Use our simple APIs to get started"
    },
    {
      step: 4,
      title: "Scale",
      description: "Grow your AI capabilities as you expand"
    }
  ];

  return (
    <Layout>
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get Started <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Free</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of businesses already using CerevynAI to transform their operations with cutting-edge AI technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-600 mb-6">Start your free trial today and experience the power of AI.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetStarted;
