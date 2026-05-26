import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const differentNameCasteNibedan = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>व्यक्ति प्रमाणित सिफारिस निवेदन</title>

    <style>
      ${globalTemplateStyle}
      ${tableStyle}
    </style>
  </head>

  <body>
    <div class="container">
      <div class="date">
        मिति: ##APPLICATION_DATE##
      </div>
      <!-- To -->
      <div class="to-section">
        <p>श्रीमान् वडाध्यक्षज्यू,</p>
        <p>
          वडा नं. ##WARD_NUMBER##<br />
          ##LOCAL_LEVEL##
        </p>
      </div>

      <!-- Subject -->
      <div class="subject">
        विषय: व्यक्ति प्रमाणित सिफारिस सम्बन्धमा ।
      </div>
     <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>
      <!-- Body -->
      <div class="content">
        <p>
          उपरोक्त सम्बन्धमा म निवेदक
          <strong>##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</strong>,
          ##DISTRICT## जिल्ला,
          ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER##,
          ##TOLE## निवासी हुँ।
        </p>

        <p>
          मेरो नागरिकता/जन्मदर्ता प्रमाणपत्रमा
          <strong>##FIRST_NAME_TO_BE## ##MIDDLE_NAME_TO_BE## ##LAST_NAME_TO_BE##</strong>
          नाम उल्लेख भएको छ भने अन्य कागजात/प्रमाणपत्रमा
          <strong>##FIRST_NAME_DIFFERENT## ##MIDDLE_NAME_DIFFERENT## ##LAST_NAME_DIFFERENT##</strong>
          नाम उल्लेख भएको कारण नाम फरक देखिएको छ।
        </p>

        <p>
          उक्त दुवै नाम उल्लेख भएको व्यक्ति म स्वयं एउटै व्यक्ति हुँ
          भन्ने व्यहोरा सत्य हो।
          नाम फरक पर्न गएको कारणले कुनै प्रकारको गलत उद्देश्य नभएको
          स्पष्ट पार्दै आवश्यक प्रमाण कागजातहरू यसै निवेदनसाथ संलग्न
          गरी पेश गरेको छु।
        </p>

        <p>
          अतः प्रस्तुत विवरण सत्य तथा मनासिब देखिएको हुँदा
          प्रचलित कानून बमोजिम
          <strong>दुवै नाम भएको व्यक्ति एउटै हो</strong>
          भन्ने व्यहोराको
          सिफारिस प्रमाणित गरी
          दिनुहुन सादर अनुरोध गर्दछु।
        </p>
      </div>

      <!-- Signature -->
      <div class="signature">
        <p>
          निवेदक<br />
          नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
          सही: .........................<br />
          ठेगाना: ##LOCAL_LEVEL##, वडा नं. ##WARD_NUMBER##<br />
          सम्पर्क नं.: ##PHONE_NUMBER##
        </p>
      </div>

    </div>
  </body>
</html>
`;
