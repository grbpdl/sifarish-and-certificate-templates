import globalTemplateStyle, {
  tableStyle,
} from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const businessRegistrationDetailRequestApplicationLetter = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>व्यवसाय दर्ता विवरण सम्बन्धी सिफारिस – निवेदन</title>

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

    <!-- To -->
    <div class="to-section">
      <p>श्रीमान वडा अध्यक्षज्यू,</p>
      <p>
        ##MUNICIPALITY_NAME##
      </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषय : व्यवसाय दर्ता विवरण उपलब्ध गराइदिने सिफारिस सम्बन्धमा ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Body -->
    <div class="content">
      <p>
        उपर्युक्त विषयमा
        ##MUNICIPALITY_NAME##
        अन्तर्गत हालसम्म दर्ता भएका
        उद्योग तथा व्यवसायहरूको
        विवरण आवश्यक परेको हुँदा
        तपशिलमा उल्लेखित ढाँचाअनुसार
        व्यवसाय दर्ता विवरण संकलन गरी
        सम्बन्धित निकायमा पेश गर्नुपर्ने
        सिफारिस आवश्यक भएकोले
        यो निवेदन पेश गरेको छु ।
      </p>

      <p>
        तसर्थ,
        तपशिल अनुसारको विवरण
        सत्य तथ्य जाँचबुझ गरी
        <strong>##SOFTCOPY##</strong>
        सहित
        कार्यालयको इमेल
        <strong>##COMPANY_MAIL##</strong>
        मा पठाइदिनका लागि
        आवश्यक सिफारिस
        प्रदान गरिदिनुहुन
        विनम्र अनुरोध गर्दछु ।
      </p>

      <!-- Table -->
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
        साथै,
        आवश्यक कागजातहरू
        यसैसाथ संलग्न गरिएको व्यहोरा
        अनुरोध गर्दछु ।
      </p>
    </div>

    <!-- Signature -->
    <div class="signature">
      <p>
        निवेदक<br />
        नाम : ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
        नागरिकता नं. : ##CITIZENSHIP_NUMBER##<br />
        सही : ..............................
      </p>
    </div>

  </div>
</body>
</html>
`;
