import fs from "fs";

const error = "FS operation failed";

const copy = async () => {
  fs.cp("src/fs/files", "src/fs/copyDirFiles", { recursive: true }, (err) => {
    if (err) {
      console.error(error);
    }
  });
};

await copy();
