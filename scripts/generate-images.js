import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const INPUT_DIR = './public/images';
const OUTPUT_DIR = './public/images';
const WIDTHS = [320, 640, 1024];
const FORMATS = ['webp'];

const SUPPORTED_INPUT_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

async function generateResponsiveImages() {
  const files = await fs.readdir(INPUT_DIR);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();

    // Skip unsupported or already processed files
    if (
      !SUPPORTED_INPUT_EXTENSIONS.includes(ext) ||
      /-(320|640|1024)\.(webp|jpg|jpeg|png)$/i.test(file)
    ) {
      continue;
    }

    if (file.startsWith('.')) continue;

    const name = path.basename(file, ext);
    const inputPath = path.join(INPUT_DIR, file);

    for (const format of FORMATS) {
      // 🔹 Generate default full-size webp
      const defaultOutputFilename = `${name}.${format}`;
      const defaultOutputPath = path.join(OUTPUT_DIR, defaultOutputFilename);

      try {
        await sharp(inputPath)
          .toFormat(format)
          .toFile(defaultOutputPath);

        console.log(`✅ ${defaultOutputFilename}`);
      } catch (err) {
        console.warn(`⚠️ Failed on ${file} (default): ${err.message}`);
      }

      // 🔹 Generate responsive widths
      for (const width of WIDTHS) {
        const outputFilename = `${name}-${width}.${format}`;
        const outputPath = path.join(OUTPUT_DIR, outputFilename);

        try {
          await sharp(inputPath)
            .resize({ width })
            .toFormat(format)
            .toFile(outputPath);

          console.log(`✅ ${outputFilename}`);
        } catch (err) {
          console.warn(`⚠️ Failed on ${file} (${width}): ${err.message}`);
        }
      }
    }
  }
}

generateResponsiveImages().catch(console.error);
