const globalTemplateStyle: string = `
 :root {
        --primary-color: red;
        --secondary-color: #455A64;
        --border-color: black;
        --table-header-bg: #F0F0F0;
        --background-color: #F1F1F1;
        --font-size-base: 14px;
        --font-size-small: 10px;
        --font-size-print: 6px;
      }
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: var(--font-size-base);
        letter-spacing: 0;
      }
      #template {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
      }
      .application_section {
        width: 210mm;
        padding: 1rem 1.75rem;
        position: relative;
        line-height: 2.2rem;

      }
      /* Header / Municipality Section */
      .municipality_section {
        padding-bottom: 0.5rem;
        border-bottom: 2px solid green;
      }
      .municipality_section .contain {
        display: flex;
        gap: 1rem;
        align-items: center;
        padding-top: 2rem;
        color: var(--primary-color);
      }
      .municipality_logo img {
        width: 75px;
      }
      .municipality_info {
        margin: 0 auto;
        text-align: center;
        line-height: 1.3rem;
        position: absolute;  
        left: 50%;                
       transform: translateX(-50%);
      }
      .serial_number {
        color: var(--primary-color);
        padding-top: 1rem;
        line-height: 1.2rem;
        display: flex;
        justify-content: space-between;
      }
      .main_section {
        padding-top: 0.5rem;
        text-align: justify;
        color: black;
      }
      .letter-heading {
        line-height: 1.4rem;
        margin: 1rem 0;
      }
      .subject {
        text-align: center;
        margin: 1rem 0rem;
        line-height: 1.5rem;
        font-size: 1.12rem;
      }
      .paragraph {
        line-height: 1.5rem;
        font-size: 1rem;
      }
      .tapsil-title {
        font-size: 0.9rem;
        text-decoration: underline;
        display: flex;
        justify-content: center;
        margin: 0.2rem 0;
      }
      .grey-sub-title {
        font-size: 0.9rem;
        text-decoration: underline;
        color: var(--secondary-color);
      }
         .letter {
        text-align: justify;
        padding-bottom: 2rem;
      }
      .cc-section {
        margin-top: 1rem;
      }
      .from {
        position: absolute;
        bottom: 1rem;
        right: 2rem;
        text-align: center;
      }
      .footer-box {
        padding: 0.05rem 0.25rem;
        border: 2px solid black;
      }
      body {
        font-family: "Kalimati", "Mangal", sans-serif;
        font-size: 14px;
        line-height: 1.9;
      }

      .container {
        width: 794px;
        min-height: 1123px;
        background: #ffffff;
        margin: auto;
        padding: 60px 70px;
        box-sizing: border-box;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
      }

      .to-section p {
        margin: 0;
      }

      .subject {
        text-align: center;
        font-weight: bold;
        margin: 25px 0;
      }

      .content {
        text-align: justify;
      }

      .signature {
        margin-top: 50px;
        text-align: right;
      }
         .date {
        text-align: right;
        margin-bottom: 20px;
      }
        .greeting {
      font-size: 16px;
      margin-bottom: 10px;
    }
`;
export default globalTemplateStyle;

export const tableStyle: string = `
table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 15px;
    }

    th, td {
      border: 1px solid #000;
      padding: 8px;
      text-align: center;
      font-size: 15px;
    }
`;