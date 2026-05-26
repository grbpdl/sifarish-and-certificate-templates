import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

const industryMigrationRecommendationTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>उद्योग ठाउँसारी सिफारिस</title>
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
          <b>विषय : <u>उद्योग ठाउँसारी सम्बन्धी सिफारिस।</u></b>
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
          ##INDUSTRY_TYPE##
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
          श्री ##INDUSTRY_OWNER_NAME##
          ले उद्योगलाई
          ##MIGRATION_PROVINCE## प्रदेश,
          ##MIGRATION_DISTRICT## जिल्ला,
          ##MIGRATION_LOCAL_LEVEL##
          वडा नं. ##MIGRATION_WARD_NUMBER##
          अन्तर्गत
          <strong>##MIGRATION_TOLE##</strong>
          मा
          ठाउँसारी गर्नुपर्ने व्यहोरा सहित
          यस कार्यालयमा निवेदन पेश गर्नुभएको हो।
        </p>

        <!-- Paragraph 3 -->
        <p class="paragraph">
          सो सम्बन्धमा
          आवश्यक कागजात अध्ययन,
          स्थलगत अनुगमन तथा
          जाँचबुझ गर्दा
          निवेदनमा उल्लेखित व्यहोरा
          मनासिब देखिएको हुँदा
          स्थानीय सरकार सञ्चालन ऐन, २०७४
          बमोजिम
          उक्त उद्योगलाई उल्लेखित स्थानमा
          ठाउँसारी गर्न
          नियमानुसार आवश्यक प्रक्रिया पूरा गरी
          अनुमति प्रदान गर्न
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

export default industryMigrationRecommendationTemplate;
