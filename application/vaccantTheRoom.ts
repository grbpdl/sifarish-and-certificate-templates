const vaccantTheRoomTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Application Template</title>
​   <style>
      #template * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        letter-spacing: 0rem;
        font-size:14px;
      } 
      #template body {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }
      #template .application_section {
        width: 210mm;
        background-color: #f1f1f1;
        padding: 1mm 19mm 19mm 19mm;
        position: relative;
        line-height: 2.2rem;}
      #template .header {
        text-align: center;
        color: red;
      }
          #template  .municipality_section {
         padding-bottom: 0.5rem;
         border-bottom: 2px solid green;
         }
         #template  .municipality_section .contain {
         color: red;
         display: flex;
         gap: 1rem;
         align-items: center;
         padding-top: 2rem;
         }
         #template  .municipality_section .contain .municipality_logo img {
         width: 75px;
         }
         #template  .municipality_section .municipality_info {
        margin: 0 auto;
         text-align: center;
         line-height:1.3rem
         }
         #template .municipality_section .serial_number {
         color: red;
         padding-top: 1rem;
         line-height:1.2rem
         }
      #template .main_section {
        padding-top: 2rem;
      }
      #template .main_section .subject {
        text-align: center;
        padding-bottom: 2rem;
      }
      #template .main_section .to {
        padding-bottom: 0rem;
      }
      #template .main_section .letter {
        text-align: justify;
        padding-bottom: 2rem;
      }
      #template .from {
        position: absolute;
        bottom: 1rem;
        right: 19mm; 
        text-align: center;
      }
    </style>
  </head>
  <body>
  <section id="template">
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
              श्री घर धनि ___________,
              <br />
              ___________
            </div>
                <br />
        <div class="subject">बिषय :सिफारिस सम्बन्धमाा ।</div>
       
        <div class="letter">        
        उपरोक्त सम्बन्धमा ##DISTRICT_NAME## जिल्ला,##MUNICIPALITY_NAME##, ,##PROVINCE_NAME## वडा नं. ##WARD## बस्ने
        श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## ले  "कोठा खाली गर्न ३५ दिने सूचना जारी गरी पाउँ" भनी यस वडा कार्यालयमा निवेदन
        दिनुभएकोमा सो सम्बन्धमा ३५ दिने सूचना जारी गरी आवश्यक कारवाहीको लागि यसै साथ संलग्न गरी सिफारिस गरी पठाइएको
        व्यहोरा अनुरोध गरिन्छ ।
        </div>
​        <br />
        <br /> 
        <div class="from">
        _____________________
     
        वडा अध्यक्ष 
        <br /><br />
     </div>
      </div>
    </section>
    </section>
  </body>
</html>`;

export default vaccantTheRoomTemplate;
