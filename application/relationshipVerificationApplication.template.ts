const relationshipVerificationApplicationTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Application Template</title>
    <style>
    #template *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        letter-spacing: 0rem;
        font-size:14px
      } 
    #template  {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }
    #template  .application_section {
        width: 210mm;
        background-color: #f1f1f1;
        padding: 1mm 19mm 19mm 19mm;
        position: relative;
        line-height: 2.2rem;
      }
    #template  .header {
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
    #template  .main_section {
        padding-top: 2rem;
      }
    #template  .main_section .subject {
        text-align: center;
        padding-bottom: 2rem;
      }
    #template .main_section .to {
        padding-bottom: 2rem;
      }
    #template .main_section .letter {
        text-align: justify;
        padding-bottom: 2rem;
      }
    #template  .from {
        position: absolute;
        bottom: 1rem;
        right: 19mm;  
        text-align: center;
    }
    #template table {
      width: 100%;
      table-layout: fixed;
      border:1px solid black;
    }   
    #template table th {
      font-weight:400;
      font-size:13px;
      border:1px solid black;
      text-align:center;
    } 
    #template table td {
      font-weight:400;
      font-size:13px;
      border:1px solid black;
      text-align:center;
    } 
    #template td {
      width: 33%;
      word-wrap: break-word;
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
      <div style="line-height:1.5rem" class="to">
      जो जसोसँग सम्बन्दित छ। 

  <br />
</div>
      <div  style="text-align:end;">मिति : ##APPLICATION_DATE## </div>
      </br>
      <div class="align-pt-10 font-14">
        <div style="line-height:1.5rem" class="">
          श्री ##OFFICER_FIRST_NAME## ##OFFICER_MIDDLE_NAME## ##OFFICER_LAST_NAME##
        </div>
        <div class=""> ##MUNICIPALITY_NAME## महा/उपमहा/नगरपालिका/गाउँपालिका वडा नं ##WARD##, </div>
        <div class=" pb-5">##DISTRICT_NAME## ।</div>
        </br>
        </br>
      </div> 
        <div class="letter"> 
          <div class="justify pt-5 font-14">  
            <div>
                &ensp; देहायका व्यक्तिसँग देहाय बमोजिमको नाता सम्बन्ध रहेकोले सो नाता सम्बन्ध प्रमाणित गरि पाउँ भनी
                ##MUNICIPALITY_NAME##  वडा नं.
                ##WARD## वडा कार्यालयमा मिति  ##APPLICATION_DATE## मा
                दिनुभएको दरखास्त बमोजिम यस कार्यालयबाट आवश्यक जाँचबुझ गरी बुझ्दा तपाईको देहाय बमोजिमको व्यक्तिसँग देहाय
                बमोजिमको नाता सम्बन्ध कायम रहेको देखिएकोले नाता प्रमाणित गरि यो प्रमाणपत्र दिइएको छ ।
            </div>
            </br>
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
           </section>    
      </div> 
      </br>
      <div><b>दरखास्तवालाको दस्तखत</b></div>
      <div style="display:flex; gap:1rem">
            <div style="border:1px solid black; padding:2px; width:100px; height:100px; display:flex; align-items:center;   
                        justify-content:center"> 
               <span>दायाँ</span>
            </div>
             <div style="border:1px solid black; padding:2px; width:100px; height:100px; display:flex; align-items:center;   
                        justify-content:center"> 
               <span>बायाँ</span>               
            </div>
           </div> 
        <br />  <br />   
        <div class="from">
          _____________________
        
          वडा अध्यक्ष 
          <br /><br />      
        </div>
      </div>
      </div>
    </section>
    </section>
  </body>
</html>`;

export default relationshipVerificationApplicationTemplate;
