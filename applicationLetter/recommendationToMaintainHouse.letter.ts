import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const houseRegistrationRecommendationLetter = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>घर कायम सिफारिस – निवेदन</title>

  <style>
    ${globalTemplateStyle}
    ${tableStyle}
  </style>
</head>
<body>

  <div class="container">

    <!-- Date -->
    <div class="date">
      मिति : ##C_DATE##
    </div>

    <!-- Address -->
    <div class="to-section">
      <p>श्रीमान वडा अध्यक्षज्यू,</p>
      <p>
        वडा नं. ##WARD_NUMBER##<br>
        ##LOCAL_LEVEL##, ##DISTRICT##
      </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषय: घर कायम सिफारिस गरी पाऊँ ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Body -->
    <div class="content">
      <p>
        उपर्युक्त विषयमा म ##DISTRICT## जिल्ला ##LOCAL_LEVEL##
        वडा नं. ##WARD_NUMBER## निवासी
        ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
        को नाममा यस वडा कार्यालयमा दर्ता कायम रहेको
        हाल ##LOCAL_LEVEL##
        वडा नं. ##WARD_NUMBER## स्थित
        कित्ता नं. ##KITTA_NUMBER## क्षेत्रफल ##LAND_AREA##
        मा निर्माण सम्पन्न भएको घर
        मिति ##HOUSE_COMPLETION_DATE## देखि हालसम्म
        निरन्तर रुपमा कायम रही आएको व्यहोरा अवगत गराउँदछु ।
      </p>

      <p>
        उक्त घर जग्गा दर्ता तथा अभिलेखमा उल्लेख भएबमोजिम
        म स्वयंले उपभोग गर्दै आएको हुँदा
        विभिन्न सरकारी तथा गैर–सरकारी प्रयोजनका लागि
        घर कायम सिफारिस आवश्यक परेकोले
        आवश्यक कागजात संलग्न राखी
        यस कार्यालयको अभिलेख अनुसार सत्य तथ्य बुझी
        घर कायम सिफारिस गरिदिनुहुन
        यो निवेदन पेश गरेको छु ।
      </p>

      <section class="table-container">
               
                  <div style="text-align:center;text-decoration:underline;">चार किल्ला विवरण</div>
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
      <p>
        <br />
        अतः नियमअनुसार आवश्यक छानबिन गरी
        घर कायम सिफारिस प्रदान गरिदिनुहुन
        विनम्र अनुरोध गर्दछु ।
      </p>

    </div>

    <!-- Signature -->
    <div class="signature">
      <p>
        निवेदक<br>
        नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br>
        सही: .........................
      </p>
      <p>
        ठेगाना: वडा नं. ##WARD_NUMBER##, ##LOCAL_LEVEL##<br>
        सम्पर्क नं.: ##CONTACT_NUMBER##
      </p>
    </div>

  </div>

</body>
</html>
`;
