import {
  globalTemplateStyle,
  tableStyles,
  header,
} from "../../templates/templateStyles";

const houseConstructionCompletionCertificateTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>House Construction Completion Certificate</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyles}
    </style>
  </head>
  <body>
    <section id="template">
      <section class="application_section">
        ${header}

        <div class="main_section">
          <div class="letter-heading">
            <p>श्री ##LOCAL_LEVEL##</p>
            <p>##DISTRICT## ।</p>
          </div>

          <div class="subject">
            <b>बिषय: <u>घर निर्माण सम्पन्न प्रमाणपत्र सिफारिस सम्बन्धमा ।</u></b>
          </div>

          <p class="paragraph">
            प्रस्तुत विषयमा यस ##LOCAL_LEVEL## वडा नं
            ##WARD_NUMBER##, ##DISTRICT## निवासी
            श्री/श्रीमती
            ##FIRST_NAME##
            ##MIDDLE_NAME##
            ##LAST_NAME## को नाममा रहेको साविक
            ##OLD_LOCAL_LEVEL## वडा नं
            ##OLD_WARD_NUMBER## स्थित कि.नं.
            ##KITTA_NO##, कुल क्षेत्रफल
            ##TOTAL_AREA## भएको जग्गामा घर निर्माण प्रयोजनका लागि
            यस कार्यालयबाट नक्शा स्वीकृत गराई
            ##STOREYS_BUILT## तला घर मिति
            ##CONSTRUCTION_COMPLETATION_DATE##
            मा निर्माण कार्य सम्पन्न भएको हुँदा
            आंशिक/पूर्ण घर निर्माण सम्पन्न प्रमाणपत्र
            उपलब्ध गराइदिनुहुन सिफारिस साथ अनुरोध गरिन्छ ।
          </p>

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
             ##AUTHORITY_NAME##
              <br />
              ##AUTHORITY_DESIGNATION##
            </div>
          </div>
        </div>
      </section>
    </section>
  </body>
</html>
`;

export default houseConstructionCompletionCertificateTemplate;
