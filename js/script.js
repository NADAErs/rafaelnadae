// Pega o elemento modal
const projectModal = document.getElementById('projectModal');

// Adiciona um listener para o evento de "abertura do modal"
projectModal.addEventListener('show.bs.modal', function (event) {
    // Pega o elemento que ativou o modal (a imagem)
    const button = event.relatedTarget;

    // Pega os dados da imagem e do texto
    const imageSrc = button.getAttribute('data-full-image');
    const title = button.closest('.project-card').querySelector('h5').getAttribute('data-title');
    const description = button.closest('.project-card').querySelector('p').getAttribute('data-full-description');

    // Atualiza o conteúdo do modal
    const modalImage = projectModal.querySelector('#modalImage');
    const modalTitle = projectModal.querySelector('.modal-title');
    const modalDescription = projectModal.querySelector('#modalDescription');

    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
});
