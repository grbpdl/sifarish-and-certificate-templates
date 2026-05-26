import { footer, style } from "../template";
import {
  globalTemplateStyle,
  header,

} from "../../templates/templateStyles";

const differentDateOfBirthTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title> जन्म मिति संशोधन सिफारिस || सिफारिस </title>
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
      .date {
        display: flex;
        flex-direction: column;
        align-items: end;
      }
      .date p {
        margin: 0;
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
      .letter {
        text-align: justify;
        line-height: 1.6;
        margin-bottom: 20px;
      }
      .center-title {
        text-align: center;
        text-decoration: underline;
        margin: 20px 0;
      }
      .flex {
        display: flex;
        justify-content: space-between;
      }
      .flex div {
        flex: 1;
      }
      .authority {
        position: absolute;
        bottom: 25mm;
        right: 25mm;
        text-align: center;
      }
      .stamp {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-20%, -50%);
        z-index: 1;
      }
      table {
         width: 100%;
         border-collapse: collapse;
       }
 
       th,
       td {
         border: 1px solid black;
         padding: 20px 10px;
         text-align: center;
         font-weight: 500;
       }
    </style>
  </head>
  <body>
    <div class="a4-page">
${header}
      <div class="greet">
         <p>जो जससँग सम्बन्धित छ ।</p>
       </div>
       <div class="subject">
         <p>
           विषयः-
           <span
             >जन्म मिति संशोधन सिफारिस ।।</span
           >
         </p>
       </div>
      <div class="letter">

        <p>
         ##LOCAL_LEVEL##   वडा नं. ##WARD_NUMBER## बस्ने 
         श्री   ##FIRST_NAME##
         ##MIDDLE_NAME##
         ##LAST_NAME##ले जन्म मिति संशोधन गरिदिन सिफारिस गरिदिन दिनु भएको
          निवेदन अनुसार श्री ##GRAND_FATHER_FIRST_NAME## ##GRAND_FATHER_MIDDLE_NAME## ##GRAND_FATHER_LAST_NAME##  को ##REPLACEABLE_GRANDSON_GRANDDAUGHTER## श्री   ##FATHER_FIRST_NAME## ##FATHER_MIDDLE_NAME## ##FATHER_LAST_NAME## 
          को ##REPLACEABLE_SON_DAUGHTER## श्री  ##FIRST_NAME##
          ##MIDDLE_NAME##
          ##LAST_NAME##को जन्म मिति ##REASON_FOR_MODIFICATION## 
          कारणले संशोधन गर्नुपर्ने भएकोले जन्म दर्ता/शैक्षिक प्रमाणपत्र÷नेपाली नागरिकता प्रमाण बमोजिम हुने गरी
           एउटै कायम गर्न देहाय बमोजिम हुने गरी निजको जन्म मिति संशोधन गरिदिनुहुन स्थानीय
          सरकार सञ्चालन ऐन, २०७४ को दफा १२(२)ङ(७) बमोजिम सिफारिस गरिन्छ ।
        </p>


      </div>

      <div>
         <p>देहाय       </p>
         <table>
           <thead>
             <tr>
               <th >फरक भएको जन्म मिति               </th>
               <th >कायम गर्नुपर्ने जन्म मिति

               </th>
               <th >कायम गर्ने आधार

               </th>
             </tr>
           
           </thead>
           <tbody>
             <tr>
               <td>##DIFFERENT_DATE_OF_BIRTH##</td>
               <td>##DATE_OF_BIRTH## </td>
               <td>##REASON_FOR_MODIFICATION##   </td>
             </tr>
           </tbody>
         </table>
       </div>

     
       <div class="authority">
         <p>##SIGNATURE##</p>
         <p>##AUTHORITY_NAME##</p>
         <p> ##AUTHORITY_DESIGNATION##</p>
       </div>
${footer}
    </div>
  </body>
</html>
`;

export default differentDateOfBirthTemplate;
