import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

export const relationshipWithDeceasedTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>मृतक संगको नाता प्रमाणित</title>
    <link rel="stylesheet" href="./global.css" />
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
          
<div class="greet">
          <p>जो जससँग सम्बन्धित छ ।</p>
        </div>
          <div class="subject">
            <b> बिषय : <u>मृतक संगको नाता प्रमाणित।</u> </b>
          </div>

            <p class="paragraph">
            ##LOCAL_LEVEL## वडा नं ##WARD_NUMBER## अन्तर्गत स्थायी बसोबास भएका श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##ले तपसिलमा उल्लिखित व्यक्तिहरुमध्ये ##DEAD_LIST## नाताको व्यक्ति मृतक भएकोले मृत्युदर्ताको प्रमाणपत्र सहित मृतकसँगको नाता सिफारिसका लागि यस वडा कार्यालयमा दिनु भएको निवेदन अनुसार निवेदक, मृतक र अन्य व्यक्तिहरुबीच तपसिल बमोजिम नाता रहेको व्यहोरा स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा १२ (२) ङ (२१) बमोजिम सिफारिस गरिन्छ ।
            </p>

         
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
              ##AUTHORITY_NAME##
              <br />
              ##AUTHORITY_DESIGNATION##
            </div>
          </div>
        </div>
      </section>
    </section>
  </body>
</html>
`;
