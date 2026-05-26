import { globalTemplateStyle, tableStyles, header } from "../templateStyles";
const internalMigrationApplicationTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>आन्तरिक बसाई सराई सिफारिस</title>
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
            <p>श्री सम्बन्धित निकायज्यू ।</p>
          </div>

          <div class="subject">
            <b> विषय : <u>आन्तरिक बसाई सराई सम्बन्धी सिफारिस।</u> </b>
          </div>

          <p class="paragraph">
            उपरोक्त सम्बन्धमा
            <strong>##DISTRICT##</strong> जिल्ला
            <strong>##LOCAL_LEVEL##</strong>
            वडा नं <strong>##WARD_NUMBER##</strong>
            टोल <strong>##TOLE##</strong> मा हाल बसोबास गर्दै आएका
            <strong>##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</strong>
            (जन्म मिति <strong>##DATE_OF_BIRTH##</strong>) यस वडामा
            मिति <strong>##LIVING_START_DATE##</strong> देखि
            स्थायी रूपमा बसाई सराई गरी आएको भनी
            निजले यस वडा कार्यालयमा पेश गरेको निवेदन
            तथा संलग्न कागजातहरूका आधारमा
            आवश्यक स्थल सर्जमिन तथा छानबिन गर्दा
            निवेदनमा उल्लेखित व्यहोरा मनासिब देखिएको हुँदा
            निजको आन्तरिक बसाई सराई भएको व्यहोरा
            स्थानीय सरकार सञ्चालन ऐन, २०७४ बमोजिम
            सिफारिस गरिन्छ।
          </p>

          <p class="paragraph">
            निज यसअघि
            <strong>##OLD_PROVINCE##</strong> प्रदेश,
            <strong>##OLD_DISTRICT##</strong> जिल्ला,
            <strong>##OLD_LOCAL_LEVEL##</strong>
            वडा नं <strong>##OLD_WARD_NUMBER##</strong>,
            टोल <strong>##OLD_TOLE##</strong> मा
            बसोबास गर्दै आएको देखिन्छ।
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
</html>`;

export default internalMigrationApplicationTemplate;
