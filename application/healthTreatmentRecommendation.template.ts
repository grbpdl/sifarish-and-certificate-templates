import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

export const healthTreatmentRecommendationTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>स्वास्थ्य उपचार सिफारिस </title>
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
        <div class="greet">
          <p>श्री ##HOSPITAL_NAME##, </p>
          <p>##HOSPITAL_ADDRESS##, नेपाल</p>
        </div>
        <div class="subject">
          <p>विषयः- <span>स्वास्थ्य उपचार सिफारिस ।</span></p>
        </div>
        <div class="paragraph">
         <p>
  ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER## अन्तर्गत ##TOLE## मा स्थायी रूपमा बसोबास गर्ने
  श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
  मिति ##TREATMENT_START_DATE## देखि
  ##DISEASE_NAME## रोगको उपचारका लागि
  ##TREATMENT_LOCATION## मा उपचाररत रहनु भएको हुँदा
  निजलाई नियमानुसार निःशुल्क वा छुट सहित
  आवश्यक स्वास्थ्य उपचार उपलब्ध गराइदिनुहुन
  स्थानीय सरकार सञ्चालन ऐन, २०७४ को
  दफा १२(२) ङ (१०) बमोजिम
  सिफारिस गरिन्छ ।
</p>
            </div>

            <div style="text-align:right">
            <br />
            <br />
            <!-- Authority Section -->
              ..............................
              <br />
              ##AUTHORITY_NAME##
              <br />
              ##AUTHORITY_DESIGNATION##
            </div>
      
    </div>
  </body>
</html>`;
