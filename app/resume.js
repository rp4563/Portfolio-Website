import { useState } from 'react';

function ResumeUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // You can implement the file upload logic here
      console.log('Uploading file:', selectedFile.name);
      // You can use a library like Axios to send the file to your server
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div className="buttons">
      <input type="file" accept=".pdf, .doc, .docx" onChange={handleFileChange} />
      <button className="btn" onClick={handleUpload}>
        Upload Resume
      </button>
    </div>
  );
}

export default ResumeUpload;
