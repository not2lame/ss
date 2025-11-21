import React, { useState, useEffect } from 'react';
import { ViewType, YouthGroup } from './types';
import { DEVOTIONAL_DATA, YM_DATA, YW_DATA, SONGS_DATA, WEEK_TITLE, WEEK_DATE } from './constants';
import Navigation from './components/Navigation';
import DaySelector from './components/DaySelector';
import DevotionalCard from './components/DevotionalCard';
import SongCard from './components/SongCard';
import StudyGuide from './components/StudyGuide';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>(ViewType.DEVOTIONAL);
  const [currentDayId, setCurrentDayId] = useState<string>('monday');
  const [youthGroup, setYouthGroup] = useState<YouthGroup>(YouthGroup.YM);

  // Set initial day based on real date
  useEffect(() => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = new Date().getDay();
    setCurrentDayId(days[today]);
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case ViewType.DEVOTIONAL:
        const devContent = DEVOTIONAL_DATA.find(d => d.id === currentDayId) || DEVOTIONAL_DATA[0];
        return <DevotionalCard content={devContent} />;
      
      case ViewType.YOUTH:
        const youthData = youthGroup === YouthGroup.YM ? YM_DATA : YW_DATA;
        const youthContent = youthData.find(d => d.id === currentDayId) || youthData[0];
        return (
          <div>
            <div className="flex justify-center gap-4 mb-6 pt-6 px-4">
              <button 
                onClick={() => setYouthGroup(YouthGroup.YM)}
                className={`px-6 py-2 rounded-full font-bold transition-colors ${
                  youthGroup === YouthGroup.YM 
                  ? 'bg-blue-600 text-white shadow-md' 
                  : 'bg-white text-stone-500 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                Young Men
              </button>
              <button 
                 onClick={() => setYouthGroup(YouthGroup.YW)}
                 className={`px-6 py-2 rounded-full font-bold transition-colors ${
                  youthGroup === YouthGroup.YW
                  ? 'bg-pink-600 text-white shadow-md' 
                  : 'bg-white text-stone-500 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                Young Women
              </button>
            </div>
            <DevotionalCard content={youthContent} />
          </div>
        );

      case ViewType.SONGS:
        const songContent = SONGS_DATA.find(d => d.id === currentDayId) || SONGS_DATA[0];
        return (
            <div>
                 <div className="max-w-2xl mx-auto px-4 pt-6 mb-2">
                    <div className="text-center bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
                        <h2 className="text-xl font-bold text-amber-700 font-serif">Songs of the Soul</h2>
                        <p className="mt-2 text-stone-600 text-sm">Sacred music has a unique power to deepen our connection to the divine. Each day's devotional is paired with a hymn and a contemporary song.</p>
                    </div>
                 </div>
                <SongCard content={songContent} />
            </div>
        );

      case ViewType.STUDY:
        return <StudyGuide />;
      
      default:
        return null;
    }
  };

  const needsDaySelector = currentView !== ViewType.STUDY;

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans">
        {/* Header Image Area */}
      <div className="bg-stone-900 text-white pt-8 pb-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/1200/400')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="relative z-10">
            <h1 className="text-xl sm:text-2xl font-medium text-amber-100/90 uppercase tracking-widest text-shadow-sm mb-2">Come, Follow Me</h1>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white mb-4">{WEEK_TITLE}</h2>
            <p className="text-stone-300 font-medium">{WEEK_DATE}</p>
        </div>
      </div>

      <Navigation currentView={currentView} onViewChange={setCurrentView} />

      {needsDaySelector && (
        <DaySelector selectedDayId={currentDayId} onDaySelect={setCurrentDayId} />
      )}

      <main className="flex-1 pb-12 animate-fade-in">
        {renderContent()}
      </main>

      <footer className="bg-white border-t border-stone-200 py-8 text-center">
        <div className="max-w-2xl mx-auto px-4">
            <p className="text-stone-500 italic font-serif">"May you embrace the future with faith, preparing your heart with joy for His return."</p>
            <p className="text-stone-400 text-xs mt-4">Resource for Individuals and Families</p>
        </div>
      </footer>
    </div>
  );
};

export default App;