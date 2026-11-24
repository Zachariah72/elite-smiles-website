import { getApplicantFileExtension } from './validation.ts';

Deno.test('accepts a PNG with matching type and file signature', async () => {
  const signature = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const file = new File([signature], 'photo.png', { type: 'image/png' });
  const extension = await getApplicantFileExtension(file);
  if (extension !== 'png') throw new Error('A valid PNG should be accepted.');
});

Deno.test('rejects a file whose extension and MIME type disagree', async () => {
  const signature = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const file = new File([signature], 'photo.png', { type: 'application/pdf' });
  const extension = await getApplicantFileExtension(file);
  if (extension !== null) throw new Error('A mismatched file type should be rejected.');
});

Deno.test('rejects files larger than five megabytes', async () => {
  const oversized = new Uint8Array(5 * 1024 * 1024 + 1);
  const file = new File([oversized], 'large.png', { type: 'image/png' });
  const extension = await getApplicantFileExtension(file);
  if (extension !== null) throw new Error('An oversized file should be rejected.');
});