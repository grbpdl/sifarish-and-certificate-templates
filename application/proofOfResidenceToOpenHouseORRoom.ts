import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

export const proofOfResidenceToOpenHouseORRoom = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Template</title>
    <style>
      ${globalTemplateStyle}
      .a4-page {
        width: 210mm;
        min-height: 297mm;
        padding: 20mm;
        margin: auto;
        box-sizing: border-box;
        position: relative;
        font-size: 14px;
        line-height: 1.8;
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

      .ending {
        margin-top: 10vh;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
      }
      .ending p {
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
        <p>
          विषयः-
          <span>बन्द घर वा कोठा खोल्न रोहवरमा बस्ने/बसेको प्रमाणित ।</span>
        </p>
      </div>
      <div class="paragraph">
        <p>
            ##LOCAL_LEVEL## गाउँ/नगरपालिका  वडा नं  ##WARD_NUMBER## मा बस्ने
          श्री ##FIRST_NAME## ##MIDDLE_NAME##  ##LAST_NAME##  ले बन्द घर/कोठा खुलाई पाउँ भनी दिएको निवेदनमा बन्द घर वा कोठा खोल्ने सम्बन्धमा जारी गरेको सूचना
          बमोजिम सरोकारवालाहरुको उपस्थितीमा (यसै साथ संलग्न मुचुल्का बमोजिम)
          बन्द घर/कोठा खोलिएको व्यहोरा स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा
          १२(२) ङ(४) बमोजिम प्रमाणित गरिन्छ ।
        </p>
      </div>

      <div style="margin-top: 3rem; text-align: right;">
           ..................
            <br />
            ##AUTHORITY_NAME## <br />
            ##AUTHORITY_DESIGNATION##
            
          </div>
    </div>
  </body>
</html>`;
