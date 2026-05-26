import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const classEnhancementLetterTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>कक्षा वृद्धि सिफारिस निवेदन</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyle}
    </style>
  </head>
  <body>
   <div class="container">
    <div class="date">
        मिति: ........................
    </div>
    <div class="to-section">
      <p>श्री वडा अध्यक्षज्यू,</p>
      <p>
        वडा नं. ##WARD## को कार्यालय<br />
        ##MUNICIPALITY_NAME##, ##DISTRICT_NAME## ।
      </p>
    </div>

    <div class="subject">
      विषयः कक्षा वृद्धि सिफारिस सम्बन्धमा ।
    </div>

    <div class="greeting">
      महोदय,
    </div>

    <div class="content">
      <p>
        उपरोक्त सम्बन्धमा यस <strong>##MUNICIPALITY_NAME##</strong> वडा नं. <strong>##WARD##</strong> मा सञ्चालित 
        <strong>##SCHOOL_COLLEGE_NAME##</strong> ले कक्षा वृद्धि गर्नुपर्ने भएकोले सो को लागि आवश्यक सिफारिस गरिदिनु हुन अनुरोध गर्दछु।
      </p>
    </div>

    <div class="signature">
      <p>
        निवेदक<br />
        प्रधानाध्यापक / सञ्चालक<br />
        <strong>##SCHOOL_COLLEGE_NAME##</strong><br />
        दस्तखत: ........................
      </p>
    </div>
   </div>
  </body>
</html>
`;
