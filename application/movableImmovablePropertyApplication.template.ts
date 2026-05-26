import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

export const movableImmovablePropertyValuationApplicationTemplate = `

<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>चल/अचल सम्पत्ति मूल्याङ्कन सिफारिस / प्रमाणित</title>
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

        <!-- Main Content -->
        <div class="main_section">

          <div class="greet">
            <p>श्री मालपोत कार्यालय,</p>
            <p>##MALPOT_ADDRESS##,</p>
          </div>

          <div class="subject">
            <b>
              बिषय :
              <u>##PROPERTY_TYPE## सम्पत्ति मूल्याङ्कन ##SIFARISH_OR_PROVE##।</u>
            </b>
          </div>

          <p class="paragraph">
            ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER## मा स्थायी ठेगाना भएका 
            श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## को नाममा 
            मालपोत कार्यालय ##MALPOT_ADDRESS## मा दर्ता श्रेस्ता कायम रहेको 
            ##PROPERTY_TYPE## सम्पत्तिको मूल्याङ्कन ##SIFARISH_OR_PROVE## आवश्यक परेको हुँदा 
            तपशिल बमोजिमको विवरणका आधारमा उक्त सम्पत्तिको मूल्याङ्कन 
            गरिएको व्यहोरा जनाइन्छ।
          </p>

          <br />

          <!-- Property Details Table -->
          <section class="table-container">
            <div style="text-align:center; text-decoration: underline; margin-bottom: 0.5rem;">
              सम्पत्ति विवरण
            </div>
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

          <br />

          <p class="paragraph">
            उक्त सम्पत्तिको मूल्याङ्कन यस स्थानीय तहमा उपलब्ध अभिलेख, 
            स्थलगत निरीक्षण तथा सम्बन्धित कागजातका आधारमा 
            स्थानीय सरकार सञ्चालन ऐन, २०७४ बमोजिम 
            गरिएको हो भन्ने व्यहोरा प्रमाणित गरिन्छ।
          </p>

          <br />

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
              ##AUTHORITY_NAME##
              <br />
              ##AUTHORITY_DESIGNATION##
            </div>
          </div>

        </div>
      </section>
    </section>
  </body>
</html>

`