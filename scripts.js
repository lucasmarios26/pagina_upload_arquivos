const upLoadBtn = document.getElementById('upload-btn');
const imageUpload = document.getElementById('image-upload');

upLoadBtn.addEventListener('click', () => {
    imageUpload.click();
});

function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({url: leitor.result, nome: arquivo.name});
        }
        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo: ${arquivo.name}`);
        }
        leitor.readAsDataURL(arquivo);
    });
}7