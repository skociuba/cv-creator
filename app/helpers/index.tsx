import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const createPdf = (pdfRef: React.RefObject<HTMLDivElement>) => {
  html2canvas(pdfRef?.current as HTMLElement).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    // A4 size in pt: [595.28, 841.89]
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'pt',
      format: [595.28, 841.89],
    });
    pdf.addImage(imgData, 'PNG', 0, 0, 595.28, 841.89);
    pdf.save('download.pdf');
  });
};
