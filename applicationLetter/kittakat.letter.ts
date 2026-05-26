import globalTemplateStyle, { tableStyle } 
from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const kittaKatPlotMilanApplicationLetterTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>कित्ताकाट / प्लट मिलान सिफारिस निवेदन</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyle}
    </style>
  </head>

  <body>
    <div class="container">

      <div class="date">
        ##C_DATE##
      </div>

      <div class="to-section">
        <p>श्री वडा अध्यक्षज्यू,</p>
        <p>
          वडा नं. ##WARD_NUMBER## को कार्यालय<br />
          ##LOCAL_LEVEL##, ##DISTRICT## ।
        </p>
      </div>

      <div class="subject">
        विषयः कित्ताकाट / प्लट मिलान सिफारिस गरी पाउँ ।
      </div>

      <div class="greeting">
        महोदय,
      </div>

      <div class="content">
        <p>
          उपर्युक्त विषयमा म निवेदक 
          <strong>##DISTRICT##</strong> जिल्ला 
          <strong>##LOCAL_LEVEL##</strong> वडा नं. 
          <strong>##WARD_NUMBER##</strong> 
          <strong>##TOLE##</strong> बस्ने 
          <strong>##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</strong>
          हुँ । मेरो/हाम्रो नाममा श्रेस्ता कायम रहेको तल उल्लेखित
          जग्गाको क्षेत्रफल मिलान/कित्ताकाट गर्न आवश्यक भएकोले
          नियम अनुसार सिफारिस प्रमाणित गरी पाउँ भनी यो निवेदन पेश गरेको छु।<br /> <br />
        </p>

        <p>
          सो जग्गाको विवरण तपसिल अनुसार उल्लेख गरिएको छ :<br />
          <strong>घर बनेको जग्गाको क्षेत्रफल</strong>:##HOUSE_LAND_AREA##<br/>
          <strong>घरको जम्मा क्षेत्रफल</strong>: ##LAND_AREA##<br/>
          <strong>घरको भुई तल्लाको क्षेत्रफल</strong>: ##HOME_GROUD_AREA##<br/>
          <strong>पाउने फार</strong>: ##PAAUNE_FAR##<br/>
          <strong>कित्ताकाट गर्न चाहेको दिशा</strong>: ##LAND_SIDE##<br/>
          <strong>सिफारिस दिन मिल्ने कारण</strong>: ##REASON_FOR_APPLICATION## <br /> <br/> <br />
        </p>

        <section class="table-container">
          <br />
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
          
          ठेगाना: ##LOCAL_LEVEL##-##WARD_NUMBER##, ##DISTRICT##<br />
          हस्ताक्षर: ........................<br />
        </p>
      </div>

    </div>
  </body>
</html>
`;
