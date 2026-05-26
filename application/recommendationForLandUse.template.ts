import {
  globalTemplateStyle,
  tableStyles,
  header,
} from "../../templates/templateStyles";

const recommendationForLandUseTemplate = `
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
      .tapsil-title {
        justify-content: flex-start;
      }
    </style>
  </head>
  <body>
    <section id="template">
      <section class="application_section">
        <!-- Municipality Section -->
        ${header}
        <!-- Main Letter Section -->
        <div class="main_section">
          <div class="subject">
            <b>बिषय: <u>सिफारिस सम्बन्धमा ।</u> </b>
          </div>
          <div class="letter-heading">
            <p>
              श्री ##SELECT_OFFICE##
            </p>
            <p>##DEPARTMENT_ADDRESS##, ##DEPARTMENT_DISTRICT##।</p>
          </div>
          <p class="paragraph">
            प्रस्तुत बिषयमा यस जिल्ला ##APPLICANT_DISTRICT##
            ##APPLICANT_CURRENT_MUNICIPALITY##  वडा नं
            ##APPLICANT_CURRENT_WARD_NUMBER## बस्ने
            ##APPLICANT_GRANDFATHER_NAME## को ##RELATIONSHIP_WITH_GRANDPARENT##
            ##SALUTATION## ##APPLICANT_FATHER_NAME## को
            ##RELATIONSHIP_WITH_PARENT## ##SALUTATION## ##APPLICANT_NAME## ले यस
            कार्यालयमा दिनु भएको निबेदन अनुसार मैले जिल्ला ##PROPERTY_DISTRICT##
            (साविक ##PROPERTY_PREVIOUS_VDC##; वडा नं
            ##PROPERTY_PREVIOUS_WARD_NUMBER##), कि.नं. ##PROPERTY_PLOT_NUMBER##
            हाल ##PROPERTY_CURRENT_MUNICIPALITY## वडा नं
            ##PROPERTY_CURRENT_WARD_NUMBER## मा पर्ने तपशिल बमोजिमको चार किल्ला
            भित्रको भोग अनुसारको क्षेत्रफल ##PROPERTY_AREA## भएको ऐलानी (दर्ता
            छुट) जग्गा फिल्डबुकमा जे जस्तो उल्लेख भएतापनि परापूर्वकल देखिनै मैले
            जोत भोग गर्दै आएको सो जमिनको जोत भोग चलनको सिफारिस गरि पाउँ
            भन्नव्यहोराको निबेदन प्राप्त हुन आएको र सो सम्बन्धमा
            ##RECOMMENDING_OFFICE## कार्यालयबाट सम्बन्धित क्षेत्रमा गई
            बुझ्दा निज निवेदकको व्यहोरा ठिक साँचो बुझिएकोले तपशिलमा उल्लेखित चार
            किल्ला भित्रको ऐलानी जग्गा निज निवेदक ##APPLICANT_NAME## ले हाल सम्म
            भोग चलन गर्दै आउनु भएको व्यहोरा सिफारिस साथ अनुरोध गरिन्छ।
          </p>
          <center>तपशिल चौहद्दी:</center>
          <p>पुर्व: ##PROPERTY_EAST_DIRECTION##</p>
          <p>पश्चिम: ##PROPERTY_WEST_DIRECTION##</p>
          <p>उत्तर: ##PROPERTY_NORTH_DIRECTION##</p>
          <p>दक्षिण: ##PROPERTY_SOUTH_DIRECTION##</p>
          <center>(यति चार किल्ला भित्रको उल्लेखित जमिन)</center>
          <br />
          <div
            style="
              margin: 1rem 0rem;
              display: flex;
              justify-content: flex-end;
              align-items: center;
            "
          >
            <div style="text-align: center">
              ..............................
              <br />
              [NAME eg: मन बहादुर श्रेष्ठ]
              <br />
              [POST eg: सचिव]
            </div>
          </div>
        </div>
      </section>
    </section>
  </body>
</html>
`;

export default recommendationForLandUseTemplate;
