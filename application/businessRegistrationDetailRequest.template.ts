import {
  globalTemplateStyle,
  tableStyles,
  header,
} from "../../templates/templateStyles";

const businessRegistrationDetailRequestTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>व्यवसाय दर्ता विवरणको लागि अनुरोध</title>

    <style>
      ${globalTemplateStyle}
      ${tableStyles}
    </style>
  </head>

  <body>
    <section id="template">
      <section class="application_section">

        <!-- Municipality Header -->
        ${header}

        <!-- Main Letter Section -->
        <div class="main_section">

          <!-- To -->
          <div class="letter-heading">
            <p>श्री वडा अध्यक्षज्यू,</p>
            <p>##MUNICIPALITY_NAME##</p>
          </div>

          <!-- Subject -->
          <div class="subject">
            <b>विषय : <u>व्यवसाय दर्ता विवरण उपलब्ध गराइदिने सम्बन्धमा।</u></b>
          </div>

          <!-- Body -->
          <p class="paragraph">
            प्रस्तुत विषयमा
            ##MUNICIPALITY_NAME##
            को उद्योग, व्यवसाय दर्ता, नवीकरण, सञ्चालन तथा नियमन कार्यविधि
            बमोजिम हालसम्म वडा कार्यालयबाट दर्ता भएका
            सम्पूर्ण व्यवसायहरूको
            विवरण आवश्यक परेको हुँदा
            तपशिलमा उल्लेखित ढाँचाअनुसार
            व्यवसाय दर्ता विवरण तयार गरी
            पछिसम्म फरक नपर्ने गरी
            उच्च प्राथमिकता दिई
            <strong>##SOFTCOPY##</strong>
            सहित
            कार्यालयको इमेल
            <strong>##COMPANY_MAIL##</strong>
            मा पठाइदिनुहुन
            हार्दिक अनुरोध गर्दछु ।
          </p>

          <!-- Tapsil -->
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
          </section>

          <!-- CC -->
          <div class="cc-section">
            <p class="grey-sub-title">बोधार्थ : ##CC##</p>
           
          </div>

          <br /><br />

          <!-- Authority -->
          <br /><br /><br /> <br />
          <div class="from">
            <br /><br />
            ..............................<br />
            ##AUTHORITY_NAME##<br />
            ##AUTHORITY_DESIGNATION##
          </div>


        </div>
      </section>
    </section>
  </body>
</html>
`;

export default businessRegistrationDetailRequestTemplate;
