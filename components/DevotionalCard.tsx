import React, { useState } from 'react';
import { DayContent } from '../types';
import { Share2, BookOpen, ExternalLink, Check } from 'lucide-react';

interface DevotionalCardProps {
  content: DayContent;
}

const DevotionalCard: React.FC<DevotionalCardProps> = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const promptParts = content.prompt.split(':');
    const promptLabel = promptParts[0];
    const promptText = promptParts.slice(1).join(':').trim();

    const scriptureText = (content.scriptureRef && content.scriptureLink)
        ? `Scripture: ${content.scriptureRef}\n${content.scriptureLink}\n\n`
        : ""; 

    const textToCopy = `✨ Daily Devotional ✨\n\n${content.date}\n*${content.title}*\n\n${content.text}\n\n*${promptLabel}:* ${promptText}\n\n${scriptureText}Full Lesson:\n${content.lessonLink}`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const [promptLabel, ...promptBody] = content.prompt.split(':');

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden animate-fade-in">
        <div className="bg-amber-50/50 p-6 sm:p-8 border-b border-amber-100">
          <p className="text-sm font-medium text-amber-600 uppercase tracking-wide mb-2">{content.date}</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif">{content.title}</h2>
        </div>
        
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-stone-700 leading-relaxed text-lg">{content.text}</p>
          
          <div className="bg-stone-50 p-5 rounded-xl border border-stone-200">
            <h3 className="font-bold text-stone-800 mb-2 font-serif">{promptLabel}:</h3>
            <p className="text-stone-700 italic">{promptBody.join(':')}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            {content.scriptureLink && (
              <a 
                href={content.scriptureLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-amber-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-amber-700 transition-colors"
              >
                <BookOpen size={18} />
                <span>Read {content.scriptureRef}</span>
              </a>
            )}
            <a 
              href={content.lessonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-stone-700 text-white font-semibold py-3 px-4 rounded-lg hover:bg-stone-800 transition-colors"
            >
              <ExternalLink size={18} />
              <span>Full Lesson</span>
            </a>
          </div>

          <div className="border-t border-stone-100 pt-6">
            <button 
              onClick={handleCopy}
              disabled={copied}
              className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                copied 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-sky-50 text-sky-700 hover:bg-sky-100 border border-sky-200'
              }`}
            >
              {copied ? <Check size={20} /> : <Share2 size={20} />}
              <span>{copied ? 'Copied to Clipboard!' : 'Share this Devotional'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevotionalCard;