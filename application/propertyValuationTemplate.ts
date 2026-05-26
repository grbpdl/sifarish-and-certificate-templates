import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

export const propertyValuationTemplate = `<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>सम्पत्ति मूल्यांकन सिफारिस</title>

  <style>
    ${globalTemplateStyle}
    ${tableStyles}
    .top-section {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    .office-address {
      line-height: 1.8;
    }

    .date {
      text-align: right;
    }

    .subject {
      text-align: center;
      margin: 20px 0;
      font-weight: bold;
    }

    .paragraph {
      text-align: justify;
      margin-bottom: 20px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
    }

    th,
    td {
      border: 1px solid #000;
      padding: 6px;
      text-align: center;
    }

    .applicant-section {
      margin-top: 40px;
      text-align: center;
      line-height: 2;
    }
  </style>
</head>

<body>
<section id="template">
  <section class="application_section">

    <!-- Header (municipality letterhead) -->
    ${header}

    <div class="main_section">

      <!-- Address + Date -->
      <div class="top-section">
        <div class="office-address">
          श्रीमान वडाध्यक्षज्यू<br />
          ##WARD_NUMBER## नं. वडाको कार्यालय<br />
          ##LOCAL_LEVEL##
        </div>
      </div>

      <!-- Subject -->
      <div class="subject">
        विषय: सम्पत्ति मूल्यांकन सिफारिस गरि पाउँ ।
      </div>

      <!-- Body -->
      <div class="paragraph">
        महोदय,<br /><br />
        उपयुक्त विषयमा ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER##
        अन्तर्गत ##TOLE## बस्ने
        श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
        हुँ/हौं। मेरो/हाम्रो नामबाट मालपोत कार्यालयमा दर्ता कायम रहेको
        तपसिलको सम्पत्तिको मूल्यांकनका लागि सिफारिस प्रमाणित आवश्यक
        परेको हुँदा सो को सिफारिस प्रमाणित गरिदिनुहुन
        निवेदनसाथ अनुरोध गर्दछु।
      </div>

      <!-- Table -->
      <div style="text-align:center; margin-bottom:10px;"><b>तपसिल</b></div>

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
            <div class="letter"></div>
          </section>

      <!-- Applicant -->
      <div class="applicant-section" style="margin-top: 3rem; text-align: right;">
        निवेदक<br />
        नाम थर: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
        हस्ताक्षर: ___________<br />
        ठेगाना: ##LOCAL_LEVEL##, वडा नं. ##WARD_NUMBER##<br />
        सम्पर्क नं.: ##CONTACT_NUMBER##
      </div>

    </div>
  </section>
</section>
</body>
</html>
`;
