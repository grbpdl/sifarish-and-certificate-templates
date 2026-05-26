import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const threeGenerationVerificationRecommendationLetter = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>तीन पुस्ते प्रमाणित सिफारिस – निवेदन</title>

  <style>
    ${globalTemplateStyle}
    ${tableStyle}
  </style>
</head>
<body>

  <div class="container">

    <!-- Date -->
    <div class="date">
        ##C_DATE##
    </div>

    <!-- Address -->
    <div class="to-section">
      <p>श्रीमान वडा अध्यक्षज्यू,</p>
      <p>
        वडा नं. ##WARD_NUMBER##<br />
        ##LOCAL_LEVEL##, ##DISTRICT##
      </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषय: तीन पुस्ते प्रमाणित सम्बन्धमा ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Body -->
    <div class="content">
      <p>
        उपर्युक्त सम्बन्धमा म निवेदक
        ##DISTRICT## जिल्ला ##LOCAL_LEVEL##
        वडा नं. ##WARD_NUMBER## टोल ##TOLE##
        बस्ने ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
        हुँ ।
        मलाई ##REASON##
        प्रयोजनको लागि तीन पुस्ते प्रमाणित
        सिफारिस आवश्यक परेको हुँदा
        तपशिल अनुसारको विवरण
        सत्य तथ्य जाँचबुझ गरी
        तीन पुस्ते प्रमाणित सिफारिस
        गरिदिनुहुन
        यो निवेदन पेश गरेको छु ।
      </p>

      <!-- Table Section -->
      <section class="table-container">
        <div style="text-align:center; text-decoration:underline;">
          तपशिल
        </div>

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
        तीन पुस्ते प्रमाणित सिफारिस
        प्रदान गरिदिनुहुन
        विनम्र अनुरोध गर्दछु ।
      </p>
    </div>

    <!-- Signature -->
    <div class="signature">
      <p>
        निवेदक<br />
        नाम: ##APPLICANT_NAME##<br />
        सही: .........................
      </p>
      <p>
        ठेगाना: वडा नं. ##WARD_NUMBER##, ##LOCAL_LEVEL##<br />
        सम्पर्क नं.: ##CONTACT_NUMBER##
      </p>
    </div>

  </div>

</body>
</html>
`;
