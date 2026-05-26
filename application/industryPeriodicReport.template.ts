import {
  globalTemplateStyle,
  tableStyles,
} from "../../templates/templateStyles";

const industryPeriodicReportTemplate = `
<!DOCTYPE html>
<html lang="ne">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SIFARIS TEMPLATE</title>
    <link rel="stylesheet" href="./global.css" />
    <style>
      ${globalTemplateStyle} 
      ${tableStyles} 
      .from {
        bottom: -5rem;
      }
      .three-span-table {
        border-collapse: collapse;
        width: 100%;
        text-align: center;
      }
      .three-span-table th,
      .three-span-table td {
        background: white;
      }
      .three-span-table td {
        padding: 5px !important;
      }
      .three-span-table th {
        font-weight: normal;
      }
      table {
        margin: 0 !important;
      }
      #nepali-table table,
      #nepali-table-2 table {
        width: 100%;
        border-collapse: collapse;
      }
      #nepali-table th,
      #nepali-table td,
      #nepali-table-2 th,
      #nepali-table-2 td {
        border: 1px solid #000;
        padding: 8px;
        text-align: center;
        vertical-align: middle;
        background-color: white;
      }
      #nepali-table th,
      #nepali-table-2 th {
        font-weight: bold;
      }
      #nepali-table td p,
      #nepali-table-2 td p {
        margin: 0;
      }
      ul {
        list-style-type: none;
      }
    </style>
  </head>
  <body>
    <section id="template">
      <section class="application_section">
        <main class="main_section">
          <!-- Main Letter Section -->
          <div style="text-align: center">
            <h5 style="text-decoration: none">अनुसुची-१०</h5>
            <h5>
              (नियम ८ को उपनियम (१) को खण्ड (घ) र नियम ११ को उपनियम (१) को खण्ड
              (ग) सँग सम्बन्धित)
            </h5>
          </div>
          <p>उद्योगको अद्यावधिक विवरण</p>
          <p>१. उद्योगको नाम : ##INDUSTRY_NAME##</p>
          <p>ठेगाना : ##INDUSTRY_ADDRESS##</p>
          <p>
            २. विवरण पेश गरेको अवधि : मिति ##SUBMISSION_DATE## देखि
            ##REGISTERED_DATE## सम्म
          </p>
          <p>
            आर्थिक वर्ष : ##FISCAL_YEAR## उद्योगको दर्ता मिति :
            ##REGISTRATION_DATE_OF_THE_INDUSTRY##
          </p>
          <p>
            ३. प्रोप्राइटर/ साझेदार / संचालको नाम :
            ##PROPRIETOR_OR_PARTNER_OR_DIRECTOR_OR_NAME##
          </p>
          <p>
            ४. उद्योग संचालन भएको जम्मा दिन : ##TOTAL_DAYS_OF_ESTABLISHMENT##
            उद्योग संचालन भएको सुरु मिति: ##OPERATION_START_DATE_OF_INDUSTRY##
          </p>
        
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
          <p>७. उत्पादित सामग्री निकासी गरेको भए</p>
          <p>(क) निकासी गरेको मुलुकको नाम: ##COUNTRY_OF_EXPORT##</p>
          <p>(ख) निकासी परिमाण: ##EXPORT_VOLUME##</p>
          <p>(ग) निकासी मूल्य: ##EXPORT_VALUE##</p>
          <p>
            ८. प्रचलित कानुन बमोजिम नेपाल सरकारबाट उद्योगले प्राप्त गरेको कुनै
            सहुलियत, छुट वा सुविधा:
            ##GOVERNMENT_INCENTIVE_RECEIVED_BY_INDUSTRY##
          </p>
          <p>९. उद्योगले प्रयोग गरेको अन्य आवश्यकताहरु:</p>
          <div id="nepali-table">
            <table>
              <thead>
                <tr>
                  <th>सि.नं.</th>
                  <th>विवरण</th>
                  <th>एकाइ</th>
                  <th>परिमाण</th>
                  <th>सरदर एकाइको मूल्य</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>१.</td>
                  <td>पानी</td>
                  <td>किलोलिटर</td>
                  <td>##WATER_QUANTITY_KILOLITER##</td>
                  <td>##WATER_PRICE_PER_KILOLITER##</td>
                </tr>
                <tr>
                  <td>२.</td>
                  <td>
                    विद्युत माग <br />
                    विद्युत युनिट खपत
                  </td>
                  <td>
                    केभीए <br />
                    किलोवाट आवर
                  </td>
                  <td>
                    <p>
                      ##ELECTRICITY_DEMAND_KVA##<br />
                      ##ELECTRICITY_CONSUMPTION_KWH##
                    </p>
                  </td>
                  <td>
                    <p>
                      ##ELECTRICITY_DEMAND_PRICE_PER_KVA##<br />
                      ##ELECTRICITY_CONSUMPTION_PRICE_PER_KWH##
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>३.</td>
                  <td>
                    इन्धन <br />
                    (क) कोइला <br />
                    (ख) डिजेल <br />
                    (ग) फर्नेश आयल <br />
                    (घ) एल.पि.ग्याँस <br />
                    (ङ) धानको भू स <br />
                    (च) अन्य
                  </td>
                  <td>
                    <p style="padding-top: 1rem">
                      मे.टन.<br />
                      किलोलिटर<br />
                      लि.<br />
                      मे.टन.<br />
                      मे.टन.<br />
                      ##OTHER_FUEL_UNIT##
                    </p>
                  </td>
                  <td>
                    <p style="padding-top: 1rem">
                      ##COAL_QUANTITY_METRIC_TON##<br />
                      ##DIESEL_QUANTITY_KILOLITER##<br />
                      ##FURNACE_OIL_QUANTITY_LITER##<br />
                      ##LPG_QUANTITY_METRIC_TON##<br />
                      ##RICE_HUSK_QUANTITY_METRIC_TON##<br />
                      ##OTHER_FUEL_QUANTITY##
                    </p>
                  </td>
                  <td>
                    <p style="padding-top: 1rem">
                      ##COAL_PRICE_PER_METRIC_TON##<br />
                      ##DIESEL_PRICE_PER_KILOLITER##<br />
                      ##FURNACE_OIL_PRICE_PER_LITER##<br />
                      ##LPG_PRICE_PER_METRIC_TON##<br />
                      ##RICE_HUSK_PRICE_PER_METRIC_TON##<br />
                      ##OTHER_FUEL_PRICE_PER_UNIT##
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>१०. उद्योगमा कार्यरत जनशक्ति :</p>
          <div id="nepali-table-2">
            <table>
              <thead>
                <tr>
                  <th rowspan="2">सि.नं.</th>
                  <th rowspan="2">विवरण</th>
                  <th colspan="3">संख्या</th>
                </tr>
                <tr>
                  <th>महिला</th>
                  <th>पुरुष</th>
                  <th>कुल</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>१.</td>
                  <td>प्रशासनिक</td>
                  <td>##ADMINISTRATIVE_FEMALE_COUNT##</td>
                  <td>##ADMINISTRATIVE_MALE_COUNT##</td>
                  <td>##ADMINISTRATIVE_TOTAL_COUNT##</td>
                </tr>
                <tr>
                  <td>२.</td>
                  <td>प्राविधिक</td>
                  <td>##TECHNICAL_FEMALE_COUNT##</td>
                  <td>##TECHNICAL_MALE_COUNT##</td>
                  <td>##TECHNICAL_TOTAL_COUNT##</td>
                </tr>
                <tr>
                  <td>३.</td>
                  <td>
                    श्रमिक<br />
                    (क) उच्च दक्ष<br />
                    (ख) दक्ष<br />
                    (ग) अर्धदक्ष<br />
                    (घ) अदक्ष
                  </td>
                  <td>
                    <p style="padding-top: 1rem">
                      ##LABORER_HIGH_SKILLED_FEMALE_COUNT##<br />
                      ##LABORER_SKILLED_FEMALE_COUNT##<br />
                      ##LABORER_SEMI_SKILLED_FEMALE_COUNT##<br />
                      ##LABORER_UNSKILLED_FEMALE_COUNT##
                    </p>
                  </td>
                  <td>
                    <p style="padding-top: 1rem">
                      ##LABORER_HIGH_SKILLED_MALE_COUNT##<br />
                      ##LABORER_SKILLED_MALE_COUNT##<br />
                      ##LABORER_SEMI_SKILLED_MALE_COUNT##<br />
                      ##LABORER_UNSKILLED_MALE_COUNT##
                    </p>
                  </td>
                  <td>
                    <p style="padding-top: 1rem">
                      ##LABORER_HIGH_SKILLED_TOTAL_COUNT##<br />
                      ##LABORER_SKILLED_TOTAL_COUNT##<br />
                      ##LABORER_SEMI_SKILLED_TOTAL_COUNT##<br />
                      ##LABORER_UNSKILLED_TOTAL_COUNT##
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            ११. उद्योग संचालन गर्दा वातावरणमा पर्न सक्ने प्रतिकूल प्रभाव
            न्यूनीकरणको लागि अपनाइएका उपायहरु:
          </p>
          <!-- solution is dynamic list , on clicking + plus icon multiple solution can be added -->
          <ul>
            <li>##SOLUTION##</li>
            <li>##SOLUTION##</li>
            <li>##SOLUTION##</li>
          </ul>
        </main>
        <div
          style="
            margin-top: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          "
        >
          <div
            style="display: flex; flex-direction: column; align-items: center"
          >
            <span style="border-bottom: 1px dotted; text-decoration: none">
              ##PREPARER##
            </span>
            <span> तयार पार्ने </span>
          </div>
          <div style="text-align: center">
            <span style="border-bottom: 1px dotted; text-decoration: none">
              ##APPROVER##
            </span>
            <br />
            स्वीकृत गर्ने
            <br />
            संचालक/व्यवस्थापक
          </div>
        </div>
        <p style="margin-top: 2rem">उद्योगको छाप:</p>
      </section>
    </section>
  </body>
</html>
`;

export default industryPeriodicReportTemplate;
