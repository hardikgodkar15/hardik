const path = require('path');

async function mergePdfs(pdf1, pdf2) {
  const PDFMerger = (await import('pdf-merger-js')).default; 
  const merger = new PDFMerger();
  await merger.add(pdf1);
  await merger.add(pdf2);
  await merger.save(path.join(__dirname, 'public', 'merged.pdf')); 
}

module.exports = mergePdfs;
