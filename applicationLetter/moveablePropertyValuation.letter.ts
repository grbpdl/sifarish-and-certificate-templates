import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const movableImmovablePropertyValuationApplicationLetterTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>##PROPERTY_TYPE## सम्पत्ति मूल्याङ्कन ##SIFARISH_OR_PROVE## निवेदन</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyle}
    </style>
  </head>

  <body>
    <div class="container">

      <div class="date">
        मिति: ##C_DATE##
      </div>

      <div class="to-section">
        <p>श्रीमान् वडा अध्यक्षज्यू,</p>
        <p>
          वडा नं. ##WARD_NUMBER## को कार्यालय<br />
          ##LOCAL_LEVEL##, ##DISTRICT## ।
        </p>
      </div>

      <div class="subject">
        विषयः  ##PROPERTY_TYPE## सम्पत्ति मूल्याङ्कन ##SIFARISH_OR_PROVE## गरी पाउँ ।
      </div>

      <div class="greeting">
        महोदय,
      </div>

      <div class="content">
        <p>
          उपरोक्त विषयमा म निवेदक 
          <strong>##DISTRICT##</strong> जिल्ला 
          <strong>##LOCAL_LEVEL##</strong> वडा नं. 
          <strong>##WARD_NUMBER##</strong> 
          <strong>##TOLE##</strong> बस्ने 
          <strong>##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</strong> 
          को नाममा मालपोत कार्यालय 
          <strong>##MALPOT_ADDRESS##</strong> मा दर्ता कायम रहेको तपशिल बमोजिमको 
          ##PROPERTY_TYPE## सम्पत्तिको मूल्याङ्कन ##SIFARISH_OR_PROVE## आवश्यक परेको हुँदा 
          सो सम्बन्धी ##SIFARISH_OR_PROVE##
          यो निवेदन पेश गरेको छु।
        </p>

        <p>तपशिल</p>

        <section class="table-container">
          </br>
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
      </div>

      <div class="signature">
        <p>
          निवेदक<br />
          नाम थर: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
          ठेगाना: ##LOCAL_LEVEL##–##WARD_NUMBER##<br />
          दस्तखत: ........................<br />
        </p>
      </div>

    </div>
  </body>
</html>
`;
