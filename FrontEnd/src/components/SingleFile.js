import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";
import Button1 from "./Button1";



const SingleFile = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };
    const { fileName } = useParams();

    // const fileName = "JAVA.CSS"

    const fileContent = `// ${fileName}\nimport React from 'react';\n\nconst ${fileName.split('.')[0]} = () => {\n    return (\n        <div>\n            <h1>Hello from ${fileName}</h1>\n        </div>\n    );\n};\n\nexport default ${fileName.split('.')[0]};`;

    return (
        <>
            <link rel="stylesheet" type="text/css" href="/assets/css/SingleFile.css" />

            <NavBar />
            <div className="fileHeader">
                <h2>{fileName || "No file selected"}</h2>
                <Button1 toggle={handleGoBack} text={"Go back"} style={"button2"} />
            </div>

            <div className="fileContent">
                <textarea
                    className="fileTextarea"
                    value={fileContent}
                    readOnly
                    rows={10}
                    style={{
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        background: '#011a27',
                        color: '#f5edd8',
                        border: '2px solid #017b7e',
                        borderRadius: '8px',
                    }}
                />


            </div>
        </>
    );
};

export default SingleFile;