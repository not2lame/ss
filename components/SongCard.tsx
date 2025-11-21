import React from 'react';
import { SongContent } from '../types';
import { Music, PlayCircle } from 'lucide-react';

interface SongCardProps {
  content: SongContent;
}

const SongCard: React.FC<SongCardProps> = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden">
        <div className="bg-gradient-to-br from-amber-50 to-white p-6 sm:p-8 border-b border-stone-100">
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif mb-4">{content.title}</h2>
          <p className="italic text-stone-600 text-lg leading-relaxed">"{content.devotionalText}"</p>
        </div>
        
        <div className="p-6 sm:p-8 space-y-8">
          {/* Hymn Section */}
          <div className="relative pl-6 border-l-4 border-amber-500">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-700 mb-1">
                  <Music size={16} />
                  <span className="text-xs font-bold tracking-wider uppercase">Hymn Selection</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 font-serif hover:text-amber-700 transition-colors">
                  <a href={content.hymnLink} target="_blank" rel="noopener noreferrer">{content.hymnTitle}</a>
                </h3>
              </div>
              <a href={content.hymnLink} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-800">
                <PlayCircle size={32} />
              </a>
            </div>
            <p className="mt-3 text-stone-700 leading-relaxed text-sm sm:text-base">{content.hymnAnalysis}</p>
          </div>

          {/* Song Section */}
          <div className="relative pl-6 border-l-4 border-sky-500">
             <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 text-sky-700 mb-1">
                  <Music size={16} />
                  <span className="text-xs font-bold tracking-wider uppercase">Contemporary Song</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 font-serif hover:text-sky-700 transition-colors">
                  <a href={content.songLink} target="_blank" rel="noopener noreferrer">{content.songTitle}</a>
                </h3>
                <p className="text-sm text-stone-500">by {content.songArtist}</p>
              </div>
              <a href={content.songLink} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-800">
                <PlayCircle size={32} />
              </a>
            </div>
            <p className="mt-3 text-stone-700 leading-relaxed text-sm sm:text-base">{content.songAnalysis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongCard;