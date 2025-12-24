import { IKContext, IKImage , IKUpload } from 'imagekitio-react';
import { useRef } from 'react';

const urlEndpoint = import.meta.env.VITE_IMAGE_KIT_ENDPOINT;
const publicKey = import.meta.env.VITE_IMAGE_KIT_PUBLIC_KEY;

const authenticator = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/upload'); // ✅ fixed "http:"

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Upload = ({setImg}) => {

  const ikUploadRef = useRef(null)
  const onError = (err) => {
    console.error("Upload Error:", err);
  };

  const onSuccess = (res) => {
    console.log("Upload Success:", res);
    setImg((prev) => ({...prev, isLoading:false, dbData: res}));

  };

  const onUploadProgress = (progress) => {
    console.log("Uploading...", progress);
  };

  const onUploadStart = (evt) => {
    const file = evt.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
          setImg((prev) => ({...prev, isLoading:true,aiData:{
            inlineData:{
              data: reader.result.split(",")[1],
              mimeType: file.type,
            },
          },
        }));

    };
    reader.readAsDataURL(file)
  };



  return (
    <IKContext
      urlEndpoint={urlEndpoint}
      publicKey={publicKey}
      authenticator={authenticator}
    >
      <IKUpload
        fileName="test-upload.png"
        useUniqueFileName={true}
        onError={onError}
        onSuccess={onSuccess}
        onUploadStart={onUploadStart}
        onUploadProgress={onUploadProgress} // ✅ now it's defined
        style={{display: "none"}}
        ref={ikUploadRef}
      />
      <label onClick={()=>ikUploadRef.current.click()}>
        <img src="/attachment.png" alt="" />
      </label>
    </IKContext>
  );
};

export default Upload;
