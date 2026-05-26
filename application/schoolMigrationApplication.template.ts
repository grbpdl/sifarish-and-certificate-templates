export const schoolMigrationApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Template</title>
    <style>
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
        border: 1px solid #000;
        
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
         <div class="title">
          <p>##MUNICIPALITY NAME##</p>
          <p>वडा नं. ##WARD NUMBER##  को कार्यालय</p>
          <p>##MUNICIPALITY ADDRESS## </p>
        </div>

        <div class="sn">
          <p>च.नं. ##COUNT2##</p>
          <p>प.सं. ##COUNT1##</p>
        </div>
        <div class="date">
          <p> ##C_DATE## </p>
        </div>
        <div class="greet">
          <p>श्री ...............गाउँ/नगर कार्यपालिकाको कार्यालय,</p>
          <p>.............................।</p>
        </div>
        <div class="subject">
          <p>विषयः- <span> विद्यालय ठाउँसारी सिफारिस ।</span></p>
        </div>
        <div class="paragraph">
          <p>
             ##MUNICIPALITY_NAME##  वडा नं. ##WARD##  मा रहेको श्री ##SCHOOL_COLLEGE_NAME## विद्यालयले ठाउँसारी गर्नका 
             लागि विद्यालय व्यवस्थापन समितिको निर्णय सहित अनुरोध गरी आएकोमा सो विद्यालयको माग बमोजिम विद्यालय 
             ठाउँसारी जान/आउनका लागि यस वडा शिक्षा समिति। वडा समितिको मिति ##DATE_OF_DECISION## को निर्णय अनुसार 
             स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा १२(२)ङ(३३) बमोजिम सिफारिस गरिन्छ ।
          </p>
         <div class="authority">
          <p>##SIGNATURE##</p>
          <p>##AUTHORITY_NAME##</p>
          <p>वडा अध्यक्ष</p>
        </div>
      
    </div>
  </body>
</html>
`