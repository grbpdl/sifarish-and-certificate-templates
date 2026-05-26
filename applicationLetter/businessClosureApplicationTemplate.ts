import globalTemplateStyle, {
  tableStyle,
} from "../../templates/applicationLetterStyles/letterGlobalStyle";

export const businessClosureApplicationTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <title>व्यवसाय बन्द गर्ने निवेदन</title>
    <style>
      ${globalTemplateStyle}
      ${tableStyle}
    </style>
  </head>

  <body>
    <div class="container">

      <!-- Date -->
      <div class="date">
        ##C_DATE##
      </div>

      <!-- To -->
      <div class="to-section">
        <p>
          श्रीमान् वडा अध्यक्षज्यू,
        </p>
        <p>
          ##LOCAL_LEVEL##<br />
          वडा नं. ##WARD_NUMBER##<br />
          ##DISTRICT##
        </p>
      </div>

      <!-- Subject -->
      <div class="subject">
        विषय : व्यवसाय बन्द गर्नका लागि सिफारिस गरी पाउँ ।
      </div>

      <!-- Greeting -->
      <div class="greeting">
        महोदय,
      </div>

      <!-- Content -->
      <div class="content">
        <p>
          उपर्युक्त विषयमा यस
          <strong>##DISTRICT##</strong> जिल्ला
          <strong>##LOCAL_LEVEL##</strong>
          वडा नं. <strong>##WARD_NUMBER##</strong> मा
          कार्यालय रही दर्ता भएको तपशिल बमोजिमको विवरण भएको
          <strong>##BUSINESS_NAME##</strong> नामक
          व्यवसाय मिति <strong>##BUSINESS_CLOSED_DATE##</strong> देखि
          <strong>##REASON##</strong> कारणले सञ्चालनमा नरहेको हुँदा
          उक्त व्यवसाय कानूनी रूपमा बन्द गर्नुपर्ने भएकोले
          ##RECOMMENDING_OFFICE##मा सिफारिस गरिदिनुहुन
          यो निवेदन पेश गरेको छु।
        </p>
        <br />
        <br />
        <p>तपशिल :</p>

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
        </section>
      </div>

      <!-- Signature -->
      <div class="signature">
        <p>
          निवेदक<br /><br />
          हस्ताक्षर : ..............................<br />
          प्रोप्राइटरको नाम :
          ##FIRST_NAME## ##MIDDLE_NAME## ##LAST_NAME##<br />
          व्यवसायको नाम : ##BUSINESS_NAME##<br />
          ठेगाना : ##LOCAL_LEVEL##–##WARD_NUMBER##, ##DISTRICT##<br />
          सम्पर्क नं. : ##PHONE_NUMBER##
        </p>
      </div>

    </div>
  </body>
</html>
`;
