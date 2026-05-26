import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";
const threeGenerationProvenTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Application Template</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyles}
    #template *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        letter-spacing: 0rem;
        font-size:14px
      } 
    #template  {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }
    #template  .application_section {
        width: 210mm;
        
        padding: 1mm 19mm 19mm 19mm;
        position: relative;
        line-height: 2.2rem;
      }
    #template  .header {
        text-align: center;
        color: red;
      }
        #template  .municipality_section {
         padding-bottom: 0.5rem;
         border-bottom: 2px solid green;
         }
         #template  .municipality_section .contain {
         color: red;
         display: flex;
         gap: 1rem;
         align-items: center;
         padding-top: 2rem;
         }
         #template  .municipality_section .contain .municipality_logo img {
         width: 75px;
         }
         #template  .municipality_section .municipality_info {
        margin: 0 auto;
         text-align: center;
         line-height:1.3rem
         }
         #template .municipality_section .serial_number {
         color: red;
         padding-top: 1rem;
         line-height:1.2rem
         }
    #template  .main_section {
        padding-top: 2rem;
      }
    #template  .main_section .subject {
        text-align: center;
        padding-bottom: 2rem;
      }
    #template .main_section .to {
        padding-bottom: 2rem;
      }
    #template .main_section .letter {
        text-align: justify;
        padding-bottom: 2rem;
      }
    #template  .from {
        position: absolute;
        bottom: 1rem;
        right: 19mm;  
        text-align: center;
    }
    #template table {
      width: 100%;
      table-layout: fixed;
      border:1px solid black;
    }   
    #template table th {
      font-weight:400;
      font-size:13px;
      border:1px solid black;
    } 
    #template table td {
      font-weight:400;
      font-size:13px;
      border:1px solid black;
    } 
    #template td {
      width: 33%;
      word-wrap: break-word;
    }
    </style>
  </head>
  <body>
  <section id="template">
  <section class="application_section">
      <!-- Municipality Header -->
      ${header}
      <div class="main_section">
      <div style="line-height:1.5rem" class="to">
      जो जसोसँग सम्बन्दित छ। 

  <br />
</div>
 
     
      <div class="subject">बिषय : तीन पुस्ते प्रमाणित ।</div>
      ##LOCAL_LEVEL## वडा नं ##WARD_NUMBER##   
      निवासी ##REPLACEABLE_HIS_HER## ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## को तीन 
      पुस्ते तपशिलमा उल्केख भए अनुसार रहेको व्यहोरा प्रामणित साथ अनुरोध गरिन्छ । 
      साथै निजको नाममा मालपोत कार्यलयमा दर्ता रहेको जग्गाको विवरण तपसिल बमोजिम रहेको व्यहोरा समे अनुसोध गरिन्छ ।
      <div class="letter">        
      </div>
        <section class="table-container">
        <div style="text-align:center; text-decoration:underline;">##TABLE_HEADER##</div>
        <table>
        <thead>
           <tr>
               ##TABLE_HEADINGS##
           </tr>
         </thead>
         <tbody>
           ##TABLE_BODY##
         </tbody>
        </table>   
        <br />  
       </section>
        <br />  <br />  
        <div class="from">
        <br/>
        <br />
            ..................
            <br />
            ##AUTHORITY_NAME## <br />
            ##AUTHORITY_DESIGNATION##  
      </div>
    </div>
    </section>
  </section>
  </body>
</html>`;

export default threeGenerationProvenTemplate;
