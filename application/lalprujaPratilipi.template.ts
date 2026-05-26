import { style } from "../template";
import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

const lalPrujaPratilipiTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Template</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyles}
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
        height: 110px;
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
        <p>श्री मालपोत कार्यालय,</p>
      </div>
      <div class="subject">
        <p>विषयः- <span>जग्गाधनी प्रमाणपूर्जा हराएको सिफारिस ।</span></p>
      </div>
      <div class="paragraph">
        <p>
            ##LOCAL_LEVEL## वडा नं.  ##WARD_NUMBER## को ##TOLE##मा निवासी
          श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##को तपसिलमा उल्लिखित विवरण अनुसार
          जग्गाधनी प्रमाणपूर्जा हराएकोले सिफारिस गरिदिनुहुन भनी निवेदन दिनु
          भएकोमा नियमानुसार गरिदिनुहुन स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा
          १२(२) ङ(१७) बमोजिम सिफारिस गरिन्छ ।
        </p>
      </div>

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

               <div class="authority">
                <p>......................</p>
                <p>##AUTHORITY_NAME##</p>
                <p>वडा अध्यक्ष</p>
              </div>
    </div>
  </body>
</html>`;
export default lalPrujaPratilipiTemplate;
