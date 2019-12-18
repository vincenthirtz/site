import React from 'react';
import FileViewer from 'react-file-viewer';

const Home = () => {
    const file = `${process.env.PUBLIC_URL}/cv.pdf`;
    const type = 'pdf'
    return (
        <React.Fragment>
            <FileViewer
                fileType={type}
                filePath={file}
            // errorComponent={CustomErrorComponent}
            // onError={this.onError}
            />
        </React.Fragment>
    );
}

export default Home;
