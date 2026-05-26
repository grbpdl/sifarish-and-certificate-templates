import { header, globalTemplateStyle } from "../../templates/templateStyles";

export const organizationRenewalSifarish = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>व्यवसाय/संस्था नविकरण सिफारिस</title>

    <style>
      ${globalTemplateStyle}

      body {
        font-family: "Kalimati", "Mangal", sans-serif;
        font-size: 14px;
        line-height: 1.9;
      }

      .container {
        width: 794px;
        min-height: 1123px;
        background: #ffffff;
        margin: auto;
        padding: 60px 70px;
        box-sizing: border-box;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
      }

      .date {
        text-align: right;
        margin-bottom: 20px;
      }

      .subject {
        margin: 25px 0;
        font-weight: bold;
        text-align: center;
      }

      .content {
        text-align: justify;
      }

      .signature {
        margin-top: 60px;
        text-align: right;
      }
    </style>
  </head>

  <body>
    <div class="container">
      ${header}
      <!-- To Section -->
      <div class="to-section">
        <p><br />जो जस संग सम्बन्धीत छ</p>
      </div>

      <!-- Subject -->
      <div class="subject">
        विषय: व्यवसाय/संस्था नविकरण सिफारिस सम्बन्धमा ।
      </div>

      <!-- Body -->
      <div class="content">
        <p>
          उपरोक्त विषयमा यस
          <b>##DISTRICT## जिल्ला, ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER##</b>
          अन्तर्गत
          <b>##TOLE##</b> मा संचालनमा रहेको
          <b>##ORGANIZATION_NAME##</b> नामक
          व्यवसाय/संस्था
          यस कार्यालयमा दर्ता भई नियमित रूपमा संचालन हुँदै आएको व्यहोरा प्रमाणित गर्दछु।
        </p>

        <p>
          उक्त व्यवसाय/संस्था
          ##REPLACEABLE_HIS_HER##
          <b>
            ##BUSINESS_OWNER_FIRST_NAME##
            ##BUSINESS_OWNER_MIDDLE_NAME##
            ##BUSINESS_OWNER_LAST_NAME##
          </b>
          को नाममा दर्ता भई संचालनमा रहेको र
          हालसम्म स्थानीय तहका नियम, कानून तथा
          कर/शुल्कहरू समयमै बुझाउँदै आएको देखिएको छ।
        </p>

        <p>
          उक्त व्यवसाय/संस्थाको दर्ता अवधि समाप्त हुन लागेको हुँदा
          नियमानुसार
          <b>व्यवसाय/संस्था नविकरण</b>
          गर्नुपर्ने देखिएकोले,
          संलग्न कागजातहरूका आधारमा
          व्यवसाय/संस्था नविकरण गरिदिनुहुन
          यो सिफारिस गरिन्छ।
        </p>
      </div>

      <!-- Signature -->
      <div class="signature">
        <p>
          .................................<br />
          ##AUTHORITY_NAME##<br />
          ##AUTHORITY_DESIGNATION##<br />
        </p>
      </div>
    </div>
  </body>
</html>
`;
