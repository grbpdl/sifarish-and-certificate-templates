import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";
const electricityConnectionApplicationTemplateNew = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Template</title>
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

      .sn {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        align-items: start;
      }
      .sn p {
        margin: 0;
      }
      .date {
        display: flex;
        flex-direction: column;
        align-items: end;
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
          <p>श्री  विद्युत प्राधिकरण,</p>
        </div>
        <div class="subject">
          <p>विषयः- <span> विद्युत जडान सिफारिस ।</span></p>
        </div>
        <div class="paragraph">
          <p>
            ##LOCAL_LEVEL## वडा नं  ##WARD_NUMBER## बस्ने श्री ##FIRST_NAME## ##MIDDLE_NAME##  ##LAST_NAME## को नाममा दर्ता श्रेष्ता कायम रहेको कि.नं ##KITTA_NUMBER## को जग्गामा रहेको घरमा  लाईन/विद्युत जडान गरिदिन हुन स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा १२(२) ङ(३४) बमोजिम सिफारिस गरिन्छ ।
          </p>
        </div>

    
        <div class="authority">
          <p>##SIGNATURE##</p>
          <p>##AUTHORITY_NAME##</p>
          <p>वडा अध्यक्ष</p>
        </div>
    </div>
  </body>
</html>`;

export default electricityConnectionApplicationTemplateNew;
