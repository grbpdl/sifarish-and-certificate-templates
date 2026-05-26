import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

export const liveCertificateTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>जिवित रहेको सिफारिस</title>
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
          <p>जो जससँग सम्बन्धित छ ।</p>
        </div>
          <div class="subject">
            <b> बिषय : <u>जिवित रहेको सिफारिस।</u> </b>
          </div>

         <p class="paragraph">
  ##LOCAL_LEVEL## वडा नं ##WARD_NUMBER## को ##TOLE##मा स्थायी बसोबास भएका 
  श्री ##GRAND_FATHER_FIRST_NAME## ##GRAND_FATHER_MIDDLE_NAME## ##GRAND_FATHER_LAST_NAME## 
  को ##REPLACEABLE_GRANDSON_GRANDDAUGHTER## श्री ##FATHER_FIRST_NAME## ##FATHER_MIDDLE_NAME## ##FATHER_LAST_NAME## 
  को ##REPLACEABLE_SON_DAUGHTER## श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## 
  ले आफू जिवित रहेको भनी यस कार्यालयमा आफै उपस्थित भई निवेदन दिनु भएकोमा निज अहिलेको मितिसम्म 
  जिवित रहेको व्यहोरा स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा १२ (२) ङ (२२) बमोजिम सिफारिस गरिन्छ ।
</p>


         
          <br />
          <br />
          <br />
            <div style="text-align: right;">
              ..............................
              <br />
              ##AUTHORITY_NAME##
              <br />
              ##AUTHORITY_DESIGNATION##
            </div>
         
        </div>
      </section>
    </section>
  </body>
</html>
`;
