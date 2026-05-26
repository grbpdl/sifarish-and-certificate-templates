import { globalTemplateStyle, tableStyles, header } from "../templateStyles";

const businessClosure = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>व्यवसाय बन्द गर्नका लागि सिफारिस।</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyles}
      .authority {
        display: flex;  
        flex-direction: column;
        align-items: flex-end;
        margin-top: 50px;
      }
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
            <p>श्री ##RECOMMENDING_OFFICE##।</p>
          </div>

          <div class="subject">
            <b> विषय : <u>व्यवसाय बन्द बारे।</u> </b>
          </div>

          <p class="paragraph">
            उपरोक्त सम्बन्धमा
            <strong>##DISTRICT##</strong> जिल्ला
            <strong>##LOCAL_LEVEL##</strong>
            वडा नं <strong>##WARD_NUMBER##</strong>
            टोल <strong>##TOLE##</strong> मा रहेको
            <strong>##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</strong> को
            नाममा दर्ता रहेको तपशिल बमोजिमको
            <strong>##BUSINESS_NAME##</strong> नामक व्यवसाय
            मिति <strong>##BUSINESS_CLOSED_DATE##</strong> देखि
            बन्द भएको भनी निजले पेश गरेको निवेदन अनुसार
            स्थल सर्जमिन तथा आवश्यक छानबिन गर्दा
            निवेदनमा उल्लेखित व्यहोरा मनासिब देखिएको हुँदा
            उक्त व्यवसाय बन्द भएको व्यहोरा
            प्रमाणित गरिन्छ।
          </p>

          <p class="tapsil-title">तपशिल</p>

          <!-- Table Section -->
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

            <div class="letter"></div>

            <div class="cc-section">
              <p class="grey-sub-title">बोधार्थ:</p>
              <p class="footer-box">##CC##</p>
            </div>
          </section>

          <br /><br /><br />

         <div class="authority">
            <p>##SIGNATURE##</p>
            <p>##AUTHORITY_NAME##</p>
            <p>##AUTHORITY_DESIGNATION##</p>
          </div>

        </div>
      </section>
    </section>
  </body>
</html>
`;
export default businessClosure;
