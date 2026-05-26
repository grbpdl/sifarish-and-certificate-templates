export const style = `
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
        position: relative;
      }
      
      .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .title p {
        margin: 1px;
      }

      .title .municipality-name-np {
        color: red;
        font-weight: bold;
        font-size: 2.3rem; /* You can increase this if needed */
      }

      .title .municipality-name-en {
        color: red; /* default or any other neutral color */
        font-weight: bold;
        font-size: 1.2em;
      }

      .title .municipality-address {
        color: red;
        font-size: 1em;
      }

      .below-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0px 30px 0px;
      }

      .sn {
        display: flex;
        flex-direction: column;
        align-items: start;
      }
      .sn p {
        margin: 0;
      }
      .sn p {
        margin: 0;
      }
        
      .footer {
        width: 210mm;
        position: absolute;
        bottom: 20px;
        border-top: 1px solid red;
        text-align: center;
        padding-top: 8px;
        margin-top: 40px;
        font-size: 0.95em;
        color: #000;
      }

`

export const header = `
        <div class="title">
            <p class="municipality-name-np">##MUNICIPALITY NAME NP##</p>
            <p class="municipality-name-en">##MUNICIPALITY NAME EN##</p>
            <p class="municipality-address">##MUNICIPALITY ADDRESS NP##</p>
            <p class="municipality-address">##MUNICIPALITY ADDRESS EN##</p>
        </div>
        <div class="stamp"></div>
        <div class="below-header">
          <div class="sn">
            <p>च.नं.  : </p> <!-- If chalani to be inserted automatically chalni ko banayepaxi matra <p>च.नं.  : ##COUNT1##</p>  -->
            <p>प.सं.   : ##COUNT2##</p>
          </div>
          <div class="date">
            <p>मिति : ##C_DATE##</p>
          </div>
        </div>
`

export const footer = `
    <div class="footer">
      सम्पर्क: इमेल - ##MAIL## | फोन नम्बर - ##PHONE_NUMBER## 
    </div>
`