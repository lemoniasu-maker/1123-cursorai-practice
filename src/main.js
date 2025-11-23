import './style.css'

// 감정 이모지 데이터
const emotions = [
  { emoji: '😊', label: '행복해요', message: '오늘도 행복한 하루가 되겠어요!', encouragement: '웃는 얼굴이 예쁘네요! 🌟' },
  { emoji: '🤩', label: '신나요', message: '오늘 하루가 정말 기대되네요!', encouragement: '에너지가 넘치는 친구예요! ⚡' },
  { emoji: '😌', label: '평온해요', message: '마음이 차분하고 평온하네요!', encouragement: '편안한 마음으로 하루를 시작하세요! 🌸' },
  { emoji: '🥳', label: '축하해요', message: '무엇을 축하하나요?', encouragement: '축하하는 마음이 전해져요! 🎉' },
  { emoji: '😁', label: '즐거워요', message: '즐거운 마음으로 하루를 시작하네요!', encouragement: '즐거운 에너지가 느껴져요! ✨' },
  { emoji: '😍', label: '사랑해요', message: '사랑이 넘치는 하루네요!', encouragement: '사랑스러운 마음이 전해져요! 💕' },
  { emoji: '😴', label: '졸려요', message: '아직 잠이 덜 깬 것 같아요!', encouragement: '커피 한 잔의 힘을 빌려볼까요? ☕' },
  { emoji: '😔', label: '슬퍼요', message: '슬픈 감정이 있나봐요...', encouragement: '선생님이나 친구들에게 이야기해볼까요? 💙' },
  { emoji: '😢', label: '울고 싶어요', message: '울고 싶은 마음이 드나봐요...', encouragement: '괜찮아요, 울고 싶을 때는 울어도 돼요. 함께 있어요! 🤗' },
  { emoji: '😰', label: '걱정돼요', message: '걱정되는 일이 있나봐요...', encouragement: '걱정이 있다면 선생님께 말씀드려보세요! 🌈' },
  { emoji: '😤', label: '화나요', message: '화가 나신가봐요...', encouragement: '심호흡을 깊게 해보면 도움이 될 거예요! 💨' },
  { emoji: '🤔', label: '생각 중', message: '무언가를 깊이 생각하고 계시나봐요!', encouragement: '생각하는 모습이 멋져요! 💭' },
  { emoji: '😎', label: '멋져요', message: '오늘도 멋진 하루가 될 거예요!', encouragement: '멋쟁이 친구예요! 😎' },
  { emoji: '🥰', label: '따뜻해요', message: '따뜻한 마음이 느껴져요!', encouragement: '따뜻한 마음이 전해져요! 💖' },
  { emoji: '🤗', label: '포옹해요', message: '포옹하고 싶은 마음이 드나봐요!', encouragement: '가상의 포옹을 보내드려요! 🤗' },
  { emoji: '😄', label: '웃음이 나요', message: '웃음이 절로 나는 하루네요!', encouragement: '웃음은 최고의 약이에요! 😄' }
]

let selectedEmotion = null

// 하트 생성 함수
function createHeart(x, y) {
  const heart = document.createElement('div')
  heart.className = 'heart'
  heart.textContent = '💖'
  heart.style.left = x + 'px'
  heart.style.top = y + 'px'
  document.querySelector('.hearts').appendChild(heart)
  
  setTimeout(() => {
    heart.remove()
  }, 3000)
}

// 감정 버튼 생성
function createEmotionButtons() {
  const grid = document.querySelector('.emotions-grid')
  emotions.forEach((emotion, index) => {
    const button = document.createElement('button')
    button.className = 'emotion-btn'
    button.innerHTML = `
      ${emotion.emoji}
      <span class="emotion-label">${emotion.label}</span>
    `
    button.setAttribute('data-index', index)
    button.addEventListener('click', () => selectEmotion(index, button))
    grid.appendChild(button)
  })
}

// 감정 선택 함수
function selectEmotion(index, buttonElement) {
  // 이전 선택 해제
  document.querySelectorAll('.emotion-btn').forEach(btn => {
    btn.classList.remove('selected')
  })
  
  // 현재 선택 표시
  buttonElement.classList.add('selected')
  selectedEmotion = emotions[index]
  
  // 결과 표시
  showResult(selectedEmotion)
  
  // 하트 애니메이션
  const rect = buttonElement.getBoundingClientRect()
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      createHeart(
        rect.left + rect.width / 2 + (Math.random() - 0.5) * 100,
        rect.top + rect.height / 2 + (Math.random() - 0.5) * 100
      )
    }, i * 100)
  }
}

