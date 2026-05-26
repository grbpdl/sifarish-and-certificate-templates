import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

export const fundamentalSchoolOpenTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>आधारभूत विद्यालय खोल्न सिफारिस</title>

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

          <!-- To Section -->
          <div class="to_section" style="margin-bottom: 1.2rem;">
            <p>
              श्रीमान् वडाध्यक्षज्यू<br />
              ##WARD_NUMBER## नं. वडाको कार्यालय<br />
              ##LOCAL_LEVEL##
            </p>
          </div>

          <!-- Subject -->
          <div class="subject">
            विषय: आधारभूत विद्यालय खोल्ने स्वीकृति सिफारिस गरी पाउँ।
          </div>

          <!-- Body -->
          <p>
            महोदय,<br /><br />
            उपर्युक्त विषयमा यस
            ##LOCAL_LEVEL##
            वडा नं
            ##WARD_NUMBER##
            टोल
            ##TOLE##
            मा आधारभूत विद्यालय
            सञ्चालन गर्नुपर्ने भएकोले
            सो को लागि स्वीकृति
            प्रदान गरी दिनुहुनका लागि
            ##RECOMMENDING_OFFICE##
            कार्यालयलाई सिफारिस
            गरी दिनुहुन
            निवेदनसाथ अनुरोध छ।
          </p>

          <!-- Applicant -->
          <div style="margin-top: 3.5rem; text-align: right;">
            <p>निवेदक </p>
            <p>नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</p>
            <p>हस्ताक्षर : ______</p>
          </div>

        </div>
      </section>
    </section>
  </body>
</html>
`;
