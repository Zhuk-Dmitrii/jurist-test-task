export function toggleModalAuth() {
   const userThumbnail = document.getElementById('user-thumbnail')
   const modalAuth = document.querySelector('.modal')
   const btnCloseModal = document.getElementById('btn-close-modal-auth')

   userThumbnail.addEventListener('click', handleOpenModal)
   btnCloseModal.addEventListener('click', handleBtnCloseModal)
   modalAuth.addEventListener('click', handleClickModalOverlay)

   function handleOpenModal() {
      modalAuth.classList.add('open')
   }

   function handleBtnCloseModal () {
      modalAuth.classList.remove('open')
   }

   function handleClickModalOverlay(event) {
      if (event.target === modalAuth) {
         modalAuth.classList.remove('open')
      }
   }
}
