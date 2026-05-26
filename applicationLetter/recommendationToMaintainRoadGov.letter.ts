import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const recommendataionToMaintainRoadInTheNameOfGovernmentTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>सरकारको नाममा बाटो कायम गर्न सिफारिस निवेदन</title>

    <style>
      ${globalTemplateStyle}
      ${tableStyle}
    </style>
  </head>

  <body>
    <div class="container">
      <!-- Date -->
      <div class="date">
        मिति : ##APPLICATION_DATE##
      </div>

      <!-- To -->
      <div class="to-section">
        <p>श्री वडा अध्यक्षज्यू,</p>
        <p>
          वडा नं. ##WARD_NUMBER##<br>
          ##LOCAL_LEVEL##
        </p>
      </div>

      <!-- Subject -->
      <div class="subject">
        विषयः सरकारको नाममा बाटो कायम गर्न सिफारिस सम्बन्धमा ।
      </div>

      <!-- Greeting -->
      <div class="greeting">
        महोदय,
      </div>

      <!-- Body -->
      <div class="content">
        <p>
          म निवेदक ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##,
          ##DISTRICT## जिल्ला,
          ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER##
          मा अवस्थित मेरो नाममा दर्ता श्रेष्ता कायम रहेको कि.नं. ##KITTA_NUMBER##
          को जग्गा रहेको व्यहोरा अवगत गराउँदछु ।
        </p>

        <p>
          उक्त जग्गामध्ये ##LAND_DIRECTION## तर्फबाट
          ##LAND_WIDTH## चौडाई र ##LAND_LENGTH## फिट लम्बाईको
          जग्गा नेपाल सरकारको नाममा कित्ताकाट गरी
          बाटो कायम गर्नुपर्ने आवश्यक परेको हुँदा
          सो कार्यका लागि सम्बन्धित निकायमा
          सिफारिस आवश्यक भएकोले
          यो निवेदन पेश गरेको छु ।
        </p>

        <p>
          अतः मेरो नाममा दर्ता श्रेष्ता रहेको
          माथि उल्लेखित जग्गाबाट
          नेपाल सरकारको नाममा
          बाटो कायम गर्न आवश्यक
          सिफारिस गरिदिनुहुन
          सादर अनुरोध गर्दछु ।
        </p>
      </div>

      <!-- Signature -->
      <div class="signature">
        <p>
          निवेदक<br />
          नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
          हस्ताक्षर: ..............................<br />
        </p>
      </div>
    </div>
  </body>
</html>
`;