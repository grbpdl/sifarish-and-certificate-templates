import {
  globalTemplateStyle,
  tableStyles,
  header,
} from "../../templates/templateStyles";

const industryRegistrationRecommendationTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>उद्योग दर्ता सिफारिस</title>
    <style>
      ${globalTemplateStyle} 
      ${tableStyles}
    </style>
  </head>

  <body>
    <section id="template">
      <section class="application_section">

        <!-- Municipality Section -->
        ${header}

        <!-- Main Letter Section -->
        <div class="main_section">

          <div class="letter-heading">
            <p>श्री ##DEPARTMENT_HEAD##,</p>
            <p>##DEPARTMENT_ADDRESS## ।</p>
          </div>

          <div class="subject">
            <b> विषय : <u>उद्योग दर्ता सिफारिस गरिएको बारे।</u> </b>
          </div>

          <p class="paragraph">
            उपरोक्त सम्बन्धमा
            ##DISTRICT## जिल्ला
            ##LOCAL_LEVEL##
            वडा नं. ##WARD_NUMBER##
            टोल ##TOLE##
            मा स्थायी रूपमा बसोबास गर्ने
            श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
            ले जिल्ला ##PROPERTY_DISTRICT##,
            ##PROPERTY_LOCAL_LEVEL##
            वडा नं. ##PROPERTY_WARD_NUMBER##
            अन्तर्गत कि.नं. ##PROPERTY_KITTA_NUMBER##
            को क्षेत्रफल ##PROPERTY_TOTAL_AREA##
            रहेको जग्गामा
            पूर्व ##PROPERTY_EAST_BOUNDARY##,
            पश्चिम ##PROPERTY_WEST_BOUNDARY##,
            उत्तर ##PROPERTY_NORTH_BOUNDARY##,
            दक्षिण ##PROPERTY_SOUTH_BOUNDARY##
            चार किल्ला भित्र
            ##INDUSTRY_NAME##
            नामक उद्योग स्थापना गर्न
            निवेदन पेश गर्नु भएको हो।
          </p>

          <p class="paragraph">
            उक्त उद्योग स्थल
            अन्तर्राष्ट्रिय सिमानाबाट
            ##INDUSTRY_DISTANCE_FROM_INTERNATIONAL_BORDER_KM## कि.मी.,
            राष्ट्रिय वन/संरक्षण क्षेत्रबाट
            ##INDUSTRY_DISTANCE_FROM_NATIONAL_CONSERVATION_AREA_KM## कि.मी.
            तथा गाउँ बस्तीबाट
            ##INDUSTRY_DISTANCE_FROM_HUMAN_RESIDENCE_KM## कि.मी.
            दूरीमा रहेको देखिएको छ।
          </p>

          <p class="paragraph">
            स्थलगत सर्जमिन तथा आवश्यक छानबिन गर्दा
            उद्योग सञ्चालन भएमा
            छरछिमेक, वातावरण तथा सार्वजनिक हितमा
            कुनै प्रतिकूल असर नपर्ने देखिएको हुँदा
            ##APPROVING_BODY## को मन्जुरी अनुसार
            ##INDUSTRY_NAME##
            उद्योग स्थापना गर्न
            नियमानुसार आवश्यक अनुमति
            प्रदान गरिदिन
            सर्जमिन मुचुल्का पाना नं.
            ##SARJAMIN_MUCHULKA_PAGE##
            यसै पत्रसाथ संलग्न गरी
            सिफारिस साथ अनुरोध गर्दछु।
          </p>

          <div
            style="
              margin-top: 3rem;
              display: flex;
              justify-content: flex-end;
              align-items: center;
            "
          >
            <div style="text-align: center">
              ..............................<br />
              ##AUTHORITY_NAME##<br />
              ##AUTHORITY_DESIGNATION##
            </div>
          </div>

        </div>
      </section>
    </section>
  </body>
</html>
`;

export default industryRegistrationRecommendationTemplate;
