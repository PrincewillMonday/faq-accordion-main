const accordionButtons = document.querySelectorAll(".accordion-button");
const accordionContents = document.querySelectorAll(".accordion-content");

accordionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const accordionItem = button.parentElement;
    const accordionContent = accordionItem.querySelector(".accordion-content");
    const image = button.querySelector("img");

    // Close all other accordions
    accordionContents.forEach(content => {
      if (content !== accordionContent) {
        content.classList.remove("active");
        content.style.maxHeight = "0";
        const otherIcon = content.parentElement.querySelector("img");
        if (otherIcon) otherIcon.src = "assets/images/icon-plus.svg";
      }
    });

    // Toggle current accordion
    accordionContent.classList.toggle("active");

    if (accordionContent.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      image.src = "assets/images/icon-minus.svg";
    } else {
      accordionContent.style.maxHeight = "0";
      image.src = "assets/images/icon-plus.svg";
    }
  });
});