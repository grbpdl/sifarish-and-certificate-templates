import {
  globalTemplateStyle,
  tableStyles,
  header,
} from "../../templates/templateStyles";
const taxClearanceCertificateTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>वार्षिक आय तथा कर चुक्ता सिफारिस</title>

    <style>
      ${globalTemplateStyle}
      ${tableStyles}

      body {
        font-family: "Arial", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .a4-page {
        width: 210mm;
        height: 297mm;
        padding: 25mm;
        margin: auto;
        background: white;
      }

      .greet p {
        margin: 4px 0;
        font-weight: bold;
      }

      .subject {
        text-align: center;
        font-weight: bold;
        margin: 10px 0;
      }

      .paragraph p {
        line-height: 1.7;
        text-align: justify;
      }

      .biwaran {
        margin-top: 15px;
      }

      .biwaran table {
        width: 100%;
        border-collapse: collapse;
      }

      .biwaran td {
        border: 1px solid #000;
        padding: 6px;
        font-size: 14px;
      }

      .authority {
        margin-top: 12vh;
        display: flex;
        flex-direction: column;
        align-items: end;
      }

      .photo-box {
        width: 120px;
        height: 140px;
        border: 1px solid #000;
        text-align: center;
        font-size: 12px;
        padding-top: 55px;
      }
    </style>
  </head>

  <body>
    <div class="a4-page">

      ${header}

      <div style="display:flex; justify-content:space-between;">
        <div class="greet">
          <p>श्री जिल्ला कार्यालय,</p>
          <p>##DISTRICT##</p>
        </div>
      </div>

      <div class="subject">
        विषयः वार्षिक आय तथा कर चुक्ता सिफारिस सम्बन्धमा ।
      </div>

      <div class="paragraph">
        <p>
          यस वडा कार्यालयको अभिलेख तथा निवेदकले पेश गरेका कागजातहरूका आधारमा
          <strong>##PROVINCE##</strong> प्रदेश,
          <strong>##DISTRICT##</strong> जिल्ला,
          <strong>##LOCAL_LEVEL##</strong> वडा नं.
          <strong>##WARD_NUMBER##</strong>,
          टोल <strong>##TOLE##</strong> स्थायी ठेगाना भई बसोबास गर्ने
        ##REPLACEABLE_HIS_HER##
          <strong>##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</strong>
          (नागरिकता नं. <strong>##CITIZENSHIP_NUMBER##</strong>,
          जारी मिति <strong>##CITIZENSHIP_ISSUED_DATE##</strong>,
          जारी जिल्ला <strong>##CITIZENSHIP_ISSUED_DISTRICTT##</strong>)
          को वार्षिक आय तथा कर सम्बन्धी विवरण देहाय बमोजिम रहेको व्यहोरा
          सिफारिस गरिन्छ ।
        </p>
      </div>
        <p>
          उल्लिखित व्यक्तिले चालु आर्थिक वर्षसम्मको
          मालपोत कर, घर जग्गा कर / एकीकृत सम्पत्ति कर
          नियमानुसार पूर्ण रूपमा चुक्ता गरेको प्रमाणित
          भएको हुँदा आवश्यक प्रयोजनका लागि
          यो सिफारिस प्रदान गरिएको छ ।
        </p>
         <section class="table-container">
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
          </section>

          <div class="authority">
        <p>##SIGNATURE##</p>
        <p>##AUTHORITY_NAME##</p>
        <p>वडा अध्यक्ष</p>
      </div>
      </div>
    </div>
  </body>
</html>
`;

export default taxClearanceCertificateTemplate;
