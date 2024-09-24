const codeBlocks = document.querySelectorAll("* > pre > code");
const preBlocks = document.querySelectorAll("pre");


preBlocks.forEach((preBlock, index) => {
  container = preBlock.parentElement;
  var divAbove = document.createElement("div");
  divAbove.classList.add("code-copy");
  var btn =  divAbove.appendChild(document.createElement('button'));
  btn.classList.add("copy-code-button", "fas", "fa-copy", "fa-xs");
  container.insertBefore(divAbove, preBlock);
});


const copyCodeButtons = document.querySelectorAll('.copy-code-button');
copyCodeButtons.forEach((copyCodeButton, index) => {
  const code = codeBlocks[index].innerText;

  copyCodeButton.addEventListener('click', () => {
    window.navigator.clipboard.writeText(code);
    copyCodeButton.classList.remove('fa-copy');
    copyCodeButton.classList.add('fa-check');
 
    setTimeout(() => {
      copyCodeButton.classList.remove('fa-check');
      copyCodeButton.classList.add('fa-copy');
    }, 2000);
  });
});
