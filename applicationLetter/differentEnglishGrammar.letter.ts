import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const differentEngGrammarLetter = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>हिज्जे प्रमाणित सिफारिस निवेदन</title>

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
        <p>श्रीमान् वडा अध्यक्षज्यू,</p>
        <p>
          वडा नं. ##WARD_NUMBER##<br />
          ##LOCAL_LEVEL##
        </p>
      </div>

      <!-- Subject -->
      <div class="subject">
        विषय: हिज्जे प्रमाणित सिफारिस सम्बन्धमा ।
      </div>

      <!-- Greeting -->
      <div class="greeting">
        महोदय,
      </div>

      <!-- Body -->
      <div class="content">
        <p>
          उपर्युक्त सम्बन्धमा म निवेदक
          <strong>##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</strong>,
          ##DISTRICT## जिल्ला,
          ##LOCAL_LEVEL##,
          वडा नं. ##WARD_NUMBER##,
          ##TOLE## बस्ने
          ##FATHER_FIRST_NAME## ##FATHER_MIDDLE_NAME## ##FATHER_LAST_NAME## को
          ##REPLACEABLE_SON_DAUGHTER## हुँ।
        </p>

        <p>
          मेरो ##DIFFERENT_GRAMMER_DOCUMENT## कागजात/प्रमाणपत्रमा अङ्ग्रेजी हिज्जे
          <strong>##INCORRECT_ENGLISH_SPELLING##</strong>
          उल्लेख भएकोमा वास्तवमा सही अङ्ग्रेजी हिज्जे
          <strong>##CORRECT_ENGLISH_SPELLING##</strong>
          भएको व्यहोरा अवगत गराउन चाहन्छु।
        </p>

        <p>
          फरक परेको सो दुवै हिज्जे एउटै व्यक्तिको रहेको र
          सही हिज्जे
          <strong>##CORRECT_ENGLISH_SPELLING##</strong>
          भएको व्यहोरा
          सिफारिस प्रमाणित गरिदिनुहुन
          निवेदनसाथ अनुरोध गर्दछु।
        </p>
      </div>

      <!-- Signature -->
      <div class="signature">
        <p>
          निवेदक<br />
          नाम थर : ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
          ठेगाना : ##LOCAL_LEVEL##, वडा नं. ##WARD_NUMBER##<br />
          सम्पर्क नं. : ##PHONE_NUMBER##<br />
          दस्तखत : .................................
        </p>
      </div>

    </div>
  </body>
</html>
`;
