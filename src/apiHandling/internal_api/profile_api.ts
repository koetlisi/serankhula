export  const profile_upload = async (file:any) =>{
    try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();

        if (response.ok) {
            alert(result.fileUrl)
            return result.fileUrl
        } else {
            console.error('Upload failed:', result.error);
        }
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}