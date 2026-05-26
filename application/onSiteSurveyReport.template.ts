import {
  globalTemplateStyle,
  tableStyles,
  header,
} from "../../templates/templateStyles";

const onSiteSurveyReportTemplate = `
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
            <b> बिषय : <u>स्थलगत निरीक्षण सम्बन्धमा।</u> </b>
          </div>
          <p class="paragraph">
            प्रस्तुत विषयमा ##REGISTRANT_MUNICIPALITY##
            ##MUNICIPALITY_DROPDOWN## वडा नं. ##REGISTRANT_WARD_NO## बस्ने
            श्री ##REGISTRANT_NAME## को नाउँमा दर्ता भएको चितवन साविक
            ##FORMER_LAND_MUNICIPALITY## वडा नं. ##FORMER_LAND_WARD_NUMBER## हो
            हाल नागार्जुन नगरपालिका वडा नं ##CURRENT_LAND_WARD_NUMBER## मा पर्ने
            तपसिल बमोजिम विवरण भएको जग्गा ##LAND_LEGISLATOR_MUNICIPALITY##
            ##BUSINESS_CURRENT_MUNICIPALITY_DROPDOWN## वडा नं.
            ##LAND_LEGISLATOR_WARD_NUMBER## बस्ने ##LAND_LEGISLATOR_NAME## ले
            पारीत गरी लिने भनी प्राप्त निवेदनको आधारमा तपसिलको व्यहोरा सत्य भएको
            बुझिएको हुँदा सिफारिसको साथ अनुरोध गरिन्छ।
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
</html>

`;

export default onSiteSurveyReportTemplate;
