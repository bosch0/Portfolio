import { createContext, useContext } from 'react';
import type { ProjectLink } from '../../types';

export interface ViewerItem {
  title: string;
  image: string;
  status: string;
  year: string;
  link: ProjectLink;
}

export interface ViewerContextValue {
  open: (item: ViewerItem) => void;
}

export const ViewerContext = createContext<ViewerContextValue | null>(null);

export const useImageViewer = (): ViewerContextValue => {
  const ctx = useContext(ViewerContext);
  if (!ctx) throw new Error('useImageViewer must be used inside <ImageViewerProvider>');
  return ctx;
};
