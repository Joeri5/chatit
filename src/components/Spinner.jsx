import { useState } from "react";
import { css } from "@emotion/react";
import {HashLoader} from "react-spinners";

const override = css`
  display: block;
  height: 100vh;
  margin: 0 auto;
  border-color: red;
`;

function Spinner() {
    let [loading] = useState(true);
    let [color] = useState("#002766");

    return (
        <div className="sweet-loading">
            <HashLoader color={color} loading={loading} css={override} size={150} />
        </div>
    );
}

export default Spinner;