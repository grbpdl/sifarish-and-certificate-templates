import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const strongEconomicStatusVerificationLetter = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>आर्थिक अवस्था बलियो वा सम्पन्नता प्रमाणित आवेदन</title>
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
        <p>श्रीमान् वडाध्यक्षज्यू,</p>
        <p>
          वडा नं. ##WARD_NUMBER## को कार्यालय<br />
          ##LOCAL_LEVEL##
        </p>
      </div>

      <!-- Subject -->
      <div class="subject">
        विषय: आर्थिक अवस्था बलियो वा सम्पन्नता प्रमाणित गर्ने सम्बन्धमा।
      </div>

      <!-- Greeting -->
      <div class="greeting">
        महोदय,
      </div>

      <!-- Body -->
      <div class="content">
        <p>
          म, श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##, ##LOCAL_LEVEL## वडा नं ##WARD_NUMBER## मा स्थायी ठेगाना भएका, वर्ष ##APPLICANT_AGE##, आफ्नो आर्थिक अवस्था बलियो/सम्पन्न भएको प्रमाणित गरिदिन निवेदन गर्दछु।
        </p>

        <p>
          मैले आफ्नो नाममा दर्ता भएको कर, घर जग्गाको विवरण र अन्य आयका आधार पेश गरी यस प्रमाणितको लागि आवश्यक कागजातहरु उपलब्ध गराएको छु। तपाईंको कार्यालयबाट आवश्यक प्रक्रिया पूरा गरी मेरो आर्थिक अवस्था बलियो/सम्पन्न भएको प्रमाणित गरिदिनु हुन हार्दिक अनुरोध गर्दछु।
        </p>
      </div>

      <!-- Signature -->
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