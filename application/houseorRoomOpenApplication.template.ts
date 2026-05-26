import { style } from "../template";

export const houseorRoomOpenApplicationTemplate = `
   <!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Template</title>
    <style>
      ${style}
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
      <div class="title">
            <p>##MUNICIPALITY NAME##</p>
            <p>वडा नं. ##WARD NUMBER##  को कार्यालय</p>
            <p>##MUNICIPALITY ADDRESS## </p>
          </div>

     <div class="sn">
            <p>च.नं. ##COUNT2##</p>
            <p>प.सं. ##COUNT1##</p>
          </div>
      <div class="date">
            <p> ##C_DATE## </p>
          </div>
      <div class="greet">
        <p>जो जससँग सम्बन्धित छ ।</p>
      </div>
      <div class="subject">
        <p>
          विषयः-
          <span>बन्द ##HOUSE_OR_ROOM## खोल्न रोहवरमा बस्ने/बसेको प्रमाणित ।</span>
        </p>
      </div>
      <div class="paragraph">
        <p>
           ##MUNICIPALITY_NAME## वडा नं. ##WARD##  को ##TOLE_NAME## मा बस्ने
          श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## ले बन्द ##HOUSE_OR_ROOM## खुलाई पाउँ भनी दिएको निवेदन उपर
          मिति ##HOUSE_OR_ROOM_CLOSED_DATE## मा बन्द ##HOUSE_OR_ROOM## खोल्ने सम्बन्धमा जारी गरेको सूचना
          बमोजिम सरोकारवालाहरुको उपस्थितीमा (यसै साथ संलग्न मुचुल्का बमोजिम)
          बन्द ##HOUSE_OR_ROOM## खोलिएको व्यहोरा स्थानीय सरकार सञ्चालन ऐन, २०७४ को दफा
          १२(२) ङ(४) बमोजिम प्रमाणित गरिन्छ ।
        </p>
      </div>

      <div class="authority">
            <p>##SIGNATURE##</p>
            <p>##AUTHORITY_NAME##</p>
            <p>वडा अध्यक्ष</p>
          </div>
    </div>
  </body>
</html>
`