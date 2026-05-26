const charKillaApplicationTemplate = `<!DOCTYPE html>
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
         padding-top: 0.5rem;
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
         } 
         #template table td {
         font-weight:400;
         font-size:13px;
         border:1px solid black;
         } 
         #template td {
         width: 33%;
         word-wrap: break-word;
         }
          #template .stamp {
  position: absolute; /* Position stamp absolute */
  top: 20%; /* Move to the vertical center */
  left: 50%; /* Move to the horizontal center */
  transform: translate(-20%, -50%); /* Center the stamp */
  z-index: 1; /* Ensure the stamp is above other content */
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
               <div class='stamp'></div>
               <div class="serial_number">
        <div style="display: flex; justify-content: space-between;">
         <div style="flex: 1;">
          पत्र संख्या. :  ##COUNT1##
          </div>
          <div style="text-align:end;">
   <h4 class="name">कोशी प्रदेश,नेपाल
            </h4>

          </div>
          </div>
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
            <br />
               <div class="subject">बिषय : चार किल्ला प्रमाणित ।</div>
               ##MUNICIPALITY_NAME## महा/उपमहा/नगरपालिका/गाउँपालिका वडा नं##WARD##
               (साबिकको ठेगाना ##DISTRICT_NAME## ##MUNICIPALITY_NAME##) अन्तर्गत
               श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## को नाममा मालपोत कार्यालयमा श्रेस्ता दर्ता
               कायम रहेको जग्गाको चार किल्ला निम्न विवरण अनुसार भएको प्रमाणित गरिन्छ ।
               <div class="letter">        
               </div>
               <section class="table-container">
               
                  <div style="text-align:center;text-decoration:underline;">चार किल्ला विवरण</div>
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
               <br />  <br />  
               <div class="from">
                  _____________________
                
                  वडा अध्यक्ष 
                      
               </div>
            </div>
         </section>
      </section>
   </body>
</html>
`;

export default charKillaApplicationTemplate;
