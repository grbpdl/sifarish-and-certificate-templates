import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const tapConnectionApplicationLetter = `<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>धारा जडान सिफारिसका लागि निवेदन</title>

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
        ##WARD_NUMBER## नं. वडाको कार्यालय<br />
        ##LOCAL_LEVEL##
      </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषय: धारा जडानका लागि सिफारिस गरी पाउँ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Body Content -->
    <div class="content">
      <p>
        उपर्युक्त विषयमा म निवेदक
        <strong>##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</strong>,
        ##DISTRICT## जिल्ला,
        ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER##,
        टोल ##TOLE##
        निवासी हुँ।
      </p>

      <p>
        मेरो नाममा दर्ता कायम रहेको कि. नं.
        <strong>##KITTA_NUMBER##</strong>
        को जग्गामा मिति
        <strong>##HOUSE_COMPLETION_DAT##</strong>
        मा आंशिक/पूर्ण रूपमा भवन निर्माण भई
        स्वीकृति समेत प्राप्त भइसकेको व्यहोरा
        जानकारी गराउन चाहन्छु।
      </p>

      <p>
        उक्त घरमा दैनिक खानेपानी प्रयोजनका लागि
        धारा जडान गर्नु अत्यावश्यक भएको हुँदा
        सम्बन्धित कार्यालय
        <strong>##DRINKING_WATER_COMPANY_NAME##</strong>
        मा आवश्यक कारवाहीका लागि
        धारा जडान सिफारिस गरी दिनुहुन
        यो निवेदन पेश गरेको छु।
      </p>

      <p>
        अतः स्थलगत जाँचबुझ गरी
        प्रचलित नियम कानुन बमोजिम
        धारा जडान गर्न
        सम्बन्धित निकायमा
        आवश्यक सिफारिस गरिदिनुहुन
        सादर अनुरोध गर्दछु।
      </p>
    </div>

    <!-- Signature -->
    <div class="signature">
      <p>
        निवेदक<br />
        नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
        ठेगाना: ##LOCAL_LEVEL##, वडा नं. ##WARD_NUMBER##<br />
        सम्पर्क नं.: ##PHONE_NUMBER##<br />
        हस्ताक्षर: .............................
      </p>
    </div>

  </div>
</body>
</html>
`;
