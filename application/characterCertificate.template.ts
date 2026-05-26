export const characterCertificateTemplate = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Template</title>
    <style>
      body {
        font-family: "Arial", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .a4-page {
        width: 210mm;
        height: 297mm;
        padding: 25mm;
        margin: auto;
        background: white;
        border: 1px solid #000;
        
      }
      
      .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .title p {
        margin: 2px;
      }

      .sn {
        margin-top: 60px;
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-bottom: 50px;
      }
      .sn p {
        margin: 0;
      }
      .date {
        display: flex;
        flex-direction: column;
        align-items: end;
      }
      .sn p {
        margin: 0;
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
      table, td, th {
        border: 1px solid;
      }
      table {
        width: 100%;
        border-collapse: collapse;
      }
      tr{
        height: 20px;
      }
    </style>
  </head>
  <body>
    <div class="a4-page">
        <div class="date">
            <p>मिति............................</p>
        </div>

        <div class="sn">
          <p>श्रीमान् वडा अध्यक्षज्यू,</p>
          <p> <वडा नं. > नं. वडा कार्यालय,</p>
          <p> <गाउँपालिका / नगरपालिका>, <टोल> ।</p>
        </div>
        <div class="subject">
          <p>विषयः- <span>चालचलन प्रमाणितका लागि सिफारिस गरी पाउँ ।</span></p>
        </div>
        <div>
            <p>महोदय,</p>
        </div>
        <div class="paragraph">
          <p>
            उपरोक्त सम्बन्धमा < जिल्ला > < गाउँपालिका / नगरपालिका > वडा नं. < वडा नं. > < टोल > बस्ने श्री ............................. को नाति / नातिना श्री .................को छोरा / छोरी वर्ष ... को म निवेदकको .............................. प्रयोजनका लागि चालचलन प्रमाणित सिफारिस आवश्यक भएको हुँदा मेरो चालचलन जांच बुझ गरी सोहि अनुसार सिफारिस गरी दिन हुन आवश्यक कागजात सहित यो निवेदन पेश गर्दछु / गर्दछौं ।   
          </p>
        </div>
        <div class="authority">
          <p style="text-decoration: underline; margin-bottom: 30px;">निवेदक</p>
          <p>नामः…………………….………</p>
          <p>ठेगानाः……………………………</p>
          <p>सम्पर्क नं.:…………………………</p>
        </div>
      
    </div>
  </body>
</html>`;
