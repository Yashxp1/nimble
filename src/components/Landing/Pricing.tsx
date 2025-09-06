import { ArrowRight, Check } from 'lucide-react';
import React from 'react';
import { Button } from '../ui/button';

const Pricing = () => {
  const priceList = [
    {
      type: 'Free',
      title: 'For individuals getting started',
      cost: '0',
      button: 'Continue',
      benefits: [
        'Up to 10 resume scans/month',
        'Basic AI summaries',
        'Community support',
        'Limited templates',
      ],
    },
    {
      type: 'Pro',
      title: 'Perfect for small teams',
      cost: '20',
      button: 'Subscribe',
      benefits: [
        'Up to 100 resume scans/month',
        'Advanced AI summaries',
        'Priority email support',
        'Standard templates',
      ],
    },
    {
      type: 'Enterprise',
      title: 'Ideal for large organization',
      cost: '100',
      button: "Let's Talk",
      benefits: [
        'Discounted pricing',
        'Custom features',
        'Priority email support',
        'Standard templates',
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-t from-blue-400 to-blue-200  m-2 rounded-2xl min-h-screen border border-gray-200  flex justify-center items-center">
      <div className=" max-w-6xl gap-10 flex justify-center items-center">
        {priceList.map((plan, idx) => (
          <div
            key={idx}
            className="p-8  rounded-2xl bg-white border border-gray-200  shadow-lg flex flex-col hover:shadow-2xs transition-all duration-300"
          >
            <div>
              <h2 className="text-2xl font-bold">{plan.type}</h2>
              <p className="text-gray-600 mt-1">{plan.title}</p>
              <h1 className="text-6xl text-blue-800 font-extrabold mt-6">${plan.cost}</h1>

              <div className="mt-6 space-y-3">
                {plan.benefits.map((benefit, i) => (
                  <p key={i} className="flex items-center gap-3 text-lg">
                    <Check className="text-green-600 w-5 h-5" />
                    {benefit}
                  </p>
                ))}
              </div>
            </div>

            <Button
              variant="blue"
              size="lg"
              className="flex justify-center items-center gap-2 mt-10 text-lg py-6 rounded-xl"
            >
              {plan.button}
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
