import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const propertyValuationApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>सम्पत्ति मूल्यांकन निवेदन</title>

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
      <p>श्रीमान वडाध्यक्षज्यू,</p>
      <p>
        वडा नं. ##WARD_NUMBER## को कार्यालय<br />
        ##LOCAL_LEVEL##
      </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषय: सम्पत्ति मूल्यांकन सिफारिस पाऊँ ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Body -->
    <div class="content">
      <p>
        उपर्युक्त विषयमा म/हामी
        ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER##
        अन्तर्गत ##TOLE## बसोबास गर्ने
        श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
        हुँ/हौं।
      </p>

      <p>
        मेरो/हाम्रो नाममा मालपोत कार्यालयमा
        दर्ता कायम रहेको तपसिल बमोजिमको
        सम्पत्तिको मूल्यांकन आवश्यक परेको हुँदा
        सो प्रयोजनका लागि
        सम्पत्ति मूल्यांकन सिफारिस
        प्रदान गरिदिनुहुन
        यो निवेदन पेश गरेको/गरेका छु/छौं।
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
    </div>

    <!-- Applicant -->
    <div class="signature">
      <p>
        निवेदक<br />
        नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
        ठेगाना: ##LOCAL_LEVEL##, वडा नं. ##WARD_NUMBER##<br />
        सम्पर्क नं.: ##PHONE_NUMBER##<br />
        हस्ताक्षर: .........................
      </p>
    </div>

  </div>

</body>
</html>
`;
