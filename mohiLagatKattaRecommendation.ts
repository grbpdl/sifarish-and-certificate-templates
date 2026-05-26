export const mohiLagatKattaRecommendationTemplate = `
<!DOCTYPE html>
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

      .ending {
        margin-top: 10vh;
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
      }
      .ending p {
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
      <div class="title">
        <p>..............पालिका</p>
        <p>वडा नं. ...... को कार्यालय</p>
        <p>.............(कार्यालय रहेको स्थान) ........... (जिल्ला)</p>
        <p>.................... प्रदेश, नेपाल ।</p>
      </div>

      <div class="sn">
        <p>च.नं.</p>
        <p>प.सं.</p>
      </div>
      <div class="date">
        <p>मिति............................</p>
      </div>
     
      <div class="subject">
        <p>
          विषयः-
          <span>मोही लगत कट्टाको सिफारिस ।</span>
        </p>
      </div>
      <div class="paragraph">
        <p>
            .........गाउँ/नगरपालिका ...... वडा नं...... को ........ मा बस्ने श्री................ ले मोहीको
            लगत कट्टाको सिफारिस गरिदिन भनी जग्गाधनी प्रमाणपत्र, जग्गाको प्रमाणित नापी नक्सा सहित दिएको
            निवेदन अनुसार मिति ........ मा गरिएको सर्जमिन मुचुल्का, मोहीको मञ्जुरीनामा समेतको आधारमा
            नियमानुसार लगत कट्टा गरिदिनुहुन स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा १२(२)ङ(५)
            बमोजिम सिफारिस गरिएको व्यहोरा अनुरोध छ ।
        </p>
      </div>

      <div class="ending">
        <p>हस्ताक्षर..........................</p>
        <p>(वडा अध्यक्ष)</p>
      </div>
    </div>
  </body>
</html>`;
