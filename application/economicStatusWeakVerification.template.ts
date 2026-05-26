import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

export const economicStatusVerificationWeakTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>आर्थिक अवस्था कमजोर प्रमाणित।</title>
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
            <p>श्री ##OFFICE_NAME##</p>
            <p>##OFFICE_ADDRESS##</p>
          </div>
          <div class="subject">
            <b> बिषय : <u>आर्थिक अवस्था कमजोर/विपन्नता प्रमाणित।</u> </b>
          </div>
<p class="paragraph">
  ##LOCAL_LEVEL## वडा नं ##WARD_NUMBER## मा स्थायी ठेगाना भएका 
  वर्ष ##APPLICANT_AGE## को श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## ले 
  आफ्नो आर्थिक अवस्था कमजोर/विपन्नता भएकोले प्रमाणित गरिदिन निवेदन पेश गर्नुभएकोमा, 
  निजले यस ##LOCAL_LEVEL##लाई तिरेको कर, घर जग्गाको विवरण, 
  अन्य आयका आधारमा निजको आर्थिक अवस्था कमजोर/निज विपन्न भएको व्यहोरा 
  स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा १२ (२) ङ (३२) बमोजिम प्रमाणित गरिन्छ।
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
              ##AUTHORITY_NAME##
              <br />
              ##AUTHORITY_DESIGNATION##
            </div>
          </div>
         
        </div>
      </section>
    </section>
  </body>
</html>
`;
