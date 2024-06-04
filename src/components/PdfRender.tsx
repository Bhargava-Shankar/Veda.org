import { useState } from 'react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import {Document,Page} from 'react-pdf';

const pdfRender = ({file}:any) => {
 
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
      <div className='flex flex-col w-min justify-between items-center border-black'>
          <a href={file}  target="_blank" rel="noopener noreferrer" className='border outline outline-2 m-4'>
              <Document file={`${file}`} onLoadSuccess={onDocumentLoadSuccess}>
                 <Page pageNumber={pageNumber} width={250}  renderTextLayer={false} />
            </Document>
          </a>
          <div className='text-xl font-bold bg-green-400 text-center w-[20rem] pb-2 rounded-lg'> 
              {file.toString().substring(15)}
          </div>
    </div>
  );
}

export default pdfRender
