import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

export const schoolClassAddApplicationTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>विद्यालय कक्षा थप सिफारिस</title>

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
          <div class="to_section" style="margin-bottom: 1rem;">
            <p>
              श्रीमान् वडाध्यक्षज्यू<br />
              ##WARD_NUMBER## नं. वडाको कार्यालय<br />
              ##LOCAL_LEVEL##
            </p>
          </div>

          <!-- Subject -->
          <div class="subject">
            विषयः विद्यालय कक्षा थप सिफारिस गरी पाउँ।
          </div>

          <!-- Body -->
          <p>
            महोदय,<br /><br />
            उपर्युक्त विषयमा
            ##LOCAL_LEVEL## वडा नं
            ##WARD_NUMBER## को
            ##TOLE## मा रहेको
            श्री ##SCHOOL_COLLEGE_NAME##
            ##SCHOOL_COLLEGE_TYPE##
            विद्यालयमा कक्षा थपका लागि
            विद्यालय व्यवस्थापन समितिको
            निर्णय सहित माग भई आएकोमा,
            सो विद्यालयमा माग बमोजिम
            कक्षा थपका लागि आवश्यक
            शैक्षिक पूर्वाधार समेत
            पूरा भएको देखिएकोले
            यस वडा कार्यालयको
            मिति ##DATE_OF_DECISION##
            को निर्णय अनुसार
            कक्षा ##CLASS_COUNT##
            थपका लागि
            स्थानीय सरकार सञ्चालन ऐन,
            २०७४ को दफा १२ (२) ङ (२९)
            बमोजिम सिफारिस गरिदिनु हुन
            अनुरोध छ।
          </p>

          <!-- Applicant -->
          <div style="margin-top: 3.5rem; text-align: right;">
            <p><strong>निवेदकः</strong></p>
            <p>नामः ##AUTHORITY_NAME##</p>
            <p>सहीः__________</p>
            <p>ठेगानाः ##LOCAL_LEVEL## - ##WARD_NUMBER##, ##TOLE##</p>
            <p>सम्पर्क नं.: ##PHONE_NUMBER##</p>
          </div>

        </div>
      </section>
    </section>
  </body>
</html>
`;
