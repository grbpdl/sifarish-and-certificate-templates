import { globalTemplateStyle, tableStyles, header } from "../templateStyles";
const shopAgriculturePoultryFarmRegistrationTemplate = `
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
      div .heading-lg {
        text-align: center;
        font-size: 1.2rem !important;
        margin-bottom: 1.2rem;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <section id="template">
      <section class="application_section">
        <div class="main_section">
          <div>
            <p class="subject">
                पसल, कृषि, पंक्षी फर्म/दर्ता मुचुल्का
              </p>
          </div>
          <p class="paragraph">
           लिखितम् ##APPLICANT_CURRENT_PROVINCE##, ##APPLICANT_CURRENT_DISTRICT## जिल्ला ##APPLICANT_CURRENT_MUNICIPALITY##, वडा नं. ##CURRENT_WARD_NO## साविक ##PREVIOUS_ADMINISTRATOR_AREA##, वडा नं. ##PREVIOUS_WARD_NO## बस्ने ##GRANDPARENT_SALUTATION## ##GRANDPARENTNAME## को ##RELATION_WITH_GRANDPARENT_DROPDOWN## ##PARENT_SALUTATION## ##PARENT_NAME## को ##RELATION_WITH_PARENT_DROPDOWN## वर्ष ##PARENT_CHILD_AGE## को ##PARENT_CHILD_SALUTATION## ##PARENT_CHILD_NAME## ले ##PARENT_CHILD_METROPOLITAN## वडा नं. ##PARENT_CHILD_WARD_NUMBER## साविक वडा नं. ##PREVIOUS_ADMINISTRATION_AREA## को ##LAND_OWNER## नाममा जग्गा धनी प्रमाण पुर्जा भएको पूर्व ##EAST_LAND_OWNER## को जग्गा, पश्चिम ##WEST_LAND_OWNER_NAME## को जग्गा, उत्तर ##NORTH_LAND_OWNER_NAME## को जग्गा र दक्षिण ##SOUTH_LAND_OWNER_NAME## को जग्गा यति चार किल्ला भएको कि.नं. ##KITTA_NO## को जग्गामा ##FIRM_NAME## उधोग संचालन गर्न पाउँ भनी यस वडा कार्यालयमा मिति ##APPLICATION_SUBMISSION_DATE## मा दिइएको निवेदन अनुसार कसैलाई बाधा विरोध पर्न नपर्ने सम्बन्धमा बुझ्न खटाई आउनु भएकोमा उक्त कित्तामा ##FIRM_NAME## उधोग संचालन गर्दा सार्वजनिक महत्वको स्थान, विधालय, मठमन्दिर र सधियारहरुलाई समेत वाधा नपर्ने भएको हुदा सर्जमिनमा उपस्थित भई उधोग राख्न सहमति भएका छौँ । पछी कुनै वाधा विरोध पर्यो भनि उजुरी गर्ने छैनौँ भनि तपशिलका व्यक्तिहरुले सहिछाप गरी दियौँ ।
          </p>
           <p class="paragraph" style="margin: 1.90rem 0rem;">
            इति शम्वत् ##YEAR## साल ##MONTH## गते ##WEEKDAY## रोज शुभम् ##DAY_ON##।
           </p>
          <p class="tapsil-title" style="font-size: 1rem; font-weight: bold;">तपशिल</p>
<p>१) पुर्व तर्फको सधियार वर्ष ##TAPISIL_EAST_PERSON_AGE## का श्री ##TAPSIL_EAST_PERSON_NAME##</p>
<p>२) पश्चिम तर्फको सधियार वर्ष ##TAPSIL_WEST_PERSON_AGE## का श्री ##TAPSIL_WEST_PERSON_NAME##</p>
<p>३) उत्तर तर्फको सधियार वर्ष ##TAPSIL_NORTH_PERSON_AGE## का श्री ##TAPSIL_NORTH_PERSON_NAME##</p>
<p>४) दक्षिण तर्फको सधियार वर्ष ##TAPSIL_SOUTH_PERSON_AGE## का श्री ##TAPSIL_SOUTH_PERSON_NAME##</p>
           <p class="tapsil-title" style="font-size: 1rem; font-weight: bold;"> रोहवर</p>
<p>##ROHABAR_MUNICIPALITY## नं. ##ROHABAR_WARD_NO## का ##AUTHORIZED_PERSON_DESIGNATION## ##ROHABAR_PERSON_TITLE##  ##AUTHORIZED_PERSON##।</p>
        </div>
      </section>
    </section>
  </body>
</html>
`;
export default shopAgriculturePoultryFarmRegistrationTemplate;
