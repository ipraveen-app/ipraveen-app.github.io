(function () {

    console.log("adding elemnt");
    var htmlImports = document.querySelectorAll("link[rel='import']");

    htmlImports.forEach(function (htmlImport) {

        var htmlDoc = htmlImport.import;
        var htmlContent = htmlDoc.querySelector("template");
        var node = htmlContent.cloneNode(true);
        var container = document.createElement("div");
        container.innerHTML = node.innerHTML;
        var parent = htmlImport.parentNode;
        parent.replaceChild(container, htmlImport);
    });
} ());


