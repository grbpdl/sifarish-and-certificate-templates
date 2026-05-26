import globalTemplateStyle, {
  tableStyle,
} from "../../templates/applicationLetterStyles/letterGlobalStyle";

const industryRegistrationApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>उद्योग दर्ता सिफारिसका लागि निवेदन</title>
  <style>
    ${globalTemplateStyle}
    ${tableStyle}
  </style>
</head>

<body>
  <div class="container">

    <!-- Date -->
    <div class="date">
        ##C_DATE##
    </div>

    <!-- To Section -->
    <div class="to-section">
      <p>श्रीमान् वडा अध्यक्षज्यू,</p>
      <p>
        ##LOCAL_LEVEL##<br />
        वडा नं. ##WARD_NUMBER##<br />
        ##DISTRICT##
      </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषय : उद्योग दर्ता सिफारिस गरिदिनुहुन ।
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
        जिल्ला ##DISTRICT##
        ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER##
        अन्तर्गत ##TOLE## मा स्थायी रूपमा बसोबास गर्दै आएको व्यहोरा
        विनम्रतापूर्वक निवेदन गर्दछु।
      </p>

      <p>
        मैले
        जिल्ला ##PROPERTY_DISTRICT##,
        ##PROPERTY_LOCAL_LEVEL##
        वडा नं. ##PROPERTY_WARD_NUMBER##
        अन्तर्गत पर्ने
        कि.नं. ##PROPERTY_KITTA_NUMBER##
        क्षेत्रफल ##PROPERTY_TOTAL_AREA##
        रहेको जग्गामा
        <strong>##INDUSTRY_NAME##</strong>
        नामक
        ##PROPERTY_TYPE##
        उद्योग स्थापना गर्न लागेको हुँदा
        उक्त उद्योग दर्ता प्रयोजनका लागि
        सम्बन्धित निकायमा पेश गर्नुपर्ने
        वडा सिफारिस आवश्यक परेकोले
        यो निवेदन पेश गरेको छु।
      </p>

      <p>
        उक्त उद्योग स्थल
        अन्तर्राष्ट्रिय सिमानाबाट
        ##INDUSTRY_DISTANCE_FROM_INTERNATIONAL_BORDER_KM## कि.मी.,
        राष्ट्रिय वन जंगलबाट
        ##INDUSTRY_DISTANCE_FROM_NATIONAL_CONSERVATION_AREA_KM## कि.मी.
        तथा गाउँ बस्तीबाट
        ##INDUSTRY_DISTANCE_FROM_HUMAN_RESIDENCE_KM## कि.मी.
        दूरीमा रहेको छ।
        उद्योग सञ्चालन गर्दा
        वातावरण तथा छरछिमेकमा
        कुनै किसिमको प्रतिकूल असर नपर्ने
        व्यहोरा समेत अवगत गराउँदछु।
      </p>

      <p>
        यस सम्बन्धमा
        तपसिलमा उल्लेखित विवरण
        तथा आवश्यक कागजातहरू
        यसैसाथ संलग्न गरी
        नियमानुसार
        उद्योग दर्ता सिफारिस
        गरिदिनुहुन
        हार्दिक अनुरोध गर्दछु।
      </p>
    </div>

    <!-- Signature -->
    <div class="signature">
      <p>
        निवेदक<br /><br />
        हस्ताक्षर : ..............................<br />
        नाम : ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
        ठेगाना :
        ##LOCAL_LEVEL##–##WARD_NUMBER##, ##DISTRICT##<br />
      </p>
    </div>

  </div>
</body>
</html>
`;

export default industryRegistrationApplicationTemplate;
