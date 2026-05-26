import {
  globalTemplateStyle,
  tableStyles,
  header,
} from "../../templates/templateStyles";

const recommendationForCopyOfCitizenshipCertificateTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>नागरिकता प्रमाणपत्रको प्रतिलिपि सिफारिस</title>

    <style>
      ${globalTemplateStyle}

      .a4-page {
        width: 210mm;
        min-height: 297mm;
        padding: 20mm;
        margin: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
      }

      .greet p {
        margin: 5px 0;
        font-weight: bold;
      }

      .subject {
        display: flex;
        justify-content: center;
        margin: 10px 0;
      }

      .subject span {
        font-weight: bold;
      }

      .paragraph {
        margin-top: 10px;
      }

      .paragraph p {
        line-height: 1.7;
        text-align: justify;
      }

      .authority {
        margin-top: 12vh;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }

      .authority p {
        margin: 2px 0;
      }
    </style>
  </head>

  <body>
    <div class="a4-page">

      ${header}

      <div class="greet">
        <p>जो जसोसँग सम्बन्धित छ ।</p>
      </div>

      <div class="subject">
        <p>विषयः <span>नागरिकता प्रमाणपत्रको प्रतिलिपि सिफारिस ।</span></p>
      </div>

      <div class="paragraph">
        <p>
          यस कार्यालयको अभिलेख अनुसार
          <strong>##DISTRICT##</strong> जिल्ला
          <strong>##LOCAL_LEVEL##</strong>
          वडा नं. <strong>##WARD_NUMBER##</strong>,
          टोल <strong>##TOLE##</strong> स्थायी ठेगाना भई बसोबास गर्ने
          ##REPLACEABLE_HIS_HER##
          <strong>##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</strong> को नाममा
          जिल्ला <strong>##CITIZENSHIP_ISSUED_DISTRICTT##</strong> बाट
          मिति <strong>##CITIZENSHIP_ISSUED_DATE##</strong> मा
          जारी भएको नेपाली नागरिकता प्रमाणपत्र
          नं. <strong>##CITIZENSHIP_NUMBER##</strong>
          रहेको व्यहोरा प्रमाणित हुन्छ ।
        </p>

        <p>
          उक्त नागरिकताको
          प्रतिलिपि आवश्यक परेको भनी
          निवेदक स्वयंले यस कार्यालयमा
          निवेदन पेश गरेको हुँदा
          सत्य, तथ्य र अभिलेखका आधारमा
          आवश्यक कार्यका लागि
          यो सिफारिस पत्र प्रदान गरिएको छ ।
        </p>
        <div class="details">
        <br />
          <p><strong>विवरण</strong></p>
          <p>१. नाम, थर: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</p>
          <p>२. स्थायी ठेगाना: ##LOCAL_LEVEL##–##WARD_NUMBER##, ##DISTRICT##</p>
          <p>३. नागरिकता नं.: ##CITIZENSHIP_NUMBER##</p>
          <p>४. जारी मिति र जिल्ला: ##CITIZENSHIP_ISSUED_DATE##, ##CITIZENSHIP_ISSUED_DISTRICTT##</p>
          <p>५. बाबुको नाम, थर: ##FATHER_NAME##</p>
          <p>६. आमाको नाम, थर: ##MOTHER_NAME##</p>
        </div>
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

export default recommendationForCopyOfCitizenshipCertificateTemplate;
