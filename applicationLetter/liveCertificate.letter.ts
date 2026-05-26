import globalTemplateStyle from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const liveCertificateApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>जिवित रहेको सिफारिस – निवेदन</title>

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
      विषय : जिवित रहेको सिफारिस गरी पाऊँ ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Body -->
    <div class="content">
      <p>
        उपर्युक्त विषयमा म निवेदक
        ##DISTRICT## जिल्ला
        ##LOCAL_LEVEL##
        वडा नं. ##WARD_NUMBER##
        टोल ##TOLE##
        स्थायी बसोबास गर्ने
        श्री ##GRAND_FATHER_FIRST_NAME## ##GRAND_FATHER_MIDDLE_NAME## ##GRAND_FATHER_LAST_NAME##
        को ##REPLACEABLE_GRANDSON_GRANDDAUGHTER##
        श्री ##FATHER_FIRST_NAME## ##FATHER_MIDDLE_NAME## ##FATHER_LAST_NAME##
        को ##REPLACEABLE_SON_DAUGHTER##
        श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
        हुँ।
      </p>

      <p>
        म हाल जिवित नै रहेको हुँदा सोही व्यहोरा
        सम्बन्धित निकायमा पेश गर्नुपर्ने भएकाले
        आवश्यक कागजातहरू यसै निवेदनसाथ संलग्न गरी
        सत्य तथ्य जाँचबुझ गरी
        <strong>जिवित रहेको सिफारिस</strong>
        प्रदान गरिदिनुहुन
        यो निवेदन पेश गरेको छु।
      </p>

      <p>
        अतः नियमअनुसार आवश्यक कारवाही गरी
        जिवित रहेको सिफारिस उपलब्ध गराइदिनुहुन
        विनम्र अनुरोध गर्दछु।
      </p>
    </div>

    <!-- Signature -->
    <div class="signature">
      <p>
        निवेदक<br />
        नाम थर : ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
        ठेगाना : वडा नं. ##WARD_NUMBER##, ##LOCAL_LEVEL##<br />
      </p>

      <p>
        दस्तखत : .........................
      </p>
    </div>

  </div>
</body>
</html>
`;
