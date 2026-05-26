import {
  globalTemplateStyle,
  tableStyles,
  header,
} from "../../templates/templateStyles";
const industryRegistrationCancellationTemplate = `

<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>उद्योग दर्ता खारेजी सिफारिस</title>
  <style>
    ${globalTemplateStyle}
    ${tableStyles}
  </style>
</head>

<body>
  <section id="template">
    <section class="application_section">

      <!-- Municipality Header -->
      ${header}

      <!-- Main Letter Section -->
      <div class="main_section">

        <div class="letter-heading">
          <p>श्री ##DEPARTMENT_NAME##,</p>
          <p>##DEPARTMENT_ADDRESS## ।</p>
        </div>

        <div class="subject">
          <b> विषय : <u>उद्योग दर्ता खारेजी सिफारिस गरिएको बारे।</u> </b>
        </div>

        <p class="paragraph">
          उपरोक्त सम्बन्धमा
          ##INDUSTRY_DISTRICT## जिल्ला
          ##INDUSTRY_LOCAL_LEVEL##
          वडा नं. ##INDUSTRY_WARD_NUMBER##
          मा स्थायी रूपमा बसोबास गर्ने
          श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
          को नाममा
          उद्योग दर्ता नम्बर
          ##REGISTRATION_NUMBER##
          अन्तर्गत
          <strong>##INDUSTRY_NAME##</strong>
          नामक उद्योग
          मिति ##REGISTER_DATE## मा दर्ता भई
          मिति ##START_DATE## देखि सञ्चालनमा रहेको थियो। निवेदकले मिति ##END_DATE## देखि
          उक्त उद्योग पूर्ण रूपमा बन्द गरेको भनी
          यस कार्यालयमा निवेदन पेश गर्नु भएको हुँदा
          स्थलगत निरीक्षण तथा आवश्यक छानबिन गर्दा
          हाल उक्त उद्योग सञ्चालनमा नरहेको
          व्यहोरा पुष्टि हुन आएको छ।
        </p>

        <p class="paragraph">
          तसर्थ,
          उद्योग सञ्चालन नरहेको तथा
          कर चुक्ता प्रमाणपत्र लगायत
          आवश्यक कागजातहरू पेश भएकोले
          नियमअनुसार
          उक्त उद्योगको दर्ता खारेज
          गरिदिनुहुन
          यो सिफारिस गरिन्छ।
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
export default industryRegistrationCancellationTemplate;
