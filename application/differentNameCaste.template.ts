import { header, globalTemplateStyle } from "../../templates/templateStyles";
import { style } from "../template";


const differentNameCasteTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Template</title>
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
        <p>जो जससँग सम्बन्धित छ ।</p>
      </div>
      <div class="subject">
        <p>
          विषयः-
          <span
            >कुनै व्यक्तिको नाम थर जन्ममिति तथा वतन फरक फरक भएको भए सो व्यक्ति
            एउटै हो भन्ने सिफारिस ।</span
          >
          
        </p>
      </div>
      <div class="paragraph">
        <p>
          <br /> ##LOCAL_LEVEL##  वडा नं.  ##WARD_NUMBER## को ##TOLE## मा निवासी
          श्री ##GRAND_FATHER_FIRST_NAME## ##GRAND_FATHER_MIDDLE_NAME## ##GRAND_FATHER_LAST_NAME## को ##REPLACEABLE_GRANDSON_GRANDDAUGHTER## श्री
          ##FATHER_FIRST_NAME## ##FATHER_MIDDLE_NAME## ##FATHER_LAST_NAME## को ##REPLACEABLE_SON_DAUGHTER## श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## को
          तपसिलमा उल्लेखित विवरण अनुसारको कागजातमा नाम, थर/जन्म मिति/वतन फरक फरक
          हुन गएको हुनाले सो फरक हुन गएको नाम, थर/जन्म मिति हुन गएको व्यक्ति एकै
          भएको सिफारिस पाउँ भनि यस कार्यालयमा निवेदन दिनुभएकोमा मिति  ##SARJAMIN_DATE##
          मा गरिएको स्थानीय/प्रहरी सर्जमिन मुचुल्का समेतको आधारमा सो व्यहोरा
          मनासिव भएको देखिएकोले सो फरक फरक नाम, थर/जन्म मिति/वतन भएको व्यक्ति
          एकै भएको व्यहोरा स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा १२(२)ङ(१५)
          बमोजिम सिफारिस गरिन्छ ।<br/>
        </p>
      </div>

      <div>
        <p><strong>फरक नाम, थर/जन्ममिति र कागजातको विवरण</strong></p>
        <table>
          <thead>
            <tr>
              <th >फरक हुन गएको कागजात</th>
              <th >फरक परेको नाम, थर, जन्म मिति र वतन</th>
              <th >हुनु पर्ने नाम, थर, जन्म मिति र वतन</th>
            </tr>
          
          </thead>
          <tbody>
            <tr>
              <td>##DIFFERENT_DOCUMENT##</td>
              <td>##FIRST_NAME_DIFFERENT## ##MIDDLE_NAME_DIFFERENT## ##LAST_NAME_DIFFERENT##, ##DIFFERENT_BIRTH_YEAR##, ##DIFFERENT_NATIONALITY## </td>
              <td>##FIRST_NAME_TO_BE## ##MIDDLE_NAME_TO_BE##  ##LAST_NAME_TO_BE##, ##BIRTH_YEAR_TO_BE##, ##NATIONALITY_TO_BE##  </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="authority">
            <p>##SIGNATURE##</p>
            <p>##AUTHORITY_NAME##</p>
            <p>वडा अध्यक्ष</p>
          </div>
    </div>
  </body>
</html>`;

export default differentNameCasteTemplate;
