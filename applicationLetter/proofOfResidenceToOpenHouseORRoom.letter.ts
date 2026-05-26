import globalTemplateStyle  from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const proofOfResidenceToOpenHouseORRoomApplication = `<!DOCTYPE html>
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>बन्द घर वा कोठा खोल्न निवेदन</title>
    <style>
      ${globalTemplateStyle}
    </style>
  </head>

  <body>
    <div class="container">

      <div class="date">
        मिति: ##APPLICATION_DATE##
      </div>

      <div class="to-section">
        <p>श्रीमान् वडा अध्यक्षज्यू,</p>
        <p>
          ##LOCAL_LEVEL## गाउँ/नगरपालिका<br />
          वडा नं. ##WARD_NUMBER##<br />
          ##DISTRICT##
        </p>
      </div>

      <div class="subject">
        विषयः बन्द घर वा कोठा खोल्न सिफारिस पाउँ ।
      </div>

      <div class="greeting">
        महोदय,
      </div>

      <div class="content">
        <p>
          उपर्युक्त विषयमा
          ##PROVINCE##,
          ##DISTRICT## जिल्ला,
          ##LOCAL_LEVEL## गाउँ/नगरपालिका
          वडा नं. ##WARD_NUMBER##
          मा स्थायी रुपमा बसोबास गर्दै आएको
          म निवेदक
          <strong>
            ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
          </strong>
          को घर/कोठा बहालमा लिई बस्ने
          श्री
          <strong>##TENANT_NAME##</strong>
          (हजुरबुबा:
          <strong>##TENANT_GRANDFATHER_NAME##</strong>,
          बुबा:
          <strong>##FATHER_NAME##</strong>)
          हाल लामो समयदेखि सम्पर्कविहीन भई
          <strong>##RENT_UNPAID_MONTHS##</strong>
          महिनादेखि बहाल नतिरी
          घर/कोठा बन्द अवस्थामा रहेको छ ।
        </p>

        <p>
          बहालवालाको प्रकार
          <strong>##TENANT_TYPE##</strong>
          रहेको र मिति
          <strong>##LAST_CONTACT_DATE##</strong>
          पछि कुनै पनि माध्यमबाट
          सम्पर्क हुन नसकेको हुँदा
          उक्त बन्द घर/कोठा खोल्नुपर्ने
          अवस्था सिर्जना भएको व्यहोरा
          यसै निवेदन मार्फत जानकारी गराउँदछु ।
        </p>

        <p>
          अतः स्थानीय सरकार सञ्चालन ऐन, २०७४
          बमोजिम सरोकारवालाको रोहवरमा
          बन्द घर वा कोठा खोल्न आवश्यक
          सिफारिस प्रदान गरिदिनुहुन
          सादर अनुरोध गर्दछु ।
        </p>
      </div>

      <div class="signature">
        <p>
          निवेदक<br />
          नाम:
          ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
          ठेगाना:
          ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER##, ##DISTRICT##<br />
          नागरिकता नं: ##CITIZENSHIP_NUMBER##<br />
          हस्ताक्षर: ......................... 
        </p>
      </div>

    </div>
  </body>
</html>`;
