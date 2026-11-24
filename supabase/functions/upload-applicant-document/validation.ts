const MAX_FILE_SIZE = 5 * 1024 * 1024;

const MIME_TYPES: Record<string, string> = {
  pdf: 'application/pdf',
  doc: 'application/msword',
  docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
};

function startsWith(bytes: Uint8Array, signature: number[]): boolean {
  return signature.every((byte, index) => bytes[index] === byte);
}

export async function getApplicantFileExtension(file: File): Promise<string | null> {
  if (file.size === 0 || file.size > MAX_FILE_SIZE) return null;

  const extension = file.name.split('.').pop()?.toLowerCase();
  if (!extension || MIME_TYPES[extension] !== file.type) return null;

  const header = new Uint8Array(await file.slice(0, 12).arrayBuffer());
  const validSignature = (() => {
    switch (extension) {
      case 'pdf':
        return startsWith(header, [0x25, 0x50, 0x44, 0x46, 0x2d]);
      case 'doc':
        return startsWith(header, [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1]);
      case 'docx':
        return startsWith(header, [0x50, 0x4b, 0x03, 0x04]);
      case 'jpg':
      case 'jpeg':
        return startsWith(header, [0xff, 0xd8, 0xff]);
      case 'png':
        return startsWith(header, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
      case 'webp':
        return startsWith(header, [0x52, 0x49, 0x46, 0x46]) &&
          startsWith(header.slice(8), [0x57, 0x45, 0x42, 0x50]);
      default:
        return false;
    }
  })();

  return validSignature ? extension : null;
}