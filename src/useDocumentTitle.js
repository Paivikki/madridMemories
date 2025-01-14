// useDocumentTitle.js
import { useEffect } from 'react';

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]); // Update title whenever 'title' prop changes
};

export default useDocumentTitle;