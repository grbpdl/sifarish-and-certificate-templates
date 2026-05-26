import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const mohiLagatKattaLetter = `
<!DOCTYPE html>
<html lang="ne">
<head>
<meta charset="UTF-8">
<title>Nepal Government Road Recommendation Form</title>
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
      <p>श्रीमान वडा अध्यक्षज्यू,</p>
      <p>
        वडा नं. ##WARD_NUMBER## को कार्यालय<br />
        ##LOCAL_LEVEL##
      </p>
    </div>

    <div class="subject">
        विषय: नेपाल सरकारको नाममा बाटो कायम सिफारिस गरी पाऊँ ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <div class="content">
        <p>
          उपर्युक्त विषयमा ##DISTRICT## जिल्ला ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER## बस्ने ##MOHI_FIRST_NAME## ##MOHI_MIDDLE_NAME## ##MOHI_LAST_NAME## हुँ। मेरो नामबाट मालपोत कार्यालय ##LAND_DISTRICT_OF_LAND##मा श्रेस्ता कायम रहेको सिट नं. ##SHEET_NO## कित्ता नं. ##KITTA_NUMBER## को क्षेत्रफल ##LAND_AREA## भएको जग्गाधनी श्रेस्ता पुर्जाको मोही श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## कायम भएको र मोहीले जोतकमोद केही नगरेकोले मोही लगत कट्टा गर्न मोही स्वयंको मञ्जुरी रहेकोले मोही लगत कट्टा गर्न सिफारिस गरीदिनु हुनका लागि निवेदनसाथ अनुरोध गर्दछु ।
        </p>
    </div>

    <div class="signature">
        <p>
          निवेदक :<br>
          नाम :##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## <br>
          ठेगाना : ##OWNER_LOCAL_LEVEL## वडा नं. ##OWNER_WARD_NUMBER## <br>
          सही :.........................<br>
        </p>
    </div>
</div>

</body>
</html>
`;