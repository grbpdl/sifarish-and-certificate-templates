import globalTemplateStyle
from "../../templates/applicationLetterStyles/letterGlobalStyle";

import  {tableStyles}  from "../../templates/templateStyles";
export const houseConstructionCompletionTemplate = `
<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>घर निर्माण सम्पन्नताको सिफारिस निवेदन</title>
  <style>
    ${globalTemplateStyle}
    ${tableStyles}
  </style>
</head>

<body>
  <section id="template">
    <section class="application_section">

      <div class="main_section">

        <div style="display:flex; justify-content:space-between;">
          <div>
            श्री ##LOCAL_LEVEL##<br/>
            वडा कार्यालय<br/>
            ##DISTRICT##
          </div>
          <div>
            मिति: ##APPLICATION_DATE##
          </div>
        </div>

        <br/>

        <div class="subject" style="text-align:center;">
          <b>विषय: <u>घर सम्पन्नताको सिफारिस गरि पाउँ ।</u></b>
        </div>

        <br/>

        <p class="paragraph">
          उपरोक्त विषयमा
          ##DISTRICT## जिल्ला
          ##LOCAL_LEVEL## वडा नं.
          ##WARD_NUMBER##
          बस्ने
          म/हामी
          ##FIRST_NAME##
          ##MIDDLE_NAME##
          ##LAST_NAME##
          को नाममा मालपोत कार्यालय
          ##MALPOT_ADDRESS##
          मा दर्ता कायम रहेको साविक
          ##OLD_LOCAL_LEVEL##
          वडा नं.
          ##OLD_WARD_NUMBER##
          कि.नं.
          ##KITTA_NO##
          क्षेत्रफल
          ##TOTAL_AREA##
          भएको जग्गामा
          ##STOREYS_BUILT##
          तल्ले घर
          मिति
          ##CONSTRUCTION_COMPLETATION_DATE##
          मा निर्माण कार्य सम्पन्न भएको हुँदा
          घर निर्माण सम्पन्नताको प्रमाणपत्र
          पाउनका लागि
          सिफारिस गरिदिनुहुन
          यो निवेदन पेश गरेको छु/छौं ।
        </p>

        <br/><br/>

        <div style="display:flex; justify-content:flex-end;">
          <div>
            निवेदक:<br/>
            नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br/>
            हस्ताक्षर: ......................<br/>
            ठेगाना: ##LOCAL_LEVEL##, वडा नं. ##WARD_NUMBER##
          </div>
        </div>

        <br/><br/>

      </div>
    </section>
  </section>
</body>
</html>
`;