import { globalTemplateStyle, tableStyles, header } from "../templateStyles";
const industryTransferApprovalLetterTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Request For Business Registration Detail</title>

    <style>
       ${globalTemplateStyle} 
      ${tableStyles} 
      .from {
        bottom: 10rem;
      }
    </style>
  </head>
  <body>
    <section id="template">
      <section class="application_section">
    
       
        <!-- Main Letter Section -->
        <div style="text-align: center">
          <h5 style="text-decoration: none">अनुसूची-९</h5>
          <h5>(नियम ७ को उपनियम (२) सँग सम्बन्धित)</h5>
          <h5>उद्योग स्थान्तरणको स्वीकृतिपत्र</h5>
        </div>
        <h5 style='display: flex; justify-content: flex-end;'>
          मिति : ##DATE##
        </h5>
        <div class="main_section">
          <div class="letter-heading" style="margin-bottom: 1rem">
            <p>श्री ##INDUSTRY_NAME## ज्यू,</p>
            <p>##INDUSTRY_ADDRESS##</p>
          </div>
          <div class="subject" style="margin-bottom: 2rem">
            <h5 style="font-size: 1rem">
              बिषय:<u style="font-size: 1rem"
                >उद्योग स्थान्तरणको स्वीकृति बारे।</u
              >
            </h5>
          </div>
          <p class="paragraph">
            महाशय, तपाईले मिति ##INDUSTRY_TRANSFER_LETTER_DATE## मा दिनु भएको
            निवेदन उपर कारबाही हुँदा ##CURRENT_PROVINCE## ##CURRENT_DISTRICT##
            जिल्ला ##CURRENT_MUNICIPALITY## वडा नं ##CURRENT_WARD_NUMBER## मा
            रहेको तपाईको ##INDUSTRY_NAME## नामको उद्योगलाई
            ##DESTINATION_PROVINCE## प्रदेश ##DESTINATION_PROVINCE## जिल्ला
            ##DESTINATION_MUNICIPALITY## नगरपालिका / गाउँपालिका वडा नं
            ##DESTINATION_WARD_NUMBER## मा स्थान्तरण गर्नको लागि यस
            ##CURRENT_MUNICIPALITY## कार्यालयको मिति ##DECISION_DATE## को निर्णय
            अनुसार स्थान्तरण को स्वीकृति लिनको लागि देहायको शर्तको अधीनमा रही
            उद्योग स्थानान्तरणको स्वीकृति प्रदान गरिएको छ।
          </p>
          <br /><br /><br />
          <div class="from">.......................... वडा अध्यक्ष</div>
          <div>
            <p>शर्तहरु:</p>
            <div>
              <p>
                १. स्वीकृति प्राप्त भएको मितिले ६ महिना भित्र उद्योग संचालन गर्नु
                पर्ने,
              </p>
              <p>
                २. वातावरण सम्बन्धी प्रचलित कानुन बमोजिमको प्रक्रिया पुरा गर्नु
                पर्ने,
              </p>
                <p>
                  ##RULES##
                </p>
            </ol>
          </div>
        </div>
      </section>
    </section>
  </body>
</html>`;
export default industryTransferApprovalLetterTemplate;
