import globalTemplateStyle from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const birthDateVerificationLetter= `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>जन्म मिति प्रमाणित – निवेदन</title>

  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari&display=swap" rel="stylesheet">

  <style>
    ${globalTemplateStyle}

    @media print {
      body {
        background: none;
        padding: 0;
      }
      .page {
        box-shadow: none;
        margin: 0;
      }
    }
  </style>
</head>

<body>

  <div class="container">

    <!-- Date -->
    <div class="date">
        मिति: ##APPLICATION_DATE##
      </div>
    
    <!-- Address -->
    <div class="to-section">
        <p>श्रीमान् वडाध्यक्षज्यू,</p>
        <p>
          वडा नं. ##WARD_NUMBER##<br />
          ##LOCAL_LEVEL##
        </p>
      </div>

    <!-- Subject -->
    <div class="subject">
      विषय: जन्म मिति प्रमाणित सिफारिस पाऊँ ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Body -->
    <div class="content">
      उपर्युक्त विषयमा म ##DISTRICT## जिल्ला ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER##
      निवासी श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## यस कार्यालयमा
      जन्म मिति प्रमाणित गरिदिन आवश्यक परेको हुँदा यो निवेदन पेश गरेको छु ।
      <br><br>

      मेरो परिवार विवरण अनुसार श्री
      ##GRAND_FATHER_FIRST_NAME## ##GRAND_FATHER_MIDDLE_NAME## ##GRAND_FATHER_LAST_NAME## को
      ##REPLACEABLE_GRANDSON_GRANDDAUGHTER## तथा श्री ##FATHER_FIRST_NAME## ##FATHER_MIDDLE_NAME## ##FATHER_LAST_NAME## को
      ##REPLACEABLE_SON_DAUGHTER## ##REPLACEABLE_HIS_HER## ##CHILD_FIRST_NAME## ##CHILD_MIDDLE_NAME## ##CHILD_LAST_NAME##
      मिति ##CHILD_DATE_OF_BIRTH## गते ##CHILD_BIRTH_PLACE## मा जन्म भएको हो ।
      <br><br>

      सोही व्यहोरा प्रमाणित गर्न आवश्यक कागजातहरू (नागरिकता, जन्म दर्ता, राहदानी
      लगायत) संलग्न राखी जन्म मिति प्रमाणित गरी सिफारिस गरिदिनुहुन
      हार्दिक अनुरोध गर्दछु ।
      <br><br>

      अतः नियमअनुसार आवश्यक छानबिन गरी जन्म मिति प्रमाणित सिफारिस
      प्रदान गरिदिनुहुन विनम्र अनुरोध गर्दछु ।
      <br><br>

      धन्यवाद ।
    </div>

    <!-- Signature -->
    <div class="signature">
      <div class="signature-box">
        <div class="signature-line"></div>
        ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## <br>
        निवेदक
      </div>
    </div>

  </div>

</body>
</html>

`;