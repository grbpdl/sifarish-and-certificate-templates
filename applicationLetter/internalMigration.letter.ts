import globalTemplateStyle, {
  tableStyle,
} from "../../templates/applicationLetterStyles/letterGlobalStyle";

const internalMigrationApplicationLetterTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>आन्तरिक बसाई सराई सम्बन्धी निवेदन</title>
  <style>
    ${globalTemplateStyle}
    ${tableStyle}
  </style>
</head>

<body>
  <div class="container">

    <!-- Date -->
    <div class="date">
      मिति : ##C_DATE##
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
      विषय : आन्तरिक बसाई सराई सिफारिस गरिदिनुहुन ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Content -->
    <div class="content">
      <p>
        उपर्युक्त विषयमा म निवेदक
        ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##,
        जन्म मिति ##DATE_OF_BIRTH##,
        हाल
        ##PROVINCE## प्रदेश,
        ##DISTRICT## जिल्ला,
        ##LOCAL_LEVEL## 
        वडा नं ##WARD_NUMBER##,
       ##TOLE## मा
        मिति ##LIVING_START_DATE## देखि
        बसोबास गर्दै आएको व्यहोरा निवेदन गर्दछु।
      </p>

      <p>
        यस अघि म
        ##OLD_PROVINCE## प्रदेश,
        ##OLD_DISTRICT## जिल्ला,
        ##OLD_LOCAL_LEVEL##
        वडा नं ##OLD_WARD_NUMBER##,
        ##OLD_TOLE## मा
        स्थायी रूपमा बसोबास गर्दै आएकोमा
        हाल स्थायी रूपमा यस वडामा बसाई सराई
        गरी आएको हुँदा
        सोको अभिलेख कायम गर्न
        आन्तरिक बसाई सराई सिफारिस
        आवश्यक परेकोले
        यो निवेदन पेश गरेको छु।
      </p>

      <p>
        तपसिलमा उल्लेखित विवरण
        तथा आवश्यक कागजातहरू
        यसैसाथ संलग्न गरी
        नियमअनुसार
        आन्तरिक बसाई सराई सिफारिस
        गरिदिनुहुन
        हार्दिक अनुरोध गर्दछु।
      </p>

      <!-- Table -->
      <br />
      <br />
      <p>तपसिल :</p>
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
        ठेगाना :
        ##LOCAL_LEVEL##–##WARD_NUMBER##, ##DISTRICT##<br />
      </p>
    </div>

  </div>
</body>
</html>
`;

export default internalMigrationApplicationLetterTemplate;
