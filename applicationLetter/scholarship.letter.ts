import globalTemplateStyle, {
  tableStyle,
} from "../../templates/applicationLetterStyles/letterGlobalStyle";

const scholarshipRecommendationApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>छात्रवृत्ति सिफारिसको लागि निवेदन</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyle}
    </style>
  </head>

  <body>
    <div class="container">

      <div class="date">
        मिति: ##C_DATE##
      </div>

      <div class="to-section">
        <p>श्री वडा अध्यक्षज्यू,</p>
        <p>
          वडा नं. ##WARD_NUMBER## को कार्यालय<br />
          ##LOCAL_LEVEL##, ##DISTRICT## ।
        </p>
      </div>

      <div class="subject">
        विषयः छात्रवृत्ति सिफारिस गरी पाउँ ।
      </div>

      <div class="greeting">
        महोदय,
      </div>

      <div class="content">
        <p>
          उपर्युक्त विषयमा 
          <strong>##DISTRICT##</strong> जिल्ला 
          <strong>##LOCAL_LEVEL##</strong> 
          वडा नं. <strong>##WARD_NUMBER##</strong> बस्ने
          म <strong>##FATHER_FIRST_NAME## ##FATHER_MIDDLE_NAME## ##FATHER_LAST_NAME##</strong> को
          ##REPLACEABLE_SON_DAUGHTER##
          <strong>##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</strong>
          हाल <strong>##SCHOOL_COLLEGE_NAME##</strong> मा
          कक्षा <strong>##CLASS_COUNT##</strong> मा
          अध्ययनरत विद्यार्थी हु।
        </p>

        <p>
          यस वडा कार्यालयबाट यस वर्ष विभिन्न विषयमा
          छात्रवृत्ति वितरणका लागि सूचना जारी भएको हुँदा
          उक्त छात्रवृत्ति प्राप्त गर्न आवश्यक कागजातसहित
          छात्रवृत्ति सिफारिस उपलब्ध गराइदिनुहुन
          सादर अनुरोध गर्दै यो निवेदन पेश गरेको छु ।
        </p>
      </div>

      <div class="signature">
        <p>
          निवेदक<br />
          नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
          ठेगाना: ##LOCAL_LEVEL##–##WARD_NUMBER##, ##DISTRICT##<br />
          हस्ताक्षर: ........................
        </p>
      </div>

    </div>
  </body>
</html>
`;

export default scholarshipRecommendationApplicationTemplate;
