import { footer, style } from "../template";
import {
  globalTemplateStyle,
  header,

} from "../../templates/templateStyles";

export const rentalTaxAccountingTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Template</title>
    <style>
    ${globalTemplateStyle}
      ${style}
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

      .ending {
        margin-top: 10vh;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
      }
      .ending p {
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
    </style>
  </head>
  <body>
    <div class="a4-page">
      ${header}
      <div class="greet">
        <p>जो जससँग सम्बन्धित छ ।</p>
      </div>
      <div class="subject">
        <p>विषयः- <span>बहाल कर लेखाजोखा सम्बन्धमा।</span></p>
      </div>
      <div class="paragraph">
        <p>
          ##LOCAL_LEVEL## वडा नं ##WARD_NUMBER## अन्तर्गत ##TOLE## मा
          बस्ने श्री ##FIRST_NAME## ##MIDDLE_NAME##  ##LAST_NAME##  ले यस गाउँ/नगरपालिकामा बहाल करको
          लेखाजोखा गरिदिनुहुन भनी दिनु भएको निवदेन अनुसार
          ##FIRST_NAME## ##MIDDLE_NAME##  ##LAST_NAME##   र ##TENANT_NAME## बीच भएको बहाल सम्झौता बमोजिम
          ##FROM_DATE## देखि ##TO_DATE## सम्म जम्मा ##RENTAL_YEAR## वर्ष ##RENTAL_MONTH## महिनाको बहाल कर
          यस गाउँ/नगरपालिकाको नियम अनुसार सम्झौता रकमको ##TAX_PERCENTAGE## प्रतिशतका दरले
          जम्मा रु. ##TAX_AMOUNT## बुझाइ कर चुक्ता गरेको व्यहोरा स्थानीय सरकार
          सञ्चालन ऐन, २०७४ को दफा १२(२) ङ(३) बमोजिम सिफारिस/प्रमाणित गरिन्छ ।
        </p>
      </div>

   

      <div class="authority">
            <p>##SIGNATURE##</p>
            <p>##AUTHORITY_NAME##</p>
            <p>वडा अध्यक्ष</p>
          </div>

          ${footer}
    </div>
  </body>
</html>`;
