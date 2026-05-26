import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const heirVerificationRecommendationLetter = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>हकदार प्रमाणित सिफारिस – निवेदन</title>

  <style>
    ${globalTemplateStyle}
    ${tableStyle}
  </style>
</head>
<body>

  <div class="container">

    <!-- Date -->
    <div class="date">
      मिति : ##C_DATE##
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
      विषय: हकदार प्रमाणित सिफारिस गरी पाऊँ ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Body -->
    <div class="content">
      <p>
        उपर्युक्त विषयमा म/हामी निवेदक
        ##DISTRICT## जिल्ला ##LOCAL_LEVEL##
        वडा नं. ##WARD_NUMBER## टोल ##TOLE##
        बस्ने ##REPLACEABLE_HIS_HER## ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
        हुँ।
        मेरो प्रिय
        ##DEAD_PERSON_FIRST_NAME## ##DEAD_PERSON_MIDDLE_NAME## ##DEAD_PERSON_LAST_NAME##  को
        मिति ##DATE_OF_REGISTERED## मा मृत्यु दर्ता भएको हुँदा
        निजको नाममा रहेको सम्पत्ति सम्बन्धी
        हकदार प्रमाणित सिफारिस आवश्यक परेकोले
        यस निवेदन सहित आवश्यक कागजात संलग्न गरी
        सत्य तथ्य जाँचबुझ गरी
        हकदार प्रमाणित सिफारिस गरिदिनुहुन
        निवेदन पेश गरेको छु।
      </p>

      <p>
        मृतक ##DEAD_PERSON_FIRST_NAME## ##DEAD_PERSON_MIDDLE_NAME## ##DEAD_PERSON_LAST_NAME## का
        देहाय बमोजिमका व्यक्तिहरू
        कानूनी हकदार भएको व्यहोरा
        प्रमाणित गरी सिफारिस गरिदिनुहुन
        अनुरोध गर्दछु ।
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
        <br />
        अतः नियमअनुसार आवश्यक छानबिन गरी
        हकदार प्रमाणित सिफारिस प्रदान गरिदिनुहुन
        विनम्र अनुरोध गर्दछु ।
      </p>
    </div>

    <!-- Signature -->
    <div class="signature">
      <p>
        निवेदक<br />
        नाम थर: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
        ठेगाना: वडा नं. ##WARD_NUMBER##, ##LOCAL_LEVEL##<br />
        सम्पर्क नं.: ##PHONE_NUMBER##
      </p>

      <p>
        दस्तखत: .........................
      </p>
    </div>

  </div>

</body>
</html>
`;
