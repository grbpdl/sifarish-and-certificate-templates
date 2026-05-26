import { style } from "../template";
import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

export const sendAminForLandMeasureApplicationTemplate  =`
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Template</title>
    <style>
      ${style}
      ${globalTemplateStyle}
      ${tableStyles}
      .a4-page {
        width: 210mm;
        min-height: 297mm;
        padding: 20mm;
        margin: auto;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        font-family: "Preeti", sans-serif;
      }
      .greet p {
        margin: 5px;
      }
      .subject {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 5vh;
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
        <p>श्री मालपोत कार्यालय,</p>
        <p>##MALPOT_ADDRESS##,</p>
      </div>
      <div class="subject">
        <p>
          विषयः-
          <span><u>जग्गा नाप जांचका लागि अमिन पठाउने सम्बन्धमा।</u></span>
        </p>
      </div>

      <p>महोदय,</p>

      <div class="paragraph">
        <p>
            उपरोक्त सम्बन्धमा ##DISTRICT##  वडा नं. ##WARD_NUMBER## बस्ने
             ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## को
             नामबाट मालपोत कार्यालय,  ##MALPOT_ADDRESS## मा दर्ता श्रेस्ता कायम रहेको
              तपसिल बमोजिमको ##LAND_OR_HOUSE## सम्बन्धी ##DISPUTE_CAUSE## विवाद परेकोले नाप जांच यकिन गर्नका लागि 
              तहाँ कार्यालयबाट जग्गा नाप जांच गर्न अमिन पठाई दिन हुन आवश्यक कागजात सहित यो निवेदन पेश गर्दछु।       
       </p>
      </div>


      <div class="authority">
          <p>##SIGNATURE##</p>
          <p>##AUTHORITY_NAME##</p>
          <p>वडा अध्यक्ष</p>
        </div>
    </div>
  </body>
</html>
`