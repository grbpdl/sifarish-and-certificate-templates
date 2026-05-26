import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const propertyValuationEnglishLetter = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>सम्पत्ति मूल्यांकन आवेदन</title>
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
        विषय: अंग्रेजी संपत्ति मूल्यांकन गर्न पाऊँ
      </div>

      <!-- Greeting -->
      <div class="greeting">
        महोदय,
      </div>

      <!-- Paragraph / Content -->
      <div class="content">
        <p>
          यसद्वारा प्रमाणित गरिन्छ कि श्री/श्रीमती/कुमारी ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##, 
          ##LOCAL_LEVEL## वडा नं ##WARD_NUMBER##, ##PROVINCE## प्रदेश, नेपालका स्थायी बासिन्दा हुन्। 
          निजले आफ्नो सम्पत्ति मूल्यांकन/प्रमाणपत्रको लागि निवेदन पेश गर्नुभएको अनुसार, 
          यस ##LOCAL_LEVEL## भित्र रहेको सम्पत्तिको कुल मूल्यांकन निम्नानुसार गरिएको छ। 
          वडा कार्यालयले गरिसकेको सर्वेक्षण र सत्यापन अनुसार सम्पत्तिको हालको बजार मूल्य यस प्रकार छ:
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

        <p>
          सम्पत्तिको कुल मूल्य (नेपाली रुपैयाँमा): <b>##TOTAL_VALUATION##</b><br />
          आजको विनिमय दर (USD): १ = नेपाली रुपैयाँ <b>##EXCHANGE_RATE##</b> <span>(स्रोत: नेपाल राष्ट्र बैंक)</span><br />
          अमेरिकी डलरमा समकक्ष मूल्य (USD): <b>##TOTAL_VALUATION_IN_USD##</b>
        </p>
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