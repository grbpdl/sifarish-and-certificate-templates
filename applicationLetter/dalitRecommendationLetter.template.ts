import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const dalitRecommendationLetterTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>दलित सिफारिस निवेदन</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyle}
    </style>
  </head>
  <body>
   <section id="template">
    <section class="application_section">

      <div class="main_section">

        <div style="display:flex; justify-content:space-between;">
          <div>
            श्री ##LOCAL_LEVEL##<br/>
            वडा नं. ##WARD_NUMBER## को कार्यालय<br/>
            ##DISTRICT##
          </div>
          <div>
            मिति: ##APPLICATION_DATE##
          </div>
        </div>

        <br/>

        <div class="subject" style="text-align:center;">
          <b>विषय: <u>दलित सिफारिस गरि पाउँ ।</u></b>
        </div>

        <br/>

        <p class="paragraph">
          उपरोक्त विषयमा म निवेदक
##PROVINCE## प्रदेश,
##DISTRICT## जिल्ला,
##LOCAL_LEVEL## वडा नं.
##WARD_NUMBER## टोल
##TOLE##
बस्ने श्री
##FATHER_FIRST_NAME##
##FATHER_MIDDLE_NAME##
##FATHER_LAST_NAME##
को ##REPLACEABLE_SON_DAUGHTER##
##FIRST_NAME##
##MIDDLE_NAME##
##LAST_NAME##
हूँ ।

प्रयोजनका लागि
दलित जात
को प्रमाणित सिफारिस
स्थानीय तहको ऐन नियम अनुसार
सिफारिस गरी दिनुहुन
निवेदन साथ अनुरोध गर्दछु ।

        </p>

        <br/>

        <p class="paragraph">
          देहाय:
          <br/>
          १) नाम, थर: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br/>
          २) नागरिकता नं.: ##CITIZENSHIP_NUMBER##<br/>
          ३) हाल ठेगाना: ##LOCAL_LEVEL##, वडा नं. ##WARD_NUMBER##<br/>
        </p>

        <br/><br/>

        <div style="display:flex; justify-content:flex-end;">
          <div>
            निवेदक<br/>
            नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br/>
            हस्ताक्षर: ......................<br/>
            ठेगाना: ##LOCAL_LEVEL##, वडा नं. ##WARD_NUMBER##<br/>
          </div>
        </div>

        <br/><br/>
      </div>
    </section>
  </section>
  </body>
</html>
`;
