import {
  globalTemplateStyle,
  tableStyles,
  header,
} from "../../templates/templateStyles";

const houseEstablishmentTemplate = `

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
            <p>##RECEIVER_NAME##</p>
            <p>##RECEIVER_ADDRESS##</p>
          </div>
          <div class="subject">
            <b>बिषय: <u>घर कायम सिफारिश सम्बन्धमा ।</u> </b>
          </div>
          <p class="paragraph">
            प्रस्तुत विषयमा जिल्ला ##APPLICANT_DISTRICT## वडा नं.
            ##APPLICANT_WARD_NUMBER## बस्ने ##APPLICANT_NAME## निवेदन अनुसार
            निजको नाममा दर्ता प्रमाणित रहेको तपसिलमा उल्लेखित कित्ता जग्गामा
            बनेको घरको मिति ##HOUSE_CONSTRUCTION_DATE## मा निर्माण इजाजत लिई
            मिति ##HOUSE_PERMISSION_DATE## मा ##HOUSE_CERTIFICATE_NAME## प्रमाण
            पत्र लिई सकेकोले श्रेस्ता पूर्जामा घर कायम गरी पाऊ भनी यस वडा
            कार्यालयमा निवेदन दिएको हुँदा निवेदकको मागबमोजिम तहाँ कार्यालयको
            नियमानुसार श्रेस्तामा घर कायम हुने व्यवस्थाको लागि सिफारिश साथ
            अनुरोध गरिन्छ ।
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

export default houseEstablishmentTemplate;
