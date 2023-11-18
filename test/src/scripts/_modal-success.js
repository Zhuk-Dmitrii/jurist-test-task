export function toggleModalSuccess() {
   const modalSuccess = document.querySelector('.modal-success')
   const btnCloseModalSuccess = document.getElementById('btn-close-modal-success')

   btnCloseModalSuccess.addEventListener('click', handleBtnCloseModalSuccess)
   modalSuccess.addEventListener('click', handleClickModalOverlay)

   function handleBtnCloseModalSuccess () {
      modalSuccess.classList.remove('open')
   }

   function handleClickModalOverlay(event) {
      if (event.target === modalSuccess) {
         modalSuccess.classList.remove('open')
      }
   }
}