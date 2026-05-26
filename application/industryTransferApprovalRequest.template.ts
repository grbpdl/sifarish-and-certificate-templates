import {
  globalTemplateStyle,
  tableStyles,
} from "../../templates/templateStyles";

const industryTransferApprovalRequestTemplate = `
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
        bottom: -5rem;
      }
    </style>
  </head>
  <body>
    <section id="template">
      <section class="application_section">
        <!-- Main Letter Section -->
        <div style="text-align: center">
          <h5 style="text-decoration: none">अनुसूची-८</h5>
          <h5>(नियम ७ को उपनियम (१) सँग सम्बन्धित)</h5>
          <h5>उद्योग स्थानान्तरणको लागि दिने निवेदन</h5>
        </div>
        <h5 style="display: flex; justify-content: flex-end">
          मिति : ##DATE##
        </h5>
        <div class="main_section">
          <div class="letter-heading" style="margin-bottom: 1rem">
            <p>श्री ##DEPARTMENT_HEAD## ज्यू,</p>
            <p>##DEPARTMENT_ADDRESS##</p>
          </div>
          <div class="subject" style="margin-bottom: 2rem">
            <h5 style="font-size: 1rem">
              बिषय:<u style="font-size: 1rem"
                >उद्योग स्थानान्तरणको स्वीकृति बारे।</u
              >
            </h5>
          </div>
          <p class="paragraph">
            महोदय, त्यस ##DEPARTMENT_MUNICIPALITY## मा मिति ##REGISTERED_DATE##
            मा दर्ता भएको ##CURRENT_PROVINCE## ##DISTRICT## जिल्ला
            ##MUNICIPALITY## वडा नं ##WARD_NUMBER## मा स्थापना तथा
            ##INDUSTRY_STATUS##
         
            यस ##INDUSTRY_NAME## उद्योग देहायको कारणले गर्दा
            ##DESTINATION_PROVINCE## प्रदेश ##DESTINATION_DISTRICT## जिल्ला
            ##DEPARTMENT_MUNICIPALITY## वडा नं ##DESTINATION_WARD_NUMBER## मा
            स्थानान्तरण गर्नु पर्ने भएकोले देहायको कागजातहरु संलग्न राखी
            स्थानान्तरणको स्वीकृतिको लागि अनुरोध गर्दछु। यसका लागि आवश्यक कागजात
            यसैसाथ संलग्न गरेको छु।
          </p>
          <div>
            <p>
              <u>उद्योग स्थानान्तरण गर्नु पर्ने कारणहरु:</u>
            </p>
            <div>
              <p>##INDUSTRY_RELOCATION_REASONS##</p>
            </div>
          </div>
          <div>
            <p>
              <u>संलग्न कागजातहरु:</u>
            </p>
            <div>
              <p>
                १. उद्योग स्थानान्तरण गर्ने सम्बन्धमा संचालक समितिले गरेको
                निर्णय,
              </p>
              <p>२. स्थानान्तरण हुने स्थानीय तहको सिफारिस,</p>
              <p>
                ३. प्रारम्भिक वातावारणीय परिक्षण वा वातावारणीय प्रभाव मूल्यांकन
                आवश्यक पर्नेको हकमा सो को सम्बन्धित निकायबाट स्वीकृत भएको
                प्रतिवेदन,
              </p>
              <p>
                ४. अनुसूची-२ बमोजिमको अद्यावधिक परियोजना प्रस्ताव (पाना --),
              </p>
              <p>५. उद्योग स्थानान्तरण गरि संचालन गर्न सकिने अनुमानित अवधि।</p>
            </div>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
            "
          >
            <div>उद्योगको छाप</div>
            <div style="text-align: left">
              <u> निवेदकको :- </u>
              <br />
              हस्ताक्षर: ................................
              <br />
              नाम, थर: ................................
              <br />
              पद: .......................................
              <br />
              ठेगाना : ..................................
              <br />
              इमेल : ....................................
            </div>
          </div>
        </div>
      </section>
    </section>
  </body>
</html>
`;

export default industryTransferApprovalRequestTemplate;
