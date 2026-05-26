import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";
const recommendationFOrEntitlementTemplate = `<!DOCTYPE html>
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
  ${header}
</div>

        </div>
      </div>
      <div class="main_section">

      <div style="line-height:1.5rem" class="to">
      जो जसोसँग सम्बन्दित छ। 

  <br />
</div>
 
     
      <div class="subject">बिषय : सिफारिस सम्बन्धमा जो-जो सग सम्बन्ध छ ।</div>
      उपरोक्त सम्बनधमा ##LOCAL_LEVEL## वडा नं ##WARD_NUMBER## को
      ##DISTRICT## जिल्ला ,##LOCAL_LEVEL##
      मा रहेका ##REPLACEABLE_HIS_HER## ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
      ले हकदार प्रमाणित गरी पाऊं भनी यस वडा कार्यकयमा निवेदन दिनुभएको हुदा सो सम्दन्धमा ##REGISTERED_MUNICIPALITY_NAME## 
      महा/उपमहा/नगरपालिका/गाउँपालिका बाट मिति ##DATE_OF_REGISTERED## मा गरिएको द.न. ##REGISTERED_NUMBER## को नाता प्रमाणित 
      प्रमाणपत्र अनुसार मृतक श्री ##DEAD_PERSON_FIRST_NAME## ##DEAD_PERSON_MIDDLE_NAME## ##DEAD_PERSON_LAST_NAME##
      का हकदारहरु देहाय बमोजिम उल्लेखित ##NUMBER_OF_ENTITLEMENT## जना मात्र भएको व्यहोराको सिफारिस गरिन्छ ।
      <div class="letter">        
      </div>
        <section class="table-container">
        <div style="text-align:center; text-decoration:underline;">मृतकको हकदारको विवरण</div>
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
       </section>
        <br />  <br />  <br />  <br /> <br />
      </div>
      <div class="from">
      <p>##SIGNATURE##</p>
      <p>##AUTHORITY_NAME##</p>
      <p>##AUTHORITY_DESIGNATION##</p> 
        <br /><br />      
      </div>
    </div>
    </section>
  </section>
  </body>
</html>`;

export default recommendationFOrEntitlementTemplate;
