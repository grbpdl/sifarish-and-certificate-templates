import globalTemplateStyle from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const healthTreatmentApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>स्वास्थ्य उपचार सिफारिसका लागि निवेदन</title>
  <style>
    ${globalTemplateStyle}
  </style>
</head>

<body>
  <div class="container">

    <!-- Date -->
    <div class="date">
      ##C_DATE##
    </div>

    <!-- To Section -->
    <div class="to-section">
      <p>श्रीमान् वडा अध्यक्षज्यू,</p>
      <p>
        ##LOCAL_LEVEL##<br />
        वडा नं. ##WARD_NUMBER##<br />
        ##DISTRICT##
      </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषय : स्वास्थ्य उपचार सिफारिस गरिदिनुहुन ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Content -->
    <div class="content">
      <p>
        उपर्युक्त विषयमा म निवेदक
        ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##,
        ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER##
        अन्तर्गत ##TOLE## मा स्थायी रूपमा बसोबास गर्दै आएको छु।
      </p>

      <p>
        म मिति ##TREATMENT_START_DATE## देखि
        ##DISEASE_NAME## रोगको उपचारका लागि
        ##TREATMENT_LOCATION## मा उपचाररत रहेको हुँदा
        आर्थिक रूपमा कमजोर अवस्था भएको कारण
        स्वास्थ्य उपचारमा कठिनाइ उत्पन्न भएको व्यहोरा
        यसै निवेदनमार्फत अवगत गराउन चाहन्छु।
      </p>

      <p>
        अतः मलाई ##HOSPITAL_NAME##,
        ##HOSPITAL_ADDRESS## मा
        नियमानुसार निःशुल्क वा छुट सहित
        आवश्यक स्वास्थ्य उपचार उपलब्ध गराइदिनुहुन
        स्वास्थ्य उपचार सिफारिस
        प्रदान गरिदिनुहुन
        सादर अनुरोध गर्दछु।
      </p>

      <p>
        यस निवेदनसाथ आवश्यक कागजातहरू
        संलग्न गरी पेश गरेको छु।
      </p>
    </div>

    <!-- Signature -->
    <div class="signature">
      <p>
        निवेदक<br /><br />
        हस्ताक्षर : ..............................<br />
        नाम : ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
        ठेगाना : ##LOCAL_LEVEL##–##WARD_NUMBER##, ##DISTRICT##<br />
      </p>
    </div>

  </div>
</body>
</html>
`;
