export interface DayContent {
  id: string;
  day: string;
  date: string;
  title: string;
  text: string;
  prompt: string;
  scriptureRef?: string;
  scriptureLink?: string;
  lessonLink: string;
}

export interface SongContent {
  id: string;
  day: string;
  title: string;
  devotionalText: string;
  hymnTitle: string;
  hymnLink: string;
  hymnAnalysis: string;
  songTitle: string;
  songArtist: string;
  songLink: string;
  songAnalysis: string;
}

export interface StudySection {
  title: string;
  type: 'intro' | 'discussion' | 'summary';
  content: string; // HTML/Text content
  quote?: string;
  questions?: {
    question: string;
    answer: string;
  }[];
  scriptureRef?: string;
}

export enum ViewType {
  DEVOTIONAL = 'devotional',
  YOUTH = 'youth',
  SONGS = 'songs',
  STUDY = 'study'
}

export enum YouthGroup {
  YM = 'ym',
  YW = 'yw'
}