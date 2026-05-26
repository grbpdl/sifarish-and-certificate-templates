const roadConstructionTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Application Template</title>
​  <style>
      #template *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        letter-spacing: 0rem;
        font-size:14px;
      }  
     #template  {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }
      #template  .application_section {
        width: 210mm;
        background-color: #f1f1f1;
        padding: 1mm 19mm 19mm 19mm;
        position: relative;
        line-height: 2.2rem;
      }
      #template  .header {
        text-align: center;
        color: red;
      }
         #template  .municipality_section {
         padding-bottom: 0.5rem;
         border-bottom: 2px solid green;
         }
         #template  .municipality_section .contain {
         color: red;
         display: flex;
         gap: 1rem;
         align-items: center;
         padding-top: 2rem;
         }
         #template  .municipality_section .contain .municipality_logo img {
         width: 75px;
         }
         #template  .municipality_section .municipality_info {
        margin: 0 auto;
         text-align: center;
         line-height:1.3rem
         }
         #template .municipality_section .serial_number {
         color: red;
         padding-top: 1rem;
         line-height:1.2rem
         }
      #template  .main_section {
        padding-top: 2rem;
      }
      #template  .main_section .subject {
        text-align: center;
        padding-bottom: 0rem;
      }
      #template .main_section .to {
        padding-bottom: 2rem;
      }
      #template .main_section .letter {
        text-align: justify;
        padding-bottom: 2rem;
      }
      #template .form { 
        text-align:right;        
        font-weight: 400; 
      }
      #template table,
      #template  td,
      #template  th {
        border: 1px solid;
      } 
      #template  th {
        font-size: 13px;
        font-weight: 600; 
      }
      #template  td {
        font-size: 12px;
        padding:2px 3px;
      } 
      #template table {
        width: 100%;
        border-collapse: collapse;
      } 
      #template  .table-header {
        text-align: center;
        font-size: 16px;
        margin: 5px 0;
      }
      #template .condition div{
        padding-bottom:5px;
      }
    </style>
  </head>
  <body>
  <section id="template">
    <section class="application_section">
        <div class="municipality_section">
        
        <div class="contain">
          <div class="municipality_logo">
            <img src="https://imgs.search.brave.com/2I_X7CU0qLXLO6tvSzwrpsShsdmltUWWtkYvX2E9Frg/rs:fit:700:586:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDcvRW1ibGVt/X29mX05lcGFsLTcw/MHg1ODYucG5n" alt="logo" />
            </div>
          <div class="municipality_info">
            <h2 class="name">##MUNICIPALITY NAME##</h2>
            <h3 class="name"> ##WARD NUMBER##   नं. वडा कार्यालय 
            </h3>
            <h4 class="">##MUNICIPALITY ADDRESS## 
            </h4>
          </div>
          <div></div>
        </div>
        <div class="serial_number">
          पत्र संख्या. :  ##COUNT1##
          <br />
          <div style="display: flex; justify-content: space-between;">
  <div style="flex: 1;">
    चलानी नं. : ##COUNT2##
  </div>
  <div style="text-align:end;">
    <div>##C_DATE## </div>
  </div>
</div>

        </div>
      </div>
      <div class="main_section">
      <div style="line-height:1.5rem" class="to">
      जो जसोसँग सम्बन्दित छ। 

  <br />
</div>

    

      <div class="align-pt-10 font-14">
        <div style="line-height:1rem" class="">
          श्री ##OFFICER_FIRST_NAME##
          ##OFFICER_MIDDLE_NAME##
          ##OFFICER_LAST_NAME##
        </div>
        <div class="">
          ##OFFICE_NAME##महा/उपमहा/नगरपालिका/गाउँपालिका वडा नं
          ##OFFICE_WARD##, 
        </div>
        <div class=" pb-5">##DISTRICT_NAME_OF_OFFICE## ।</div>
      </div>
      <br />
        <div class="subject">बिषय : सडक खन्ने स्विकृति ।</div>
