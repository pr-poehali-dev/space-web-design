
import React from 'react';

interface StatProps {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: StatProps[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <section className="py-16 px-4 relative z-10 bg-cosmic-darkBlue/40">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cosmic-brightBlue to-cosmic-red bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-cosmic-gray">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
