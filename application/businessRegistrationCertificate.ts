import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

const businessRegistrationCerificateTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>नयाँ व्यवसाय दर्ता सिफारिस</title>

    <style>
      ${globalTemplateStyle}
      ${tableStyles}

      .main_section {
        font-size: 14px;
        line-height: 1.8;
        text-align: justify;
      }

      .subject {
        text-align: center;
        font-weight: bold;
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

        <!-- Main Body -->
        <div class="main_section">

          <!-- To Section -->
          <div class="to_section" style="margin-bottom: 1rem;">
            <p>
              श्रीमान वडा अध्यक्षज्यू,<br />
              वडा नं ##WARD_NUMBER## नं. वडाको कार्यालय<br />
              ##LOCAL_LEVEL##
            </p>
          </div>

          <!-- Subject -->
          <div class="subject">
            विषय: व्यवसाय दर्ताका लागि सिफारिस गरी पाउँ ।
          </div>

          <!-- Body -->
          <p>
            महोदय,<br /><br />
            उपर्युक्त विषयमा म/हामीले निम्न स्थानमा
            ##BUSINESS_TYPE## व्यवसाय गर्न लागेकोले सो दर्ताको लागि
            सिफारिस वा प्रमाणपत्र प्राप्त गर्न यो निवेदन पेश गर्दछु/गर्दछौं।
            प्रचलित स्थानीय तह कानून बमोजिम लाग्ने कर दस्तुर बुझाएको साथै
            यस गा.पा./ना.पा. बाट समयसमयमा हुने आदेश/निर्देशन समेत
            पालना गर्न मञ्जुर छु/छौं।
          </p>

          <!-- Details -->
          <div class="details" style="margin-top: 1.5rem;">
            <p><strong>विवरण</strong></p>

            <p>
              १. व्यवसायीको नाम, थर :
              ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
            </p>

            <p>
              २. स्थायी ठेगाना :
              ##LOCAL_LEVEL## - ##WARD_NUMBER##, ##DISTRICT##
            </p>

            <p>
              ३. व्यवसाय रहने स्थानको ठेगाना र सम्पर्क नं. :
              ##BUSINESS_LOCAL_LEVEL## - ##BUSINESS_WARD_NUMBER##, ##BUSINESS_DISTRICT##, ##BUSINESS_CONTACT_NUMBER##
            </p>

            <p>
              ४. भाडामा रहेको भए घरधनीको नाम थर :
              ____________________
            </p>

            <p>
              ५. ठेगाना :
              ____________________
            </p>

            <p>
              ६. व्यवसायको मुख्य कारोबार :
              ____________________
            </p>

            <p>
              ७. फर्म वा कम्पनीको नाम :
              ____________________
            </p>
          </div>

          <!-- Applicant -->
          <div style="margin-top: 3rem; text-align: right;">
            <p>
              निवेदकको नाम, थर :
              ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
            </p>
            <p>दस्तखत/छाप:___________</p>
            <p>ठेगाना: ##LOCAL_LEVEL## - ##WARD_NUMBER##, ##DISTRICT##</p>
            <p>सम्पर्क नं.: ##PHONE_NUMBER##</p>
          </div>

        </div>
      </section>
    </section>
  </body>
</html>
`;

export default businessRegistrationCerificateTemplate;
