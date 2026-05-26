import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const careRecommendationLetterTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>पालन पोषण सिफारिस निवेदन</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyle}
    </style>
  </head>
  <body>
   <div class="container">
    <div class="date">
        मिति: ##C_DATE##  
    </div>
    <div class="to-section">
      <p>श्रीमान् वडाध्यक्षज्यू,</p>
      <p>
        वडा नं. ##WARD_NUMBER## को कार्यालय<br />
        ##LOCAL_LEVEL##, ##DISTRICT## ।
      </p>
    </div>

    <div class="subject">
      विषयः अशक्त, असहाय तथा अनाथको पालन पोषणको लागि सिफारिस पाउँ ।
    </div>

    <div class="greeting">
      महोदय,
    </div>

    <div class="content">
      <p>
        उपरोक्त सम्बन्धमा म निवेदक <strong>##FIRST_NAME## ##LAST_NAME##</strong>, 
        <strong>##LOCAL_LEVEL##</strong> वडा नं. <strong>##WARD_NUMBER##</strong> बस्ने, 
        मेरो संरक्षणमा रहेका <strong>##DISABLED_FIRST_NAME## ##DISABLED_LAST_NAME##</strong> (##PERSON_TYPE##) को 
        पालन पोषणको लागि आवश्यक सिफारिस गरिदिनु हुन अनुरोध गर्दछु।
      </p>
    </div>

    <div class="signature">
      <p>
        निवेदक<br />
        नाम: ##FIRST_NAME## ##LAST_NAME##<br />
        सही: ........................<br />
        ठेगाना: ##LOCAL_LEVEL##-##WARD_NUMBER##
      </p>
    </div>
   </div>
  </body>
</html>
`;
