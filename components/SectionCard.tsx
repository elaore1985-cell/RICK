import React from 'react';
import { ContentSection } from '../types';

interface SectionCardProps {
  data: ContentSection;
}

const SectionCard: React.FC<SectionCardProps> = ({ data }) => {
  return (
    <div className="bg-stone-50 border-2 border-nazca-clay rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col h-full">
      <div className="bg-nazca-clay text-white p-3 flex items-center justify-between">
        <h3 className="font-serif font-bold text-lg tracking-wide">{data.id}. {data.title}</h3>
        <span className="text-2xl" role="img" aria-label="icon">{data.icon}</span>
      </div>
      
      {data.imageUrl && (
        <div className="h-40 overflow-hidden border-b-2 border-nazca-sand">
          <img 
            src={data.imageUrl} 
            alt={data.title} 
            className="w-full h-full object-cover sepia-[.3] hover:sepia-0 transition-all duration-500"
          />
        </div>
      )}
      
      <div className="p-4 flex-grow">
        <p className="text-stone-800 text-sm leading-relaxed font-sans text-justify">
          {data.content}
        </p>
      </div>
      
      <div className="p-2 bg-nazca-sand/30 border-t border-nazca-sand flex justify-end">
        <div className="w-16 h-1 bg-nazca-terracotta rounded-full"></div>
      </div>
    </div>
  );
};

export default SectionCard;