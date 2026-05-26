import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const charKillaApplicationLetterTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>चार किल्ला प्रमाणित निवेदन</title>
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
      विषयः चार किल्ला प्रमाणित सिफारिस पाउँ ।
    </div>

    <div class="greeting">
      महोदय,
    </div>

    <div class="content">
      <p>
        उपरोक्त सम्बन्धमा म निवेदक <strong>##DISTRICT##</strong> जिल्ला <strong>##LOCAL_LEVEL##</strong> वडा नं. <strong>##WARD_NUMBER##</strong> 
        <strong>##TOLE##</strong> बस्ने <strong>##FIRST_NAME## ##LAST_NAME##</strong> ले 
        <strong>##REGISTERED_LAND_MUNICIPALITY##</strong> वडा नं. <strong>##REGISTERED_LAND_WARD##</strong> मा रहेको जग्गाको 
        चार किल्ला प्रमाणित गरी <strong>##SUBMITTING_OFFICE_OR_INSTITUTION_NAME##</strong> मा पेश गर्नुपर्ने भएकोले 
        सो को सिफारिस गरिदिनु हुन अनुरोध गर्दछु।
      </p>
      <p> मेरो जग्गाको विवरण तल उल्लेखित छ :</p>
      <section class="table-container">
      </br> 
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
        ठेगाना: ##LOCAL_LEVEL##-##WARD_NUMBER##<br />
        दस्तखत: ........................
      </p>
    </div>
   </div>
  </body>
</html>
`;
