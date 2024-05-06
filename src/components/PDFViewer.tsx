import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PDFViewerProps {
  file: File | null;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ file }) => {
  return (
    <>
      {file && (
        <Document file={file}>
          <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}/>
        </Document>
      )}
    </>
  );
};

export default PDFViewer;
