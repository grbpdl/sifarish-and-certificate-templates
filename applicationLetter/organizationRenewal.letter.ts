import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const organizationRenewalLetter = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>व्यवसाय नविकरण निवेदन</title>
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

      <div class="to-section">
        <p>श्रीमान् प्रमुख प्रशासकीय अधिकृत/वडाध्यक्ष ज्यू,</p>
        <p>
          ##LOCAL_LEVEL##<br />
          वडा नं. ##WARD_NUMBER##, ##DISTRICT##<br />
        </p>
      </div>

      <div class="subject">
        विषय: व्यवसाय/संस्था नविकरणका लागि सिफारिस सम्बन्धमा ।
      </div>

      <!-- Greeting -->
      <div class="greeting">
        महोदय,
      </div>

      <div class="content">
        <p>
          उपर्युक्त विषयमा यस ##DISTRICT## जिल्ला, ##LOCAL_LEVEL## वडा नं.
          ##WARD_NUMBER##, ##TOLE## मा अवस्थित
          <strong>##ORGANIZATION_NAME##</strong> नामक
          व्यवसाय/संस्था
          यस कार्यालयमा दर्ता भई संचालन हुँदै आएको व्यहोरा अनुरोध गर्दछु।
        </p>

        <p>
          उक्त व्यवसाय/संस्थाको दर्ता अवधि समाप्त हुन लागेको हुँदा
          नियमानुसार व्यवसाय नविकरण गर्नु पर्ने भएकाले आवश्यक
          कागजातहरू यसै निवेदनसाथ संलग्न गरी
          व्यवसाय नविकरणका लागि सिफारिस गरी दिनुहुन
          हार्दिक अनुरोध गर्दछु।
        </p>
      </div>

      <div class="signature">
        <p>
          निवेदक,<br />
          नाम: ##BUSINESS_OWNER_FIRST_NAME## ##BUSINESS_OWNER_MIDDLE_NAME## ##BUSINESS_OWNER_LAST_NAME##<br />
          व्यवसायको नाम: ##ORGANIZATION_NAME##<br />
          ठेगाना: ##CURRENT_LOCAL_LEVEL##, वडा नं. ##CURRENT_WARD_NUMBER##<br />
          सम्पर्क नं.: ##PHONE_NUMBER##<br />
          हस्ताक्षर: .........................
        </p>
      </div>
    </div>
  </body>
</html>
`;