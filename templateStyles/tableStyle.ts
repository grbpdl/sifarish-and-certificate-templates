const tableStyles: string = `
  .table-container {
        width: 100%;
      }
      table {
        margin:0.5rem 0rem; 
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
      }
  
      th,
      td {
        border: 1px solid var(--border-color) !important;
        text-align: center !important; ;
        padding: 4px !important; 
        font-size: var(--font-size-small);
        word-wrap: break-word;
        line-height: 1.4rem;
      }
      td {
        padding: 0.5px 0.2px !important;
        line-height: 16px;
      
      }
      th {
        color: var(--secondary-color);
      }
      th:nth-child(1),
      td:nth-child(1) {
        width: 40px !important;
        word-break: break-word;
      }
        @media print {
        th,
        td {
          font-size: var(--font-size-print);
          padding: 1px;
        }
        body {
          margin: 0;
        }
        table {
          page-break-inside: avoid;
        }
      }
`;
export default tableStyles;
