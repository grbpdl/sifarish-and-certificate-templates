import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

const mohilLagatKattaTemplate = `<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>मोहि लागत कट्टा सिफारिस</title>

  <style>
    ${globalTemplateStyle}
    ${tableStyles}

    .top-section {
      margin-bottom: 20px;
    }

    .date {
      text-align: right;
      margin-bottom: 15px;
    }

    .office-address {
      line-height: 1.8;
      margin-bottom: 20px;
    }

    .subject {
      text-align: center;
      margin: 20px 0;
      font-weight: bold;
    }

    .paragraph {
      text-align: justify;
      margin-bottom: 20px;
      line-height: 1.8;
    }

    .applicant-section {
      margin-top: 60px;
      text-align: right;
      line-height: 2;
    }
  </style>
</head>

<body>
<section id="template">
  <section class="application_section">

    <!-- Header (municipality letterhead) -->
    ${header}

    <div class="main_section">

      <!-- Address -->
      <div class="office-address">
        श्रीमान् वडाध्यक्षज्यू<br />
        ##WARD_NUMBER## नं. वडाको कार्यालय<br />
        ##LOCAL_LEVEL## ।
      </div>

      <!-- Subject -->
      <div class="subject">
        विषय: मोही लागत कट्टा सिफारिस गरी पाउँ।
      </div>

      <!-- Body -->
      <div class="paragraph">
        महोदय,<br /><br />
        उपर्युक्त विषयमा ##OWNER_DISTRICT## जिल्ला ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER## टोल ##TOLE## बस्ने ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## हुँ/हौँ। मेरो/हाम्रो नामबाट मालपोत कार्यालयमा श्रेस्ता कायम रहेको ##OWNER_LOCAL_LEVEL##, वडा नं ##OWNER_WARD_NUMBER## सिट नं. ##SHEET_NO## कित्ता नं ##KITTA_NUMBER## को क्षेत्रफल भएको जग्गाधनि श्रेस्ता पुर्जाको मोही श्री/श्रीमती/सुश्री ##MOHI_FIRST_NAME## ##MOHI_MIDDLE_NAME## ##MOHI_LAST_NAME## कायम भएको र मोहीले जोतकमोद केही नगरेकोले मोही लगत कट्टा गर्न मोही स्वयंको मञ्जरी रहेकोले मोही लगत कट्टा गर्न सिफारिस गरीदिनु हुनका लागि निवेदनसाथ अनुरोध गर्दछु/गर्दछौं ।
      </div>

      <!-- Applicant -->
      <div class="applicant-section">
        निवेदक<br />
        नाम : ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
        ठेगाना : ##OWNER_LOCAL_LEVEL##, वडा नं. ##OWNER_WARD_NUMBER## <br />
         सही : ________<br />
      </div>

    </div>
  </section>
</section>
</body>
</html>`;

export default mohilLagatKattaTemplate;