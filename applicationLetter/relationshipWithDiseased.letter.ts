import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const relationshipWithDeceasedApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>मृतकसँगको नाता प्रमाणित निवेदन</title>

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

      <!-- To -->
      <div class="to-section">
        <p>श्रीमान वडा अध्यक्षज्यू,</p>
        <p>
          वडा नं. ##WARD_NUMBER## को कार्यालय<br />
          ##LOCAL_LEVEL##
        </p>
      </div>

      <!-- Subject -->
      <div class="subject">
        विषय: मृतकसँगको नाता प्रमाणित सिफारिस गरिदिनुहुन।
      </div>

      <!-- Greeting -->
      <div class="greeting">
        महोदय,
      </div>

      <!-- Body -->
      <div class="content">
        <p>
          उपर्युक्त विषयमा म
          ##LOCAL_LEVEL##
          वडा नं. ##WARD_NUMBER##
          अन्तर्गत स्थायी बसोबास गर्ने
          श्री/श्रीमती
          <strong>##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</strong>
          हुँ।
        </p>

        <p>
          तपसिलमा उल्लेख गरिएका व्यक्तिहरूमध्ये
          <strong>##DEAD_LIST##</strong>
          नाताको व्यक्ति निधन भएको हुँदा
          मृत्युदर्ता प्रमाणपत्रसहित
          मृतकसँगको नाता प्रमाणित हुने
          सिफारिस आवश्यक परेकोले
          यो निवेदन पेश गरेको छु।
        </p>

        <p>
          अतः निवेदक, मृतक तथा अन्य सम्बन्धित व्यक्तिहरूबीचको
          नाता तपसिल बमोजिम रहेको व्यहोरा
          सत्य तथ्य जाँचबुझ गरी
          मृतकसँगको नाता प्रमाणित
          सिफारिस गरिदिनुहुन
          विनम्र अनुरोध गर्दछु।
        </p>

        <div style="text-align:center; margin-bottom:10px;">
          <strong>तपसिल</strong>
        </div>

        <table>
          <tbody>
            ##TABLE_BODY##
          </tbody>
        </table>
      </div>

      <!-- Applicant -->
      <div class="signature">
        <p>
          निवेदक<br />
          नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
          ठेगाना: ##LOCAL_LEVEL##, वडा नं. ##WARD_NUMBER##<br />
          सम्पर्क नं.: ##PHONE_NUMBER##<br />
          हस्ताक्षर: .........................
        </p>
      </div>

    </div>
  </body>
</html>
`;
