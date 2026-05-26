import {
  globalTemplateStyle,
  tableStyles,
  header,
} from "../../templates/templateStyles";

const recommendationForBasementHouseTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Request For Business Registration Detail</title>
    <style>
      ${globalTemplateStyle} 
       ${tableStyles} 
      .tapsil-title {
        justify-content: flex-start;
      }
    </style>
  </head>
  <body>
    <section id="template">
      <section class="application_section">
        <!-- Municipality Section -->
        ${header}
        <!-- Main Letter Section -->
        <div class="main_section">
          <div class="letter-heading">
            <p>श्री ##DEPARTMENT_NAME##</p>
            <p>##DEPARTMENT_DISTRICT## ।</p>
          </div>
          <div class="subject">
            <b>बिषय: <u>सिफारिस सम्बन्धमा ।</u> </b>
          </div>
          <p class="paragraph">
            उपरोक्त सम्बन्धमा ##CURRENT_MUNICIPALITY## वडा न.
            ##CURRENT_WARD_NUMBER## स्थित ##SALUTATION##
            ##APPLICANT_NAME## को नाममा रहेको कि.नं.##KITTA_NUMBER##
            क्षे.फ़.##TOTAL_AREA## मा बनेको घर भत्किई पाताल भएकोले सोही
            अनुसारको सिफारिस गरी पाउँ भनी यस वडा कार्यालयमा पर्न आएको निवेदन
            सम्बन्धमा उल्लेखित कि.नं. मा बनेको घर पाताल भएको व्यहोरा प्रमाणित
            सिफारिस गरिन्छ |
          </p>
          <br />
          <div
            style="
              margin: 1rem 0rem;
              display: flex;
              justify-content: flex-end;
              align-items: center;
            "
          >
            <div style="text-align: center">
              ..............................
              <br />
              [NAME eg: मन बहादुर श्रेष्ठ]
              <br />
              [POST eg: सचिव]
            </div>
          </div>
        </div>
      </section>
    </section>
  </body>
</html>`;

export default recommendationForBasementHouseTemplate;
