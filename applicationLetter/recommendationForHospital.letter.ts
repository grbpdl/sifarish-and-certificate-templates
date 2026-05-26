import globalTemplateStyle, { tableStyle } from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const recommendationForHospitalLetter = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>उपचारमा छुटका लागि सिफारिस आवेदन</title>

    <style>
      ${globalTemplateStyle}
      ${tableStyle}
    </style>
  </head>

  <body>
    <div class="container">

      <!-- Date -->
      <div class="date">
        मिति: ##APPLICATION_DATE##
      </div>

      <!-- To Section -->
      <div class="to-section">
        <p>श्रीमान् वडाध्यक्षज्यू,</p>
        <p>
          वडा नं. ##WARD_NUMBER## को कार्यालय<br />
          ##LOCAL_LEVEL##
        </p>
      </div>

      <!-- Subject -->
      <div class="subject">
        विषय: उपचारमा छुटका लागि सिफारिस सम्बन्धमा ।
      </div>

      <!-- Greeting -->
      <div class="greeting">
        महोदय,
      </div>

      <!-- Body Content -->
      <div class="content">
        <p>
          म, ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##,
          नागरिकता नं. ##CITIZENSHIP_NUMBER##,
          ##CITIZENSHIP_ISSUED_DISTRICTT## जिल्ला प्रशासन कार्यालयबाट
          मिति ##CITIZENSHIP_ISSUED_DATE## मा जारी भएको नागरिकता धारक,
          हाल ##PROVINCE## प्रदेश, ##DISTRICT## जिल्ला,
          ##LOCAL_LEVEL## वडा नं. ##WARD_NUMBER##,
          ##TOLE## मा स्थायी रूपमा बसोबास गर्दै आएको छु।
        </p>

        <p>
          मेरो ##RELATION_WITH_DECEASED## पर्न आउने
          श्री
          ##PATIENT_FIRST_NAME## ##PATIENT_MIDDLE_NAME## ##PATIENT_LAST_NAME##,
          हाल ##PATIENT_PROVINCE## प्रदेश, ##PATIENT_DISTRICT## जिल्ला,
          ##PATIENT_LOCAL_LEVEL## वडा नं. ##PATIENT_WARD_NUMBER##,
          ##PATIENT_TOLE## निवासी हुनुहुन्छ।
        </p>

        <p>
          उहाँ ##DISEASE## रोगबाट पीडित भई
          मिति ##TREATMENT_START_DATE## देखि
          ##HOSPITAL_NAME##, ##HOSPITAL_ADDRESS## मा उपचाररत हुनुहुन्छ।
          आर्थिक अवस्था कमजोर भएका कारण उपचार खर्च धान्न अत्यन्त कठिनाइ भएकोले
          सरकारी नियमअनुसार उपलब्ध हुने उपचार छुट सुविधा प्राप्त गर्न
          सिफारिस आवश्यक परेको छ।
        </p>

        <p>
          अतः माथि उल्लेखित विवरण सत्य भएकोले
          सम्बन्धित अस्पतालमा उपचार गर्दा
          आवश्यक छुट सुविधा उपलब्ध गराइदिनु हुन
          सिफारिस गरिदिनुहुन विनम्र अनुरोध गर्दछु।
        </p>
      </div>

      <!-- Signature -->
      <div class="signature">
        <p>
          निवेदक<br />
          नाम: ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
          हस्ताक्षर: ..............................<br />
        </p>
      </div>

    </div>
  </body>
</html>
`;