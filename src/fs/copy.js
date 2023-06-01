import fs from "fs";

const copy = async () => {
  fs.cp("src/fs/files", "src/fs/copyDirFiles", { recursive: true }, (err) => {
    if (err) {
      console.error(err);
    }
  });
};

await copy();
