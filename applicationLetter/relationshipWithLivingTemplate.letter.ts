import globalTemplateStyle, {
  tableStyle,
} from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const relationshipWithLivingApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>जीवितसँगको नाता प्रमाणित निवेदन</title>
  <style>
    ${globalTemplateStyle}
    ${tableStyle}
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
      <p>श्रीमान् वडा अध्यक्षज्यू,</p>
      <p>
        वडा नं. ##WARD_NUMBER## को कार्यालय<br />
        ##LOCAL_LEVEL##, ##DISTRICT##
      </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषय : जीवितसँगको नाता प्रमाणित गरिदिनुहुन ।
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
        अन्तर्गत
        ##TOLE##
        मा स्थायी बसोबास गर्ने
        ##REPLACEABLE_HIS_HER## ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
        यस कार्यालयमा उपस्थित भई
        तपसिलमा उल्लेखित व्यक्तिहरूबीच
        ##PURPOSE##
        प्रयोजनका लागि
        जीवितसँगको नाता प्रमाणित
        आवश्यक परेको हुँदा
        यो निवेदन पेश गरेको छु।
      </p>

      <p>
        देहाय बमोजिमका व्यक्तिहरूबीच
        रहेको नाता सम्बन्ध
        सत्य तथ्य जाँचबुझ गरी
        प्रमाणित गरिदिनुहुन
        आवश्यक कागजातहरू
        यसैसाथ संलग्न गरी
        विनम्र अनुरोध गर्दछु।
      </p>

      <!-- Table Section -->
      <section class="table-container">
        <div style="text-align:center; text-decoration:underline;">
          तपशिल
        </div>
        <table>
          <thead>
            <tr>
              ##TABLE_HEADINGS##
            </tr>
          </thead>
          <tbody>
            ##TABLE_BODY##
          </tbody>
        </table>
      </section>

      <p>
        अतः नियमअनुसार
        आवश्यक छानबिन गरी
        जीवितसँगको नाता प्रमाणित
        गरिदिनुहुन
        हार्दिक अनुरोध गर्दछु।
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
