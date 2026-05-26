import {
  globalTemplateStyle,
  tableStyles,
  header,
} from "../../templates/templateStyles";

const newBusinessPanNoTemplate = `
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
      
      
      /* Table container */
      #single-col-table table {
        margin-top: 0;
        border-collapse: collapse;
        border: 1px solid black;
        width: 100%;
      }
      /* Table cells */
      #single-col-table td {
        padding: 12px 5px !important;
        font-weight: bold;
        text-align: left !important;
        border: 1px solid black !important;
      }
      #single-col-table td span {
        font-weight: 500;
      }
      .from {
        text-align: center;
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
            <p>श्री ##DEPARTMENT_NAME##,</p>
            <p>##DEPARTMENT_DISTRICT##।</p>
          </div>
           <div class="subject">
            <b> बिषय : <u>सिफारिस गरिएको बारे।</u> </b>
          </div>
          <p class="paragraph">
            उपरोक्त सम्बन्धमा ##APPLICANT_CURRENT_MUNICIPALITY## वडा नं.
            ##CURRENT_WARD_NO## (साविक
            ##PREVIOUS_ADMINISTRATION_AREA## , वडा नं.
            ##PREVIOUS_ADMINISTRATION_AREA_WARD_NO## ) मा बस्ने
            ##SALUTATION## ##APPLICANT_NAME## ले मिति ##START_DATE##
            देखि ##BUSINESS_ADDRESS## मा ##BUSINESS_NAME## नामको व्यवसाय संचालन
            गर्दै आएको हुँदा निजलाई नियम बमोजिम स्थायी लेखा नं. उपलब्ध गरी
            दिनुहुन सिफारिस गरिएको व्यहोरा अनुरोध छ।
          </p>
          <p
            style="
              font-size: 1rem;
              text-decoration: underline;
              margin-top: 0.75rem;
            "
          >
            विवरण:
          </p>
          <!-- 1 Col Table -->
          <section id="single-col-table">
            <table>
              <tbody>
                <tr>
                  <td>
                    प्राइभेट फर्मको नाम : <span>##PRIVATE_FIRM_NAME##</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    प्राइभेट धनी (प्रोप्राइटर) को नाम / थर :
                    <span>##PROPRIETOR##</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    फर्म धनीको नागरिकता नं:
                    <span> ##APPLICANT_CITIZENSHIP_NO## </span>
                  </td>
                </tr>
                <tr>
                  <td>ठेगाना: <span> ##APPLICANT_ADDRESS## </span></td>
                </tr>
                <tr>
                  <td>फर्म ठेगाना : <span> ##FIRM_ADDRESS## </span></td>
                </tr>
                <tr>
                  <td>
                    प्राइभेट फर्म पूँजी: <span> ##PRIVATE_FIRM_CAPITAL## </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    प्राइभेट फर्म उद्देश्य:
                    <span>##PRIVATE_FIRM_OBJECTIVE##</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <p style="font-size: 1rem; margin-top: 1.5rem; font-weight: bold">
            बोधार्थ
          </p>
          <p>##FOR_INFORMATION_TO##</p>
          <br /><br /><br />
          <div class="from">
            ..............................
            <br />
            अध्यक्ष
          </div>
        </div>
      </section>
    </section>
  </body>
</html>`;

export default newBusinessPanNoTemplate;
