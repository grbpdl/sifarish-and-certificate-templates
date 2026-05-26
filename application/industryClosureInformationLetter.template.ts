import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

export const industryClosureInformationRecommendationTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>उद्योग बन्द भएको जानकारी सम्बन्धी सिफारिस</title>
  <style>
    ${globalTemplateStyle}
    ${tableStyles}
  </style>
</head>

<body>
  <section id="template">
    <section class="application_section">

      <!-- Municipality Header -->
      ${header}

      <!-- Main Content -->
      <div class="main_section">

        <!-- To -->
        <div class="greet">
          <p>श्री ##DEPARTMENT_HEAD## ज्यू,</p>
          <p>##DEPARTMENT_ADDRESS##</p>
        </div>

        <!-- Subject -->
        <div class="subject">
          <b>विषय : <u>उद्योग बन्द भएको जानकारी सम्बन्धी सिफारिस।</u></b>
        </div>

        <!-- Paragraph 1 -->
        <p class="paragraph">
          ##INDUSTRY_PROVINCE## प्रदेश,
          ##INDUSTRY_DISTRICT## जिल्ला,
          ##INDUSTRY_LOCAL_LEVEL##
          वडा नं. ##INDUSTRY_WARD_NUMBER##
          अन्तर्गत
          <strong>##INDUSTRY_TOLE##</strong>
          मा सञ्चालनमा रहेको
          <strong>##INDUSTRY_NAME##</strong>
          नामक
          <strong>##INDUSTRY_TYPE##</strong>
          उद्योग
          दर्ता नम्बर
          <strong>##REGISTRATION_NUMBER##</strong>
          तथा PAN नं.
          <strong>##PAN_NUMBER##</strong>
          अन्तर्गत दर्ता भई सञ्चालनमा रहेको देखिन्छ।
        </p>

        <!-- Paragraph 2 -->
        <p class="paragraph">
          उक्त उद्योगका सञ्चालक
          श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
          ले
          मिति <strong>##END_DATE##</strong>
          देखि
          <strong>##REASONS_FOR_CLOSING_THE_INDUSTRY##</strong>
          कारणले उद्योग पूर्ण रूपमा बन्द गरिएको
          व्यहोरा सहित
          यस कार्यालयमा निवेदन पेश गर्नुभएको हो।
        </p>

        <!-- Paragraph 3 -->
        <p class="paragraph">
          सो सम्बन्धमा
          निवेदन तथा संलग्न कागजातहरूको
          अध्ययन गर्दा
          निवेदनमा उल्लेखित व्यहोरा
          सत्य तथा मनासिब देखिएको हुँदा
          स्थानीय सरकार सञ्चालन ऐन, २०७४
          बमोजिम
          उक्त उद्योग बन्द भएको जानकारी
          सम्बन्धित निकायमा
          अभिलेखीकरण गर्न
          सिफारिस गरिन्छ।
        </p>

        <!-- Signature -->
        <div style="margin-top: 3rem; text-align: right">
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
