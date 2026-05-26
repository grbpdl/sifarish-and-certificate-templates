import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";
const recommendationToMaintainHouseInPurjaOfLandlordTemplate = `<!DOCTYPE html>
<html lang="ne">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>जग्गाधनी श्रेष्ता पुर्जामा घर कायम गर्न सिफारिस</title>
      <style>
         ${globalTemplateStyle}
         ${tableStyles}
         body {
         font-family: "Arial", sans-serif;
         margin: 0;
         padding: 0;
         box-sizing: border-box;
         }
         .a4-page {
         width: 210mm;
         height: 297mm;
         padding: 25mm;
         margin: auto;
         background: white;
         position: relative;
         }
         .title {
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         }
         .title p {
         margin: 2px;
         }
         .logo {
         width: 75px;
         margin-bottom: 10px;
         }
         .sn {
         margin-top: 20px;
         display: flex;
         flex-direction: column;
         align-items: start;
         }
         .sn p {
         margin: 0;
         }
         .greet {
         display: flex;
         flex-direction: column;
         align-items: start;
         height: 55px;
         }
         .greet p {
         margin: 5px;
         font-weight: bold;
         }
         .date {
         display: flex;
         flex-direction: column;
         align-items: end;
         }
         .date p {
         margin: 0;
         }
         .subject {
         display: flex;
         flex-direction: column;
         align-items: center;
         margin: 0;
         padding: 0;
         }
         .subject span {
         margin: 0;
         font-weight: bold;
         }
         .letter {
         text-align: justify;
         line-height: 1.6;
         margin-bottom: 20px;
         }
         .center-title {
         text-align: center;
         text-decoration: underline;
         margin: 20px 0;
         }
         .flex {
         display: flex;
         justify-content: space-between;
         }
         .flex div {
         flex: 1;
         }
         .authority {
         position: absolute;
         bottom: 25mm;
         right: 25mm;
         text-align: center;
         }
         .stamp {
         position: absolute;
         top: 20%;
         left: 50%;
         transform: translate(-20%, -50%);
         z-index: 1;
         }
         .table-container {
         width: 100%;
         padding: 20px;
         box-sizing: border-box;
         }
         table {
         width: 100%;
         border-collapse: collapse;
         margin: auto;
         }
         th,
         td {
         border: 1px solid #000;
         text-align: center;
         padding: 16px;
         }
         th {
         background-color: #f2f2f2;
         }
      </style>
   </head>
   <body>
      <div class="a4-page">
         ${header}
         <div class="greet">
            <p>श्री मालपोत कार्यालय</p>
            <p>##DISTRICT## जिल्ला</p>
         </div>
         <div class="subject">
            <p>
               विषयः-
               <span
                  >पूर्जामा घर कायम गर्ने सिफारिस ।</span
                  >
            </p>
         </div>
         <div class="letter">
            <p>
               ##LOCAL_LEVEL##   वडा नं. ##WARD_NUMBER## बस्ने 
               श्री   ##FIRST_NAME##
               ##MIDDLE_NAME##
               ##LAST_NAME## पूले पूर्जामा घर कायम गरिदिन सिफारिस गरिदिन निवेदन पेश गर्नुभएकोमा स्थलगत निरीक्षण प्रतिवेदन/सर्जमिन मुचुल्का/नक्सा सम्पन्न प्रतिवेदनका आधारमा तपसिल बमोजिमको पूर्जामा ##LAND_AREA## वर्गफूटको घर मिति ##HOUSE_COMPLETION_DATE## मा निर्माण भएकोले पूर्जामा घर कायम गरिदिनुहुन स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा १२ (२) ङ(२८) बमोजिम सिफारिस गरिन्छ ।
            </p>
         </div>
         <div>
            <p>देहाय       </p>
            <section class="table-container">
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
         </div>
         <div class="authority">
            <p>##SIGNATURE##</p>
            <p>##AUTHORITY_NAME##</p>
            <p>##AUTHORITY_DESIGNATION##</p>
         </div>
      </div>
   </body>
</html>
`;

export default recommendationToMaintainHouseInPurjaOfLandlordTemplate;
