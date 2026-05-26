import {
  globalTemplateStyle,
  header,
} from "../../templates/templateStyles";

const differentEnglishGrammarApplication = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>हिज्जे प्रमाणित सिफारिस</title>

    <style>
      ${globalTemplateStyle}

      .subject {
        text-align: center;
        font-weight: bold;
        margin: 20px 0;
        text-decoration: underline;
      }

      .content {
        text-align: justify;
        line-height: 1.9;
      }

      .signature {
        margin-top: 50px;
        display: flex;
        justify-content: flex-end;
        text-align: center;
      }
    </style>
  </head>

  <body>
    <section id="template">
      <section class="application_section">
        
        <!-- Header -->
        ${header}

        <div class="main_section">

          <!-- Subject -->
          <div class="subject">
            विषय: हिज्जे प्रमाणित सिफारिस सम्बन्धमा ।
          </div>

          <!-- Body -->
          <div class="content">
            <p>
              उपर्युक्त विषयमा
              ##DISTRICT## जिल्ला,
              ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER##,
              ##TOLE## निवासी
              श्री
              <strong>##FATHER_FIRST_NAME## ##FATHER_MIDDLE_NAME## ##FATHER_LAST_NAME##</strong>
              को ##REPLACEABLE_SON_DAUGHTER##
              <strong>##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</strong> नागरिक हुनुहुन्छ ।
            </p>

            <p>
              निवेदकको नागरिकता, शैक्षिक प्रमाणपत्र तथा अन्य कागजातहरूमा
              अङ्ग्रेजी हिज्जे
              <strong>##INCORRECT_ENGLISH_SPELLING##</strong>
              उल्लेख भएकोमा
              सही हिज्जे
              <strong>##CORRECT_ENGLISH_SPELLING##</strong>
              भएको व्यहोरा प्रमाणित भएको हुँदा,
              फरक परेका ती दुवै हिज्जे
              एउटै व्यक्तिको नै भएको
              यकिन गरी
              यो सिफारिस प्रमाणित गरी
              सम्बन्धित निकायमा प्रयोगार्थ
              प्रदान गरिएको छ ।
            </p>

            <p>
              अतः उपर्युक्त व्यहोरा मनासिब देखिएकोले
              प्रचलित कानून बमोजिम
              आवश्यक कार्यका लागि
              यो सिफारिस जारी गरिएको छ ।
            </p>
          </div>

          <!-- Signature -->
          <div class="signature">
            <div>
              .................................<br />
              ##AUTHORITY_NAME##<br />
              ##AUTHORITY_DESIGNATION##<br />
            </div>
          </div>

        </div>
      </section>
    </section>
  </body>
</html>`;

export default differentEnglishGrammarApplication;
