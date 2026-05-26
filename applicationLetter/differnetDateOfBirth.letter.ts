import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const differentDateOfBirthApplication = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>जन्म मिति संशोधन – निवेदन</title>

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

    <!-- Address -->
    <div class="to-section">
      <p>श्रीमान वडा अध्यक्षज्यू,</p>
      <p>
        वडा नं. ##WARD_NUMBER##<br>
        ##LOCAL_LEVEL##, ##DISTRICT##
      </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषय: जन्म मिति संशोधन सिफारिस पाऊँ ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Body -->
    <div class="content">
      <p>
        उपर्युक्त विषयमा म ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER## निवासी
        श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## यस कार्यालयमा
        जन्म मिति संशोधन सम्बन्धी सिफारिस आवश्यक परेको हुँदा यो निवेदन पेश
        गरेको छु ।
      </p>

      <p>
        मेरो/हाम्रो पारिवारिक विवरण अनुसार श्री
        ##GRAND_FATHER_FIRST_NAME## ##GRAND_FATHER_MIDDLE_NAME## ##GRAND_FATHER_LAST_NAME## को
        ##REPLACEABLE_GRANDSON_GRANDDAUGHTER## तथा श्री ##FATHER_FIRST_NAME## ##FATHER_MIDDLE_NAME## ##FATHER_LAST_NAME## को
        ##REPLACEABLE_SON_DAUGHTER## ##REPLACEABLE_HIS_HER## ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## को
        जन्म मिति विभिन्न कागजातहरूमा फरक–फरक उल्लेख भएको हुँदा
        सो जन्म मिति संशोधन गर्नुपर्ने अवस्था सिर्जना भएको छ ।
      </p>

      <p>
        जन्म दर्ता, शैक्षिक प्रमाणपत्र, नेपाली नागरिकता प्रमाणपत्र लगायत
        आधिकारिक कागजात अनुसार
        <strong>##REASON_FOR_MODIFICATION##</strong> कारणले गर्दा
        जन्म मिति संशोधन आवश्यक परेको हो ।
      </p>

      <p>
        त्यसैले देहाय बमोजिम फरक परेको जन्म मिति संशोधन गरी एउटै कायम
        गर्न आवश्यक छ :
      </p>

      <table>
        <thead>
          <tr>
            <th>फरक भएको जन्म मिति</th>
            <th>कायम गर्नुपर्ने जन्म मिति</th>
            <th>कायम गर्ने आधार</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>##DIFFERENT_DATE_OF_BIRTH##</td>
            <td>##DATE_OF_BIRTH##</td>
            <td>##REASON_FOR_MODIFICATION##</td>
          </tr>
        </tbody>
      </table>

      <p>
        अतः नियमअनुसार आवश्यक छानबिन गरी जन्म मिति संशोधन सिफारिस
        गरिदिनुहुन विनम्र अनुरोध गर्दछु ।
      </p>
    </div>

    <!-- Signature -->
    <div class="signature">
      <p>
        निवेदक<br>
        नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## <br>
        सही: .........................
      </p>
    </div>

  </div>

</body>
</html>
`;
