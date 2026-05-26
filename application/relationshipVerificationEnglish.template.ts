import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

export const relationshipVerificationEnglish = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Relationship Verification Application English</title>
    <link rel="stylesheet" href="./global.css" />
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
            <p>To Whom It May Concern</p>
          </div>
          <div class="subject">
            <b> Subject: <u>Relationship Verification Certificate</u> </b>
          </div>

          <p class="paragraph">
            This is to certify that Mr/Mrs/Miss ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME## resident of ##LOCAL_LEVEL## Ward no ##WARD_NUMBER##, is the native citizen of Nepal, as per the application proceeded in this office following members are the relatives of the applicant as mentioned below according to Local Government Operation Act, 2074.
          </p>

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
