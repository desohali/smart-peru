export const handleArrayFiles = (arrayFiles, { sizeCanvas = 320, bgColor = "white" }, setFiles) => {
  const promisesAll = [];

  arrayFiles.forEach(file => {

    promisesAll.push(new Promise((resolve) => {
      if (file.type.split('/').includes('image')) {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = sizeCanvas;
        canvas.height = sizeCanvas;

        const newImg = new Image();
        newImg.src = window.URL.createObjectURL(file);
        newImg.addEventListener("load", function () {
          const { width } = canvas;
          const height = ((this.height * width) / this.width);

          const positionX = 0;
          const positionY = (height < sizeCanvas) ? ((sizeCanvas - height) / 2) : 0;

          ctx.fillStyle = bgColor;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(this, positionX, positionY, width, height);
          window.URL.revokeObjectURL(this.src);

          resolve({ originalFile: file, miniFile: canvas.toDataURL((file.type || 'image/png'), 1.0) });

        }, false);
      } else {
        resolve({ originalFile: file, miniFile: null });
      }
    }));
  });

  Promise.all(promisesAll).then((arrayStringBase64) => {
    setFiles(arrayStringBase64);
  });
}