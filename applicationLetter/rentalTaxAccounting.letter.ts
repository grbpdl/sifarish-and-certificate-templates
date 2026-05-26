import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const rentalTaxAccountingApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>बहाल कर लेखाजोखा निवेदन</title>

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

      <!-- Address -->
      <div class="to-section">
        <p>श्रीमान वडाध्यक्षज्यू,</p>
        <p>
          वडा नं. ##WARD_NUMBER## को कार्यालय<br />
          ##LOCAL_LEVEL##
        </p>
      </div>

      <!-- Subject -->
      <div class="subject">
        विषय: बहाल कर लेखाजोखा गरिदिनुहुन।
      </div>

      <!-- Greeting -->
      <div class="greeting">
        महोदय,
      </div>

      <!-- Body -->
      <div class="content">
        <p>
          उपर्युक्त विषयमा म
          ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER##
          अन्तर्गत ##TOLE## मा बसोबास गर्ने
          श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
          हुँ।
        </p>

        <p>
          मेरो नाममा रहेको घर/सम्पत्ति
          श्री/श्रीमती ##TENANT_NAME##
          लाई बहालमा दिएको हुँदा
          ##FROM_DATE## देखि ##TO_DATE## सम्मको
          ##RENTAL_YEAR## वर्ष ##RENTAL_MONTH## महिनाको
          बहाल कर यस गाउँ/नगरपालिकाको
          नियम बमोजिम लेखाजोखा गरी
          कर चुक्ता गर्नुपर्ने भएकोले
          बहाल कर लेखाजोखा गरिदिनुहुन
          यो निवेदन पेश गरेको छु।
        </p>

        <p>
          अतः नियमानुसार बहाल कर
          लेखाजोखा गरी
          आवश्यक सिफारिस/प्रमाणपत्र
          प्रदान गरिदिनुहुन
          अनुरोध गर्दछु।
        </p>
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
