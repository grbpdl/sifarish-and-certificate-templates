import { footer, header, style } from "../template";

const applicationToProvideJetMachineTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>जेट मेशिन उपलब्ध गराईदिने सम्बन्धमा</title>
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
         <p>जो जससँग सम्बन्धित छ ।</p>
       </div>
        <div class="subject">
          <p>विषयः- <span>जेट मेशिन उपलब्ध गराईदिने सम्बन्धमा ।</span></p>
        </div>
        <div class="paragraph">
          <p>
            उपरोक्त सम्बन्धमा ##MUNICIPALITY_NAME## महा/उपमहा/नगरपालिका/गाउँपालिका वडा नं.##WARD##
            अन्तर्गत उल्लेखित स्थानमा रहेको सार्वजनिक/नीजि ढल जाम भएको हुनाले सो स्थानको लागि जेट मेशिन उपलब्ध गराईदिन हुन अनुरोध गरिन्छ |
          </p>
         </div>
         <div>
         <p>
           जेट मेशिन उपलब्ध गराउन पर्ने स्थान : ##LOCATION##
         </p>
         <p>
           बाटोको नाम: ##ROAD_NAME##
         </p>
         </div>
        <div class="authority">
         <p>##SIGNATURE##</p>
         <p>##AUTHORITY_NAME##</p>
         <p>वडा अध्यक्ष</p>
       </div>
${footer}
    </div>
  </body>
</html>
`;

export default applicationToProvideJetMachineTemplate;
