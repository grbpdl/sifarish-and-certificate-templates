import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const schoolClassAddApplicationLetter = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>विद्यालय कक्षा थप सिफारिस - निवेदन</title>

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
      विषयः विद्यालय कक्षा थप सिफारिस गरी पाउँ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Body -->
    <div class="content">
      <p>
        उपर्युक्त विषयमा
        ##LOCAL_LEVEL##
        वडा नं.
        ##WARD_NUMBER##
        को
        ##TOLE##
        मा अवस्थित
        <strong>श्री ##SCHOOL_COLLEGE_NAME## ##SCHOOL_COLLEGE_TYPE## विद्यालय</strong>
        मा हाल सञ्चालन भइरहेको कक्षाहरूमा
        विद्यार्थी संख्या वृद्धि तथा शैक्षिक आवश्यकता बढ्दै गएको हुँदा
        थप कक्षा सञ्चालन गर्नुपर्ने आवश्यकता परेको व्यहोरा
        निवेदन गर्दछु।
      </p>

      <p>
        विद्यालय व्यवस्थापन समितिको निर्णय अनुसार
        कक्षा
        <strong>##CLASS_COUNT##</strong>
        थप गर्न आवश्यक न्यूनतम भौतिक पूर्वाधार,
        शिक्षक दरबन्दी तथा अन्य शैक्षिक मापदण्ड
        पूरा भएको हुँदा
        नियमअनुसार स्वीकृति प्राप्त गर्न
        सम्बन्धित निकायमा
        सिफारिस आवश्यक परेकोले
        यो निवेदन पेश गरेको छु।
      </p>

      <p>
        अतः प्रचलित कानुन तथा कार्यविधि बमोजिम
        आवश्यक जाँचबुझ गरी
        विद्यालयमा कक्षा थप सञ्चालन गर्न
        स्वीकृति प्रदान गर्न
        सम्बन्धित निकायमा
        सिफारिस गरिदिनुहुन
        विनम्र अनुरोध गर्दछु।
      </p>
    </div>

    <!-- Applicant -->
    <div class="signature">
      <p>
        निवेदक<br />
        नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
        पद: विद्यालय व्यवस्थापन समिति<br />
        ठेगाना: ##LOCAL_LEVEL## - ##WARD_NUMBER##, ##TOLE##<br />
        सम्पर्क नं.: ##PHONE_NUMBER##<br />
        हस्ताक्षर: .........................
      </p>
    </div>

  </div>
</body>
</html>
`;