const nonProfitOrganizationRegistrationTemplate = `<!DOCTYPE html>
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
        font-size:14px;
        text-align: justify;
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
         #template .application_section .municipality_section .contain .municipality_info  {
         padding-left: 15%;
         text-align: center;
         line-height:1.3rem
         }
         #template  .municipality_section .serial_number {
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
    #template  .flex {
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
    #template table {
      width: 100%;
      table-layout: fixed;
      border:1px solid black;
    }   
    #template table th {
      font-weight:400;
      text-align:center;
      font-size:13px;
      border:1px solid black;
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
            <h2 style="text-align:center" class="name">##MUNICIPALITY NAME##</h2>
            <h3 style="text-align:center" class="name">नगर कार्यपालिकाको कार्यालय</h3>
          <h4 style="text-align:center" class="">##MUNICIPALITY ADDRESS##</h4>
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
        
            <div class="subject">बिषय : गैर नाफामुलक संस्था दर्ता प्रमाणपत्र ।</div>   
            
            <div >दर्ता न : </div>
            <div >दर्ता मिति :  </div>
            </br>
          <div class="flex">
            <div>
              संस्थाको नाम : ##ORGANIZATION_NAME##
              <br />              
              ठेगाना : ##ORGANIZATION_ADDRESS##
              <br />             
              स्वदेशी/बिदेशी : ##ORGANIZATION_TYPE##
              <br />        
              बिषयगत क्षेत्र : ##SUBJECT_AREA##
              <br />      
              संस्थाको कारिबार शुरु भएको मिति : ##DATE## 
              <br />             
              इ-मेल : ##ORGANIZATION_EMAIL##
              <br />   
              संस्थाको फोन नम्बर : ##ORGANIZATION_PHONE##
              <br />   
            </div>
            <div style="border:1px solid black; height:150px; width:150px; display:flex; align-items:center;   
            justify-content:center"">
              <div style="font-size:12px;">
                संस्थाको छाप वा फोटो
              </div>
            </div> 
          </div>  
          </br>
          <div class="flex">
            <div>
              संचालक/अध्यक्ष/मुख्य व्यक्तिको नाम : ##HOUSE_OWNER_NAME##
              <br />              
              ठेगाना : ##ADDRESS##
              <br />             
              ईमेल : ##EMAIL##              
              <br />   
              फोन नम्बर : ##PHONE_NUMBER##              
              <br />  
            </div> 
          </div>
    
        <br />  <br /> 
        <div class="from">
        _____________________
      
        वडा अध्यक्ष 
        
      </div>
    </div>
    </section>
  </section>
  </body>
</html>`;

export default nonProfitOrganizationRegistrationTemplate;
