export const applicationToProvideJetMachineLetterTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>जेट मेशिन उपलब्ध गराइदिने बारे निवेदन</title>
    <style>
      body {
        font-family: "Kalimati", "Mangal", Arial, sans-serif;
        font-size: 15px;
        line-height: 1.9;
        margin: 40px;
      }
      .container {
        width: 794px;
        min-height: 1123px;
        background: #ffffff;
        margin: auto;
        padding: 60px 70px;
        box-sizing: border-box;
        box-shadow: 0 0 8px rgba(0,0,0,0.15);
      }
      .header {
        text-align: center;
        font-weight: bold;
        font-size: 18px;
      }
      .sub-header {
        text-align: center;
        margin-top: 5px;
      }
      .content {
        margin-top: 30px;
        text-align: justify;
      }
      .subject {
        text-align: center;
        margin-top: 20px;
        font-weight: bold;
      }
      .footer {
        text-align: right;
        margin-top: 60px;
      }
      .signature {
        margin-top: 40px;
      }
      .to-section {
        margin-bottom: 20px;
      }
    </style>
  </head>

  <body>
   <div class="container">
    <div style="text-align: right; margin-bottom: 20px;">
      ##C_DATE##
    </div>
    <div class="to-section">
      श्री वडा अध्यक्षज्यू,<br />
      वडा नं. ##WARD## को कार्यालय<br />
      ##MUNICIPALITY_NAME##
    </div>

    <!-- Subject -->
    <div class="subject">
      विषयः जेट मेशिन उपलब्ध गराइदिने बारे ।
    </div>

    <!-- Content -->
    <div class="content">
      महोदय,
      <br /><br />
      उपरोक्त सम्बन्धमा <strong>##MUNICIPALITY_NAME##</strong> नगरपालिका वडा नं. <strong>##WARD##</strong> स्थित 
      <strong>##ROAD_NAME##</strong> बाटो/स्थानमा ढल जाम भई समस्या परेकोले सो स्थान 
      (<strong>##LOCATION##</strong>) मा जेट मेशिन उपलब्ध गराई सहयोग गरिदिनु हुन अनुरोध गर्दछु।
    </div>

    <!-- Footer -->
    <div class="footer">
      निवेदकको विवरणः
      <br /><br />
      ठेगानाः ##ADDRESS##<br />
      दस्तखत: ........................<br />
      
    </div>
   </div>
    
  </body>
</html>
`;
