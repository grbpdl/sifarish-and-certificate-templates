import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const marriageCertificateApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>विवाह प्रमाणित – निवेदन</title>

  <style>
    ${globalTemplateStyle}
    ${tableStyle}
  </style>
</head>

<body>

  <div class="container">

    <!-- Date -->
    <div class="date">
      मिति : ##APPLICATION_DATE##
    </div>

    <!-- Address -->
    <div class="to-section">
      <p>श्रीमान वडा अध्यक्षज्यू,</p>
      <p>
        ##WARD_NUMBER_HEADER## नं. वडाको कार्यालय<br />
        ##MUNICIPALITY_NAME_HEADER##
      </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषय: विवाह प्रमाणित सिफारिस पाऊँ ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Body -->
    <div class="content">
      <p>
        उपर्युक्त विषयमा म
        ##HUSBAND_DISTRICT## जिल्ला
        ##HUSBAND_LOCAL_LEVEL## वडा नं.
        ##HUSBAND_WARD_NUMBER##
        ##HUSBAND_TOLE## निवासी
        श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
        तथा
        ##WIFE_DISTRICT## जिल्ला
        ##WIFE_LOCAL_LEVEL## वडा नं.
        ##WIFE_WARD_NUMBER##
        ##WIFE_TOLE## निवासी
        श्री ##SPOUSE_FIRST_NAME## ##SPOUSE_MIDDLE_NAME## ##SPOUSE_LAST_NAME##
        बीच मिति ##MARRAIGE_DATE## का दिन
        सामाजिक परम्परा तथा रीतिरिवाज अनुसार
        विवाह सम्पन्न भएको व्यहोरा अनुरोध गर्दछु ।
      </p>

      <p>
        उक्त विवाह सम्बन्धित निकायमा दर्ता तथा
        प्रमाणिकरण प्रयोजनका लागि
        विवाह प्रमाणित सिफारिस आवश्यक परेको हुँदा
        आवश्यक कागजात संलग्न राखी
        विवाह प्रमाणित सिफारिस गरिदिनुहुन
        यो निवेदन पेश गरेको छु ।
      </p>

      <p>
        अतः नियमअनुसार आवश्यक छानबिन गरी
        हाम्रो विवाह प्रमाणित भएको सिफारिस
        प्रदान गरिदिनुहुन
        विनम्र अनुरोध गर्दछु ।
      </p>
    </div>

    <!-- Applicant -->
    <div class="signature">
      <p>
        निवेदक<br />
        नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
        ठेगाना: ##HUSBAND_LOCAL_LEVEL## वडा नं. ##HUSBAND_WARD_NUMBER## ##HUSBAND_TOLE##<br />
        सम्पर्क नं.: ##PHONE_NUMBER##<br />
        सही: .........................
      </p>
    </div>

  </div>

</body>
</html>
`;
