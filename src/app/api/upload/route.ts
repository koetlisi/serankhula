import formidable, { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

// Disable bodyParser to allow formidable to parse the request
export const config = {
    api: {
        bodyParser: false,
    },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const form = new IncomingForm({
        uploadDir: path.join(process.cwd(), 'public/uploads'), // Directory to save uploaded files
        keepExtensions: true, // Keep file extensions
        maxFileSize: 10 * 1024 * 1024, // 10 MB file size limit
    });

    form.parse(req, (err, fields, files) => {
        if (err) {
            res.status(500).json({ error: 'Error parsing the files' });
            return;
        }

        // `files` contains the file information
        // @ts-ignore
        const uploadedFile = files.file[0] as formidable.File;

        // Ensure the file was uploaded
        if (!uploadedFile || !uploadedFile.filepath) {
            res.status(400).json({ error: 'File not uploaded' });
            return;
        }

        // Return the relative path of the uploaded file
        const filePath = path.relative(process.cwd(), uploadedFile.filepath);
        res.status(200).json({ filePath });
    });
}
