import React, { useState } from 'react';
import { STUDY_GUIDE_DATA, WEEK_TITLE } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const StudyGuide: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 pb-12">
      <div className="bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden">
        <div className="bg-amber-600 p-6 sm:p-10 text-center text-white">
           <h1 className="text-2xl sm:text-3xl font-bold font-serif mb-4 leading-tight">A Discussion Guide for “{WEEK_TITLE}”</h1>
           <p className="text-amber-100 text-sm sm:text-base max-w-xl mx-auto">Designed to help you apply principles from these sections to your life and prepare for class discussion.</p>
        </div>

        <div className="p-6 sm:p-10 space-y-10">
          {STUDY_GUIDE_DATA.map((section, index) => (
            <div key={index} className="border-b border-stone-100 pb-8 last:border-0 last:pb-0">
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-xl sm:text-2xl font-bold text-stone-800 font-serif">{section.title}</h2>
              </div>
              
              <div className="prose prose-stone max-w-none">
                <p className="text-stone-700 leading-relaxed whitespace-pre-wrap">{section.content}</p>
                
                {section.quote && (
                  <blockquote className="mt-4 border-l-4 border-amber-300 pl-4 py-1 bg-amber-50/50 rounded-r-lg">
                    <p className="italic text-stone-700 font-medium">{section.quote}</p>
                  </blockquote>
                )}
              </div>

              {section.questions && section.questions.length > 0 && (
                <div className="mt-6 space-y-4">
                  {section.questions.map((q, qIndex) => (
                    <QuestionReveal key={qIndex} question={q.question} answer={q.answer} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

interface QuestionRevealProps {
  question: string;
  answer: string;
}

const QuestionReveal: React.FC<QuestionRevealProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-stone-50 rounded-lg border border-stone-200 overflow-hidden transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 flex items-start gap-3 hover:bg-stone-100 transition-colors"
      >
        <HelpCircle className="flex-shrink-0 text-amber-600 mt-1" size={20} />
        <div className="flex-1">
          <p className="font-semibold text-stone-800 text-sm sm:text-base">{question}</p>
        </div>
        {isOpen ? <ChevronUp className="flex-shrink-0 text-stone-400" /> : <ChevronDown className="flex-shrink-0 text-stone-400" />}
      </button>
      
      {isOpen && (
        <div className="px-4 pb-4 pt-0 pl-11 animate-fade-in">
          <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-inner">
             <p className="text-stone-700 italic text-sm">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudyGuide;