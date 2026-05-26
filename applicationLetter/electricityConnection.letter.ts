import globalTemplateStyle, { tableStyle } 
from "../applicationLetterStyles/letterGlobalStyle";

export const electricityConnectionNibedanLetterTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>विद्युत जडान सिफारिस निवेदन</title>
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
        विषयः विद्युत जडान सिफारिस गरी पाउँ ।
      </div>

      <div class="greeting">
        महोदय,
      </div>

      <div class="content">
        <p>
          उपर्युक्त विषयमा म निवेदक 
          <strong>##DISTRICT##</strong> जिल्ला 
          <strong>##LOCAL_LEVEL##</strong> वडा नं. 
          <strong>##WARD_NUMBER##</strong> बस्ने 
          <strong>##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</strong>
          हुँ ।
        </p>

        <p>
          मेरो/हाम्रो नाममा दर्ता श्रेस्ता कायम रहेको 
          कि.नं. <strong>##KITTA_NUMBER##</strong> को जग्गामा
          निर्मित घरमा नेपाल विद्युत प्राधिकरणबाट
          विद्युत लाइन जडान गर्नुपर्ने भएकोले
          सम्बन्धित निकायमा पेश गर्न
          विद्युत जडान सिफारिस गरिदिनुहुन
          विनम्र अनुरोध गर्दछु।
        </p>
      </div>

      <div class="signature">
        <p>
          निवेदक<br />
          नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
          ठेगाना: ##LOCAL_LEVEL##-##WARD_NUMBER##, ##DISTRICT##<br />
          दस्तखत: ........................
        </p>
      </div>

    </div>
  </body>
</html>
`;
