import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import NavBar from "./NavBar";
import Button1 from "./Button1";

const SingleFile = () => {
  const navigate = useNavigate();
  const { fileName } = useParams();
  const [searchParams] = useSearchParams();

  const projectName = searchParams.get("project");
  const email = searchParams.get("email");

  const [fileContent, setFileContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleGoBack = () => {
    navigate(-1);
  };

  const isViewableFile = (filename) => {
    const viewableExtensions = [
      ".txt",
      ".js",
      ".jsx",
      ".ts",
      ".tsx",
      ".html",
      ".css",
      ".scss",
      ".json",
      ".xml",
      ".md",
      ".py",
      ".java",
      ".cpp",
      ".c",
      ".h",
      ".php",
      ".rb",
      ".go",
      ".rs",
      ".swift",
      ".kt",
      ".sql",
      ".sh",
      ".yaml",
      ".yml",
      ".ini",
      ".conf",
      ".log",
    ];

    return viewableExtensions.some((ext) =>
      filename.toLowerCase().endsWith(ext)
    );
  };

  useEffect(() => {
    const fetchFileContent = async () => {
      if (!isViewableFile(fileName)) {
        setFileContent(`Cannot preview this file type.\nFilename: ${fileName}`);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `/getFileContent/${encodeURIComponent(
            projectName
          )}/${encodeURIComponent(fileName)}?email=${encodeURIComponent(email)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch file content");
        }

        const data = await response.json();
        setFileContent(data.content);
      } catch (err) {
        console.error("Error fetching file:", err);
        setError("Failed to load file content");
        setFileContent(`Error loading file: ${fileName}`);
      } finally {
        setLoading(false);
      }
    };

    if (fileName && projectName && email) {
      fetchFileContent();
    }
  }, [fileName, projectName, email]);

  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#0a2231",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            border: "6px solid rgba(123, 227, 208, 0.2)",
            borderTop: "6px solid #7be3d0",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
        <h2
          style={{
            color: "#f5edd8",
            margin: 0,
            fontSize: "24px",
            fontWeight: 500,
            fontFamily: "Poppins",
          }}
        >
          Loading file...
        </h2>

        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="/assets/css/SingleFile.css"
      />

      <NavBar />
      <div className="fileHeader">
        <h2>{fileName || "No file selected"}</h2>
        <Button1 toggle={handleGoBack} text={"Go back"} style={"button2"} />
      </div>

      <div className="fileContent">
        {isViewableFile(fileName) ? (
          <textarea
            className="fileTextarea"
            value={fileContent}
            readOnly
            rows={20}
            style={{
              fontFamily: "monospace",
              fontSize: "14px",
              background: "#011a27",
              color: "#f5edd8",
              border: "2px solid #017b7e",
              borderRadius: "8px",
              padding: "15px",
              width: "90%",
              minHeight: "500px",
            }}
          />
        ) : (
          <div
            style={{
              padding: "40px",
              textAlign: "center",
              color: "#f5edd8",
              background: "#011a27",
              border: "2px solid #017b7e",
              borderRadius: "8px",
            }}
          >
            <h3>Cannot preview this file type</h3>
            <p>Filename: {fileName}</p>
            <p style={{ fontSize: "12px", opacity: 0.7 }}>
              Only text and code files can be previewed
            </p>
          </div>
        )}

        {error && (
          <div
            style={{
              color: "#ff6b6b",
              marginTop: "10px",
              padding: "10px",
              background: "rgba(255, 107, 107, 0.1)",
              borderRadius: "5px",
            }}
          >
            {error}
          </div>
        )}
      </div>
    </>
  );
};

export default SingleFile;
