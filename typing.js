function typeText(element, text, speed = 30) {
  element.textContent = ''; // 초기화
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// DOM이 로드되면 각 메시지에 타이핑 효과 적용
document.addEventListener('DOMContentLoaded', () => {
  const messages = document.querySelectorAll('.hl-message');
  messages.forEach(msg => {
    const original = msg.textContent;
    typeText(msg, original, 30);
  });
});