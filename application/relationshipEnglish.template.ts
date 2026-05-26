import { footer, header, style } from "../template";

export const relationshipEnglish = `<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document Template</title>
    <style>
      ${style}
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
      table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }

      table,
      th,
      td {
        border: 1px solid #000;
        font-weight: 300;
      }

      th,
      td {
        padding: 20px 10px;

        text-align: center;
      }

      .photo-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 20px;
      }
      .photo-item {
        text-align: center;
        border: 1px solid #ccc;
        padding: 10px;
      }
      .photo-item img {
        width: 100px;
        height: 120px;
        object-fit: cover;
        border: 1px solid #000;
      }
      .photo-item p {
        margin: 5px 0;
        font-size: 14px;
      }

      .authority {
        margin-top: 10vh;
        
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: flex-end;
      }
      .authority p {
        margin: 2px;
      }
    </style>
  </head>
  <body>
    <div class="a4-page">
${header}
      <div class="greet">
        <p>To Whom It May Concern</p>
      </div>
      <div class="subject">
        <p>Subject: <span>Relationship Certificate</span></p>
      </div>
      <div class="paragraph">
        <p>
          This is to certify that Mr./Mrs. /Miss ##FIRST_NAME## ##MIDDLE_NAME##
          ##LAST_NAME## resident of ##MUNICIPALITY_NAME## Ward no. ##WARD##, is
          the native citizen of Nepal, as per the application proceeded in this
          office following members are the relatives of the applicant as
          mentioned below according to Local Government Operation Act, 2074.
        </p>
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: start;
            width: 100%;
          "
        >
          <div class="photo-grid">
            <!-- ##IF_APPLICANT_PHOTO##
                <div class="photo-item">
              <img src="##APPLICANT_PHOTO##" alt="निवेदक" />
              <p>Applicant</p>
              <p>  ##FIRST_NAME## ##MIDDLE_NAME##  ##LAST_NAME##</p>
            </div>
            ##ENDIF_APPLICANT_PHOTO## -->

            <!-- ##IF_FATHER_PHOTO##
                <div class="photo-item">
              <img src="##FATHER_PHOTO##" alt="पिता" />
              <p>Father</p>
              <p>##FATHER_NAME##</p>
            </div>
            ##ENDIF_FATHER_PHOTO## -->

            <!-- ##IF_MOTHER_PHOTO##
                <div class="photo-item">
              <img src="##MOTHER_PHOTO##" alt="Mother" />
              <p>Mother</p>
              <p>##MOTHER_NAME##</p>
            </div>
            ##ENDIF_MOTHER_PHOTO## -->

            <!-- ##IF_BROTHER_PHOTO##
                <div class="photo-item">
              <img src="##BROTHER_PHOTO##" alt="Brotherदाइ" />
              <p>Brother</p>
              <p>##BROTHER_NAME##</p>
            </div>
            ##ENDIF_BROTHER_PHOTO## -->

            <!-- ##IF_OTHER_PHOTO##

            <div class="photo-item">
              <img src="##OTHER_PHOTO##" alt="अन्य" />
              <p>##OTHER_RELATION##</p>
              <p>##OTHER_NAME##</p>
            </div>
            ##ENDIF_OTHER_PHOTO## -->
            ##MULTIPLE_PHOTO##

          </div>
        </div>
       
      </div>
       <div class="authority">
          <p>##SIGNATURE##</p>
          <p>##AUTHORITY_NAME##</p>
          <p>Ward Chairman</p>
        </div>
        ${footer}
    </div>
  </body>
</html>
`;
