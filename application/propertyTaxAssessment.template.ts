import { footer, header, style } from "../template";

const propertyTaxAssessmentTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>घर जग्गा करको लेखाजोखा सिफारिस</title>
    <style>
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
        text-align: justify;
      }
      .paragraph p {
        line-height: 1.8;
        text-align: justify;
      }
      .authority {
        margin-top: 12vh;
        display: flex;
        flex-direction: column;
        align-items: end;
      }
      .authority p {
        margin: 3px 0;
      }
    </style>
  </head>
  <body>
    <div class="a4-page">
      ${header}

      <div class="subject">
        <p>विषयः- <span>घर जग्गा करको लेखाजोखा सिफारिस</span></p>
      </div>

      <div class="greet">
        <p>जो जससँग सम्बन्धित छ ।</p>
      </div>

      <div class="paragraph">
       <p>
  ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER## को ##TOLE## मा बस्ने श्री
  ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## ले घर जग्गा करको लेखाजोखा सिफारिस
  गरीदिनु भनी जग्गाधनी प्रमाणपत्र र घर जग्वगाको अन्य विरण सहित दिएको निवेदन अनुसार
  निजको आ.व. ##FISCAL_YEAR_FROM## देखि ##FISCAL_YEAR_TO## सम्मको कर
  यस गाउँ/नगरपालिकामा रहेको घर र जग्गाको तिर्नुपर्ने मालपोत/सम्पत्तिकर रू.##PROPERTY_TAX_AMOUNT##
  चुक्ता भएको व्यहोरा स्थानीय
  सरकार सञ्चालन ऐन, २०७४ को दफा १२(२)ङ(६) बमोजिम सिफारिस गरिन्छ ।
</p>


        <p style="display: flex;
        flex-direction: column;
        align-items:start;
        text-align: left;
        width: 100%;">
          करको लेखाजोखा सहित कर तिरेको रसिदको प्रतिलिपि यसैसाथ संलग्न छ ।   
        </p>
      </div>

      <div class="authority">
        <p>##SIGNATURE##</p>
        <p>##AUTHORITY_NAME##</p>
        <p> ##AUTHORITY_DESIGNATION##</p>
      </div>

      ${footer}
    </div>
  </body>
</html>
`;

export default propertyTaxAssessmentTemplate;
