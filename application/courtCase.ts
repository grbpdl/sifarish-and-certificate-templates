import { style } from "../template";
import { header, globalTemplateStyle} from "../../templates/templateStyles"

const courtCaseTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Court Fee Recommendation Template</title>
    <style>
     
      ${style}
      ${globalTemplateStyle}
      .a4-page {
        width: 794px;
        min-height: 1123px;
        background: #ffffff;
        margin: auto;
        padding: 60px 70px;
        box-sizing: border-box;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
        display: flex;
        flex-direction: column;
      }
      .greet {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-top: 20px;
      }
      .greet p {
        margin: 5px 0;
      }
      .subject {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px 0;
      }
      .subject p {
        margin: 0;
        font-weight: bold;
      }
      .letter {
        line-height: 1.6;
        text-align: justify;
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
        <p>श्री जिल्ला अदालत</p>
      </div>

      <div class="subject">
        <p>विषय: सिफारिस सम्बन्धमा ।</p>
      </div>

      <div class="letter">
        <p>
          उपरोक्त सम्बन्धमा वडा नं.##WARD_NUMBER##(साबिकको ठेगाना ##LOCAL_LEVEL##, ##DISTRICT##) बस्ने
          श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## ले ##RELATION## श्री
          ##SPOUSE_FIRST_NAME## ##SPOUSE_MIDDLE_NAME##
          ##SPOUSE_LAST_NAME## सँग श्री ##COURT_NAME## जिल्ला अदालतमा 
          ##CASE_NAME## मुद्दा चलिरहेकोमा आयश्रोत केही नभई आर्थिक अवस्था कमजोर भई कोर्ट-फि राख्न असमर्थ भएकोले तत्कालको लागि कोर्ट-फि नराखी पछि मुद्दा फैसला भएपछि उक्त कोर्ट-फि लिने गरी आवश्यक कारवाहीको लागि सिफारिस गरी पाउँ भनी यस वडा कार्यालयमा निवेदन दिनुभएको हुँदा सो सम्बन्धमा मिति ##CASE_DATE## मा गरिएको सर्जमिन अनुसार
          व्यहोरा मनासिब बुझिएकोले त्यहाको नियमानुसार गरिदिनुहुन सिफारिस गरिन्छ ।
        </p>
      </div>

      <div class="authority">
        <p>##SIGNATURE##</p>
        <p>##AUTHORITY_NAME##</p>
        <p>वडा अध्यक्ष</p>
      </div>
    </div>
  </body>
</html>
`;

export default courtCaseTemplate;
