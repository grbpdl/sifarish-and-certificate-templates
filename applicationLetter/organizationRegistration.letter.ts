import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const organizationRegistrationLetter = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>व्यवसाय दर्ता सिफारिसको लागि निवेदन</title>

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

    <!-- To -->
    <div class="to-section">
      <p>श्रीमान् वडा अध्यक्षज्यू,</p>
      <p>
        वडा नं. ##WARD_NUMBER##<br>
        ##LOCAL_LEVEL##
      </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषयः व्यवसाय दर्ता सिफारिस गरिदिनुहुन ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Body -->
    <div class="content">
      <p>
        उपरोक्त विषयमा म यस ##DISTRICT## जिल्ला, ##LOCAL_LEVEL## वडा नं.
        ##WARD_NUMBER## मा
        <strong>##ORGANIZATION_NAME##</strong> नामक
        <strong>##ORGANIZATION_TYPE##</strong> व्यवसाय सञ्चालन गर्न इच्छुक भएकोले
        उक्त व्यवसाय दर्ता प्रयोजनका लागि आवश्यक सिफारिस/प्रमाणपत्र प्राप्त गर्न
        यो निवेदन पेश गरेको/गरेका छौं।
      </p>

      <p>
        प्रचलित कानून, नियम तथा स्थानीय तहबाट समय–समयमा जारी भएका निर्देशिका
        अनुसार लाग्ने सम्पूर्ण कर, दस्तुर तथा अन्य दायित्व समयमै बुझाउने तथा
        सबै नियम पालना गर्ने प्रतिबद्धता व्यक्त गर्दछु/गर्दछौं।
      </p>

      <p>
        अतः उल्लेखित विवरण सत्य भएकोले व्यवसाय दर्ता गर्न आवश्यक सिफारिस
        प्रदान गरिदिनुहुन सादर अनुरोध गर्दछु/गर्दछौं।
      </p>

      <div style="margin-top: 20px;">
        <p><strong>१. व्यवसायको नाम:</strong> ##ORGANIZATION_NAME##</p>
        <p><strong>२. व्यवसायको प्रकार:</strong> ##ORGANIZATION_TYPE##</p>
        <p><strong>३. व्यवसाय रहने स्थान:</strong>  ##LOCAL_LEVEL##, वडा नं. ##WARD_NUMBER##, ##TOLE##, ##DISTRICT##, ##PROVINCE##</p>
        <p><strong>४. व्यवसायीको नाम:</strong> ##BUSINESS_OWNER_FIRST_NAME## ##BUSINESS_OWNER_MIDDLE_NAME## ##BUSINESS_OWNER_LAST_NAME##</p>
        <p><strong>५. वर्तमान ठेगाना:</strong> ##CURRENT_LOCAL_LEVEL##, वडा नं. ##CURRENT_WARD_NUMBER##, ##CURRENT_TOLE##,##CURRENT_DISTRICT##, ##CURRENT_PROVINCE##</p>
        <p><strong>६. सम्पर्क नं.:</strong> ##PHONE_NUMBER##</p>
      </div>
    </div>

    <!-- Signature -->
    <div class="signature">
      <p>
        <strong>निवेदकको नाम:</strong><br>
        ##BUSINESS_OWNER_FIRST_NAME## ##BUSINESS_OWNER_MIDDLE_NAME## ##BUSINESS_OWNER_LAST_NAME##<br>
        हस्ताक्षर: .........................<br>
        <strong>ठेगाना:</strong><br>
        ##CURRENT_LOCAL_LEVEL##, वडा नं. ##CURRENT_WARD_NUMBER##, ##CURRENT_TOLE##, ##CURRENT_DISTRICT##, ##CURRENT_PROVINCE##<br>
        सम्पर्क नं.: ##PHONE_NUMBER##
      </p>
    </div>

  </div>
</body>
</html>
`;