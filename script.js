console.log(`Url Parameter [cp, pt, ct, exp]`);

(() => {
    const mode = getValueFromQuery();
    let career = document.getElementById("ms-career");
    let portpolio = document.getElementById("ms-portpolio");
    let careerText = document.getElementById("ms-career-text");
    let exp = document.getElementById("ms-exp");

    if (mode === "" || mode === null) {
        console.log("mo Mode");
        career.style.display = "block";
        portpolio.style.display = "block";
        careerText.style.display = "block";
    } else {
        const modeSplit = mode.split(",");

        for (let idx in modeSplit) {
            switch (modeSplit[idx]) {
                case "cp": {
                    career.style.display = "block";
                    break;
                }
                case "pt": {
                    portpolio.style.display = "block";
                    break;
                }
                case "ct": {
                    careerText.style.display = "block";
                    break;
                }
                case "exp": {
                    exp.style.display = "block";
                    break;
                }
            }
        }
    }

    if (career && getComputedStyle(career).display === "none") career.remove();
    if (portpolio && getComputedStyle(portpolio).display === "none") portpolio.remove();
    if (careerText && getComputedStyle(careerText).display === "none") careerText.remove();
    /*
        var lineElements = document.getElementsByClassName("line");
    
        for (var i = 0; i < lineElements.length; i++) {
            var currentElement = lineElements[i];
            var nextElement = currentElement.nextElementSibling;
    
            if (!nextElement || !nextElement.classList.contains("page")) {
                currentElement.style.display = "none";
            }
        }*/
})();

function onDocumentReady() {
    init();
}

// DOMContentLoaded 이벤트 리스너 등록
document.addEventListener("DOMContentLoaded", onDocumentReady);

function init() {
    // 페이지 이동
    const hiddenPageButtons = document.querySelectorAll(".hidden-page-button");
    const hiddenPages = document.querySelectorAll(".hidden-page");

    hiddenPageButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            hiddenPages[index].toggleAttribute("hidden");
            hiddenPages[index].classList.toggle("active");
            if (hiddenPages[index].classList.contains("active")) {
                hiddenPages[index].scrollIntoView({ behavior: "smooth" });
                hiddenPages[index].focus();
            } else {
                button.focus();
            }
        });
    });

    // 슬라이더
    const sliderContainers = Array.from(document.querySelectorAll(".slider-container"));

    sliderContainers.forEach((container, index) => {
        const slider = container.querySelector(`.slider-${index + 1}`);
        const prevButton = container.querySelector(`.prev-button-${index + 1}`);
        const nextButton = container.querySelector(`.next-button-${index + 1}`);

        let currentIndex = 0;
        const slideWidth = slider.querySelector(".slide").offsetWidth;

        if (prevButton != null)
            prevButton.addEventListener("click", () => {
                currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
                updateSliderPosition();
            });

        if (nextButton != null)
            nextButton.addEventListener("click", () => {
                currentIndex = (currentIndex + 1) % slider.children.length;
                updateSliderPosition();
            });

        function updateSliderPosition() {
            const offset = -currentIndex * slideWidth;
            slider.style.transform = `translateX(${offset}px)`;
        }
    });

    // 버튼 숨김 처리
    const xButtons = document.querySelectorAll(".parent-x-button");
    xButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const parent = button.parentElement;
            if (parent) {
                parent.style.display = "none";
            }
        });
    });

    const hiddenCommand = document.querySelector(".hidden-command");
    hiddenCommand.addEventListener("click", handleClick);
}

// 변경 모드 관련
let clickCount = 0;
function handleClick() {
    clickCount++;

    if (clickCount == 3) {
        contentControlMode();
    } else if (clickCount === 4) {
        printImageMode();
    } else if (clickCount === 5) {
        exitControlMode();
    }

    if (clickCount >= 5) {
        clickCount = 0;
    }

    const managementMode = document.querySelector(".management-mode");
    managementMode.style.display = clickCount === 3 || clickCount === 4 ? "block" : "none";
}

function contentControlMode() {
    console.log("Remove item Mode.");
    document.querySelectorAll(".x-button").forEach((btn) => (btn.style.display = "block"));
}

function exitControlMode() {
    console.log("Bye.");
    document.querySelectorAll(".x-button").forEach((btn) => (btn.style.display = "none"));
}

function printImageMode() {
    console.log("Image slide X Mode.");

    const nexts = document.getElementsByClassName("next-button");
    while (nexts.length > 0) {
        nexts[0].parentNode.removeChild(nexts[0]);
    }

    const prevs = document.getElementsByClassName("prev-button");
    while (prevs.length > 0) {
        prevs[0].parentNode.removeChild(prevs[0]);
    }
}

function getValueFromQuery() {
    var queryString = window.location.search.substr(1); // 쿼리 문자열에서 '?' 문자 제거
    var params = queryString.split('&'); // 매개 변수들을 분리
  
    for (var i = 0; i < params.length; i++) {
      var param = params[i].split('=');
      return param[0]; // 첫 번째 매개 변수 값 반환
    }
  
    return null; // 매개 변수가 없는 경우
  }

function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
