import {
  globalTemplateStyle,
  tableStyles,
  header,
  footer,
} from "../../templates/templateStyles";

const charKillaApplicationTemplateNew = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Template</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyles}
      .a4-page {
        width: 210mm;
        min-height: 297mm;
        padding: 20mm;
        margin: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
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
      .paragraph {
        display: flex;
        flex-direction: column;
        align-items: center;

        height: 120px;
      }
      .paragraph p {
        line-height: 1.6;
        text-align: justify;
        position: relative;
      }
      .paragraph p::after {
        content: "";
        width: 100%;
      }

      .authority {
        margin-top: 10vh;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
      }
      .authority p {
        margin: 2px;
      }
      .paragraph-1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 3vh;
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
        <p>जो जससँग सम्बन्धित छ ।</p>
      </div>
      <div class="subject">
        <p>विषयः- <span>चारकिल्ला प्रमाणित ।</span></p>
      </div>
      <div class="paragraph">
        <p>
         ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER## को ##TOLE## का श्री
         ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## ले चारकिल्ला प्रमाणित गरिदिन निवेदन दिनु भएकोमा
          निजको निवेदन र स्थलगत निरीक्षण प्रतिवेदन/सर्जमिन मुचुल्का अनुसार
          ##REGISTERED_LAND_MUNICIPALITY## गाउँ/नगरपालिका वडा नं. ##REGISTERED_LAND_WARD## मा श्री
          ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##  को नाममा त्यस कार्यालयमा दर्ता श्रेस्ता
          कायम रहेको जग्गाको चार किल्ला तपसिल बमोजिम भएको व्यहोरा स्थानीय सरकार
          सञ्चालन ऐन, २०७४ को दफा १२(२) ङ(२८) बमोजिम प्रमाणित गरिन्छ ।
        </p>
      </div>

      <section class="table-container">
      </br> 
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

      <div class="authority">
         <p>##SIGNATURE##</p>
         <p>##AUTHORITY_NAME##</p>
         <p>वडा अध्यक्ष</p>
       </div>
    </div>
  </body>
</html>
`;

export default charKillaApplicationTemplateNew;
