import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import PdfRender from './PdfRender';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Content = () => {

    const fileList = ["/Krishna-Yajur/bramhanam.pdf" , "/Krishna-Yajur/aaranyakam.pdf" , "/Krishna-Yajur/ekkagni.pdf" , "/Krishna-Yajur/samhita.pdf"]

  return (
      <div className='flex flex-row w-full flex-wrap justify-between items-end'>
     
          {
              fileList.map((value) => {
                  return (
                      <div>
                      <PdfRender file={value} />
                     </div>
        
                  )
              })
          }
          
    </div>
  );
}

export default Content
