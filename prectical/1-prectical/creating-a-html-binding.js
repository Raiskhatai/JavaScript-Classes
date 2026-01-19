let my_list = document.querySelector(".list-element");

class Binding {
  constructor(element) {
    this.list_element = element;
    this.text_list = [];
  }

  static create_list_item(text) {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }

  update() {
    while (this.list_element.firstChild) {
      this.list_element.removeChild(this.list_element.firstChild);
    }

    for (let text of this.text_list) {
      this.list_element.appendChild(Binding.create_list_item(text));
    }
  }

  add(text) {
    this.text_list.push(text);
    this.update();
  }

  remove(index) {
    this.text_list.splice(index, 1);
    this.update();
  }
}

let list_binding = new Binding(my_list);
