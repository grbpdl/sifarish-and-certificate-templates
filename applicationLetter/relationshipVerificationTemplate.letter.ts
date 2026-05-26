import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const relationshipVerificationEnglishLetter = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>नाता सम्बन्ध प्रमाणित आवेदन</title>
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
        विषय: अंग्रेजीमा नाता सम्बन्ध प्रमाणित प्रमाणपत्र पाउँ
      </div>

      <!-- Greeting -->
      <div class="greeting">
        महोदय,
      </div>

      <!-- Paragraph / Content -->
      <div class="content">
        <p>
          यसद्वारा प्रमाणित गरिन्छ कि ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##, 
          ##LOCAL_LEVEL## वडा नं ##WARD_NUMBER## का स्थायी बासिन्दा, नेपालका नागरिक हुन्। 
          यस कार्यालयमा पेश गरिएको दरखास्त अनुसार तल उल्लेखित व्यक्तिहरू आवेदकसँग नाता सम्बन्ध भएका छन् 
          स्थानीय सरकार सञ्चालन ऐन, २०७४ अनुसार।
        </p>

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