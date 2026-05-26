import { globalTemplateStyle, tableStyles, header } from "../templateStyles";

const taxClearanceCertificateTemplate = `
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
            <p>श्री ##SECOND_PARTY_NAME##।</p>
          </div>
          <div class="subject">
            <b> बिषय : <u>कर चुक्ता प्रमाण पत्र सम्बन्धमा।</u> </b>
          </div>
          <p class="paragraph">
            प्रस्तुत बिषयमा ##MUNICIPALITY## ##WARD_NUMBER## मा बस्ने प्रथम
            ##FIRST_PARTY_SALUTATION## ##FIRST_PARTY_NAME## र दोस्रो
            ##SECOND_PARTY_SALUTATION## ##SECOND_PARTY_NAME## पक्ष बिच भएको
            सम्झौता बमोजिम ##INCOME_TAX_YEAR_DETAIL## को घर बहलकर निम्नानुसार
            दाखिला भएको यो करचुक्ताको प्रमाण पत्र दिइएको छ।
          </p>
          <p
            style="
              font-size: 1.2rem;
              text-decoration: underline;
              margin-top: 0.2rem;
            "
          >
            विवरण
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
          <br /><br />
          <div class="from">_____________________ वडा अध्यक्ष</div>
        </div>
      </section>
    </section>
  </body>
</html>
`;
export default taxClearanceCertificateTemplate;
