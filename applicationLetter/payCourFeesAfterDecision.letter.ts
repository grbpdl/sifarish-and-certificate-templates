import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const payCourtFeesAfterDecisionApplication = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>कोर्ट-फि पछि तिर्न पाउने सिफारिस निवेदन</title>

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
          वडा नं. ##WARD_NUMBER##<br />
          ##LOCAL_LEVEL##
        </p>
      </div>

      <!-- Subject -->
      <div class="subject">
        विषय: मुद्दा फैसला भएपछि मात्र कोर्ट-फि तिर्न पाउने सिफारिस सम्बन्धमा ।
      </div>

      <!-- Greeting -->
      <div class="greeting">
        महोदय,
      </div>

      <!-- Body -->
      <div class="content">
        <p>
          उपरोक्त सम्बन्धमा म निवेदक
          ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##,
          वडा नं. ##WARD_NUMBER## को
          निवासी हुँ।
        </p>

        <p>
          मेरो
          ##RELATION##
          ##SPOUSE_FIRST_NAME## ##SPOUSE_MIDDLE_NAME## ##SPOUSE_LAST_NAME##
          सँग सम्बन्धित मुद्दा
          ##COURT_NAME##
          मा दर्ता भई
          मुद्दा नं./नाम <b>##CASE_NAME##</b>
          हाल विचाराधीन अवस्थामा रहेको व्यहोरा अवगत गराउन चाहन्छु।
        </p>

        <p>
          हाल मेरो कुनै स्थायी आयश्रोत नभएको तथा आर्थिक अवस्था अत्यन्त कमजोर रहेको कारण
          तत्काल अदालतमा बुझाउनुपर्ने
          <b>कोर्ट-फि</b>
          राख्न असमर्थ भएको हुँदा,
          उक्त कोर्ट-फि
          <b>मुद्दा फैसला भएपछि मात्र बुझाउने</b>
          व्यवस्था मिलाइदिनका लागि
          आवश्यक सिफारिस गरिपाउँ भनी
          यो निवेदन पेश गरेको छु।
        </p>

        <p>
          अतः मिति
          <b>##CASE_DATE##</b>
          मा यस विषयमा गरिएको सर्जमिन अनुसार
          व्यहोरा मनासिब देखिएको हुँदा
          प्रचलित कानून बमोजिम
          अदालतमा आवश्यक कारवाहीका लागि
          सिफारिस गरिदिनुहुन
          सादर अनुरोध गर्दछु।
        </p>
      </div>

      <!-- Signature -->
      <div class="signature">
        <p>
          निवेदक<br />
          नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
          हस्ताक्षर: ..................................<br />
        </p>
      </div>
    </div>
  </body>
</html>
`;
