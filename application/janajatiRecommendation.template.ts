import { style } from "../template";
import { header, globalTemplateStyle } from "../../templates/templateStyles"

export const janajatiRecommendationTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>जनजाति प्रमाणित </title>
    <style>
      ${style}
      ${globalTemplateStyle}
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
        <p>विषयः- <span>जनजाति प्रमाणित सम्बन्धमा ।</span></p>
      </div>
      <div class="paragraph">
        <p>
           उपरोक्त सम्बन्धमा ##DISTRICT## जिल्ला
          ##LOCAL_LEVEL## पालिका वडा नं. ##WARD_NUMBER## बस्ने श्री
          ##GRAND_FATHER_FIRST_NAME## ##GRAND_FATHER_MIDDLE_NAME## ##GRAND_FATHER_LAST_NAME## को छोरा
          श्री  ##FATHER_FIRST_NAME## ##FATHER_MIDDLE_NAME## ##FATHER_LAST_NAME## को ##REPLACEABLE_SON_DAUGHTER##
          ##REPLACEABLE_HIS_HER## ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## ले म नेपालको सूचीकृत जनजाति भित्र पर्ने
          भएको हुँदा उक्त व्यहोरा प्रमाणित गराउनका लागि सिफारिस गरि पाउँ भनी यस
          कार्यालयमा निवेदन दिनुभएको हुँदा सोही बमोजिम उक्त व्यहोरा निजको फोटो
          टाँस गरि प्रमाणित गरी दिनु हुन सिफारिस साथ अनुरोध छ ।
        </p>
      </div>

      <div class="authority">
            <p>##SIGNATURE##</p>
            <p>##AUTHORITY_NAME##</p>
            <p>##AUTHORITY_DESIGNATION##</p>
          </div>
    </div>
  </body>
</html>`;