​     
        <div class="letter"> 
          <div class="justify-pt">  
       <div>
        तपाईको त्यस कार्यालयको मिति ##DATE_OF_APPLICATION## को निवेदन/पत्र अनुसार निम्न
        बमोजिम स्थानको ##CONSTRUCTION_SITE## सडक खन्ने अनुमति दिइएको छ | लेखिए बमोजिमको
        शर्तहरु पालना गरि यो पत्र प्राप्त भएको मितिले ##CONSTRUCTION_PERIOD## दिन भित्र कार्य
        सम्पन्न गर्नुहोला |
       </div>


        <div class="bold-700">
          <div>
            
            खन्न स्विकृति प्रदान गरेको सडकः
            <span class="bold-500"> ##CONSTRUCTION_SITE## </span>
          </div>

          <div>
            सडक खन्न स्विकृति प्रदान गरेको सडकः
            <span class="bold-500"> ##AREA_OF_CONSTRUCTION_SITE## वर्ग मिटर</span>
          </div>
          <div>
            सडक खन्न स्विकृति प्रदान धरौटी रकम रु:
            <span class="bold-500"> ##DOWNPAYMENT## </span>
          </div>
          </br>
          <div><b>शर्तहरु</b></div>
        </div>

        <div class="condition">
        <div>
          १. सडक खन्नु अघि खन्ने ठाउको चारैतिर कमसेकम १०० मिटर टाढाबाट देखिने गरि मिटर अग्लो काठको बार लगाउनु पर्दछ र
          वारको चारैतिर रातो झन्डा राखी सवारी आवागमनमा बाधा नपर्ने व्यवस्था मिलाउनु पर्नेछ ।
        </div>
        <div>
          २.सडक खनेर निस्केको माटो, ढुंगा, बालुवा, आदि बाट सवारीको आवागमनमा बाधा नपर्ने व्यवस्था मिलाउनु पर्नेछ ।
        </div>
        <div>३.काम समाप्त भएपछि पुरानै अवस्थामा हुने गरी मर्मत गर्नु पर्दछ ।</div>
        <div>४. सम्बन्धित कार्यालयसँग सम्पर्क राखी लाइन पाएपछि मात्र काम सुरु गर्नु पर्नेछ ।</div>
        <div>
          ५. महत्त्वपूर्ण सडक खन्ने स्वीकृतीका हकमा सडक खन्न थालेको दिनमा काम समाप्त गर्नु पर्नेछ कुनै कारणवश सोही दिनमा
          सम्पन्न गर्न नसकी रातभरी यथावत राख्नुपर्ने भएमा सम्बन्धित कार्यालय/ व्यक्तिले यस कार्यालयसँग सम्पर्क राखी
          ब्लिकिंग लाइट वाली राख्नु पर्नेछ ।
        </div>
        <div>
          ६.सडक खन्दा सडक भित्र भूमिगत अवस्थामा रहेको खानेपानी बिधुत, टेलिफोन आदिसंग सम्बन्धित लाइनहरु टुटफुट हुन गएमा
          सोको मर्मत गर्ने जिम्मेवारी पनि स्विकृती लिन खनेका व्यक्ति /संस्थाको नै हुनेछ ।
        </div>
        <div>७. पिच सडक खन्ने काम रातको १० बजेदेखि बिहान ५ बजे सक्नु पर्नेछ ।</div>
        <div>८. उक्त कार्य पानी नपरेको दिन गर्नु पर्नेछ ।</div>
        <div>९. पाइप बिच्छाउनु पर्ने अवस्थामा सडक भन्दा कम्तिमा १ फिट ६ इन्च तलबाट पाइप बिच्छाउनु पर्नेछ।</div>
        <div>
          १०. सडक खन्ने ठाउँमा पुनः निर्माण गरी पुर्ववत अवस्थामा पुर्याउने जिम्मा सम्बन्धित व्यक्ति वा संस्थाको नै हुनेछ 
        </div>
        <div>११. तोकिए बमोजिमको धरौटी रकम सम्बन्धमा प्राबिधिक प्रतिबेदन प्राप्त भए पश्चात फिर्ता गरिने छ । </div>
        <div>१२. कार्य प्रयोजन समाप्त भएको मितिले ठिक एक वर्ष पछि धरौटी रकम फिर्ता हुने छैन । </div>
      </div>



      <div class="flex-center-space">
      <div class="bold">
      <br />
        * निवेदकको साबिकको ठेगाना <br />
        ##DISTRICT_NAME##,##MUNICIPALITY_NAME##
      </div>

      <div class="from">
      _____________________
      
      वडा अध्यक्ष 
      <br /><br />
   </div>
    </div> 
        </div> 
        <div>
        <div class="bold-700 font-14">
          <b>
          बोधार्थः
          </b>
        </div>
        <div class="pl">
          <div class="bold-700 font-12">
            १. श्री प्राविधिक शाखा :
          </div>
          <div class="pl font-12">
            माथि उल्लेखित शर्तहरु पालना भए नभएको अनुगमन गरि प्रतिबेदन पेस गर्नु हुन ।
          </div>

          <div class="bold-700 font-12">
            २. श्री ट्राफिक प्रहरी कार्यालय :
          </div>
          <div class="pl font-12">
            सवारी साधनको आवागमनमा सहजताको लागि अनुरोध छ ।
          </div>
        </div>
      </div> 
      </div>
      </div>
    </section>
    </section>
  </body>
</html>`;

export default roadConstructionTemplate;
