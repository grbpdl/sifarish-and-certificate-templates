import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

const scholarshipApplicationTemplate = `<!DOCTYPE html>
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
     
    </style>
  </head>
  <body>
    <div class="a4-page">
        ${header}
      <div class="greet">
        <div class="to">
          <br />
          श्री ##LOCAL_LEVEL##
          <br />  <br />
        </div> 
      </div>
      <div class="subject">
            <p>बिषय- <span>छात्रबृत्ति सिफारिस  ।</span></p>
      </div>
      <br />
      <div class="paragraph">
           <p>
          यस <strong>##LOCAL_LEVEL##</strong> वडा नं.
          <strong>##WARD_NUMBER##</strong>,
          जिल्ला <strong>##DISTRICT##</strong> निवासी
          श्री <strong>##FATHER_FIRST_NAME## ##FATHER_MIDDLE_NAME## ##FATHER_LAST_NAME##</strong> को
          ##REPLACEABLE_SON_DAUGHTER##
          <strong>##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##</strong>
          हाल <strong>##SCHOOL_COLLEGE_NAME##</strong> मा
          कक्षा <strong>##CLASS_COUNT##</strong> मा
          अध्ययनरत विद्यार्थी हुनुहुन्छ ।
        </p>
        <br />

        <p>
          यस वडा कार्यालयको अभिलेख अनुसार
          निज विद्यार्थी छात्रवृत्ति प्राप्त गर्न
          योग्य देखिएकोले सम्बन्धित निकायबाट
          प्रदान गरिने छात्रवृत्ति उपलब्ध गराइदिनुहुन
          यो सिफारिस पत्र प्रदान गरिएको हो ।
        </p>
                </div>
  <div class="authority">
    <p>##SIGNATURE##</p>
    <p>##AUTHORITY_NAME##</p>
    <p>##AUTHORITY_DESIGNATION##</p>
  </div>
</div>
  </body>
</html>`;

export default scholarshipApplicationTemplate;
