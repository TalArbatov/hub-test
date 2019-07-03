import React, {useState} from 'react'
import Dropzone from 'react-dropzone';
import styled from 'styled-components';

const DropzoneWrapper = styled.div`
  border: 10px dashed grey;
  padding: 25px;
  min-height: 200px;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  p {
    color: grey;
    font-size: 1.3em;
    word-wrap: break-word;
  }
`;
const TempProfileImage = props => {
    const [getState, setState] = {
        file: null
    }
    const createFormData = files => {
        console.log(files);
        setState({ ...getState, file: files[0]});

        // TODO: concat files
      };

    const BeforeUpload = (
        <>
          <DropzoneWrapper>
            <Dropzone
              multiple={false}
              onDrop={acceptedFiles => createFormData(acceptedFiles)}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>Drag photo here</p>
                  </div>
                </section>
              )}
            </Dropzone>
          </DropzoneWrapper>
            <button disabled>Upload Image</button>
        </>
      );

    return(
        <div>
            <h1>Under construction...</h1>


        </div>
    )
}

export default TempProfileImage;