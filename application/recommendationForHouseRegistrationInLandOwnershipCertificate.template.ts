import {
  globalTemplateStyle,
  tableStyles,
  header,
} from "../../templates/templateStyles";

const recommendationForHouseRegistrationInLandOwnershipCertificateTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>recommendationForHouseRegistrationInLandOwnershipCertificateTemplate</title>
    <!-- <link rel="stylesheet" href="./global.css" /> -->
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
            <p>
              श्री ##SELECT_OFFICE##
            </p>
            <p>##DEPARTMENT_MUNICIPALITY##, ##DEPARTMENT_DISTRICT## ।</p>
          </div>
          <div class="subject">
            <b>बिषय: <u>सिफारिस सम्बन्धमा ।</u> </b>
          </div>
          <p class="paragraph">
            
            उपरोक्त सम्बन्धमा ##PRONOUN_VERB## दर्ता श्रेस्ता भएको
            ##PROPERTY_CURRENT_MUNICIPALITY## वडा नं.
            ##PROPERTY_CURRENT_WARD_NUMBER## (साविकको ठेगाना
            ##PROPERTY_PREVIOUS_ADDRESS## वडा नं.
            ##PROPERTY_PREVIOUS_WARD_NUMBER## )कि.नं. ##PROPERTY_PLOT_NUMBER##
            को क्षे.फ. ##PROPERTY_TOTAL_AREA## जग्गाको जग्गाधनी श्रेस्ता
            पुर्जामा जग्गा मात्र भएको तर फिल्डमा घर भएकोले जग्गाधनी श्रेस्ता
            पुर्जामा घर कायम गरी पाउ भनी घरजग्गाधनीले यस वडा कार्यालयमा निवेदन
            दिनुभएको हुदाँ सो सम्बन्धमा त्यहाँको नियमानुसार जग्गाधनी प्रमाण
            पुर्जामा घर कायम गराई दिनुहुन सिफारिस गरिन्छ |
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
</html>
`;

export default recommendationForHouseRegistrationInLandOwnershipCertificateTemplate;
