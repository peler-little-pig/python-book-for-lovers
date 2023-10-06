module.exports = {
  contents: [ "_sidebar.md" ], // array of "table of contents" files path
  pathToPublic: "pdf/写给爱好者的Python书.pdf", // path where pdf will stored
  pdfOptions: {
    format: 'A4',
    displayHeaderFooter: true,
    headerTemplate: `<span>title</span>`,
    footerTemplate: `<div style='text-align:center;width: 297mm;font-size: 10px;'><span class='pageNumber'>inspur</span></div>`,
    margin: {
      top: '50px',
      right: '0px',
      bottom: '40px',
      left: '0px'
    },
    printBackground: true,//打印背景
    omitBackground: true,
    landscape: false,//纸张方向        
  }, // reference: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagepdfoptions
  removeTemp: true, // remove generated .md and .html or not
  emulateMedia: "screen", // mediaType, emulating by puppeteer for rendering pdf, 'print' by default (reference: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pageemulatemediamediatype)
}