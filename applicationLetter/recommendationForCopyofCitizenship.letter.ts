import globalTemplateStyle, {
  tableStyle,
} from "../../templates/applicationLetterStyles/letterGlobalStyle";

const recommendationForCopyOfCitizenshipCertificateApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>नागरिकता प्रमाणपत्रको प्रतिलिपि लिनको लागि निवेदन</title>

    <style>
      ${globalTemplateStyle}
      ${tableStyle}

      .details-section {
        margin-top: 20px;
        display: flex;
        gap: 20px;
      }

      .details {
        flex: 1;
      }

      .details p {
        margin: 6px 0;
      }

      .photo-box {
        width: 120px;
        height: 140px;
        border: 1px solid #000;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        text-align: center;
      }
    </style>
  </head>

  <body>
    <div class="container">

      <div class="date">
        मिति: ##C_DATE##
      </div>

      <div class="to-section">
        <p>श्री वडा अध्यक्षज्यू,</p>
        <p>
          वडा नं. ##WARD_NUMBER## को कार्यालय<br />
          ##LOCAL_LEVEL##, ##DISTRICT## ।
        </p>
      </div>

      <div class="subject">
        विषयः नागरिकता प्रमाणपत्रको प्रतिलिपि लिनको लागि सिफारिस गरी पाउँ ।
      </div>

      <div class="greeting">
        महोदय,
      </div>

      <div class="content">
        <p>
          उपर्युक्त विषयमा म निवेदक
          <strong>##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</strong>
          स्थायी ठेगाना
          <strong>##LOCAL_LEVEL##</strong> वडा नं.
          <strong>##WARD_NUMBER##</strong>,
          टोल <strong>##TOLE##</strong>,
          जिल्ला <strong>##DISTRICT##</strong>
          बस्ने नागरिक हुँ ।
        </p>

        <p>
          मेरो नाममा
          जिल्ला <strong>##CITIZENSHIP_ISSUED_DISTRICTT##</strong> बाट
          मिति <strong>##CITIZENSHIP_ISSUED_DATE##</strong> मा
          जारी भएको नेपाली नागरिकता प्रमाणपत्र
          नं. <strong>##CITIZENSHIP_NUMBER##</strong>
          हराएको / क्षति भएको / आवश्यक परेको हुँदा
          सोको प्रतिलिपि प्राप्त गर्न
          सिफारिस आवश्यक परेकोले
          आवश्यक कागजात संलग्न गरी
          यो निवेदन पेश गरेको छु ।
        </p>
      </div>

      <!-- विवरण + फोटो -->
      <div class="details-section">
        <div class="details">
          <p><strong>विवरण</strong></p>
          <p>१. नाम, थर: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</p>
          <p>२. स्थायी ठेगाना: ##LOCAL_LEVEL##–##WARD_NUMBER##, ##DISTRICT##</p>
          <p>३. नागरिकता नं.: ##CITIZENSHIP_NUMBER##</p>
          <p>४. जारी मिति र जिल्ला: ##CITIZENSHIP_ISSUED_DATE##, ##CITIZENSHIP_ISSUED_DISTRICTT##</p>
          <p>५. बाबुको नाम, थर: ##FATHER_NAME##</p>
          <p>६. आमाको नाम, थर: ##MOTHER_NAME##</p>
        </div>

        <div class="photo-box">
          निवेदकको<br />फोटो
        </div>
      </div>

      <div class="signature">
        <p>
          निवेदक<br />
          नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
          ठेगाना: ##LOCAL_LEVEL##–##WARD_NUMBER##, ##DISTRICT##<br />
          हस्ताक्षर: ........................<br />
          सम्पर्क नं.: ##CONTACT_NUMBER##
        </p>
      </div>

    </div>
  </body>
</html>
`;

export default recommendationForCopyOfCitizenshipCertificateApplicationTemplate;
