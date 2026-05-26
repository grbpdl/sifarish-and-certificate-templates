import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const realEstateTransferLetterTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>घरजग्गा नामसारी सिफारिस निवेदन</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyle}
       .table-container {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin: auto;
      }
      th,
      td {
        border: 1px solid #000;
        text-align: center;
        padding: 16px;
      }
      th {
        background-color: #f2f2f2;
      }
    </style>
</head>
<body>
<div class="container">
    <!-- Date -->
    <div class="date">
      मिति: ##APPLICATION_DATE##
    </div>

    <!-- To Section -->
    <div class="to-section">
      <p>श्रीमान् वडाध्यक्षज्यू,</p>
      <p>
        वडा नं. ##WARD_NUMBER## को कार्यालय<br />
        ##LOCAL_LEVEL##
      </p>
    </div>

    <div class="subject">
        विषय: घरजग्गा नामसारीका लागि सिफारिस गरी पाऊँ ।
    </div>

    <div class="greeting">
      महोदय,
    </div>

    <div class="content">
        <p>
          उपरोक्त सम्बन्धमा ##DISTRICT## जिल्ला ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER## बस्ने म निवेदक ##REPLACEABLE_HIS_HER## ##FATHER_FIRST_NAME## ##FATHER_MIDDLE_NAME## ##FATHER_LAST_NAME## को ##REPLACEABLE_SON_DAUGHTER## ##REPLACEABLE_HIS_HER## ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## यसै वडाको स्थायी बासिन्दा हो । मेरो ##RELATIONSHIP##  नाता पर्ने ##DEAD_PERSON_FIRST_NAME## ##DEAD_PERSON_MIDDLE_NAME##  ##DEAD_PERSON_LAST_NAME## को मिति ##DEATH_DATE## मा मृत्यु भएको र निजको नाममा दर्ता रहेका तपशिलमा उल्लेखित जग्गाको हक खाने हकदार म ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## मात्र भएको हुँदा उक्त जग्गाको एकलौटी/संयुक्त नाममा नामसारीको लागि सम्बन्धीत निकायमा सिफारिस गरी पाउँ भनि यस वडा कार्यालयमा सादर अनुरोधसाथ यो निवेदन पेश गर्दछु । यसै निवेदनसाथ आवश्यक कागजपत्र पेश गरेको जानकारी समेत गर्दछु ।
        </p>

        <section class="table-container">
              <div style="text-align:center; text-decoration:underline;">##TABLE_HEADER##</div>
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
              <br />
          </section>

    <div class="signature">
        <p>
          निवेदक<br />
          नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
          ठेगाना: ##PROVINCE##, ##DISTRICT##, ##LOCAL_LEVEL##, वडा नं. ##WARD_NUMBER##, ##TOLE##<br />
          सही: .........................
        </p>
    </div>
</div>
</body>
</html>
`;