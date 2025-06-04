window.onload = function () {
    const input = document.getElementById("textInput");
    const button = document.getElementById("addBtn");
    const list = document.getElementById("taskList");
  
    button.addEventListener("click", function () {
      const value = input.value.trim();
      if (value === "") return;
  
      const listItem = document.createElement("li");
      listItem.textContent = value;
  
      listItem.addEventListener("click", function () {
        listItem.classList.toggle("completed");
      });
  
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "x";
      removeBtn.className = "remove-btn";
  
      removeBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        list.removeChild(listItem);
      });
  
      listItem.appendChild(removeBtn);
      list.appendChild(listItem);
  
      input.value = "";
    });
  };
  