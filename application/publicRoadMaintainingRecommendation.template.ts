import {style } from "../template";
import { header, globalTemplateStyle } from "../../templates/templateStyles";


export const publicRoadMaintainanceRecommendationTemplate  =`
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Template</title>
    <style>
      ${style}
      ${globalTemplateStyle}
      
      .a4-page {
        width: 210mm;
        height: 297mm;
        padding: 25mm;
        margin: auto;
        background: white;
        box-sizing: border-box;
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
        <p>जो जससँग सम्बन्धित छ ।</p>
      </div>
      <div class="subject">
        <p>
          विषयः-
          <span>सार्वजनिक बाटो कायम सिफारिस गरी पाउँ ।</span>
        </p>
      </div>

      <p>महोदय,</p>

      <div class="paragraph">
        <p>
          उपरोक्त सम्बन्धमा  ##LOCAL_LEVEL## वडा नं.##WARD_NUMBER## बस्ने 
           ##MULTIPLE_APPLICANTS##को
           नामबाट मालपोत कार्यालय,
          ##SURVEY_OFFICE## मा दर्ता श्रेस्ता कायम रहेको तपसिल बमोजिमको जग्गा ##LAND_DIRECTION## तर्फबाट 
          ##LAND_WIDTH## फिट चौडाई र
          ##LAND_LENGTH## फिट लम्बाई नेपाल सरकारको नाममा कित्ता काट गरी सार्वजनिक बाटो
          कायम गर्न सम्बन्धित मालपोत कार्यालय, ##SURVEY_OFFICE## मा सिफारिस गर्दछु ।
        </p>
      </div>

     
       <div class="authority">
          <p>##SIGNATURE##</p>
          <p>##AUTHORITY_NAME##</p>
          <p>##AUTHORITY_DESIGNATION##</p>
        </div>
    </div>
  </body>
</html>
`