import {
  globalTemplateStyle,
  tableStyles,
  header,
} from "../../templates/templateStyles";

const landConsolidationRecommendationTemplate = `
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
            <p>##DEPARTMENT_ADDRESS##।</p>
          </div>
          <div class="subject">
            <b> बिषय: <u>सिफारिस सम्बन्धमा ।</u> </b>
          </div>
          <p class="paragraph">
            उपरोक्त सम्बन्धमा जिल्ला ##GRANDPARENT_DISTRICT##
            ##GRANDPARENT_MUNICIPALITY## वडा नं. ##GRANDPARENT_WARD_NUMBER##
            ##GRANDPARENT_NAME## को बस्ने ##RELATION_WITH_GRANDPARENT_DROPDOWN##
            ##PARENT_NAME## को ##RELATION_WITH_PARENT_DROPDOWN##
            ##APPLICANT_NAME## ले निजको नाममा दर्ता कायम रहेको तपसिल अनुसारका
            कित्ताहरुलाई एकिकृत गर्नको लागि सिफारिस गराईपाउँ भनि यस कार्यालयमा
            निवेदन पेश गर्नु भएको हुँदा तहाँ कार्यालयको नियमानुसार उक्त कि नं.
            को जग्गाहरूलाई एकिकृत गरिदिनुहुन सिफारिस साथ अनुरोध छ ।
          </p>
          <p class="tapsil-title">तपशिल</p>
          <!-- Table -->
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

export default landConsolidationRecommendationTemplate;
