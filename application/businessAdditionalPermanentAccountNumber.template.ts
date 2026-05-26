import {
  globalTemplateStyle,
  tableStyles,
  header,
} from "../../templates/templateStyles";

const businessAdditionalPermanentAccountNumberTemplate = `
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
            <p>श्री ##DEPARTMENT_NAME## ,</p>
            <p>##DepartmentDistrict## ।</p>
          </div>
           <div class="subject">
            <b> बिषय : <u>सिफारिस गरिएको बारे।</u> </b>
          </div>
          <p class="paragraph">
            उपरोक्त विषयमा ##APPLICANT_CURRENT_MUNICIPALITY## वडा नं.
            ##APPLICANT_CURRENT_WARD_NUMBER## (साविक
            ##PREVIOUS_MUNICIPALITY_VDC## , वडा नं.
            ##APPLICANT_PREVIOUS_WARD_NUMBER## ) मा बस्ने
            ##APPLICANT_SALUTATION## ##APPLICANT_NAMEE## ले दिएको निवेदन अनुसार
            ##BUSINESS_ADDRESS## पान नं. ##BUSINESS_PAN_NUMBER## मा
            ##BUSINESS_TYPE## संचालन गरी आएकोमा हाल उक्त पान नं. मा कारोबार थप
            गरी ##BUSINESS_EXTENSION_TYPE## सहितको व्यवसाय संचालन गरी आएको हुँदा
            कारोबार थपको लागि सिफारिस पाऊँ भनी दिनु भएको निवेदन अनुसार निजलाई
            उक्त व्यवसायमा कारोबार थप संचालनको लागि नियम अनुसार गरी दिनुहुन
            सिफारिस साथ अनुरोध छ। <br />
          </p>
          <p style="font-size: 1rem; margin-top: 0.2rem; font-weight: bold">
            बोधार्थ
          </p>
          ##NOTE##
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

export default businessAdditionalPermanentAccountNumberTemplate;
