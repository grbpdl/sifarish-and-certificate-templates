import globalTemplateStyle, { tableStyle } 
from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const asthayeeBasobasApplicationLetterTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>अस्थायी बसोबास सिफारिस निवेदन</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyle}
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
        विषयः स्थायी / अस्थायी बसोबास सिफारिस गरी पाउँ ।
      </div>

      <div class="greeting">
        महोदय,
      </div>

      <div class="content">
        <p>
          उपर्युक्त विषयमा 
          <strong>##CURRENT_DISTRICT##</strong> जिल्ला 
          <strong>##CURRENT_LOCAL_LEVEL##</strong> वडा नं. 
          <strong>##CURRENT_WARD_NUMBER##</strong> 
          <strong>##CURRENT_TOLE##</strong> बस्ने 
          म निवेदक <strong>##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</strong> 
          हाल <strong>##LOCAL_LEVEL##</strong> वडा नं. 
          <strong>##WARD_NUMBER##</strong> 
          <strong>##TOLE##</strong> मा 
          अस्थायी रूपमा बसोबास गर्दै आएको छु।
        </p>

        <p>
          यस सम्बन्धमा आवश्यक प्रमाणित सिफारिस पेश गर्नुपर्ने भएकोले नियम अनुसार
          स्थायी/अस्थायी बसोबास सिफारिस गरिदिनुहुन
          विनम्र अनुरोध गर्दछु।
        </p>
      </div>

      <div class="signature">
        <p>
          निवेदक<br />
          नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
         
          ठेगाना: ##LOCAL_LEVEL##-##WARD_NUMBER##, ##DISTRICT##<br />
          सम्पर्क नं.: ##PHONE_NUMBER##<br />
           सही: ........................
        </p>
      </div>

    </div>
  </body>
</html>
`;
