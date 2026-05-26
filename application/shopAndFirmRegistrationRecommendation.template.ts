import { globalTemplateStyle, tableStyles, header } from "../templateStyles";
const shopAndFirmRegistrationRecommendationTemplate = `
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
          <div class="letter-heading" >
            <p>श्री ##DEPARTMENT_NAME##,</p>
            <p>##DEPARTMENT_DISTRICT##</p>
          </div>
          <div class="subject">
            <b>
              बिषय:<u>सिफारिस गरिएको ।</u>
            </b>
          </div>
          <p style="margin: 1rem 0 0.25rem 0">महोदय,</p>
          <p class="paragraph">
            प्रस्तुत विषयमा ##MUNICIPALITY_DISTRICT## जिल्ला ##MUNICIPALITY_NAME## वडा
            नं. ##WARD## साविक ##FORMER_ADMINISTRATIVE_AREA## , वडा नं.
            ##APPLICANT_PREVIOUS_WARD_NO## निवासी ##SALUTATION##
            ##GRANDPARENT_NAME## को ##RELATIONSHIP##
            ##SALUTATION1## ##GRANDCHILDREN_NAME## को
            ##RELATIONSHIP1## वर्ष ##FAMILY_MEMBER_AGE##
            को ##SALUTATION2## ##FAMILY_MEMBER_NAME## ले यस
            ##FORMER_WARD_NO_OF_FAMILY_MEMBER## नं. वडा साविक
            ##FORMER_MUNICIPALITY## वडा नं. ##CURRENT_WARD_NO## , अन्र्तगत
            ##FAHER_NAME## को जग्गा धनी प्रमाण पुर्जा भएको कि.नं.
            ##KITTA_NUMBER## करिव ##ROPANI## रोपनी क्षेत्रफल को जग्गामा
            ##FIRM_NAME## संचालन गर्नका लागी सिफारिस गरि पाउँ भनी यस ##FIRM_WARD1##
            नं. वडा कार्यालयमा निवेदन दिनु भएकोले उक्त ##FIRM_NAME## सन्चालन
            गर्दा कुनै पनि सार्वजनिक महत्वको स्थान, विद्यालय,मठ मन्दिर र
            सधियारहरुलाई समेत वाधा नपर्ने तथा वातावरण प्रदुषण समेत नहुने भएको
            हुँदा सधियारहरुको सर्जमिन मुचुल्का समेत यसै सिफारिस साथ संलग्न गरी
            पठाईएको छ । निजको नाममा उक्त ##FIRM_NAME## दर्ता गरिदिनु हुन सिफरिस
            साथ अनुरोध छ ।
          </p>
          <br /><br /><br />
          <div class="from">_____________________ वडा अध्यक्ष</div>
        </div>
      </section>
    </section>
  </body>
</html>
`;

export default shopAndFirmRegistrationRecommendationTemplate;
