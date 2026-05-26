import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

export const propertyValuationEnglishTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PROPERTY VALUATION</title>
    <style>
       ${globalTemplateStyle} 
       ${tableStyles} 
    </style>
  </head>
  <body>
    <section id="template">
      <section class="application_section">
        <!-- Municipality Section -->
        ${header}
        <!-- Main Letter Section -->
        <div class="main_section">
          
<div class="greet">
          <p>TO WHOM IT MAY CONCERN</p>
        </div>
          <div class="subject">
            <b> Subject : <u>PROPERTY VALUATION</u> </b>
          </div>

            <div class="paragraph">
        <p>
  This is to certify that Mr./Ms. ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## 
  is a permanent resident of ##LOCAL_LEVEL## Ward No. ##WARD_NUMBER##, ##PROVINCE## Province, Nepal. 
  On his/her request for the valuation/certification of the property owned by him/her 
  within this ##LOCAL_LEVEL##, the total valuation has been assessed. 
  As per the field survey and verification conducted by the Ward Office, 
  the current market value of the property is as follows:
</p>

      </div>

         
          <!-- Table -->
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
            <div class="letter"></div>
          </section>
          <br />
          <div>
                     <p>
  Total Valuation of Property (in NPR): <b>##TOTAL_VALUATION##</b><br />
  Today's Exchange Rate: (USD) 1 = NPR <b>##EXCHANGE_RATE##</b><span>(Source: Nepal Rastra Bank)</span><br />
  Equivalent Valuation in US Dollars (In USD): 
  <b>##TOTAL_VALUATION_IN_USD##</b> 
  
</p>

                  </div>
         
            <div
            style="
              margin: 1rem 0rem;
              display: flex;
              justify-content: flex-end;
              align-items: center;
            "
          >
            <div style="text-align: center">
              ..............................
              <br />
              ##AUTHORITY_NAME##
              <br />
              ##AUTHORITY_DESIGNATION##
            </div>
          </div>
         
        </div>
      </section>
    </section>
  </body>
</html>
`;
