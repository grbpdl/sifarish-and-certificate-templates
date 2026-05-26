import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

export const changeInIndustryCapacityRecommendationTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>उद्योग क्षमतामा परिवर्तन सिफारिस</title>
  <style>
    ${globalTemplateStyle}
    ${tableStyles}
  </style>
</head>

<body>
  <section id="template">
    <section class="application_section">

      <!-- Header -->
      ${header}

      <div class="main_section">

        <div class="greet">
          <p>श्री ##DEPARTMENT_HEAD## ज्यू,</p>
          <p>##DEPARTMENT_ADDRESS##</p>
        </div>

        <div class="subject">
          <b>विषय : <u>उद्योग क्षमतामा परिवर्तन सम्बन्धी सिफारिस।</u></b>
        </div>

        <p class="paragraph">
          ##INDUSTRY_PROVINCE##,
          ##INDUSTRY_DISTRICT## जिल्ला,
          ##INDUSTRY_LOCAL_LEVEL##
          वडा नं. ##INDUSTRY_WARD_NUMBER##
          मा सञ्चालनमा रहेको
          <strong>##NAME_OF_INDUSTRY##</strong>
          नामक उद्योग
          दर्ता नम्बर
          <strong>##REGISTRATION_NUMBER##</strong>
          अन्तर्गत दर्ता भई सञ्चालनमा रहेको देखिन्छ।
        </p>

        <p class="paragraph">
          उक्त उद्योगका सञ्चालक
          श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
          ले उद्योगको क्षमतामा
          तपसिलमा उल्लेखित विवरणअनुसार
          परिवर्तन गर्न निवेदन पेश गर्नुभएको हुँदा
          सो सम्बन्धमा स्थलगत अनुगमन तथा
          आवश्यक जाँचबुझ गर्दा
          निवेदनमा उल्लेखित व्यहोरा
          मनासिब देखिएकोले
          नियमानुसार उद्योग क्षमतामा परिवर्तन गर्न
          सिफारिस गरिन्छ।
        </p>

        <p class="tapsil-title">तपसिल</p>

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

        <br /><br />

        <div style="text-align:right">
          ..............................<br />
          ##AUTHORITY_NAME##<br />
          ##AUTHORITY_DESIGNATION##
        </div>

      </div>
    </section>
  </section>
</body>
</html>
`;
