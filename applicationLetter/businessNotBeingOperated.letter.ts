import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const businessNotRegisteredApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>व्यापार व्यवसाय संचालन नभएको निवेदन</title>

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
        <p>श्रीमान् वडाध्यक्षज्यू,</p>
        <p>
          वडा नं. ##BUSINESS_WARD_NUMBER## को कार्यालय<br />
          ##BUSINESS_LOCAL_LEVEL##
        </p>
      </div>

      <!-- Subject -->
      <div class="subject">
        विषय: व्यापार व्यवसाय संचालन नभएको सिफारिस गरिदिनुहुन।
      </div>

      <!-- Greeting -->
      <div class="greeting">
        महोदय,
      </div>

      <!-- Body -->
      <div class="content">
        <p>
          उपर्युक्त विषयमा म
          ##BUSINESS_LOCAL_LEVEL##
          वडा नं. ##BUSINESS_WARD_NUMBER##
          अन्तर्गत ##BUSINESS_TOLE## मा
          अवस्थित
          <strong>##BUSINESS_NAME##</strong>
          नामक व्यापार व्यवसाय
          मेरो/हाम्रो नाममा दर्ता रहेको थियो।
        </p>

        <p>
          उक्त व्यापार व्यवसाय
          ##BUSINESS_NOT_REGISTERED_REASON##
          कारणले गर्दा
          मिति ##BUSINESS_CLOSED_DATE##
          देखि हालसम्म संचालनमा नरहेको हुँदा
          सोही व्यहोरा प्रमाणित हुने
          सिफारिस आवश्यक परेकोले
          यो निवेदन पेश गरेको छु।
        </p>

        <p>
          अतः स्थलगत सर्जमिन तथा
          आवश्यक छानबिन गरी
          व्यापार व्यवसाय संचालन नभएको
          व्यहोरा उल्लेख गरी
          सिफारिस प्रदान गरिदिनुहुन
          विनम्र अनुरोध गर्दछु।
        </p>
      </div>

      <!-- Applicant -->
      <div class="signature">
        <p>
          निवेदक<br />
          नाम: ##PROPRIETOR_NAME##<br />
          व्यापारको नाम: ##BUSINESS_NAME##<br />
          ठेगाना: ##BUSINESS_LOCAL_LEVEL##, वडा नं. ##BUSINESS_WARD_NUMBER##<br />
          सम्पर्क नं.: ##PHONE_NUMBER##<br />
          हस्ताक्षर: .........................
        </p>
      </div>

    </div>
  </body>
</html>
`;