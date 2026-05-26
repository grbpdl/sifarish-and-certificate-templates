import { style } from "../template";
import { header, globalTemplateStyle } from "../../templates/templateStyles"

const gharJaggaNamsariApplicationTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>घर जग्गा नामसारी सिफारिस</title>
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
        <p>विषयः- <span>घर जग्गा नामसारि सिफारिस ।</span></p>
      </div>
      <div class="paragraph">
        <p>
                           निवेदक ##REPLACEABLE_HIS_HER## <strong>##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</strong>  को ##RELATIONSHIP## पर्ने <strong>श्री ##DEAD_PERSON_FIRST_NAME## ##DEAD_PERSON_MIDDLE_NAME## ##DEAD_PERSON_LAST_NAME##</strong>
                 को मिति ##DEATH_DATE## मा मृत्यु भएको हुनाले निज मृतकको नाममा दर्ता कायम रहेको तल उल्लेखित विवरणको घरजग्गा नामसारीको लागि  श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
                 ले निवेदन दिनु भएकोमा मृतकका हकदारहरु नाता प्रमाणित प्रमाण पत्रमा उल्लेखित भए अनुसार रहेकोले निज मृतकको नाममा रहेको सो घर जग्गा त्यहाको नियमानुसार हकदारहरुको नाममा नामसारीको लागि सिफारिस 
                 अनुरोध गरिन्छ । 
                </p>
              </div>
                        <section class="table-container">
              <div style="text-align:center; text-decoration:underline;">##TABLE_HEADER##</div>
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
              <br />
          </section>
          <div class="authority">
            <p>___________________</p>
            <p>##AUTHORITY_NAME##</p>
            <p>वडा अध्यक्ष</p>
          </div>
        </div>
      </body>
    </html>`;

export default gharJaggaNamsariApplicationTemplate;
