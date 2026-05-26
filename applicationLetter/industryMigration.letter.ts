import globalTemplateStyle, {
  tableStyle,
} from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const changeInIndustryCapacityApplicationLetterTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>उद्योग क्षमतामा परिवर्तन सम्बन्धी निवेदन</title>
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
      <p>श्रीमान् ##DEPARTMENT_HEAD## ज्यू,</p>
      <p>
        ##DEPARTMENT_ADDRESS##<br />
        ##DEPARTMENT_DISTRICTT##, नेपाल
      </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषय : उद्योग क्षमतामा परिवर्तन गरिदिनुहुन ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Content -->
    <div class="content">
      <p>
        म निवेदक
        ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
        द्वारा सञ्चालित
        <strong>##INDUSTRY_NAME##</strong>
        नामक उद्योग
        ##INDUSTRY_PROVINCE## प्रदेश,
        ##INDUSTRY_DISTRICT## जिल्ला,
        ##INDUSTRY_LOCAL_LEVEL##
        वडा नं. ##INDUSTRY_WARD_NUMBER##
        मा दर्ता भई सञ्चालनमा रहेको व्यहोरा
        अवगत गराउन चाहन्छु।
      </p>

      <p>
        उक्त उद्योग
        उद्योग दर्ता नम्बर
        <strong>##REGISTRATION_NUMBER##</strong>
        अन्तर्गत दर्ता भई
        <strong>##INDUSTRY_OBJECTIVE##</strong>
        उद्देश्यअनुसार हालसम्म सञ्चालन हुँदै आएकोमा
        वर्तमान आवश्यकता, प्रविधिगत सुधार तथा
        व्यावसायिक कारणवश
        उद्योगको क्षमतामा परिवर्तन गर्नुपर्ने
        अवस्था सिर्जना भएको छ।
      </p>

      <p>
        तसर्थ,
        तल तपसिलमा उल्लेखित विवरणअनुसार
        उद्योग क्षमतामा परिवर्तन गर्न
        सम्बन्धित निकायमा पेश गर्नुपर्ने
        सिफारिस आवश्यक परेको हुँदा
        यो निवेदन पेश गरेको छु।
      </p>

      <p>
        आवश्यक कागजातहरू यसैसाथ संलग्न गरिएको व्यहोरा
        अनुरोध गर्दछु।
      </p>

      <br />
      <p><strong>तपसिल :</strong></p>

      <!-- Table -->
      <section class="table-container">
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
      </section>
    </div>

    <!-- Signature -->
    <div class="signature">
      <p>
        निवेदक<br /><br />
        हस्ताक्षर : ..............................<br />
        नाम : ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
        नागरिकता नं. : ##CITIZENSHIP_NUMBER##
      </p>
    </div>

  </div>
</body>
</html>
`;