// 결과 표시 함수
function showResult(emotion) {
  const resultDiv = document.querySelector('.result')
  resultDiv.innerHTML = `
    <div class="result-emoji">${emotion.emoji}</div>
    <div class="result-message">${emotion.message}</div>
    <div class="encouragement">${emotion.encouragement}</div>
  `
  
  // 추가 하트 애니메이션
  setTimeout(() => {
    const resultRect = resultDiv.getBoundingClientRect()
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        createHeart(
          resultRect.left + resultRect.width / 2 + (Math.random() - 0.5) * 150,
          resultRect.top + resultRect.height / 2 + (Math.random() - 0.5) * 150
        )
      }, i * 200)
    }
  }, 300)
}

// 앱 초기화
document.querySelector('#app').innerHTML = `
  <div class="stars">
    <div class="star">⭐</div>
    <div class="star">✨</div>
    <div class="star">🌟</div>
    <div class="star">⭐</div>
    <div class="star">✨</div>
  </div>
  <div class="hearts"></div>
  <div class="container">
    <div class="header">
      <h1 class="greeting">좋은 아침이에요! 🌅</h1>
      <p class="subtitle">오늘 아침 기분은 어때요?</p>
      <p class="instruction">마음에 드는 이모지를 클릭해보세요! 👇</p>
    </div>
    <div class="emotions-grid"></div>
    <div class="result">
      <div style="font-size: 1.5rem; color: #ccc;"> 🤗 원하는 이모지를 선택해보세요 🤗 </div>
    </div>
    <div class="input-section">
      <h3 class="input-title">💭 오늘의 기분을 자유롭게 적어보세요! 💭</h3>
      <textarea 
        id="mood-input" 
        class="mood-textarea" 
        placeholder="예: 오늘은 친구들과 놀 수 있어서 정말 신나요! 🎉"
        rows="4"
      ></textarea>
      <button id="save-btn" class="save-btn">💾 저장하기</button>
      <div id="saved-message" class="saved-message"></div>
    </div>
  </div>
`

// 현재 시간에 따른 인사 변경
const hour = new Date().getHours()
const greeting = document.querySelector('.greeting')
if (greeting) {
  if (hour >= 6 && hour < 12) {
    greeting.textContent = '좋은 아침이에요! 🌅'
  } else if (hour >= 12 && hour < 18) {
    greeting.textContent = '좋은 오후에요! ☀️'
  } else if (hour >= 18 && hour < 22) {
    greeting.textContent = '좋은 저녁이에요! 🌆'
  } else {
    greeting.textContent = '안녕하세요! 🌙'
  }
}

// 감정 버튼 생성
createEmotionButtons()

// 저장 버튼 이벤트
const saveBtn = document.getElementById('save-btn')
const moodInput = document.getElementById('mood-input')
const savedMessage = document.getElementById('saved-message')

if (saveBtn && moodInput) {
  saveBtn.addEventListener('click', () => {
    const text = moodInput.value.trim()
    if (text) {
      savedMessage.innerHTML = `
        <div class="saved-success">
          <span class="check-icon">✅</span>
          <span>저장되었어요! "${text.substring(0, 20)}${text.length > 20 ? '...' : ''}"</span>
        </div>
      `
      savedMessage.style.display = 'block'
      moodInput.value = ''
      
      // 하트 애니메이션
      const btnRect = saveBtn.getBoundingClientRect()
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          createHeart(
            btnRect.left + btnRect.width / 2 + (Math.random() - 0.5) * 100,
            btnRect.top + btnRect.height / 2 + (Math.random() - 0.5) * 100
          )
        }, i * 150)
      }
      
      // 3초 후 메시지 사라지기
      setTimeout(() => {
        savedMessage.style.display = 'none'
      }, 3000)
    } else {
      savedMessage.innerHTML = `
        <div class="saved-error">
          <span class="error-icon">⚠️</span>
          <span>내용을 입력해주세요!</span>
        </div>
      `
      savedMessage.style.display = 'block'
      setTimeout(() => {
        savedMessage.style.display = 'none'
      }, 2000)
    }
  })
  
  // Enter 키로 저장 (Shift+Enter는 줄바꿈)
  moodInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault()
      saveBtn.click()
    }
  })
}
