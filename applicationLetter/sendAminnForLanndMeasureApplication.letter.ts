import globalTemplateStyle from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const sendAminForLandMeasureNibedanLetter = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>जग्गा नाप–जाँचका लागि अमिन पठाइदिनुहुन निवेदन</title>

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
      विषय : जग्गा नाप–जाँचका लागि अमिन पठाइदिनुहुन ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Body -->
    <div class="content">
      <p>
        उपर्युक्त विषयमा म निवेदक
        ##DISTRICT## जिल्ला ##LOCAL_LEVEL##
        वडा नं. ##WARD_NUMBER## टोल ##TOLE##
        बस्ने ##REPLACEABLE_HIS_HER##
        ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
        हुँ।
      </p>

      <p>
        मेरो नाममा मालपोत कार्यालय
        ##MALPOT_ADDRESS## मा दर्ता कायम रहेको
        ##LAND_OR_HOUSE## सम्बन्धी
        कित्ता नं. ##KITTA_NO##
        को जग्गामा
        ##DISPUTE_CAUSE##
        कारणले नाप–जाँच गरी यकिन गर्नुपर्ने अवस्था आएको छ।
      </p>

      <p>
        अतः उक्त जग्गाको वास्तविक अवस्था यकिन गर्न
        यस वडा कार्यालयबाट अमिन खटाई
        जग्गा नाप–जाँच गरिदिनुहुन
        यो निवेदन पेश गरेको छु।
      </p>

      <p>
        नियमअनुसार आवश्यक छानबिन गरी
        जग्गा नाप–जाँचका लागि अमिन पठाइदिनुहुन
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
