import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

export const careRecommendationTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>अशक्त, असहाय तथा अनाथको पालन पोषणको लागि सिफारिस ।</title>
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
           जो जससँग सम्बन्धित छ । 
          </div>
          <div class="subject">
            <b> बिषय : <u>अशक्त, असहाय तथा अनाथको पालन पोषणको लागि सिफारिस ।</u> </b>
          </div>
<p class="paragraph">
  ##LOCAL_LEVEL##  वडा नं ##WARD_NUMBER##मा बसोबास गर्ने ##APPLICANT_AGE## वर्ष को श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## ##PERSON_TYPE## रहेको र निजको नजिकको पालन पोषण गर्ने कोही व्यक्ति नभएको व्यहोरा स्थलगत सर्जमिन मुचुल्काबाट प्रमाणित भएकोले निजको पालन पोषणको लागि स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा १२ (२) ङ (३०) बमोजिम सिफारिस गरिन्छ ।
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
