import globalTemplateStyle
from "../../templates/applicationLetterStyles/letterGlobalStyle";

import  {tableStyles}  from "../../templates/templateStyles";

export const gharBatoKhulaiApplicationLetterTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>घर/बाटो खुलाइ प्रमाणित निवेदन</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyles}
    </style>
  </head>

  <body>
    <div class="container">
      
      <div class="date">
        ##C_DATE##
      </div>

      <div class="to-section">
        <p>श्री वडा अध्यक्षज्यू,</p>
        <p>
          वडा नं. ##WARD_NUMBER## को कार्यालय<br />
          ##LOCAL_LEVEL##, ##DISTRICT## ।
        </p>
      </div>

      <div class="subject">
        विषयः घर/बाटो खुलाइ प्रमाणित सिफारिस पाउँ ।
      </div>

      <div class="greeting">
        महोदय,
      </div>

      <div class="content">
        <p>
          उपरोक्त सम्बन्धमा म निवेदक <strong>##DISTRICT##</strong> जिल्ला 
          <strong>##LOCAL_LEVEL##</strong> वडा नं. <strong>##WARD_NUMBER##</strong>
          <strong>##TOLE##</strong> बस्ने 
          <strong>##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</strong>
          को नाममा दर्ता कायम रहेको घर/जग्गामा जाने बाटोको
          खुलाइ प्रमाणित गरी मालपोत कार्यालय,
          ##MALPOT_ADDRESS##
          मा पेश गर्नुपर्ने भएकोले आवश्यक छानबिन गरी
          सोको सिफारिस गरिदिनुहुन अनुरोध गर्दछु।
        </p>

        <p>
          मेरो घर/जग्गा तथा बाटोको विवरण तपसिल अनुसार उल्लेख गरिएको छ :
        </p>

        <section class="table-container">
          <br />
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
      </div>

      <div class="signature">
        <p>
          निवेदक<br />
          नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
          ठेगाना: ##LOCAL_LEVEL##-##WARD_NUMBER##, ##DISTRICT##<br />
          सम्पर्क नं.: ##PHONE_NUMBER##<br />
          दस्तखत: ........................
        </p>
      </div>

    </div>
  </body>
</html>
`;
