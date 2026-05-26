import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const unmarriedVerificationLetter = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>अविवाहित प्रमाणित सिफारिस – निवेदन</title>

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
      विषय: अविवाहित प्रमाणित सिफारिस पाऊँ ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Body -->
    <div class="content">
      <p>
        उपर्युक्त विषयमा म ##DISTRICT## जिल्ला ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER##
        निवासी ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## हालसम्म अविवाहित रहेको
        व्यहोरा अनुरोध गर्दछु । विभिन्न सरकारी तथा गैर–सरकारी प्रयोजनका लागि
        अविवाहित प्रमाणपत्र आवश्यक परेको हुँदा, म अविवाहित नै रहेको सम्बन्धमा
        सत्य तथ्य बुझी आवश्यक कागजात संलग्न राखी अविवाहित प्रमाणित गरी सिफारिस
        गरिदिनुहुन यो निवेदन पेश गरेको छु ।
      </p>

      <p>
        अतः नियमअनुसार आवश्यक छानबिन गरी अविवाहित प्रमाणित सिफारिस प्रदान
        गरिदिनुहुन विनम्र अनुरोध गर्दछु ।
      </p>
    </div>

    <!-- Signature -->
    <div class="signature">
      <p>
        निवेदक<br>
        नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## <br>
        सही: .........................
      </p>
    </div>

  </div>

</body>
</html>
`;
