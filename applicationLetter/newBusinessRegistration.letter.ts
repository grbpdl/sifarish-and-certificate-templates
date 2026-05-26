import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const businessRegistrationApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>नयाँ व्यवसाय दर्ता – निवेदन</title>

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
      <p>श्रीमान वडा अध्यक्षज्यू,</p>
      <p>
        वडा नं. ##WARD_NUMBER## को कार्यालय<br />
        ##LOCAL_LEVEL##
      </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषय: नयाँ व्यवसाय दर्ता सिफारिस पाऊँ ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Body -->
    <div class="content">
      <p>
        उपर्युक्त विषयमा म/हामी
        ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER## निवासी
        ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
        ले
        ##BUSINESS_LOCAL_LEVEL## वडा नं. ##BUSINESS_WARD_NUMBER##
        अन्तर्गत
        ##BUSINESS_TYPE##
        व्यवसाय सञ्चालन गर्ने उद्देश्यले
        नयाँ व्यवसाय दर्ता गर्नुपर्ने भएको हुँदा
        सो प्रयोजनका लागि सिफारिस आवश्यक परेकोले
        यो निवेदन पेश गरेको/गरेका छौं।
      </p>

      <p>
        प्रचलित स्थानीय तहका ऐन, नियम तथा निर्देशिकाबमोजिम
        लाग्ने कर, दस्तुर तथा अन्य शर्तहरू पालना गर्न
        म/हामी मञ्जुर रहेको व्यहोरा समेत अनुरोध गर्दछु/गर्दछौं।
      </p>

      <p>
        अतः उल्लेखित विवरण तथा संलग्न कागजातहरूका आधारमा
        नयाँ व्यवसाय दर्ता सिफारिस
        प्रदान गरिदिनुहुन
        हार्दिक अनुरोध गर्दछु/गर्दछौं।
      </p>

      <div style="margin-top: 20px;">
        <p><strong>विवरण:</strong></p>
        <p>१. व्यवसायीको नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</p>
        <p>२. स्थायी ठेगाना: ##LOCAL_LEVEL## - ##WARD_NUMBER##, ##DISTRICT##</p>
        <p>
          ३. व्यवसाय सञ्चालन हुने स्थान:
          ##BUSINESS_LOCAL_LEVEL## - ##BUSINESS_WARD_NUMBER##, ##BUSINESS_DISTRICT##
        </p>
        <p>४. सम्पर्क नं.: ##PHONE_NUMBER##</p>
        <p>५. व्यवसायको प्रकार: ##BUSINESS_TYPE##</p>
      </div>
    </div>

    <!-- Applicant -->
    <div class="signature">
      <p>
        निवेदक<br />
        नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
        ठेगाना: ##LOCAL_LEVEL## - ##WARD_NUMBER##, ##DISTRICT##<br />
        दस्तखत: .........................
      </p>
    </div>

  </div>

</body>
</html>
`;
