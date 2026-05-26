import {
  globalTemplateStyle,
  header,
  tableStyles,
} from "../../templates/templateStyles";

const landOwnershipCertificateRecommendationTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>लालपुर्जाको प्रतिलिपि सिफारिस</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyles}
    </style>
  </head>

  <body>
    <section id="template">
      <section class="application_section">
        <!-- Municipality Header -->
        ${header}

        <div class="main_section">

          <!-- To -->
          <div class="to">
            जो जससँग सम्बन्धित छ ।
          </div>

          <!-- Subject -->
          <div class="subject">
            <p>विषयः <span>लालपुर्जाको प्रतिलिपि सिफारिस ।</span></p>
          </div>

          <!-- Main Letter -->
          <div class="letter">
            <p>
              ##LOCAL_LEVEL##
              वडा नं. ##WARD_NUMBER##
              अन्तर्गत बसोबास गर्ने
              श्री ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##
              को नाममा
              ##LAND_PROVINCE##,
              ##LAND_DISTRICT## जिल्ला,
              ##LAND_LOCAL_LEVEL##
              वडा नं. ##LAND_WARD_NUMBER##
              स्थित
              कि.नं. ##PLOT_NO##
              क्षेत्रफल ##TOTAL_AREA##
              को जग्गा मालपोत कार्यालयमा
              दर्ता रहेको व्यहोरा प्रमाणित गर्दछौं ।
            </p>

            <p>
              उक्त जग्गाको
              लालपुर्जा (जग्गाधनी प्रमाणपत्र)
              प्रतिलिपि आवश्यक परेको भनी
              निवेदकबाट आवेदन पेश हुन आएको हुँदा
              नियमानुसार
              लालपुर्जाको प्रतिलिपि
              उपलब्ध गराइदिनुहुन
              यो सिफारिस गरिएको छ ।
            </p>
          </div>

          <!-- Table Section (Co-owners if any) -->
          <section class="table-container">
            <div style="text-align:center; text-decoration:underline;">
              सह-स्वामी विवरण
            </div>
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

          <!-- Authority -->
          <br /><br /><br /> <br />
          <div class="from">
            <br /><br />
            ..............................<br />
            ##AUTHORITY_NAME##<br />
            ##AUTHORITY_DESIGNATION##
          </div>

        </div>
      </section>
    </section>
  </body>
</html>
`;

export default landOwnershipCertificateRecommendationTemplate;
