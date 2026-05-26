import globalTemplateStyle from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const publicRoadMaintainanceApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>सार्वजनिक बाटो कायम सम्बन्धी निवेदन</title>
  <style>
    ${globalTemplateStyle}
  </style>
</head>

<body>
  <div class="container">

    <!-- Date -->
    <div class="date">
      मिति : ##C_DATE##
    </div>

    <!-- To Section -->
    <div class="to-section">
      <p>श्रीमान् वडा अध्यक्षज्यू,</p>
      <p>
        वडा नं. ##WARD_NUMBER## को कार्यालय<br />
        ##LOCAL_LEVEL##, ##DISTRICT##
      </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषय : सार्वजनिक बाटो कायम सिफारिस गरी पाऊँ ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Content -->
    <div class="content">
      <p>
        उपर्युक्त विषयमा म निवेदक
        ##DISTRICT## जिल्ला
        ##LOCAL_LEVEL##
        वडा नं. ##WARD_NUMBER##
        बस्ने
        श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
        समेतको नाममा
        मालपोत कार्यालय
        ##SURVEY_OFFICE##
        मा दर्ता श्रेस्ता कायम रहेको
        तपसिल बमोजिमको जग्गाबाट
        सार्वजनिक बाटो कायम गर्नुपर्ने
        आवश्यकता परेको हुँदा
        यो निवेदन पेश गरेको छु।
      </p>

      <p>
        उक्त जग्गाको
        ##LAND_DIRECTION##
        तर्फबाट
        ##LAND_WIDTH## फिट चौडाई र
        ##LAND_LENGTH## फिट लम्बाई
        नेपाल सरकारको नाममा
        कित्ता काट गरी
        सार्वजनिक बाटो कायम गर्न
        सम्बन्धित मालपोत कार्यालय
        ##SURVEY_OFFICE##
        मा सिफारिस गरिदिनुहुन
        आवश्यक कागजातहरू यसैसाथ
        संलग्न गरी निवेदन पेश गर्दछु।
      </p>

      <p>
        अतः नियमअनुसार
        सत्य तथ्य जाँचबुझ गरी
        सार्वजनिक बाटो कायम
        सिफारिस प्रदान गरिदिनुहुन
        विनम्र अनुरोध गर्दछु।
      </p>
    </div>

    <!-- Signature -->
    <div class="signature">
      <p>
        निवेदक<br />
        नाम : ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
        ठेगाना : ##LOCAL_LEVEL##–##WARD_NUMBER##<br />
      </p>

      <p>
        दस्तखत : ........................
      </p>
    </div>

  </div>
</body>
</html>
`;
