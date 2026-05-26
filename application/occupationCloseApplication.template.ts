const occupationCloseApplicationTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Application Template</title>
​   <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 1.5rem;
        letter-spacing: 0.1rem;
      }
      h2,
      h3,
      h4 {
        line-height: 1.75rem;
        letter-spacing: 0.18rem;
      }
      body {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }
      .application_section {
        width: 210mm;
        background-color: #f1f1f1;
        padding: 1mm 19mm 19mm 25mm;
        position: relative;
      }
      .header {
        text-align: center;
        color: red;
      }
      .municipality_section {
        padding-bottom: 1rem;
        border-bottom: 2px solid green;
      }
      .municipality_section .contain {
        color: red;
        display: flex;
        gap: 2rem;
        align-items: center;
        padding-top: 2rem;
      }
      .municipality_section .contain .municipality_logo img {
        width: 75px;
      }
      .municipality_section .municipality_info {
        padding-left: 15%;
        text-align: center;
      }
      .municipality_section .serial_number {
        color: red;
        padding-top: 1rem;
      }
      .main_section {
        padding-top: 2rem;
      }
      .main_section .subject {
        text-align: center;
        padding-bottom: 2rem;
      }
      .main_section .to {
        padding-bottom: 2rem;
      }
      .main_section .letter {
        text-align: justify;
        padding-bottom: 2rem;
      }
      .from {
        margin-top: 3rem;
        position: absolute;
        right: 19mm;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <section class="application_section">
      <div class="municipality_section">
        
        <div class="contain">
          <div class="municipality_logo">
            <img src="https://imgs.search.brave.com/2I_X7CU0qLXLO6tvSzwrpsShsdmltUWWtkYvX2E9Frg/rs:fit:700:586:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDcvRW1ibGVt/X29mX05lcGFsLTcw/MHg1ODYucG5n" alt="logo" />
          </div>
          <div class="municipality_info">
          <h2 class="name">##MUNICIPALITY NAME##</h2>
          <h3 class="name"> ##WARD NUMBER##   नं. वडा कार्यालय 
          </h3>
          <h4 class="">##MUNICIPALITY ADDRESS## 
          </h4>
           <h4 class=""> 
          </h4>
        </div>
          <div></div>
        </div>
        <div class="serial_number">
          पत्र संख्या. :  ##COUNT1##
          <br />
          <div style="display: flex; justify-content: space-between;">
          <div style="flex: 1;">
            चलानी नं. : ##COUNT2##
          </div>
          <div style="text-align:end;">
            <div>##C_DATE## </div>
          </div>
        </div>
        </div>
      </div>
      <div class="main_section">

      <div class="to">
        श्री जिल्ला  कार्यलय
        <br />
        फिदिम, कोशि प्रदेश, नेपाल
      </div>

        <div class="subject">बिषय : संस्था दर्ता सम्बन्धमा ।</div>
​     
        <div class="letter">   
        ##MUNICIPALITY_NAME##  ##WARD##को
        ##DISTRICT_NAME## जिल्ला ,##MUNICIPALITY_NAME## (साबिकको   ठेगाना ) मा रहेका 
        श्री / सुश्री / श्रीमती ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
        को नाममा रहेको निम्न उल्लेखित मिति ##OCCUPATION_CLOSE_DATE##देखि बन्द भएको भनी निजले पेश गरेको निवेदन उपर स्थल सर्जमिन बुझ्दा
        मिति ##OCCUPATION_VISIT_DATE## को स्थलगत सर्जमिन बमोजिम निजले पेश गरेको व्यहोरा मनासिब देहिएको हुँदा सोहि प्रमाणित गरिन्छ |
        </div>
​
        <div class="from">
          _____________________
        
          वडा अध्यक्ष <br />
        </div>
      </div>
    </section>
  </body>
</html>`;

export default occupationCloseApplicationTemplate;
