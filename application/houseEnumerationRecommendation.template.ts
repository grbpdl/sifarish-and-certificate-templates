import {
  globalTemplateStyle,
  tableStyles,
  header,
} from "../../templates/templateStyles";

const houseEnumerationRecommendationTemplate = `
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
            <p>##DEPARTMENT_MUNICIPALITY##, ##DEPARTMENT_DISTRICT## ।</p>
          </div>
          <div class="subject">
            <b>बिषय: <u>सिफारिस सम्बन्धमा ।</u> </b>
          </div>
          <p class="paragraph">
            उपरोक्त सम्बन्धमा जिल्ला ##APPLICANT_CURRENT_DISTRICT##
            ##APPLICANT_CURRENT_MUNICIPALITY## वडा नं.
            ##APPLICANT_CURRENT_WARD_NUMBER## बस्ने ##APPLICANT_NAME## ले मेरो
            नाउँमा मालपोत कार्यालय,##DEPARTMENT_DISTRICT## मा दर्ता भएको साविक
            ##PROPERTY_PREVIOUS_VDC##; वडा नं. ##PROPERTY_PREVIOUS_WARD_NUMBER##
            हाल ##PROPERTY_CURRENT_MUNICIPALITY## वडा नं.
            ##PROPERTY_CURRENT_WARD_NUMBER## को कि.नं. ##PROPERTY_KITTA_NUMBER##
            क्षे.फ. ##PROPERTY_TOTAL_AREA## जग्गामा मैले घर निर्माण गरी सकेको र
            मेरो माथि उल्लेखित कित्ता जग्गाको ज.ध.प्र.पुर्जामा हालसम्म घर
            नजनिएकोले घर जनाउनको लागि तहाँ कार्यालयको नाउँमा सिफारिस पाऊँ भनी यस
            कार्यालयमा निवेदन पेश गरेकोले सो सम्बन्धमा बुझ्दा जानेबुझेसम्म
            व्यहोरा मनासिब भएको बुझिएकोले तहाँ कार्यालयको नियमानुसार निवेदकको
            माथि उल्लेखित कित्ता जग्गाको ज.ध.प्र.पु.मा घर जनाई दिनुहुन यो
            सिफारिस गरिन्छ।
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

export default houseEnumerationRecommendationTemplate;
