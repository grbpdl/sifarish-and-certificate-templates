import {
  globalTemplateStyle,
  tableStyles,
  header,
} from "../../templates/templateStyles";

const certificateOfOathForCitizenship = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Certificate of Oath for Citizenship</title>
    <link rel="stylesheet" href="./global.css" />
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
          <p class="paragraph">
            लिखितम हामी तपसिलमा उल्लेखित मानिसहरु आगे ##DEPARTMENT_PROVINCE##,
            ##DEPARTMENT_DISTRICT## जिल्ला ##DEPARTMENT_MUNICIPALITY##
            गाउँपालिका वडा नं. ##APPLICANT_PREVIOUS_WARD_NUMBER## को कार्यालय
            मार्फत (साविक ##APPLICANT_PREVIOUS_VDC##, वडा नं. ##ROHAWAR_WARD_NUMBER## ##APPLICANT_PREVIOUS_DISTRICT##) निवासी
            ##SALUTATION_GRANDPARENT## ##APPLICANT_GRANDPARENT_NAME##
            का ##RELATION_WITH_GRANDPARENT_DROPDOWN##
            ##SALUTATION_PARENT## ##APPLICANT_PARENT_NAME## को
            ##APPLICANT_RELATION_WITH_PARENT## वर्ष ##APPLICANT_AGE##
            को ##SALUTATION_APPLICANT## ##APPLICANT_NAME## ले हालसम्म
            नेपाली नागरिकताको प्रमाण–पत्र नलिएको र ##EVIDENCE## अनुसार
            जन्म मिति ##APPLICANT_DOB## कायम गरी स्थायी नेपाली नागरिकताको
            प्रमाण–पत्र पाउनको लागि वडा मुचुल्का गरी पाउँ भनि हामी वडा वासी
            समक्ष गरेको निवेदन अनुसार निजलाई जाँचबुझ गरी राम्रोसँग चिनेजानेको
            हुँदा निज ##SALUTATION_PARENT##
            ##APPLICANT_PARENT_NAME## को
            ##APPLICANT_RELATION_WITH_PARENT##
            ##SALUTATION_APPLICANT## ##APPLICANT_NAME## भएको निजको
            जन्ममिति ##APPLICANT_DOB## भएकोले निजले हाल सम्म स्थायी नेपाली
            नागरिकताको प्रमाण–पत्र नलिएको र निजको माग अनुसार स्थायी नेपाली
            नागरिकताको प्रमाण–पत्र उपलब्ध गरिदिन सिफारिस गरिदिएमा कुनै फरक
            पर्ने छैन व्यहोरा ठीक साँचो हो झुठा ठहरे कानुन बमोजिम सहुँला
            बुझउँला भनि यो वडा मुचुल्कामा सहिछाप गरी ##APPLICANT_ADDRESS##
            गाउँपालिका मार्फत जिल्ला प्रशासन कार्यालय काठमाडौँ नेपाल सरकारमा
            चढायौँ।
          </p>

          <p class="tapsil-title">तपशिल</p>
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

          <p class="tapsil-title">रोहवर</p>
          <p>
            ##ROHAWAR_DISTRICT## जिल्ला ##ROHAWAR_ADDRESS## गाउँपालिका वडा नं.
            ##ROHAWAR_WARD_NUMBER## का ##AUTHORIZED_PERSON##
            ##ROHAWAR_SALUTATION## मन बहादुर श्रेष्ठ।
          </p>

          <p class="tapsil-title">काम तामेल गर्ने</p>
          <p>
            ##DEPARTMENT_DISTRICT## जिल्ला ##MUJULKA_ADDRESS## गाउँपालिका
            ##TAMEL_WARD_NUMBER## नं. वडा कार्यालय ##TAMEL_DESIGNATION## पदमा
            कार्यरत श्री ##TAMEL_NAME## । इति सम्वत ##TAMEL_DATE_YEAR## साल
            ##TAMEL_DATE_MONTH## महिना ##TAMEL_DATE_DAY## गते रोज
            ##TAMEL_DATE_TIME## शभुम्।
          </p>

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

export default certificateOfOathForCitizenship;
