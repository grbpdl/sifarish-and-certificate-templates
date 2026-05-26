import { header, globalTemplateStyle } from "../../templates/templateStyles";

const organizationRegistrationSifarishTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>व्यवसाय दर्ता सिफारिस</title>

  <style>
    ${globalTemplateStyle}

    body {
      font-family: "Kalimati", "Mangal", Arial, sans-serif;
      margin: 0;
      padding: 0;
    }

    .a4-page {
      width: 794px;
      min-height: 1123px;
      background: #ffffff;
      margin: auto;
      padding: 60px 70px;
      box-sizing: border-box;
      box-shadow: 0 0 8px rgba(0,0,0,0.15);
      position: relative;
    }

    .date {
      text-align: right;
      margin-top: 10px;
      font-size: 14px;
    }

    .greet {
      margin-top: 40px;
      font-size: 14px;
    }

    .subject {
      text-align: center;
      margin: 25px 0;
      font-weight: bold;
      font-size: 15px;
    }

    .letter {
      font-size: 14px;
      line-height: 1.8;
      text-align: justify;
      margin-bottom: 80px;
    }

    .authority {
      text-align: right;
      padding-top: 20px;
    }
  </style>
</head>

<body>
  <div class="a4-page">
    
    ${header}

    <!-- Greeting -->
    <div class="greet">
      <p> जो जससँग सम्बन्धित छ, </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषयः व्यवसाय दर्ता सिफारिस सम्बन्धमा ।
    </div>

    <!-- Letter Body -->
    <div class="letter">
      <p>
        उपरोक्त सम्बन्धमा यस ##DISTRICT## जिल्ला, ##LOCAL_LEVEL## वडा नं. 
        ##WARD_NUMBER##, ##TOLE## मा स्थायी रूपमा बसोबास गर्ने 
        श्री/श्रीमती <strong>##BUSINESS_OWNER_FIRST_NAME## ##BUSINESS_OWNER_MIDDLE_NAME## ##BUSINESS_OWNER_LAST_NAME##</strong>
        ले <strong>##ORGANIZATION_NAME##</strong> नामक 
        <strong>##ORGANIZATION_TYPE##</strong> व्यवसाय 
        ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER##, ##TOLE## मा सञ्चालन गर्न 
        यस वडा कार्यालयमा निवेदन दिनुभएको छ।
      </p>

      <p>
        निवेदकबाट पेश भएको निवेदन तथा आवश्यक कागजातहरू अध्ययन गर्दा 
        उक्त व्यवसाय स्थानीय कानून, नियम तथा प्रचलित व्यवस्था बमोजिम 
        सञ्चालन गर्न मिल्ने देखिएको हुँदा व्यवसाय दर्ता प्रयोजनका लागि 
        आवश्यक सिफारिस प्रदान गरिदिनुहुन सिफारिस गरिन्छ।
      </p>

      <p>
        अतः तहाँको कार्यालयबाट नियमानुसार 
        <strong>##ORGANIZATION_NAME##</strong> व्यवसाय दर्ता गरिदिनुहुन 
        यो सिफारिस प्रस्तुत गरिएको छ।
      </p>
    </div>

    <!-- Authority -->
    <div class="authority">
      <p>..............................</p>
      <p>##AUTHORITY_NAME##</p>
      <p>##AUTHORITY_DESIGNATION##</p>
    </div>

  </div>
</body>
</html>
`;

export default organizationRegistrationSifarishTemplate;
