import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const characterCertificateLetterTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>चालचलन प्रमाणित निवेदन</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyle}
    </style>
  </head>
  <body>
    <div class="container">
      <div class="date">
          मिति: ........................
      </div>

      <div class="to-section">
        <p>श्री वडा अध्यक्षज्यू,</p>
        <p>
          <span id="ward_no">...........</span> नं. वडा कार्यालय,<br>
          <span id="municipality_name">...................................</span>,<br>
          <span id="district_name">...................................</span> ।
        </p>
      </div>

      <div class="subject">
          विषय: चालचलन प्रमाणित सिफारिस पाउँ ।
      </div>

      <div class="greeting">
          महोदय,
      </div>

      <div class="content">
        <p>
          उपरोक्त सम्बन्धमा म निवेदक <span id="district_name">....................</span> जिल्ला <span id="municipality_name">....................</span> गाउँपालिका / नगरपालिका वडा नं. <span id="ward_no">.....</span> <span id="tole_name">....................</span> बस्ने <span id="grand_father_first_name">....................</span> को नाति/नातिनी, <span id="father_first_name">....................</span> को छोरा/छोरी वर्ष <span id="age">.....</span> को म <span id="first_name">....................</span> <span id="last_name">....................</span> ले <span id="usage">....................</span> प्रयोजनको लागि चालचलन प्रमाणित सिफारिस आवश्यक परेको हुँदा सो सिफारिस गरिदिनु हुन अनुरोध गर्दछु। मेरो चालचलन राम्रो छ, कुनै पनि किसिमको प्रहरी रेकर्ड वा अभियोग लागेको छैन।
        </p>
      </div>

      <div class="signature">
        <p>
          निवेदक<br>
          दस्तखत: ........................<br>
          नाम: <span id="first_name">....................</span> <span id="last_name">....................</span><br>
          सम्पर्क नं: <span id="phone_number">....................</span>
        </p>
      </div>
    </div>
  </body>
</html>
`;
