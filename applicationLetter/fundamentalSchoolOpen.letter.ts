import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const fundamentalSchoolOpenLetter = `<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>आधारभूत विद्यालय खोल्न सिफारिस - निवेदन</title>

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
      विषय: आधारभूत विद्यालय खोल्ने स्वीकृति सिफारिस गरी पाउँ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Body -->
    <div class="content">
      <p>
        उपर्युक्त विषयमा यस
        ##LOCAL_LEVEL##
        वडा नं. ##WARD_NUMBER##
        टोल ##TOLE##
        मा स्थानीय बालबालिकाहरूको शैक्षिक पहुँच अभिवृद्धि गर्ने उद्देश्यले
        आधारभूत विद्यालय सञ्चालन गर्नुपर्ने आवश्यकता परेको व्यहोरा
        निवेदन गर्दछु।
      </p>

      <p>
        उक्त स्थानमा आधारभूत विद्यालय सञ्चालन गर्न आवश्यक
        भौतिक पूर्वाधार, जनशक्ति तथा प्रचलित मापदण्ड
        पूरा गर्ने प्रतिबद्धता सहित सम्बन्धित निकायबाट
        स्वीकृति आवश्यक परेको हुँदा
        ##RECOMMENDING_OFFICE##
        कार्यालयलाई सिफारिस गरी दिनुहुन
        यो निवेदन पेश गरेको छु।
      </p>

      <p>
        अतः प्रचलित कानुन तथा कार्यविधि बमोजिम
        आवश्यक जाँचबुझ गरी
        आधारभूत विद्यालय खोल्न
        स्वीकृति प्रदान गर्न सम्बन्धित
        निकायमा सिफारिस गरिदिनुहुन
        विनम्र अनुरोध गर्दछु।
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
