import { header, globalTemplateStyle} from "../../templates/templateStyles"
const certificateTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>सरकारको नाममा बाटो कायम गर्न सिफारिस</title>
    <style>
    ${globalTemplateStyle}
      body {
        font-family: "Arial", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .a4-page {
       width: 794px;
      min-height: 1123px;
      background: #ffffff;
      margin: auto;
      padding: 60px 70px;
      box-sizing: border-box;
      box-shadow: 0 0 8px rgba(0,0,0,0.15);
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
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .letter p {
        line-height: 1.6;
        text-align: justify;
        position: relative;
      }
      .letter p::after {
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
          <p>विषयः- <span>सरकारको नाममा बाटो कायम गर्न सिफारिस सम्बन्धमा ।</span></p>
        </div>
        <div class="letter">
          <p>
            उपरोक्त सम्बन्धमा मेरो नाममा दर्ता श्रेष्ता भएको ##DISTRICT## जिल्ला, ##LOCAL_LEVEL## 
            वडा नं. ##WARD_NUMBER## कि.नं. ##KITTA_NUMBER## को क्षे.फ.##LAND_AREA## जग्गामध्ये
            ##LAND_DIRECTION## बाट ##LAND_WIDTH## चौडाई र ##LAND_LENGTH## फिट लम्बाई
            नेपाल सरकारको नाममा कित्ताकाट गरी नेपाल सरकारको नाममा बाटो कायम गर्न सिफारिस गरी पाऊँ भनी जग्गाधनी श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## ले 
            यस वडा कार्यालयमा निवेदन दिनुभएको हुँदा सो सम्बन्धमा प्राविधिक प्रतिवेदन अनुसार कित्ताकाट गर्न मिल्ने देखिएकोले प्राविधिक फिल्ड निरीक्षण प्रतिवेदन सहित पठाईएको छ |
            तहाँको नियमानुसार नेपाल सरकारको नाममा बाटो कायम गरिदिनुहुन सिफारिस गरिन्छ ।
          </p>
        </div>

        <div class="authority">
          <p>##SIGNATURE##</p>
          <p>##AUTHORITY_NAME##</p>
          <p>वडा अध्यक्ष</p>
        </div>
      
    </div>
  </body>
</html>`;
export default certificateTemplate;
