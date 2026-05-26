import {
  globalTemplateStyle,
  header,
} from "../../templates/templateStyles";

const tapConnectionApplicationTemplateNew = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>धारा जडान सिफारिस</title>
    <style>
      ${globalTemplateStyle}

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

      .greet {
        margin-top: 20px;
      }

      .greet p {
        margin: 4px 0;
        font-weight: bold;
      }

      .subject {
        margin-top: 20px;
        text-align: center;
        font-weight: bold;
      }

      .paragraph {
        margin-top: 20px;
        text-align: justify;
        line-height: 1.7;
      }

      .authority {
        margin-top: 80px;
        text-align: right;
      }

      .authority p {
        margin: 3px 0;
      }
    </style>
  </head>

  <body>
    <div class="a4-page">
      <!-- Municipality Header -->
      ${header}

      <!-- Greeting -->
      <div class="greet">
        <p>श्री ##DRINKING_WATER_COMPANY_NAME##,</p>
        <p>##DRINKING_WATER_COMPANY_ADDRESS## ।</p>
      </div>

      <!-- Subject -->
      <div class="subject">
        <p>विषयः धारा जडान सिफारिस ।</p>
      </div>

      <!-- Body -->
      <div class="paragraph">
        <p>
          यस ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER## निवासी श्री
          ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
          को नाममा दर्ता श्रेष्ता कायम रहेको कि.नं. ##KITTA_NUMBER##
          को जग्गामा निर्माण सम्पन्न भएको घरमा खानेपानी धारा जडान गर्नुपर्ने
          भएकोले स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा १२(२) ङ(३४)
          बमोजिम नियम अनुसार धारा जडान गरिदिनुहुन सिफारिस गरिन्छ ।
        </p>
      </div>

      <!-- Authority -->
      <div class="authority">
        <p>.................................</p>
        <p>##AUTHORITY_NAME##</p>
        <p>##AUTHORITY_DESIGNATION##</p>
      </div>
    </div>
  </body>
</html>`;

export default tapConnectionApplicationTemplateNew;
