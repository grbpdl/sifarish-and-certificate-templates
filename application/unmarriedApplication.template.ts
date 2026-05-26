import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

export const unmarriedApplicationTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>अविवाहित प्रमाणित</title>

    <style>
      ${globalTemplateStyle}
      ${tableStyles}

      .main_section {
        font-size: 14px;
        line-height: 1.8;
        text-align: justify;
      }

      .subject {
        font-weight: bold;
        text-align: center;
        margin: 1.5rem 0;
      }

      .details p {
        margin: 0.4rem 0;
      }

      .to_section p {
        line-height: 1.6;
      }
    </style>
  </head>

  <body>
    <section id="template">
      <section class="application_section">

        <!-- Municipality Header -->
        ${header}

        <!-- Main Letter Body -->
        <div class="main_section">

          <!-- To Section -->
          <div class="to_section" style="margin-bottom: 1rem;">
            <p>
              श्रीमान वडा अध्यक्षज्यू,<br />
              वडा नं ##WARD_NUMBER##<br />
              ##LOCAL_LEVEL##
            </p>
          </div>

          <!-- Subject -->
          <div class="subject">
            विषय: अविवाहित प्रमाणित गरी पाउँ ।
          </div>

          <!-- Main Paragraph -->
          <p>
            महोदय,<br /><br />
            उपर्युक्त विषयमा यस ##DISTRICT## जिल्ला ##LOCAL_LEVEL## वडा नं
            ##WARD_NUMBER## टोल ##TOLE## को स्थायी बासिन्दा भएको र म हालसम्म
            अविवाहित भएको कारण अविवाहितको प्रमाणिकरणको सिफारिस गरिदिन हुन
            देहायका विवरणहरु खुलाइ यो निवेदन दिएको छु।
          </p>

          <!-- Details -->
          <div class="details" style="margin-top: 1rem;">
            <p><strong>विवरण:</strong></p>

            <p>
              १. बाबुको नाम (देवनागरी): ##FATHER_FIRST_NAME## ##FATHER_MIDDLE_NAME## ##FATHER_LAST_NAME##
              <!-- &nbsp;&nbsp;(अंग्रेजी): ##FATHER_FULL_NAME_ENGLISH## -->
            </p>

            <p>
              २. आमाको नाम (देवनागरी): ##MOTHER_FIRST_NAME## ##MOTHER_MIDDLE_NAME## ##MOTHER_LAST_NAME##
              <!-- &nbsp;&nbsp;(अंग्रेजी): ##MOTHER_FULL_NAME_ENGLISH## -->
            </p>

            <p>
              ३. बाजेको नाम (देवनागरी): ##GRAND_FATHER_FIRST_NAME## ##GRAND_FATHER_MIDDLE_NAME## ##GRAND_FATHER_LAST_NAME##
              <!-- &nbsp;&nbsp;(अंग्रेजी): ##GRAND_FATHER_FULL_NAME_ENGLISH## -->
            </p>

            <p>
              ४. जन्म मिति (वि.सं.): ##DATE_OF_BIRTH##
              <!-- &nbsp;&nbsp;(ई.सं.): ##DATE_OF_BIRTH_AD## -->
            </p>

            <p>
              ५. स्थायी ठेगाना: ##LOCAL_LEVEL## - ##WARD_NUMBER##, ##DISTRICT##
            </p>

            <p>
              ६. नागरिकता नं.: ##CITIZENSHIP_NUMBER##
            </p>
            <p>
            ७. नागरिकता जारी मिति: ##CITIZENSHIP_ISSUED_DATE##
            </p>

          </div>

          <!-- Applicant Section -->
          <div style="margin-top: 3rem; text-align: right;">
           ..................
            <br />
            ##AUTHORITY_NAME## <br />
            ##AUTHORITY_DESIGNATION##
            
          </div>

        </div>
      </section>
    </section>
  </body>
</html>`;
