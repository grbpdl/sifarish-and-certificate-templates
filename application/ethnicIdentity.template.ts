import { style } from "../template";
import { header, globalTemplateStyle } from "../../templates/templateStyles"
export const ethnicIdentityTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Template</title>
    <style>
      ${globalTemplateStyle}
      ${style}
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
    </style>
  </head>
  <body>
    <div class="a4-page">
        ${header}
        <div class="greet">
          <p>जो जससँग सम्बन्धित छ ।</p>
        </div>
        <div class="subject">
          <p>विषयः- <span>जातीय पहिचान र जातीय सिफारिस ।</span></p>
        </div>
        <div class="paragraph">
          <p>
            ##LOCAL_LEVEL##  वडा नं ##WARD_NUMBER## बस्ने श्री  ##GRAND_FATHER_FIRST_NAME## ##GRAND_FATHER_MIDDLE_NAME## ##GRAND_FATHER_LAST_NAME## को ##REPLACEABLE_GRANDSON_GRANDDAUGHTER## श्री  ##FATHER_FIRST_NAME## ##FATHER_MIDDLE_NAME## ##FATHER_LAST_NAME## को ##REPLACEABLE_SON_DAUGHTER## ##REPLACEABLE_HIS_HER## ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##  ले आफ्नो जातीय पहिचानको सिफारिस गरी दिन भनि निवेदन पेश गर्नु भएकोमा निजको नागरिकताको प्रमाणपत्र, शैक्षिक योग्यताका प्रमाणपत्र, नेपाल सरकारबाट सूचिकृत भएको जातजातीको सूची बमोजिम निज ##RECOMMENDATION_OPTIONS## जातिमा पर्ने व्यहोरा स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा १२(२) ङ(३५) बमोजिम सिफारिस गरिन्छ ।
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
