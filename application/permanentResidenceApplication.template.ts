import {
  globalTemplateStyle,
  header,
  tableStyles
} from "../../templates/templateStyles";

const permanentResidenceApplicationTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Temporary Residence Application Template</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyles}
      .a4-page {
        width: 210mm;
        min-height: 297mm;
        padding: 20mm;
        margin: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
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
        <p>जो जसोसँग सम्बन्धित छ ।</p>
      </div>
      <div class="subject">
        <p>विषयः- <span>अस्थायी बसोबास सिफारिस ।</span></p>
      </div>
      <div class="paragraph">
        <p>
        <br />
          श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
          ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER##, जिल्ला: ##DISTRICT##
          अन्तर्गत विगत मिति ##LIVING_START_DATE## देखि स्थायी बसोबास गर्दै आउनु भएको व्यहोरा सिफारिस साथ अनुरोध गरिन्छ |
        </p>
      </div>

      <div class="paragraph-1">
        <p><i>बसोबास गर्नेको ना.प्र.नं: ##CITIZENSHIP_NUMBER## / जिल्ला ##DISTRICT## / जारी मिति ##CITIZENSHIP_ISSUED_DATE##</i></p>
      </div>
      <div class="paragraph-1">
        <p><i>बसोबास गर्नेको स्थायी ठेगाना: जिल्ला ##CURRENT_DISTRICT##, ##CURRENT_LOCAL_LEVEL## वडा नं. ##CURRENT_WARD_NUMBER##, प्रदेश: ##CURRENT_PROVINCE##</i></p>
      </div>

      <section class="table-container">
        <br />
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

      <br />
   

      <div class="authority">
            <p>##SIGNATURE##</p>
            <p>##AUTHORITY_NAME##</p>
            <p>वडा अध्यक्ष</p>
          </div>
    </div>
  </body>
</html>`;

export default permanentResidenceApplicationTemplate;
