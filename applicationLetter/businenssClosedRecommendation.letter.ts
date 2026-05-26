import globalTemplateStyle from "../../templates/applicationLetterStyles/letterGlobalStyle";


export const businessCloseApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>व्यापार व्यवसाय बन्द भएको – निवेदन</title>

  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+Devanagari&display=swap" rel="stylesheet">

  <style>
    ${globalTemplateStyle}
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
      श्रीमान वडा अध्यक्षज्यू,<br>
      ##RECOMMENDING_OFFICE##<br>
      ##DEPARTMENT_ADDRESS##
    </div>

    <!-- Subject -->
    <div class="subject">
      विषय: व्यापार व्यवसाय बन्द भएको सिफारिस पाऊँ ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Body -->
    <div class="content">
      उपर्युक्त विषयमा म ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER## अन्तर्गत
      ##BUSINESS_ADDRESS## मा दर्ता भई सञ्चालनमा रहेको
      ##BUSINESS_NAME## नामक व्यापार व्यवसायको
      अध्यक्ष/प्रोप्राइटर श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
      हुँ ।
      <br><br>

      उक्त व्यापार व्यवसाय ##REASON_FOR_APPLICATION## कारणले गर्दा
      मिति ##OCCUPATION_CLOSE_DATE## देखि
      ##OCCUPATION_CLOSE_DATE_TO## सम्म
      पूर्ण रूपमा सञ्चालनमा नरहेको व्यहोरा यसै निवेदन मार्फत जानकारी
      गराउँदछु ।
      <br><br>

      सम्बन्धित निकायमा आवश्यक कागजात पेश गर्न
      व्यापार व्यवसाय बन्द भएको सिफारिस आवश्यक परेको हुँदा
      देहाय बमोजिमको विवरण सत्य तथ्य पुष्टि गरी
      व्यापार व्यवसाय बन्द भएको सिफारिस प्रदान गरिदिनुहुन
      विनम्र अनुरोध गर्दछु ।
      <br>

      <!-- Details Table -->
      <table>
        <thead>
          <tr>
            <th>क्र.सं.</th>
            <th>संस्था वा फर्मको प्रकार</th>
            <th>ठेगाना</th>
            <th>दर्ता नं.</th>
            <th>कैफियत</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>१</td>
            <td>##BUSINESS_TYPE##</td>
            <td>##BUSINESS_ADDRESS##</td>
            <td>##BUSINESS_REGISTRATION_NUMBER##</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <br>
      अतः नियमअनुसार आवश्यक छानबिन गरी
      व्यापार व्यवसाय बन्द भएको सिफारिस
      गरिदिनुहुन पुनः विनम्र अनुरोध गर्दछु ।
      <br><br>

      धन्यवाद ।
    </div>

    <!-- Signature -->
    <div class="signature">
      <div class="signature-box">
        <div class="signature-line"></div>
        ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## <br>
        निवेदक<br>
        ##BUSINESS_NAME##<br>
        सम्पर्क नं.: ##PHONE_NUMBER##
      </div>
    </div>

  </div>

</body>
</html>
`;
