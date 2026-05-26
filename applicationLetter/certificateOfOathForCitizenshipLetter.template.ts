import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const certificateOfOathForCitizenshipLetterTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>नेपाली नागरिकताको शपथ पत्र निवेदन</title>
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
      <p>श्री वडा अध्यक्षज्यू,</p>
      <p>
        वडा नं. ##ROHAWAR_WARD_NUMBER## को कार्यालय<br />
        ##DEPARTMENT_MUNICIPALITY## ।
      </p>
    </div>

    <div class="subject">
      विषयः नेपाली नागरिकताको शपथ पत्र सम्बन्धमा ।
    </div>

    <div class="greeting">
      महोदय,
    </div>

    <div class="content">
      <p>
        उपरोक्त सम्बन्धमा म निवेदक <strong>##APPLICANT_NAME##</strong>, 
        <strong>##APPLICANT_ADDRESS##</strong> बस्ने, 
        नेपाली नागरिकताको प्रमाणपत्र प्राप्त गर्नको लागि आवश्यक पर्ने शपथ पत्र प्रमाणित गरिदिनु हुन अनुरोध गर्दछु।
      </p>
    </div>

    <div class="signature">
      <p>
        निवेदक<br />
        दस्तखत: ........................<br />
        नाम: ##APPLICANT_NAME##<br />
        ठेगाना: ##APPLICANT_ADDRESS##
      </p>
    </div>
   </div>
  </body>
</html>
`;
