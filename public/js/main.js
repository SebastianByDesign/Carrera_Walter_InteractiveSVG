window.addEventListener("load", function() {
    var svgObject = document.querySelector(".characters").contentDocument;
    console.log(svgObject);

    var characterList = svgObject.querySelectorAll('[id$="-image"]');
    var elementHovered;
    var lastElementHovered;
    var divId;
    var cId;
    [...characterList].forEach(function (characterImage) {
        characterImage.addEventListener("mouseover", function(){
            elementHovered = characterImage;
            function toggleRelationship(element) {
                element.firstElementChild.classList.toggle("is-selected");
                element.nextElementSibling.classList.toggle("st0");
            }
            function toggleDescription(element){
                divId = element.id;
                
                if (divId.includes("Sage")) {
                    cId = divId.replace("-Sage-image","");
                } else {
                    cId = divId.replace("-image","");
                }

                document.querySelector('[id$="' + cId + '"]').classList.toggle('show');
            }

            if ( typeof lastElementHovered === "object" && lastElementHovered.firstElementChild.classList.contains("is-selected") ) {
                // console.log("element is not equal to last element");
                toggleRelationship(elementHovered);
                toggleDescription(elementHovered);
                toggleRelationship(lastElementHovered);
                toggleDescription(lastElementHovered);
                lastElementHovered = elementHovered;
            } else {
                // console.log("element was hovered over and is stored");
                toggleRelationship(elementHovered);
                toggleDescription(elementHovered);
                lastElementHovered = elementHovered;
                svgObject.getElementById("Triforce").classList.toggle("st0");
                document.querySelector(".opening").classList.toggle("hidden");
            }
        });
    });
    
    svgObject.getElementById("Master_sword").addEventListener("click", function(){
        var futureCharacters = svgObject.getElementsByClassName("future");
        [...futureCharacters].forEach(function (character) {
            character.classList.toggle("st0");
        });
        var pastCharacters = svgObject.getElementsByClassName("past");
        [...pastCharacters].forEach(function (character) {
            character.classList.toggle("st0");
        });
    });

});