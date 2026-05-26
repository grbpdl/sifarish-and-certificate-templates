import { globalTemplateStyle, tableStyles, header } from "../templateStyles";

const nepaliCitizenshipCertificateInHusbandsNameTemplate = `

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
            <p>श्री ##TERRITORY## प्रशासन कार्यालय,</p>
            <p>##DEPARTMENT_DISTRICT## ।</p>
          </div>
           <div class="subject">
            <b>बिषय: <u>सिफारिस सम्बन्धमा ।</u> </b>
          </div>
          <p class="paragraph">
            प्रस्तुत विषयमा यस ##APPLICANT_LOCAL_LEVEL## वडा नं.
            ##APPLICANT_WARD_NO## , नं. बजार निवासी ##APPLICANT_NAME## को
            श्रीमति ##APPLICANT_WIFE_NAME## ले विवाह पूर्व
            ##TERRITORY1## प्रशासन कार्यालय
            ##WIFE_CITIZENSHIP_ISSUING_DISTRICT## बाट ना.प्र.नं.
            ##WIFE_CITIZENSHIP_NO## को नेपाली नागरिकताको प्रमाण-पत्र मिति
            ##WIFE_CITIZENSHIP_ISSUED_DATE## मा लिनु भई निजको विवाह
            ##APPLICANT_DISTRICT## जिल्ला ##APPLICANT_LOCAL_LEVEL## वडा नं.
            ##APPLICANT_WARD_NO## निवासी ##APPLICANT_NAME## संग मिति
            ##MARRIAGE_DATE## मा भएको हुँदा निजलाई पतिको थर र ठेगाना राखी नेपाली
            नागरिकताको प्रमाण-पत्र उपलब्ध गराई दिन हुन सिफारिस साथ अनुरोध छ ।
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

export default nepaliCitizenshipCertificateInHusbandsNameTemplate;
