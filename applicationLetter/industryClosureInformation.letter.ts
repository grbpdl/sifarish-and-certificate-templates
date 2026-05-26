import globalTemplateStyle, {
  tableStyle,
} from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const industryClosureInformationApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>उद्योग बन्द भएको जानकारी सम्बन्धी निवेदन</title>
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
      <p>श्रीमान् ##DEPARTMENT_HEAD## ज्यू,</p>
      <p>
        ##DEPARTMENT_ADDRESS##<br />
      </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषय : उद्योग बन्द भएको जानकारी गराउने सम्बन्धमा ।
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
        को नाममा
        ##INDUSTRY_PROVINCE## प्रदेश,
        ##INDUSTRY_DISTRICT## जिल्ला,
        ##INDUSTRY_LOCAL_LEVEL##
        वडा नं. ##INDUSTRY_WARD_NUMBER##
        स्थित
        <strong>##INDUSTRY_TOLE##</strong>
        मा दर्ता भई सञ्चालनमा रहेको
        <strong>##INDUSTRY_NAME##</strong>
        नामक
        <strong>##INDUSTRY_TYPE##</strong>
        उद्योग
        दर्ता नम्बर
        <strong>##REGISTRATION_NUMBER##</strong>
        तथा PAN नं.
        <strong>##PAN_NUMBER##</strong>
        अन्तर्गत सञ्चालन हुँदै आएको व्यहोरा
        अवगत गराउन चाहन्छु।
      </p>

      <p>
        उक्त उद्योग
        मिति <strong>##END_DATE##</strong>
        देखि
        <strong>##REASONS_FOR_CLOSING_THE_INDUSTRY##</strong>
        कारणले गर्दा
        पूर्ण रूपमा बन्द गरिएको व्यहोरा
        सम्बन्धित निकायलाई जानकारी गराउन
        यो निवेदन पेश गरेको छु।
      </p>

      <p>
        उद्योग बन्दसँग सम्बन्धित
        आवश्यक कागजातहरू
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
