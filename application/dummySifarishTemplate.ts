import { footer, style } from "../template";
import {
  globalTemplateStyle,
  header,

} from "../../templates/templateStyles";
const dummySifarishTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title> जन्म मिति संशोधन सिफारिस || सिफारिस </title>
    <style>
      ${style}
      ${globalTemplateStyle}
      
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
      .date {
        display: flex;
        flex-direction: column;
        align-items: end;
      }
      .date p {
        margin: 0;
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
      .letter {
        text-align: justify;
        line-height: 1.6;
        margin-bottom: 20px;
      }
      .center-title {
        text-align: center;
        text-decoration: underline;
        margin: 20px 0;
      }
      .flex {
        display: flex;
        justify-content: space-between;
      }
      .flex div {
        flex: 1;
      }
      .authority {
        position: absolute;
        bottom: 25mm;
        right: 25mm;
        text-align: center;
      }
      .stamp {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translate(-20%, -50%);
        z-index: 1;
      }
      table {
         width: 100%;
         border-collapse: collapse;
       }
 
       th,
       td {
         border: 1px solid black;
         padding: 20px 10px;
         text-align: center;
         font-weight: 500;
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
         <p>
           विषयः-
           <span
             > सिफारिस ।।</span
           >
         </p>
       </div>
      <div class="letter">

        <p>
         श्री   ##FIRST_NAME## 
         <br/>
         <br />
        तिमी ठीक छौ?
        </p>


      </div>

     
       <div class="authority">
         <p>..............................</p>
         <p>##AUTHORITY_NAME##</p>
         <p> ##AUTHORITY_DESIGNATION##</p>
       </div>
${footer}
    </div>
  </body>
</html>

`;
export default dummySifarishTemplate;