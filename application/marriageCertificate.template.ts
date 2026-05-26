import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";


export const marriageCertificateTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>विवाह प्रमाणित</title>

    <style>
      ${globalTemplateStyle}
      ${tableStyles}

      .main_section {
        font-size: 14px;
        line-height: 1.9;
        text-align: justify;
      }

      .subject {
        text-align: center;
        font-weight: bold;
        margin: 1.8rem 0;
      }

      .to_section p {
        line-height: 1.6;
      }
    </style>
  </head>

  <body>
    <section id="template">
      <section class="application_section">

        <!-- Municipality Header -->
        ${header}

        <!-- Main Body -->
        <div class="main_section">

          <!-- Office Address -->
          <div class="to_section">
            <p>
              श्रीमान वडा अध्यक्षज्यू,<br />
              ##WARD_NUMBER_HEADER## नं. वडाको कार्यालय<br />
              ##MUNICIPALITY_NAME_HEADER##
            </p>
          </div>

          <!-- Subject -->
          <div class="subject">
            विषय: विवाह प्रमाणित गरी पाउँ ।
          </div>

          <!-- Body -->
          <p>
            महोदय,<br /><br />
            उपर्युक्त विषयमा म निवेदक
            ##HUSBAND_DISTRICT## जिल्ला
            ##HUSBAND_LOCAL_LEVEL## वडा नं.
            ##HUSBAND_WARD_NUMBER##
            ##HUSBAND_TOLE## मा बस्ने
            ##FATHER_FIRST_NAME## ##FATHER_MIDDLE_NAME## ##FATHER_LAST_NAME## को छोरा
            वर्ष ##HUSBAND_AGE## को
            श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## को मिति
            ##MARRAIGE_DATE## मा
            ##WIFE_DISTRICT## जिल्ला
            ##WIFE_LOCAL_LEVEL## वडा नं.
            ##WIFE_WARD_NUMBER##
            ##WIFE_TOLE## मा बस्ने
            ##SPOUSE_FATHER_FIRST_NAME## को छोरी
            वर्ष ##WIFE_AGE## को
            श्री ##SPOUSE_FIRST_NAME## ##SPOUSE_MIDDLE_NAME## ##SPOUSE_LAST_NAME##
            सँग सामाजिक परम्परा/रीतिद्वारा
            विवाह सम्पन्न भएकोले सो विवाह
            प्रमाणित सिफारिस गरिदिनुहुन
            अनुरोध छ ।
          </p>

          <!-- Applicant -->
          <div style="margin-top: 3.5rem; text-align: right;">
            <p><strong>निवेदक:</strong></p>
            <p>नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</p>
            <p>सही:_____</p>
            <p>ठेगाना: ##HUSBAND_LOCAL_LEVEL##, वडा नं. ##HUSBAND_WARD_NUMBER## ##HUSBAND_TOLE##</p>
            <p>सम्पर्क नं.: ##PHONE_NUMBER##</p>
          </div>

        </div>
      </section>
    </section>
  </body>
</html>
`;
