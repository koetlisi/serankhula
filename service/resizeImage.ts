export function resizeImages(maxHeight: number = 420): void {
    const images = document.querySelectorAll<HTMLImageElement>('img'); // Select all images on the page

    images.forEach(img => {
        if (img.naturalHeight > maxHeight) {
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            img.style.height = `${maxHeight}px`;
            img.style.width = `${maxHeight * aspectRatio}px`;
        }
    });
}
