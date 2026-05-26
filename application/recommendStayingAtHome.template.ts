import { footer, header, style } from "../template";

const recommendStayingAtHomeTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Template</title>
    <style>
      ${style}
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

        height: 120px;
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
      .paragraph-1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 3vh;
      }
      .table-container {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin: auto;
      }
      th,
      td {
        border: 1px solid #000;
        text-align: center;
        padding: 16px;
      }
      th {
        background-color: #f2f2f2;
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
        <p>विषयः- <span> घर कायम सिफारिस ।</span></p>
      </div>
      <div class="paragraph">
        <p>
            ##MUNICIPALITY_NAME##   वडा नं. ##WARD##
            (साबिकको ठेगाना ##OLD_ADDRESS##) अन्तर्गत
            श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
            को नाममा त्यस कार्यालयमा श्रेस्ता दर्ता कायम रहेको निम्नमा उल्लेखित जग्गामा घर निर्माण गरि 
            यस वडा कार्यालयमा निजले चालु आर्थिक वर्ष सम्मको घरजग्गा कर / एकीकृत सम्पत्ति कर चुक्ता गरिसकेको हुनाले निजको जग्गा धनी 
            प्रमाणपुर्जामा घर कायम गरिदिन हुन सिफारिस साथ अनुरोध गरिन्छ ।                               
          </p>
        </div>
        <section class="table-container">
      <div style="text-align:center; text-decoration:underline">घर कायम गर्नु पर्ने जग्गाको विवरण ।</div>
        <table>
        <thead>
           <tr>
               ##TABLE_HEADINGS##
           </tr>
         </thead>
         <tbody>
           ##TABLE_BODY##
         </tbody>
        </table>
       </section>
       <div class="authority">
            <p>##SIGNATURE##</p>
            <p>##AUTHORITY_NAME##</p>
            <p>वडा अध्यक्ष</p>
          </div>

          ${footer}
    </div>
  </body>
</html>`;

export default recommendStayingAtHomeTemplate;
