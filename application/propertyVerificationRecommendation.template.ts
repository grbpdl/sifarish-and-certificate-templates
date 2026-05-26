import {
  globalTemplateStyle,
  tableStyles,
  header,
} from "../../templates/templateStyles";

const propertyVerificationRecommendation = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Request For Business Registration Detail</title>
    <link rel="stylesheet" href="./global.css" />
    <style>
       ${globalTemplateStyle}
      ${tableStyles} 
    </style>
  </head>
  <body>
    <section id="template">
      <section class="application_section">
        ${header}
        <div class="main_section">
          <div class="letter-heading">
            <p>श्री ##REFERRING_TO##</p>
            <p>##DEPARTMENT_ADDRESS##, ##DEPARTMENT_DISTRICT##</p>
          </div>
          <div class="subject">
            <b> बिषय : <u>सिफारिस गरिएको वारे।</u> </b>
          </div>
          <p class="paragraph">
            उपरोक्त सम्बन्धमा साविक जिल्ला ##APPLICANT_PREVIOUS_DISTRICT##
            ##APPLICANT_PREVIOUS_LOCAL_LEVEL## वडा नं.
            ##APPLICANT_PREVIOUS_WARD_NUMBER## भै हाल यस
            ##APPLICANT_CURRENT_LOCAL_LEVEL## वडा नं.
            ##APPLICANT_CURRENT_WARD_NUMBER## मा बस्ने
            ##GRANDPARENTNAME## को
            ##RELATION_WITH_GRANDPARENT_DROPDOWN##
            ##APPLICANT_FATHER_NAME## को
            ##RELATION_WITH_PARENT_DROPDOWN## ##SALUTATION##
            ##APPLICANT_NAME## को नाममा नम्बरी दर्ता रहेको तपसिलको जग्गामा घर
            ##HOUSE_OR_NOT## भए घरको किसिम
            ##HOUSE_TYPE## लम्बाई ##HOUSE_LENGTH##
            ##HOUSE_LENGTH_UNIT## चौडाई ##HOUSE_WIDTH##
            ##ROAD_WIDTH_UNIT## को र उक्त घर जग्गामा
            ##ROAD_TYPE## ##ROAD_WIDTH## ##ROAD_WIDTH_UNIT##
            चौडा बाटो समेत ##ROAD_LOCATED_OR_NOT## भएकोले सिफारिस साथ
            सादर अनुरोध गरिन्छ।
          </p>
          <p class="tapsil-title">तपशिल</p>
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
          <br /><br />
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

export default propertyVerificationRecommendation;
