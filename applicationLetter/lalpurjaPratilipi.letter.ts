import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const lalpurjaPratilipiLetter = `<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>सिफारिस आवेदन</title>

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

    <!-- Address -->
    <div class="to-section">
      <p>श्री वडा कार्यालय (वडा नं. ##WARD_NUMBER##),</p>
      <p>
        ##LOCAL_LEVEL##, ##DISTRICT## ।
      </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषय: जग्गाधनी प्रमाणपूर्जा हराएको सिफारिस ।
    </div>

    <!-- Greetings -->
    <div class="greeting">
      महोदय, 
    </div>

    <!-- Body -->
    <div class="content">
      <p>
        उपरोक्त सम्बन्धमा म ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##,हाल ##LOCAL_LEVEL##-##WARD_NUMBER## ##DISTRICT## ##PROVINCE## निवासी, तपसिल बमोजिमको घरबाटो सिफारिस गरिदिनुहुन अनुरोध गर्दछु ।
      </p>

      <div style="text-align:center; font-weight:bold; margin: 10px 0;">तपसिल</div>
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

      <p>
        माथि उल्लेखित विवरणहरु मेरो ज्ञान तथा विश्वास अनुसार सही रहेको हुँदा सोही अनुरुपको घरबाटो सिफारिस गरिदिनुहुन पुनः अनुरोध गर्दछु ।
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
