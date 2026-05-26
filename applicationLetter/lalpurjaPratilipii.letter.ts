import globalTemplateStyle, {
  tableStyle,
} from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const landOwnershipCertificateCopyApplicationLetter = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <title>लालपुर्जाको प्रतिलिपि सिफारिस – निवेदन</title>

  <style>
    ${globalTemplateStyle}
    ${tableStyle}
  </style>
</head>
<body>

  <div class="container">

    <!-- Date -->
    <div class="date">
      ##APPLICATION_DATE##
    </div>

    <!-- Address -->
    <div class="to-section">
      <p>श्रीमान वडा अध्यक्षज्यू,</p>
      <p>
        वडा नं. ##WARD_NUMBER##<br />
        ##LOCAL_LEVEL##, ##DISTRICT##
      </p>
    </div>

    <!-- Subject -->
    <div class="subject">
      विषय : लालपुर्जाको प्रतिलिपि सिफारिस सम्बन्धमा ।
    </div>

    <!-- Greeting -->
    <div class="greeting">
      महोदय,
    </div>

    <!-- Body -->
    <div class="content">
      <p>
        उपर्युक्त सम्बन्धमा म निवेदक
        ##DISTRICT## जिल्ला
        ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER##
        अन्तर्गत बसोबास गर्ने
        ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
        हुँ ।
      </p>

      <p>
        मेरो नाममा
        ##LAND_PROVINCE##,
        ##LAND_DISTRICT## जिल्ला,
        ##LAND_LOCAL_LEVEL## वडा नं. ##LAND_WARD_NUMBER##
        स्थित
        कि.नं. ##PLOT_NO##
        क्षेत्रफल ##TOTAL_AREA##
        को जग्गा मालपोत कार्यालयमा
        दर्ता रहेको व्यहोरा अवगत गराउन चाहन्छु ।
      </p>

      <p>
        उक्त जग्गाको
        लालपुर्जा (जग्गाधनी प्रमाणपत्र)
        ##REASON##
        कारणवश
        प्रतिलिपि आवश्यक परेको हुँदा
        सम्बन्धित निकायमा पेश गर्न
        वडा कार्यालयको सिफारिस
        आवश्यक परेकोले
        यो निवेदन पेश गरेको छु ।
      </p>

      <!-- Table Section (if co-owners exist) -->
      <section class="table-container">
        <div style="text-align:center; text-decoration:underline;">
          तपशिल
        </div>

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

      <p>
        <br />
        अतः आवश्यक छानबिन गरी
        नियमानुसार
        लालपुर्जाको प्रतिलिपि सिफारिस
        प्रदान गरिदिनुहुन
        विनम्र अनुरोध गर्दछु ।
      </p>
    </div>

    <!-- Signature -->
    <div class="signature">
      <p>
        निवेदक<br />
        नाम : ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
        हस्ताक्षर : .........................
      </p>
      <p>
        ठेगाना : वडा नं. ##WARD_NUMBER##, ##LOCAL_LEVEL##<br />
      </p>
    </div>

  </div>

</body>
</html>
`;
