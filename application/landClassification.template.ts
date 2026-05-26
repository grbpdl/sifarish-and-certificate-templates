import {
  globalTemplateStyle,
  tableStyles,
  header,
} from "../../templates/templateStyles";

const landClassificationTemplate = `
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
            <p>श्री ##FIRST_DEPARTMENT_NAME##, ##FIRST_DEPARTMENT_ADDRESS##</p>
            <p>श्री ##SECOND_DEPARTMENT_NAME##, ##SECOND_DEPARTMENT_ADDRESS##</p>
          </div>
          <div class="subject">
            <b> बिषय : <u>जग्गा वर्गीकरण सिफारिस सम्बन्धमा।</u> </b>
          </div>
          <p class="paragraph">
            उपरोक्त सम्बन्धमा यस ##LOCAL_GOVERNMENT_NAME## स्थानीय भू-उपयोग
            परिषद तथा नगरकार्यपालिकाको ##DECISION_DATE## गतेको निर्णयबाट स्विकृत
            भई जारी भएको ##LOCAL_GOVERNMENT_NAME## को भू-उपयोग वर्गीकरण मापदण्ड
            ##MAPDANDA_YEAR## मुताविक निवेदकको जग्गा निम्न क्षेत्रमा रहेको
            व्यहोरा जानकारीको लागि अनुरोध छ।
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

export default landClassificationTemplate;
