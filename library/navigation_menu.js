class CreateMenu {
    constructor(json) {
        this.json_data = json;
    }

    create_menu() {
        let html = "";
        for(let i = 0; i < this.json_data.length; i++) {
            let obj = this.json_data[i];
            html = html + "<li><a href="+ obj.url +">"+ obj.title +"</a></li>";
        }
        return html;
    }

    create_menu_v2(ul) {
        for(let i = 0; i < this.json_data.length; i++) {
            let obj = this.json_data[i];
            let li = document.createElement("li");
            let link = document.createElement("a");
            link.appendChild(document.createTextNode(obj.title));
            link.setAttribute("href", obj.url);
            li.appendChild(link);
            ul.appendChild(li);
        }
    }
}