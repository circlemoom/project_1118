// on


// 모든 버튼에 대해 이벤트 리스너 추가
document.querySelectorAll('.text_box a').forEach(button => {
    button.addEventListener('click', function() {
        // 클릭 시 on 클래스를 토글하여 활성화 상태 변경
        button.classList.toggle('on');
    });
});


// 첨부파일

function displayFileName() {
    const fileInput = document.getElementById('file-upload');
    const fileName = document.getElementById('file-name');

    if (fileInput.files.length > 0) {
        fileName.textContent = fileInput.files[0].name;
    } else {
        fileName.textContent = "선택된 파일 없음";
    }
}


// work together

document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".work_together_center h1");
    const text = textElement.innerText;
    let index = 0;

    textElement.innerText = "";  // 초기에는 빈 문자열로 설정

    function type() {
        if (index < text.length) {
            textElement.innerText += text.charAt(index);
            index++;
            setTimeout(type, 80);  // 타이핑 속도 조정
        }
    }

    type();
});
