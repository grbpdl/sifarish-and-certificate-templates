import { footer } from "../../templates/template";

const header: string = `
        <div class="municipality_section">
          <div class="contain">
            <div class="municipality_logo">
              <img
                src="https://imgs.search.brave.com/2I_X7CU0qLXLO6tvSzwrpsShsdmltUWWtkYvX2E9Frg/rs:fit:700:586:1/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjEvMDcvRW1ibGVt/X29mX05lcGFsLTcw/MHg1ODYucG5n"
                alt="logo"
              />
            </div>
            <div class="municipality_info">
             <h3>##WARD_NUMBER_HEADER## नं. वडा कार्यालय</h3>
              <h2>##MUNICIPALITY_NAME_HEADER##</h2>
             
              <h4>##WARD_ADDRESS_HEADER## ##DISTRICT_HEADER##,##PROVINCE_HEADER##</h4>
            </div>
          </div>
          <div class="serial_number">
            <div>
              <div>पत्र संख्या. : ##COUNT2##</div>
              <div>चलानी नं. : </div>
            </div>
            <div>##C_DATE##</div>
          </div>
        </div>
`;

export default header;
