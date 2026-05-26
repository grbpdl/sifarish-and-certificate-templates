import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const relationshipVerificationApplicationLetterNepali = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>नाता प्रमाणित आवेदन</title>
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

      <!-- Greeting -->
      <div class="to-section">
        <p>श्रीमान वडाध्यक्षज्यू,</p>
        <p>
          वडा नं. ##WARD_NUMBER## को कार्यालय<br />
          ##LOCAL_LEVEL##
        </p>
      </div>

      <!-- Subject -->
      <div class="subject">
        विषय : नेपाली नाता प्रमाणित।
      </div>

      <!-- Greeting -->
      <div class="greeting">
        महोदय,
      </div>

      <!-- Paragraph / Content -->
      <div class="content">
        <p>
          ##LOCAL_LEVEL## वडा नं ##WARD_NUMBER## अन्तर्गत ##TOLE## मा स्थायी बसोबास गरेका श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## ले तपसिलमा उल्लिखित व्यक्तिहरूबीच ##PURPOSE## प्रयोजनका लागि नाता प्रमाणित गरिदिनु हुन यस वडा कार्यालयमा दिनुभएको निवेदन अनुसार, निजहरूबीच देहाय बमोजिम नाता रहेको व्यहोरा स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा १२ (२) ङ (१) बमोजिम प्रमाणित गरिन्छ।
        </p>

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
      </div>

      <!-- Authority Signature -->
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