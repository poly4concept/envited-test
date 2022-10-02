import React, { useMemo } from 'react'
import {useDropzone} from 'react-dropzone';
import ImagePreviewIcon from '../../assets/imagepreviewicon';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 1,
  borderColor: '#501FC1',
  borderStyle: 'dashed',
  backgroundColor: 'transparent',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#F04D22'
};

const acceptStyle = {
  borderColor: '#00e676',
  borderWidth: 2,
  borderStyle: 'dashed'
};

const rejectStyle = {
  borderColor: '#ff1744'
};


const ImageUploader = () => {
    const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } = useDropzone({ maxFiles: 1, accept: { 'image/*': [] }, });//
    
    const style = useMemo(() => ({...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [isFocused, isDragAccept, isDragReject]);
    

    return (
        <div className="w-full mt-5 mb-5 flex flex-col cursor-pointer">
            <div {...getRootProps({style})}>
                <input {...getInputProps()} />
                <ImagePreviewIcon/>
                <p className="font-medium text-purple-dark ml-2 mt-8">Drag 'n' drop Image/ Video</p>
                {isDragAccept ? <p className='text-[green] mt-1'>Drop It</p> : null}
                {isDragReject ? <p className='text-[red] mt-1'>This file type is not supported</p> : null}
            </div>
        </div>
    )
}

export default ImageUploader