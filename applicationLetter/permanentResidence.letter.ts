import globalTemplateStyle, { tableStyle } 
from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const permanentResidenceNibedanLetterTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>स्थायी बसोबास सिफारिस निवेदन</title>
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
        विषयः स्थायी / अस्थायी बसोबास सिफारिस गरी पाउँ ।
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
          हुँ ।
        </p>

        <p>
          म विगत मिति <strong>##LIVING_START_DATE##</strong> देखि
          हाल <strong>##CURRENT_LOCAL_LEVEL##</strong> वडा नं.
          <strong>##CURRENT_WARD_NUMBER##</strong>,
          जिल्ला <strong>##CURRENT_DISTRICT##</strong> मा
          स्थायी/अस्थायी रूपमा बसोबास गर्दै आएको छु।
          <br />
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
        
        </br>

        <p>
          यस सम्बन्धमा नियम अनुसार
          स्थायी बसोबास सिफारिस गरिदिनुहुन
          विनम्र अनुरोध गर्दछु।
        </p>
      </div>

      <div class="signature">
        <p>
          निवेदक<br />
          नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
          द
          ठेगाना: ##CURRENT_LOCAL_LEVEL##-##CURRENT_WARD_NUMBER##, ##CURRENT_DISTRICT##<br />
          स्तखत: ........................<br />
        </p>
      </div>

    </div>
  </body>
</html>
`;
