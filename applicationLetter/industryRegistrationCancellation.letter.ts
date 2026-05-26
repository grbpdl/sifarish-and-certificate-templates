import globalTemplateStyle, {
  tableStyle,
} from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const industryRegistrationCancellationApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>उद्योग दर्ता खारेजीका लागि निवेदन</title>
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

    <!-- To Section -->
    <div class="to-section">
      <p>श्रीमान् वडा अध्यक्षज्यू,</p>
      <p>
        ##INDUSTRY_LOCAL_LEVEL##<br />
        वडा नं. ##INDUSTRY_WARD_NUMBER##<br />
        ##INDUSTRY_DISTRICT##
      </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषय : उद्योग दर्ता खारेजी सिफारिस गरिदिनुहुन ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Content -->
    <div class="content">
      <p>
        म निवेदक
        ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
        ले मिति ##REGISTER_DATE## मा
        उद्योग दर्ता नम्बर
        ##REGISTRATION_NUMBER##
        अन्तर्गत
        <strong>##INDUSTRY_NAME##</strong>
        नामक उद्योग दर्ता गरी
        मिति ##START_DATE## देखि सञ्चालन गर्दै आएको व्यहोरा
        विदितै छ।
      </p>

      <p>
        विभिन्न कारणवश
        मिति ##END_DATE## देखि
        उक्त उद्योग पूर्ण रूपमा बन्द गरिएको हुँदा
        हाल उद्योग सञ्चालनमा नरहेको व्यहोरा
        जानकारी गराउन चाहन्छु।
      </p>

      <p>
        उद्योग सञ्चालन नरहेको तथा
        भविष्यमा पनि सञ्चालन गर्ने योजना नरहेकाले
        नियमअनुसार उक्त उद्योगको दर्ता खारेजी गर्न
        सम्बन्धित निकायमा पेश गर्नुपर्ने
        वडा सिफारिस आवश्यक परेको हुँदा
        यो निवेदन पेश गरेको छु।
      </p>

      <p>
        यस सम्बन्धमा आवश्यक पर्ने
        उद्योग दर्ता प्रमाणपत्र,
        कर चुक्ता प्रमाणपत्र,
        PAN प्रमाणपत्र लगायतका कागजातहरू
        यसैसाथ संलग्न गरिएको व्यहोरा
        अनुरोध गर्दछु।
      </p>
    </div>

    <!-- Signature -->
    <div class="signature">
      <p>
        निवेदक<br /><br />
        हस्ताक्षर : ..............................<br />
        नाम : ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
        नागरिकता नं. : ##CITIZENSHIP_NUMBER##
      </p>
    </div>

  </div>
</body>
</html>
`;
