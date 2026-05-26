import { footer, style } from "../template";
import {
  globalTemplateStyle,
  header,
} from "../../templates/templateStyles";

const recommendationForHospitalTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>अस्पताल सिफारिस सम्बन्धमा</title>
    <style>
      ${style}
      ${globalTemplateStyle} 
       
      .greet {
        display: flex;
        flex-direction: column;
        align-items: start;
        height: 55px;
      }
      .greet p {
        margin: 5px;
        font-weight: bold;
      }
      .subject {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        padding: 0;
      }
     
      .subject span {
        margin: 0;
        font-weight: bold;
      }
      .paragraph {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .paragraph p {
        line-height: 1.6;
        text-align: justify;
        position: relative;
      }
      .paragraph p::after {
        content: "";
        width: 100%;
      }
      .authority {
        margin-top: 10vh;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
      }
      .authority p {
        margin: 2px;
      }
    </style>
    <body>
      <div class="a4-page">
  ${header}

  <div class="greet">
    श्री. ##HOSPITAL_NAME## <br />
    ##HOSPITAL_ADDRESS##
  </div>

  <div class="subject">
    <p>विषयः- <span> सिफारिस सम्बन्धमा ।</span></p>
  </div>

  <div class="paragraph">
    <p>
      ##PATIENT_LOCAL_LEVEL## वडा नं. ##PATIENT_WARD_NUMBER##  को ##PATIENT_TOLE## मा बस्ने 
      श्री ##PATIENT_FIRST_NAME## ##PATIENT_MIDDLE_NAME## ##PATIENT_LAST_NAME## 
      मिति ##TREATMENT_START_DATE## देखि ##DISEASE## रोगका कारण 
      ##HOSPITAL_NAME## मा उपचाररत भएकोले निजलाई निशुल्क/नियमानुसार छुट सहित स्वास्थ्य उपचार गरिदिनुहुन 
      स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा १२ (२)ङ (१०) बमोजिम सिफारिस गरिन्छ।
    </p>
  </div>

  <div class="authority">
    <p>..................</p>
    <p>##AUTHORITY_NAME##</p>
    <p>##AUTHORITY_DESIGNATION##</p>
  </div>

  ${footer}
</div>

    </body>
</html>`;

export default recommendationForHospitalTemplate;
