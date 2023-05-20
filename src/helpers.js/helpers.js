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

export const returnDiasHorasMinutosSegundos = (segundos) => {

  const segundosR = Math.round(segundos),
    segundosMod = (segundosR % 60),
    minutos = ((segundosR - segundosMod) / 60),
    minutosMod = (minutos % 60),
    horas = ((minutos - minutosMod) / 60),
    horasMod = (horas % 24),
    dias = ((horas - horasMod) / 24),
    formato = function (numero) {
      return (numero < 10) ? `0${numero}` : numero;
    };

  return {
    dias: dias,
    horas: formato(horasMod),
    minutos: formato(minutosMod),
    segundos: formato(segundosMod)
  };

}