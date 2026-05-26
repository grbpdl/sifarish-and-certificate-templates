import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

const kittakatApplicationTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Template</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyles}
      .a4-page {
        width: 210mm;
        min-height: 297mm;
        padding: 20mm;
        margin: auto;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
      }
      .greet {
        display: flex;
        flex-direction: column;
        align-items: start;
        height: 55px;
      }
      .greet p {
        margin: 5px;
        font-weight: bold;
      }
      .subject {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0;
        padding: 0;
      }

      .subject span {
        margin: 0;
        font-weight: bold;
      }
      .paragraph {
        display: flex;
        flex-direction: column;
        align-items: center;

        height: 120px;
      }
      .paragraph p {
        line-height: 1.6;
        text-align: justify;
        position: relative;
      }
      .paragraph p::after {
        content: "";
        width: 100%;
      }

      .authority {
        margin-top: 10vh;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
      }
      .authority p {
        margin: 2px;
      }
      .paragraph-1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 3vh;
      }
      .table-container {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin: auto;
      }
      th,
      td {
        border: 1px solid #000;
        text-align: center;
        padding: 16px;
      }
      th {
        background-color: #f2f2f2;
      }
    </style>
  </head>
  <body>
    <div class="a4-page">
        ${header}
      <div class="greet">
        <p>जो जससँग सम्बन्धित छ ।</p>
      </div>
      <div class="subject">
        <p>विषयः- <span> कित्ताकाट सिफारिस  ।</span></p>
      </div>
      <div class="paragraph">
        <p>
             ##LOCAL_LEVEL## वडा नं.##WARD_NUMBER## को ##TOLE##
             अन्तर्गत  श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
               को नाममा श्रेस्ता दर्ता कायम रहेको तल उल्लेखित विवरणको घर - जग्गामध्ये
               ##LAND_SIDE##तर्फबाट ##LAND_AREA## क्षेत्रफल जग्गा कित्ताकाट/प्लट मिलन गर्न
               प्राविधिक निरीक्षण गर्दा मापदण्ड अनुसार मिल्ने देखिएको हुनाले सोको लागि
               सिफारिस गरिन्छ | <br/> <br />
              </p>
            </div>
      <p>
          सो जग्गाको विवरण तपसिल अनुसार उल्लेख गरिएको छ :<br />
          <strong>घर बनेको जग्गाको क्षेत्रफल</strong>:##HOUSE_LAND_AREA##<br/>
          <strong>घरको जम्मा क्षेत्रफल</strong>: ##LAND_AREA##<br/>
          <strong>घरको भुई तल्लाको क्षेत्रफल</strong>: ##HOME_GROUD_AREA##<br/>
          <strong>पाउने फार</strong>: ##PAAUNE_FAR##<br/>
          <strong>कित्ताकाट गर्न चाहेको दिशा</strong>: ##LAND_SIDE##<br/>
          <strong>सिफारिस दिन मिल्ने कारण</strong>: ##REASON_FOR_APPLICATION## <br /> <br/> <br />
        </p>
        <section class="table-container">     
        <div style="text-align:center;text-decoration:underline;">घर रहेको जग्गाको विवरण</div>
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
        <br />  
        <div style="text-align:center;text-decoration:underline;">कित्ताबाट सिफारिस फिल्ड निरीक्षण प्रतिवेदन</div>
        <div>घर बनेको जग्गाको क्षेत्रफल ##HOUSE_LAND_AREA##</div>
        <div>घरको जम्मा क्षेत्रफल ##LAND_AREA##</div>
        <div>घरको भुई तल्लाको क्षेत्रफल ##HOME_GROUD_AREA##</div> 
        <div>पाउने फार ##PAAUNE_FAR##</div> 
        <div>सिफारिस दिने मिल्ने कारण ##REASON_FOR_APPLICATION##</div>
        </br>
        <div>सिफारिस गर्ने : </div>
        </br>
        <div>प्राविधिकको नाम : ##NAME_PROFESSIONAL##</div>
        <div>प्राविधिकको हस्ताक्षर : ##SIGNATURE_OF_PROFESSIONAL##</div>
       </section>
       <div class="authority">
            <p>##SIGNATURE##</p>
            <p>##AUTHORITY_NAME##</p>
            <p>वडा अध्यक्ष</p>
          </div>

    </div>
  </body>
</html>`;

export default kittakatApplicationTemplate;
