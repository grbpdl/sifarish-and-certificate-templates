import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

export const businessCloseNewTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>व्यापार व्यवसाय बन्द भएको सिफारिस</title>

    <style>
      ${globalTemplateStyle}
      ${tableStyles}

      .top-section {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
      }

      .office-address {
        line-height: 1.6;
      }

      .date {
        text-align: right;
      }

      .subject {
        text-align: center;
        margin: 16px 0;
      }

      .paragraph {
        text-align: justify;
        margin-bottom: 16px;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 12px;
      }

      th,
      td {
        border: 1px solid #000;
        padding: 6px;
        text-align: center;
      }

      .footer {
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
      }

      .applicant-details {
        line-height: 1.8;
      }

      .signature {
        text-align: center;
      }
    </style>
  </head>

  <body>
    <section id="template">
      <section class="application_section">

        <!-- Header (Municipality name etc.) -->
        ${header}

        <!-- Top Address & Date -->
        <div class="top-section">
          <div class="office-address">
            श्रीमान कार्यालय प्रमुख / प्रमुख प्रशासकीय अधिकृत/वडाध्यक्ष<br />
            ##RECOMMENDING_OFFICE##<br />
            ##DEPARTMENT_ADDRESS##
          </div>

          <div class="date">
            मिति : ##APPLICATION_DATE##
          </div>
        </div>

        <!-- Subject -->
        <div class="subject">
          <b>विषय : <u>व्यापार व्यवसाय बन्द भएको सिफारिस ।</u></b>
        </div>

        <!-- Main Content -->
        <p class="paragraph">
          उपयुक्त विषयमा यस ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER##
          अन्तर्गत ##BUSINESS_ADDRESS## मा दर्ता भई सञ्चालनमा रहेको
          श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## को नाममा
          रहेको ##BUSINESS_NAME## व्यापार व्यवसाय
          ##REASON_FOR_APPLICATION## कारणले मिति
          ##OCCUPATION_CLOSE_DATE## देखि ##OCCUPATION_CLOSE_DATE_TO##
          सम्म सञ्चालनमा नरहेको भनी परेको निवेदन उपर स्थलगत सर्जमिन
          मुचुल्का समेत गरी बुझ्दा निवेदन व्यहोरा मनासिब देखिएको हुँदा
          स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा १२ (२) ङ (८) बमोजिम
          सिफारिस गरिन्छ।
        </p>

        <!-- Table -->
        <table>
          <thead>
            <tr>
              <th>क्र.सं.</th>
              <th>संस्था वा फर्मको प्रकार</th>
              <th>ठेगाना</th>
              <th>दर्ता नं.</th>
              <th>कैफियत</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>१</td>
              <td>##BUSINESS_TYPE##</td>
              <td>##BUSINESS_ADDRESS##</td>
              <td>##BUSINESS_REGISTRATION_NUMBER##</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <!-- Footer -->
        
          <div class="applicant-details" style="margin-top: 3rem; text-align: right;">
            निवेदक<br />
            अध्यक्ष/प्रोप्राइटरको नाम : ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
            संस्था/फर्मको नाम : ##BUSINESS_NAME##<br />
            ठेगाना : ##BUSINESS_ADDRESS##<br />
            सम्पर्क नं. : ##PHONE_NUMBER##<br />
            हस्ताक्षर : ____________<br />
          </div>

          
        

      </section>
    </section>
  </body>
</html>
`;
