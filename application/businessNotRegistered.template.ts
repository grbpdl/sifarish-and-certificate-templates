import { footer, style } from "../template";
import {
  globalTemplateStyle,
  header,

} from "../../templates/templateStyles";
const businessNotRegisteredTemplate = `
 <!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Template</title>
    <style>
    ${style}
    ${globalTemplateStyle}
      body {
        font-family: "Arial", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .a4-page {
        width: 210mm;
        height: 297mm;
        padding: 25mm;
        margin: auto;
        background: white;
        
        
      }
      
      .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .title p {
        margin: 2px;
      }

      .sn {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        align-items: start;
      }
      .sn p {
        margin: 0;
      }
      .date {
        display: flex;
        flex-direction: column;
        align-items: end;
      }
      .sn p {
        margin: 0;
      }
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
  </head>
  <body>
    <div class="a4-page">
        ${header}
        
        <div class="greet">
          <p>श्री ##RECOMMENDING_OFFICE##</p>
          <p>##DEPARTMENT_ADDRESS## ।</p>
        </div>
        <br />
        <br />
        <div class="subject">
          <p>विषयः व्यापार व्यवसाय संचालन नभएको सिफारिस ।</p>
        </div>
        <br />
        <br />
        
        <div class="paragraph">
          <p>
             ##BUSINESS_LOCAL_LEVEL## वडा नं. ##BUSINESS_WARD_NUMBER## को ##BUSINESS_TOLE## मा रहेको श्री ##PROPRIETOR_NAME## ले आफ्नो नाममा रहेको व्यापार व्यवसाय बन्द भएको सिफारिस गरिदिन दिनु भएको निवेदन अनुसार स्थलगत रुपमा सर्जमिन मुचुल्का समेत गरी बुझ्दा उक्त व्यक्ति/संस्था/फर्म/कम्पनीको नाममा रहेको ##BUSINESS_NAME## व्यापार व्यवसाय ##BUSINESS_NOT_REGISTERED_REASON## कारणले मिति ##BUSINESS_CLOSED_DATE## देखि संचालनमा नआएको व्यहोरा स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा १२ (२) ङ (८) बमोजिम सिफारिस गरिन्छ ।
          </p>
        </div>

        <div class="authority">
     ................................
          <p>##AUTHORITY_NAME##</p>
          <p>##AUTHORITY_DESIGNATION##</p>
        </div>
      
    </div>
  </body>
</html>
`;

export default businessNotRegisteredTemplate;
