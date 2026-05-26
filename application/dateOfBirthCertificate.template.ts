import { footer, header, style } from "../template";

const dateOfBirthCertificateTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>जन्म मिति प्रमाणित</title>
    <style>
     ${style}
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
          <p>जो जसोसँग सम्बन्धित छ।</p>
        </div>
        <div class="subject">
          <p>विषयः- <span>जन्म मिति प्रमाणित ।</span></p>
        </div>
        <div class="paragraph">
  <p>
    ##LOCAL_LEVEL## वडा नं ##WARD_NUMBER## बस्ने श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## 
    ले जन्म मिति प्रमाणित गरिदिन दिनु भएको निवेदन अनुसार 
    श्री ##GRAND_FATHER_FIRST_NAME## ##GRAND_FATHER_MIDDLE_NAME## ##GRAND_FATHER_LAST_NAME## को ##REPLACEABLE_GRANDSON_GRANDDAUGHTER## श्री ##FATHER_FIRST_NAME## ##FATHER_MIDDLE_NAME## ##FATHER_LAST_NAME## को ##REPLACEABLE_SON_DAUGHTER##
    श्री/सुश्री ##CHILD_FIRST_NAME## ##CHILD_MIDDLE_NAME## ##CHILD_LAST_NAME## को नेपाली नागरिकता प्रमाणपत्र नं ##CHILD_CITIZENSHIP_NUMBER## /
    राहदानी (राहदानी नं ##CHILD_PASSPORT_NUMBER##, जारी मिति ##CHILD_PASSPORT_ISSUE_DATE## 
    र स्थान ##CHILD_PASSPORT_ISSUE_DISTRICTT##) बमोजिम मिति ##CHILD_DATE_OF_BIRTH## गते जन्म भएको व्यहोरा 
    स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा १२ (२) ङ (७) बमोजिम प्रमाणित गरिन्छ।
  </p>
</div>

        <div class="authority">
        .................................
         <p>##AUTHORITY_NAME##</p>
         <p>##AUTHORITY_DESIGNATION##</p>
       </div>
      ${footer}
    </div>
  </body>
</html>
`;

export default dateOfBirthCertificateTemplate;
