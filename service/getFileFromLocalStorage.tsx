
export async function GetFileFromLocalStorage(file_path:any): Promise<Blob | null> {
    const filePath: string | null = localStorage.getItem(file_path);

    if (!filePath) {
        return null;
    }

    try {
        const response: Response = await fetch(filePath);

        if (!response.ok) {
            return null;
        }

        return await response.blob();
    } catch (error) {
        console.error("Error fetching the file:", error);
        return null;
    }
}
