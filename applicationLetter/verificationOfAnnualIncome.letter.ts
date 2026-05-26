import globalTemplateStyle, {
  tableStyle,
} from "../../templates/applicationLetterStyles/letterGlobalStyle";

const taxClearanceCertificateApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>कर चुक्ता प्रमाण पत्र सिफारिसका लागि निवेदन</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyle}
    </style>
  </head>

  <body>
    <div class="container">

      <!-- Date -->
      <div class="date">
        मिति: ##APPLICATION_DATE##
      </div>

      <!-- To Section -->
      <div class="to-section">
        <p>श्री वडा अध्यक्षज्यू,</p>
        <p>
          वडा नं. ##WARD_NUMBER## को कार्यालय<br />
          ##LOCAL_LEVEL##, ##DISTRICT## ।
        </p>
      </div>

      <!-- Subject -->
      <div class="subject">
        विषयः कर चुक्ता प्रमाण पत्र सिफारिस सम्बन्धमा ।
      </div>

      <!-- Greeting -->
      <div class="greeting">
        महोदय,
      </div>

      <!-- Content -->
      <div class="content">
        <p>
          उपर्युक्त विषयमा
          ##PROVINCE##,
          ##DISTRICT## जिल्ला
          ##LOCAL_LEVEL##
          वडा नं. ##WARD_NUMBER##
          निवासी म निवेदक
          <strong>
            ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
          </strong>
          को
          ##FISCAL_YEAR##
          आ.व. को वार्षिक आय सम्बन्धी विवरण
          प्रमाणीकरण गर्नुपर्ने भएकोले
          यो निवेदन पेश गरेको छु ।
        </p>

        <p>
          मेरो नागरिकता नं.
          <strong>##CITIZENSHIP_NUMBER##</strong>
          मिति
          <strong>##CITIZENSHIP_ISSUED_DATE##</strong>
          मा
          <strong>##CITIZENSHIP_ISSUED_DISTRICTT##</strong>
          जिल्ला प्रशासन कार्यालयबाट जारी भएको हो ।
        </p>

        <p>
          मेरो वार्षिक आयको कुल मूल्याङ्कन
          NRP
          <strong>##TOTAL_VALUATION##</strong>
          तथा USD
          <strong>##TOTAL_VALUATION_IN_USD##</strong>
          रहेको व्यहोरा प्रमाणित गरी
          <strong>##OFFICE_NAME##</strong>
          मा पेश गर्न
          कर चुक्ता प्रमाण पत्र
          सिफारिस गरिदिनुहुन
          सादर अनुरोध गर्दछु ।
        </p>

        <p style="text-decoration: underline; font-weight: bold;">
          विवरण
        </p>

        <!-- Table -->
        <section class="table-container">
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
      </div>

      <!-- Signature -->
      <div class="signature">
        <p>
          निवेदक<br />
          नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
          ठेगाना: ##LOCAL_LEVEL##–##WARD_NUMBER##, ##DISTRICT##<br />
          दस्तखत: ........................
        </p>
      </div>

    </div>
  </body>
</html>
`;

export default taxClearanceCertificateApplicationTemplate;
